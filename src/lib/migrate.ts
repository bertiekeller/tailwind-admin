import { migrate } from 'drizzle-orm/neon-http/migrator';
import { db } from './db';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// This is a simple migration script to be used in development or as a standalone script
// For production, you might want to use a more robust migration solution
async function runMigration() {
  console.log('Running migrations...');
  console.log('Using DATABASE_URL:', process.env.DATABASE_URL ? 'Found (hidden for security)' : 'Not found');
  
  try {
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migrations completed successfully!');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  }
}

// Run migrations if this file is executed directly
if (require.main === module) {
  runMigration();
}

export { runMigration }; 