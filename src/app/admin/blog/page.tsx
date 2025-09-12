
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

export const revalidate = 0; // Ensure data is fetched on every request

async function getBlogPosts() {
  try {
    const postsCollection = collection(db, 'blogPosts');
    const postsSnapshot = await getDocs(postsCollection);
    const posts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    // Assuming posts have a 'date' field in 'YYYY-MM-DD' format or similar for sorting
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}


export default async function BlogAdminPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-headline font-bold text-primary">Manage Blog Posts</h1>
          <p className="text-muted-foreground mt-2">Create, edit, and manage your blog posts here.</p>
        </div>
        <Button asChild>
          <Link href="/admin/blog/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Existing Posts</CardTitle>
          <CardDescription>You have {posts.length} blog posts.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {posts.map((post: any) => (
              <div key={post.id} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{post.title?.en || 'Untitled Post'}</h3>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/admin/blog/edit/${post.id}`}>Edit</Link>
                </Button>
              </div>
            ))}
             {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No blog posts found.</p>
                <Button asChild className="mt-4">
                   <Link href="/admin/blog/new">Create your first post</Link>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
