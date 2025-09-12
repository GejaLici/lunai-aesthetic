
import { BlogForm } from '../blog-form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function NewBlogPostPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Create New Post</h1>
      <BlogForm />
    </div>
  );
}
