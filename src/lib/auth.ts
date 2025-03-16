import bcrypt from 'bcrypt';
import { db } from './db';
import { users } from './schema';
import { eq } from 'drizzle-orm';

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword);
}

export async function createUser(email: string, name: string, password: string) {
  const hashedPassword = await hashPassword(password);
  
  try {
    const newUser = await db.insert(users).values({
      email,
      name,
      password: hashedPassword,
    }).returning({ id: users.id });
    
    return { success: true, user: newUser[0] };
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, error };
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await db.select().from(users).where(eq(users.email, email));
    return user[0] || null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
} 