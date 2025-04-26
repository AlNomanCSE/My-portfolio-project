import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the visitor data file
const visitorDataPath = path.join(path.dirname(__dirname), 'data', 'visitors.json');

// Ensure the data directory exists
const ensureDataDir = () => {
  const dataDir = path.join(path.dirname(__dirname), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Function to fetch visitor count from the live website
const fetchVisitorCount = () => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'alnomancse.netlify.app',
      path: '/api/visitors',
      method: 'GET',
      headers: {
        'User-Agent': 'Visitor-Scraper/1.0',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData.count);
        } catch (error) {
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error(`Request failed: ${error.message}`));
    });

    req.end();
  });
};

// Main function to update the local visitor data
const updateVisitorData = async () => {
  try {
    console.log('Fetching visitor count from live website...');
    const liveCount = await fetchVisitorCount();
    
    ensureDataDir();
    
    // Read existing data or create new
    let data = { count: 0, lastUpdated: new Date().toISOString() };
    if (fs.existsSync(visitorDataPath)) {
      data = JSON.parse(fs.readFileSync(visitorDataPath, 'utf8'));
    }
    
    // Update with the live count if it's higher
    if (liveCount > data.count) {
      data.count = liveCount;
      data.lastUpdated = new Date().toISOString();
      fs.writeFileSync(visitorDataPath, JSON.stringify(data, null, 2));
      console.log(`Updated visitor count to ${liveCount}`);
    } else {
      console.log(`Local count (${data.count}) is already up to date`);
    }
    
    return true;
  } catch (error) {
    console.error('Error updating visitor data:', error.message);
    return false;
  }
};

// Run the update
updateVisitorData()
  .then(success => {
    if (success) {
      console.log('Visitor data successfully updated');
      process.exit(0);
    } else {
      console.error('Failed to update visitor data');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Unexpected error:', error);
    process.exit(1);
  }); 