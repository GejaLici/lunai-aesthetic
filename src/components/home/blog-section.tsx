'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from '@/hooks/use-translations';
import { Skeleton } from '../ui/skeleton';
import { getRecentBlogPosts, type BlogPost } from '@/lib/blog-posts';


// A client-side hook to get recent posts for components like the homepage.
function useRecentBlogPosts(count: number) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getRecentBlogPosts(count);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error(`Error fetching latest ${count} blog posts:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [count]);

  return { posts, loading };
}


export const BlogSection = React.memo(function BlogSection() {
  const t = useTranslations('HomePage');
  const { posts: allRecentPosts, loading } = useRecentBlogPosts(9);
  const { locale } = useLocale();

  const posts = allRecentPosts
    .filter(post => post.title?.[locale] && post.excerpt?.[locale])
    .slice(0, 3);

  const getLocalized = (post: BlogPost, field: 'title' | 'excerpt') => {
      return post[field]?.[locale];
  };
  
  if (loading) {
    return (
       <section className="container mx-auto px-4 pb-12">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          {t('blog.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
                <Card key={i} className="flex flex-col shadow-lg">
                    <CardHeader className="p-0">
                        <Skeleton className="w-full h-48 rounded-t-lg" />
                    </CardHeader>
                    <CardContent className="flex-grow pt-6 flex flex-col">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2 mb-3" />
                        <Skeleton className="h-4 w-full mb-1" />
                        <Skeleton className="h-4 w-full mb-4" />
                    </CardContent>
                    <CardFooter>
                         <Skeleton className="h-6 w-24" />
                    </CardFooter>
                </Card>
            ))}
        </div>
       </section>
    )
  }

  if (posts.length === 0) {
      return null;
  }

  return (
    <section className="container mx-auto px-4 pb-12">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
        {t('blog.title')}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card key={post.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card animate-fadeIn" style={{ animationDelay: `${0.2 * index}s` }}>
            <CardHeader className="p-0">
              <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={getLocalized(post, 'title') || 'Blog post'}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  data-ai-hint={post.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow pt-6 flex flex-col">
              <CardTitle className="font-headline text-xl text-primary mb-2">{getLocalized(post, 'title')}</CardTitle>
              <p className="text-sm text-muted-foreground mb-3">{new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <CardDescription className="text-foreground/90 text-sm mb-4 flex-grow">
                {getLocalized(post, 'excerpt')}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80">
                <Link href={`/blog/${post.slug}`}>{t('blog.readArticle')} <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/blog">{t('blog.buttonAll')}</Link>
        </Button>
      </div>
    </section>
  );
});

BlogSection.displayName = 'BlogSection';
