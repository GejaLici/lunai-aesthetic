
'use client';

import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { BlogForm, type BlogFormData } from '../../blog-form';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function EditBlogPostPage() {
    const [post, setPost] = useState<BlogFormData | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const params = useParams();
    const id = params.id as string;

    useEffect(() => {
        if (!id) return;
        
        async function getBlogPost(id: string) {
            try {
                const docRef = doc(db, 'blogPosts', id);
                const docSnap = await getDoc(docRef);
    
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const postData: BlogFormData = {
                        id: docSnap.id,
                        title_en: data.title?.en || '',
                        excerpt_en: data.excerpt?.en || '',
                        content_en: data.content?.en ? JSON.stringify(data.content.en, null, 2) : '[]',
                        title_de: data.title?.de || '',
                        excerpt_de: data.excerpt?.de || '',
                        content_de: data.content?.de ? JSON.stringify(data.content.de, null, 2) : '[]',
                        title_es: data.title?.es || '',
                        excerpt_es: data.excerpt?.es || '',
                        content_es: data.content?.es ? JSON.stringify(data.content.es, null, 2) : '[]',
                        title_fr: data.title?.fr || '',
                        excerpt_fr: data.excerpt?.fr || '',
                        content_fr: data.content?.fr ? JSON.stringify(data.content.fr, null, 2) : '[]',
                        title_it: data.title?.it || '',
                        excerpt_it: data.excerpt?.it || '',
                        content_it: data.content?.it ? JSON.stringify(data.content.it, null, 2) : '[]',
                        title_sq: data.title?.sq || '',
                        excerpt_sq: data.excerpt?.sq || '',
                        content_sq: data.content?.sq ? JSON.stringify(data.content.sq, null, 2) : '[]',
                        imageUrl: data.imageUrl || '',
                        imageHint: data.imageHint || '',
                        date: data.date || '',
                        slug: data.slug || '',
                    };
                    setPost(postData);
                } else {
                    setNotFound(true);
                }
            } catch (error) {
                console.error("Error fetching blog post:", error);
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        }

        getBlogPost(id);
    }, [id]);

  if (loading) {
      return (
          <div className="flex h-[80vh] w-full items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin" />
          </div>
      );
  }

  if (notFound) {
      return (
          <div className="container mx-auto px-4 py-8 text-center">
              <h1 className="text-4xl font-bold">Post Not Found</h1>
              <p>The blog post you are looking for does not exist.</p>
          </div>
      )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
       <h1 className="text-4xl font-headline font-bold text-primary mb-8">Edit Post</h1>
      <BlogForm post={post} />
    </div>
  );
}
