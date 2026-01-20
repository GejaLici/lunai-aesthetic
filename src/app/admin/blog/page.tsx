'use client';

import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, PlusCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

interface Post {
    id: string;
    title?: { en: string };
    date: string;
}

export default function BlogAdminPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getBlogPosts() {
          try {
            const postsCollection = collection(db, 'blogPosts');
            const q = query(postsCollection, orderBy("date", "desc"));
            const postsSnapshot = await getDocs(q);
            const postsData = postsSnapshot.docs.map(doc => {
                const data = doc.data();
                let formattedDate = data.date;
                if (data.date && typeof (data.date as Timestamp).toDate === 'function') {
                    formattedDate = format((data.date as Timestamp).toDate(), 'yyyy-MM-dd');
                }
                return {
                    id: doc.id,
                    title: data.title,
                    date: formattedDate,
                } as Post;
            });
            setPosts(postsData);
          } catch (error) {
            console.error("Error fetching blog posts:", error);
          } finally {
            setLoading(false);
          }
        }
        getBlogPosts();
    }, []);

  if (loading) {
    return (
        <div className="flex h-[80vh] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
        </div>
    );
  }

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
            {posts.map((post) => (
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
