import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables from .env file
dotenv.config();

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not set');
  process.exit(1);
}

// Store DATABASE_URL in a variable that we know is not undefined
const DATABASE_URL = process.env.DATABASE_URL;

async function createNewsletterTable() {
  console.log('Creating newsletter_subscribers table...');
  
  try {
    // Read the SQL file
    const sqlFilePath = path.join(process.cwd(), 'drizzle', '0001_newsletter_subscribers.sql');
    const sqlQuery = fs.readFileSync(sqlFilePath, 'utf8');
    
    // Connect to the database and execute the SQL
    const sql = neon(DATABASE_URL);
    await sql(sqlQuery);
    
    console.log('Newsletter subscribers table created successfully!');
  } catch (error) {
    console.error('Error creating newsletter subscribers table:', error);
    process.exit(1);
  }
}

// Run the function if this file is executed directly
if (require.main === module) {
  createNewsletterTable();
}

export { createNewsletterTable }; 