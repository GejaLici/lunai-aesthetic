'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message cannot exceed 500 characters."),
  source: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function saveContactMessage(data: ContactFormData) {
  const validation = contactFormSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
    };
  }

  try {
    await addDoc(collection(db, 'contactSubmissions'), {
      ...validation.data,
      submittedAt: serverTimestamp(),
    });
    return { success: true, message: 'Message saved successfully!' };
  } catch (error) {
    console.error("Error saving contact message:", error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { 
        success: false, 
        message: `Failed to save message: ${errorMessage}`
    };
  }
}
