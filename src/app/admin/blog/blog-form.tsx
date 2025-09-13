'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { saveBlogPost, type BlogFormData, deleteBlogPost } from './actions';
import { useState } from 'react';
import { Loader2, Save, Trash2 } from 'lucide-react';
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

type BlogFormProps = {
  post?: BlogFormData | null;
};

export function BlogForm({ post }: BlogFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const isEditing = !!post?.id;

  const form = useForm<BlogFormData>({
    resolver: zodResolver(BlogFormSchema),
    defaultValues: post || {
      title_en: '',
      excerpt_en: '',
      content_en: '',
      title_de: '',
      excerpt_de: '',
      content_de: '',
      title_es: '',
      excerpt_es: '',
      content_es: '',
      title_fr: '',
      excerpt_fr: '',
      content_fr: '',
      title_it: '',
      excerpt_it: '',
      content_it: '',
      title_sq: '',
      excerpt_sq: '',
      content_sq: '',
      imageUrl: '',
      imageHint: '',
      date: new Date().toISOString().split('T')[0],
      slug: '',
    },
  });

  const onSubmit: SubmitHandler<BlogFormData> = async (data) => {
    setIsLoading(true);
    
    // The server action will redirect on success, so we only need to handle the error case
    const result = await saveBlogPost(data);
    
    if (result && !result.success) {
      toast({
        title: 'Error saving post',
        description: result.message,
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };
  
  const handleDelete = async () => {
    if (post?.id) {
        setIsLoading(true);
        await deleteBlogPost(post.id);
        toast({
            title: 'Post Deleted',
            description: 'The blog post has been successfully deleted.',
        });
        // The server action will redirect, but we set loading to false in case it doesn't
        setIsLoading(false);
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
            <CardDescription>Write your blog post content in multiple languages.</CardDescription>
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
                          <Textarea placeholder={`Full blog content...`} {...field} className="min-h-[200px]" />
                        </FormControl>
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
                        <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
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