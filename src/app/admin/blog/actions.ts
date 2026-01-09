'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, doc, updateDoc, getDoc, serverTimestamp, deleteDoc } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const BlogFormSchema = z.object({
  id: z.string().optional(),
  title_en: z.string().min(1, "English title is required."),
  excerpt_en: z.string().min(1, "English excerpt is required."),
  content_en: z.string().min(1, "English content is required."),
  title_de: z.string().optional(),
  excerpt_de: z.string().optional(),
  content_de: z.string().optional(),
  title_es: z.string().optional(),
  excerpt_es: z.string().optional(),
  content_es: z.string().optional(),
  title_fr: z.string().optional(),
  excerpt_fr: z.string().optional(),
  content_fr: z.string().optional(),
  title_it: z.string().optional(),
  excerpt_it: z.string().optional(),
  content_it: z.string().optional(),
  title_sq: z.string().optional(),
  excerpt_sq: z.string().optional(),
  content_sq: z.string().optional(),
  imageUrl: z.string().url("Must be a valid URL.").min(1, "Image URL is required."),
  imageHint: z.string().min(1, "Image hint is required."),
  date: z.string().min(1, "Date is required."),
  slug: z.string().min(1, "Slug is required."),
});

export type BlogFormData = z.infer<typeof BlogFormSchema>;

export async function saveBlogPost(formData: BlogFormData) {
  const validation = BlogFormSchema.safeParse(formData);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
      message: "Validation failed.",
    };
  }

  const { id, ...data } = validation.data;
  
  const postData = {
    date: data.date,
    slug: data.slug,
    imageUrl: data.imageUrl,
    imageHint: data.imageHint,
    title: {
      en: data.title_en,
      de: data.title_de,
      es: data.title_es,
      fr: data.title_fr,
      it: data.title_it,
      sq: data.title_sq,
    },
    excerpt: {
      en: data.excerpt_en,
      de: data.excerpt_de,
      es: data.excerpt_es,
      fr: data.excerpt_fr,
      it: data.excerpt_it,
      sq: data.excerpt_sq,
    },
    content: {
      en: data.content_en,
      de: data.content_de,
      es: data.content_es,
      fr: data.content_fr,
      it: data.content_it,
      sq: data.content_sq,
    },
  };

  try {
    if (id) {
      // Update existing post
      const postRef = doc(db, 'blogPosts', id);
      await updateDoc(postRef, {
        ...postData,
        updatedAt: serverTimestamp(),
      });
    } else {
      // Create new post
      await addDoc(collection(db, 'blogPosts'), {
        ...postData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }

    revalidatePath('/blog');
    revalidatePath('/admin/blog');
    revalidatePath(`/blog/${data.slug}`);

    return { success: true };

  } catch (error) {
    console.error("Error saving blog post:", error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
        success: false,
        message: `Failed to save blog post: ${errorMessage}`
    };
  }
}


export async function getBlogPost(id: string) {
    try {
        const docRef = doc(db, 'blogPosts', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                id: docSnap.id,
                title_en: data.title?.en || '',
                excerpt_en: data.excerpt?.en || '',
                content_en: data.content?.en || '',
                title_de: data.title?.de || '',
                excerpt_de: data.excerpt?.de || '',
                content_de: data.content?.de || '',
                title_es: data.title?.es || '',
                excerpt_es: data.excerpt?.es || '',
                content_es: data.content?.es || '',
                title_fr: data.title?.fr || '',
                excerpt_fr: data.excerpt?.fr || '',
                content_fr: data.content?.fr || '',
                title_it: data.title?.it || '',
                excerpt_it: data.excerpt?.it || '',
                content_it: data.content?.it || '',
                title_sq: data.title?.sq || '',
                excerpt_sq: data.excerpt?.sq || '',
                content_sq: data.content?.sq || '',
                imageUrl: data.imageUrl || '',
                imageHint: data.imageHint || '',
                date: data.date || '',
                slug: data.slug || '',
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching blog post:", error);
        return null;
    }
}

export async function deleteBlogPost(id: string) {
    try {
        await deleteDoc(doc(db, 'blogPosts', id));
        revalidatePath('/blog');
        revalidatePath('/admin/blog');
        return { success: true };
    } catch (error) {
        console.error("Error deleting blog post:", error);
        return {
            success: false,
            message: 'Failed to delete blog post.'
        }
    }
}