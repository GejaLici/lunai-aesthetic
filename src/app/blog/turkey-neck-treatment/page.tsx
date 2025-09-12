
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from '@/hooks/use-translations';
import { cn } from '@/lib/utils';

interface BlogSection {
  type: 'heading' | 'paragraph' | 'list' | 'card';
  content: string | string[];
  title?: string;
  level?: number;
}

export default function TurkeyNeckPage() {
  const t = useTranslations('blogPosts.8');
  const content: BlogSection[] = t('content') as BlogSection[];

  const renderContent = (section: BlogSection, index: number) => {
    switch (section.type) {
      case 'heading':
        const HeadingTag = `h${section.level || 2}` as keyof JSX.IntrinsicElements;
        return <HeadingTag key={index} className="font-headline text-3xl text-primary pt-6">{section.content}</HeadingTag>;
      case 'paragraph':
        return <p key={index}>{section.content}</p>;
      case 'list':
        return (
          <ul key={index} className="list-disc pl-6 space-y-2">
            {(section.content as string[]).map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        );
      case 'card':
        return (
          <Card key={index} className="bg-primary/10 mt-12">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(section.content as string[]).map((item, i) => (
                <p key={i} className="text-lg" dangerouslySetInnerHTML={{ __html: item }}></p>
              ))}
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">{t('date')}</p>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            {t('title')}
          </h1>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mt-6 shadow-lg">
            <Image
              src="/images/blog/blog-8.png"
              alt={t('title')}
              fill
              className="object-cover"
              data-ai-hint="woman neck"
              priority
            />
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-6 text-foreground/90">
          {content.map(renderContent)}
        </div>
      </article>
    </div>
  );
}
