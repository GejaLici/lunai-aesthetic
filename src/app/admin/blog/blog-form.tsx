'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2, Save, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { db } from '@/lib/firebase';
import { collection, addDoc, doc, updateDoc, serverTimestamp, deleteDoc } from 'firebase/firestore';


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

type BlogFormProps = {
  post?: BlogFormData | null;
};

const placeholderPost: BlogFormData = {
  title_en: 'The Ultimate Guide to Skincare for a Lasting Glow',
  excerpt_en: 'Discover expert tips on building a skincare routine that fights aging, enhances radiance, and keeps your skin healthy and beautiful.',
  content_en: JSON.stringify(
    [
      {
        type: 'paragraph',
        content:
          "Achieving a lasting, radiant glow is the holy grail of skincare. It's not just about the products you use, but also about building a consistent routine that nourishes, protects, and revitalizes your skin from the inside out. Let's explore the essential steps to build a routine that will keep your skin looking its best.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Core Four: Cleanse, Treat, Moisturize, Protect',
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/skincare-routine/800/450',
        alt: 'A collection of skincare products on a clean white background.',
        caption: 'A consistent routine is the key to healthy skin.',
        dataAiHint: 'skincare products',
      },
      {
        type: 'paragraph',
        content:
          "Your daily routine should be built around these four core pillars. A gentle cleanser removes impurities without stripping your skin's natural oils. A treatment step, with serums containing active ingredients like Vitamin C or Retinol, targets specific concerns. Moisturizer is crucial for hydration, and a broad-spectrum sunscreen with at least SPF 30 is non-negotiable to protect against sun damage, the number one cause of premature aging.",
      },
      {
        type: 'card',
        title: 'Have Questions? Contact Us!',
        content: [
          'Our team is ready to answer your questions and help you schedule a consultation.',
        ],
        buttonText: 'Open Contact Form',
        buttonLink: '#contact',
      },
    ],
    null,
    2
  ),
  imageUrl: 'https://picsum.photos/seed/skincare-guide/1200/630',
  imageHint: 'skincare routine',
  date: '2024-07-12',
  slug: 'ultimate-guide-skincare-glow',
  title_de: '',
  excerpt_de: '',
  content_de: '[]',
  title_es: '',
  excerpt_es: '',
  content_es: '[]',
  title_fr: '',
  excerpt_fr: '',
  content_fr: '[]',
  title_it: '',
  excerpt_it: '',
  content_it: '[]',
  title_sq: '',
  excerpt_sq: '',
  content_sq: '[]',
};


export function BlogForm({ post }: BlogFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const isEditing = !!post?.id;

  const form = useForm<BlogFormData>({
    resolver: zodResolver(BlogFormSchema),
    defaultValues: post || placeholderPost,
  });

  const onSubmit: SubmitHandler<BlogFormData> = async (formData) => {
    setIsLoading(true);
    
    const { id, ...data } = formData;

    const locales = ['en', 'de', 'es', 'fr', 'it', 'sq'];
    const parsedContent: { [key: string]: any[] } = {};

    for (const lang of locales) {
      const contentString = data[`content_${lang}` as keyof typeof data] || '[]';
      try {
        parsedContent[lang] = JSON.parse(contentString);
      } catch (e) {
        toast({
          title: `Invalid JSON in ${lang.toUpperCase()} Content`,
          description: 'Please check the format. The content must be a valid JSON array.',
          variant: 'destructive',
        });
        setIsLoading(false);
        return;
      }
    }
  
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
      content: parsedContent,
    };

    try {
      if (id) {
        const postRef = doc(db, 'blogPosts', id);
        await updateDoc(postRef, { ...postData, updatedAt: serverTimestamp() });
      } else {
        await addDoc(collection(db, 'blogPosts'), { ...postData, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
      }
  
      toast({
          title: `Post ${isEditing ? 'Updated' : 'Created'}`,
          description: `The blog post has been successfully ${isEditing ? 'updated' : 'created'}.`,
      });
      router.push('/admin/blog');
      router.refresh();

    } catch (error) {
      console.error("Error saving blog post:", error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      toast({
        title: 'Error saving post',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDelete = async () => {
    if (post?.id) {
        setIsLoading(true);
        try {
            await deleteDoc(doc(db, 'blogPosts', post.id));
            toast({
                title: 'Post Deleted',
                description: 'The blog post has been successfully deleted.',
            });
            router.push('/admin/blog');
            router.refresh();
        } catch (error) {
            console.error("Error deleting blog post:", error);
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
            toast({
                title: 'Error Deleting Post',
                description: errorMessage,
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    }
  }

  const locales = ['en', 'de', 'es', 'fr', 'it', 'sq'];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Post Metadata</CardTitle>
            <CardDescription>Provide the core details for your blog post.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., my-awesome-post" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Publication Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.png" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="imageHint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image AI Hint</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., woman face" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content</CardTitle>
            <CardDescription>Write your blog post content in multiple languages. The content must be a valid JSON array.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="en">
              <TabsList>
                {locales.map(lang => <TabsTrigger key={lang} value={lang}>{lang.toUpperCase()}</TabsTrigger>)}
              </TabsList>
              {locales.map(lang => (
                 <TabsContent key={lang} value={lang} className="space-y-4 pt-4">
                  <FormField
                    control={form.control}
                    name={`title_${lang}` as keyof BlogFormData}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title ({lang.toUpperCase()})</FormLabel>
                        <FormControl>
                          <Input placeholder={`Post Title in ${lang.toUpperCase()}`} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`excerpt_${lang}` as keyof BlogFormData}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Excerpt ({lang.toUpperCase()})</FormLabel>
                        <FormControl>
                          <Textarea placeholder={`A short summary...`} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`content_${lang}` as keyof BlogFormData}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content ({lang.toUpperCase()})</FormLabel>
                        <FormControl>
                          <Textarea placeholder={`[{ "type": "paragraph", "content": "Hello world!" }]`} {...field} className="min-h-[300px] font-mono text-sm" />
                        </FormControl>
                         <FormDescription>
                           This field accepts a JSON array of content blocks.
                         </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                 </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="flex justify-between">
            {isEditing && (
                 <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button type="button" variant="destructive" disabled={isLoading}>
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the blog post.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} disabled={isLoading}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
            )}
            <Button type="submit" disabled={isLoading} className="ml-auto">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              {isEditing ? 'Update' : 'Create'} Post
            </Button>
        </div>
      </form>
    </Form>
  );
}
