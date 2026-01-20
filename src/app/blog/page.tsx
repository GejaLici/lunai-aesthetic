'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper, Loader2 } from 'lucide-react';
import { getAllBlogPosts, type BlogPost } from "@/lib/blog-posts";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const { locale } = useLocale();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const tBlog = useTranslations('BlogPage');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const fetchedPosts = await getAllBlogPosts();
      const localizedPosts = fetchedPosts.filter(post => post.title?.[locale] && post.excerpt?.[locale]);
      setPosts(localizedPosts);
      setLoading(false);
    };
    fetchPosts();
  }, [locale]);

  const getLocalized = (post: BlogPost, field: 'title' | 'excerpt') => {
      return post[field]?.[locale];
  };

  if (loading) {
    return (
        <div className="flex h-[80vh] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
        </div>
    );
  }
  
  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Newspaper className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">{tBlog('title')}</h1>
        <p className="text-xl text-foreground/80 mt-4">
          {tBlog('emptyState')}
        </p>
      </div>
    );
  }

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-8">
        <Newspaper className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">{tBlog('title')}</h1>
        <p className="text-xl text-foreground/80 mt-4">
          {tBlog('subtitle')}
        </p>
      </section>

      {featuredPost && (
        <section className="py-8 mb-8">
          <Card className="flex flex-col md:flex-row shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.01] bg-card overflow-hidden">
            <div className="md:w-1/2 relative min-h-[250px] md:min-h-full h-72 md:h-auto">
              <Image
                src={featuredPost.imageUrl}
                alt={getLocalized(featuredPost, 'title') || 'Featured Post'}
                fill
                className="object-cover"
                data-ai-hint={featuredPost.imageHint}
              />
            </div>
            <div className="md:w-1/2 flex flex-col p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-2xl lg:text-3xl text-primary mb-2">{getLocalized(featuredPost, 'title')}</CardTitle>
                <p className="text-sm text-muted-foreground">{new Date(featuredPost.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <CardDescription className="text-foreground/90 text-base mb-4">
                  {getLocalized(featuredPost, 'excerpt')}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-0 mt-4">
                <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80 text-base">
                  <Link href={`/blog/${featuredPost.slug}`}>{tBlog('readMore')} &rarr;</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        </section>
      )}

      <section className="py-8">
        <div className="grid md:grid-cols-2 gap-10">
          {regularPosts.map((post) => (
            <Card key={post.id} className="flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] bg-card">
              <CardHeader className="p-0">
                <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={getLocalized(post, 'title') || 'Blog post image'}
                    fill
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
                  <Link href={`/blog/${post.slug}`}>{tBlog('readMore')} &rarr;</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
