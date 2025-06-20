
'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message cannot exceed 500 characters."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function saveContactMessage(data: ContactFormData) {
  const validation = contactFormSchema.safeParse(data);

  if (!validation.success) {
    console.error("Contact form validation failed:", validation.error.flatten().fieldErrors);
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
    };
  }

  try {
    const docRef = await addDoc(collection(db, 'contactSubmissions'), {
      ...validation.data,
      submittedAt: serverTimestamp(), // Use Firestore server timestamp
    });
    console.log('Contact message saved with ID: ', docRef.id);
    return { success: true, message: 'Message saved successfully!' };
  } catch (error: any) { // Added :any to access error.code and error.message more easily
    console.error('Error adding document to Firestore: ', error);
    let userMessage = 'Failed to save message. Please try again.';
    
    // Log more specific Firebase error details if available
    if (error.code) {
      console.error('Firebase Error Code:', error.code);
      // Example: For a permission denied error, the code would be 'permission-denied'
      // You could potentially map common codes to more specific user messages here if desired,
      // but for now, the detailed server log is the most important for debugging.
    }
    if (error.message) {
        console.error('Firebase Error Message:', error.message);
    }

    return { 
        success: false, 
        message: userMessage 
        // We're not passing the raw error.code or error.message to the client for security.
        // The detailed logs are for server-side debugging.
    };
  }
}

