import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to the visitor data file
const visitorDataPath = path.join(process.cwd(), 'data', 'visitors.json');

// Ensure the data directory exists
const ensureDataDir = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Initialize visitor data if it doesn't exist
const initializeVisitorData = () => {
  ensureDataDir();
  if (!fs.existsSync(visitorDataPath)) {
    fs.writeFileSync(visitorDataPath, JSON.stringify({ count: 0, lastUpdated: new Date().toISOString() }));
  }
};

// Get current visitor count
export async function GET() {
  try {
    initializeVisitorData();
    const data = JSON.parse(fs.readFileSync(visitorDataPath, 'utf8'));
    return NextResponse.json({ count: data.count });
  } catch (error) {
    console.error('Error reading visitor data:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

// Increment visitor count
export async function POST() {
  try {
    initializeVisitorData();
    const data = JSON.parse(fs.readFileSync(visitorDataPath, 'utf8'));
    data.count += 1;
    data.lastUpdated = new Date().toISOString();
    fs.writeFileSync(visitorDataPath, JSON.stringify(data, null, 2));
    return NextResponse.json({ count: data.count });
  } catch (error) {
    console.error('Error updating visitor data:', error);
    return NextResponse.json({ error: 'Failed to update visitor count' }, { status: 500 });
  }
} 