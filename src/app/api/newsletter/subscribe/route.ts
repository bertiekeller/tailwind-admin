import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { newsletterSubscribers } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

// Validation schema for the request body
const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate the data
    const result = subscribeSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid data provided', 
          errors: result.error.flatten().fieldErrors 
        }, 
        { status: 400 }
      );
    }
    
    const { email, name } = result.data;
    
    // Check if the email already exists
    const existingSubscriber = await db.select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, email))
      .limit(1);
    
    if (existingSubscriber.length > 0) {
      // If the subscriber exists but is inactive, reactivate them
      if (!existingSubscriber[0].isActive) {
        await db.update(newsletterSubscribers)
          .set({ 
            isActive: true,
            updatedAt: new Date()
          })
          .where(eq(newsletterSubscribers.email, email));
        
        return NextResponse.json({ 
          success: true, 
          message: 'Your subscription has been reactivated!' 
        });
      }
      
      // If already subscribed and active
      return NextResponse.json({ 
        success: true, 
        message: 'You are already subscribed to our newsletter!' 
      });
    }
    
    // Create a new subscriber
    await db.insert(newsletterSubscribers).values({
      email,
      name: name || null,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for subscribing to our newsletter!' 
    });
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your subscription' 
      }, 
      { status: 500 }
    );
  }
} 