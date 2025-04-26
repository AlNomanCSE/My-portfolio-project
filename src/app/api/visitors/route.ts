import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to the JSON file that will store the visitor count
const dataFilePath = path.join(process.cwd(), 'data', 'visitors.json');

// Ensure the data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Initialize the visitors data file if it doesn't exist
const initializeVisitorsFile = () => {
  ensureDataDirectory();
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify({ count: 0, lastUpdated: new Date().toISOString() }));
  }
};

// GET handler to retrieve the visitor count
export async function GET() {
  try {
    initializeVisitorsFile();
    const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    return NextResponse.json({ count: data.count });
  } catch (error) {
    console.error('Error reading visitor count:', error);
    return NextResponse.json({ count: 0, error: 'Failed to read visitor count' }, { status: 500 });
  }
}

// POST handler to increment the visitor count
export async function POST() {
  try {
    initializeVisitorsFile();
    const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    
    // Increment the count
    data.count += 1;
    data.lastUpdated = new Date().toISOString();
    
    // Write the updated count back to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ count: data.count, success: true });
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return NextResponse.json({ error: 'Failed to update visitor count' }, { status: 500 });
  }
} 