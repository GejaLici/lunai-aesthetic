"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper } from 'lucide-react';
import { placeholderPosts } from "@/lib/blog-posts";
import { useTranslations } from "@/hooks/use-translations";

export default function BlogPage() {
  const t = useTranslations('BlogPage');
  const tBlog = useTranslations('blogPosts');

  if (!placeholderPosts || placeholderPosts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Newspaper className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">{t('title')}</h1>
        <p className="text-xl text-foreground/80 mt-4">
          {t('emptyState')}
        </p>
      </div>
    );
  }

  const featuredPost = placeholderPosts[0];
  const regularPosts = placeholderPosts.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-8">
        <Newspaper className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">{t('title')}</h1>
        <p className="text-xl text-foreground/80 mt-4">
          {t('subtitle')}
        </p>
      </section>

      {featuredPost && (
        <section className="py-8 mb-8">
          <Card className="flex flex-col md:flex-row shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.01] bg-card overflow-hidden">
            <div className="md:w-1/2 relative min-h-[250px] md:min-h-full h-72 md:h-auto">
              <Image
                src={featuredPost.imageUrl}
                alt={tBlog(`${featuredPost.id}.title`)}
                fill
                className="object-cover"
                data-ai-hint={featuredPost.imageHint}
              />
            </div>
            <div className="md:w-1/2 flex flex-col p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-2xl lg:text-3xl text-primary mb-2">{tBlog(`${featuredPost.id}.title`)}</CardTitle>
                <p className="text-sm text-muted-foreground">{featuredPost.date}</p>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <CardDescription className="text-foreground/90 text-base mb-4">
                  {tBlog(`${featuredPost.id}.excerpt`)}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-0 mt-4">
                <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80 text-base">
                  <Link href={featuredPost.slug}>{t('readMore')} &rarr;</Link>
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
                    alt={tBlog(`${post.id}.title`)}
                    fill
                    className="object-cover"
                    data-ai-hint={post.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-6 flex flex-col">
                <CardTitle className="font-headline text-xl text-primary mb-2">{tBlog(`${post.id}.title`)}</CardTitle>
                <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
                <CardDescription className="text-foreground/90 text-sm mb-4 flex-grow">
                  {tBlog(`${post.id}.excerpt`)}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80">
                  <Link href={post.slug}>{t('readMore')} &rarr;</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
