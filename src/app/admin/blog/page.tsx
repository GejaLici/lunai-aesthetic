'use client';

import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, PlusCircle, X } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';
import { format } from 'date-fns';

interface Post {
    id: string;
    title?: { en: string };
    date: string; // YYYY-MM-DD
}

export default function BlogAdminPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    
    // Filter states
    const [titleFilter, setTitleFilter] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        async function getBlogPosts() {
          try {
            const postsCollection = collection(db, 'blogPosts');
            const q = query(postsCollection, orderBy("date", "desc"));
            const postsSnapshot = await getDocs(q);
            const postsData = postsSnapshot.docs.map(doc => {
                const data = doc.data();
                let formattedDate = data.date;
                // Firestore date can be a Timestamp or a string 'YYYY-MM-DD'
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

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const titleMatch = titleFilter ? post.title?.en.toLowerCase().includes(titleFilter.toLowerCase()) : true;
            const startDateMatch = startDate ? new Date(post.date) >= new Date(startDate) : true;
            
            let endDateMatch = true;
            if (endDate) {
                const end = new Date(endDate);
                end.setHours(23, 59, 59, 999);
                endDateMatch = new Date(post.date) <= end;
            }

            return titleMatch && startDateMatch && endDateMatch;
        });
    }, [posts, titleFilter, startDate, endDate]);
    
    const clearFilters = () => {
        setTitleFilter('');
        setStartDate('');
        setEndDate('');
    }


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
      
      <Card className="mb-8">
        <CardHeader>
            <CardTitle>Filter Posts</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
                <Label htmlFor="title-filter">Title</Label>
                <Input id="title-filter" placeholder="Filter by title..." value={titleFilter} onChange={e => setTitleFilter(e.target.value)} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            </div>
            <div className="flex items-end">
                <Button onClick={clearFilters} variant="outline" className="w-full">
                    <X className="mr-2 h-4 w-4" /> Clear Filters
                </Button>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Posts</CardTitle>
          <CardDescription>Showing {filteredPosts.length} of {posts.length} posts.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {filteredPosts.map((post) => (
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
             {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No blog posts match your filters.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
