'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { placeholderPosts as blogPostsData } from '@/lib/blog-posts';
import { useTranslations } from '@/hooks/use-translations';

export const BlogSection = React.memo(function BlogSection() {
  const t = useTranslations('HomePage');
  const tBlog = useTranslations('blogPosts');
  const latestBlogPosts = (blogPostsData || []).slice(0, 3);

  return (
    <section className="container mx-auto px-4 pb-12">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
        {t('blog.title')}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestBlogPosts.map((post, index) => (
          <Card key={post.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card animate-fadeIn" style={{ animationDelay: `${0.2 * index}s` }}>
            <CardHeader className="p-0">
              <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={tBlog(`${post.id}.title`)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                <Link href={post.slug}>{t('blog.readArticle')} <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
