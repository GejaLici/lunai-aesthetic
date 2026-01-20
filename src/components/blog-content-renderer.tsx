'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useContactPopup } from '@/app/providers';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

// Define types for content blocks
type ContentBlock = {
  type: 'heading';
  level: number;
  content: string;
} | {
  type: 'paragraph';
  content: string;
} | {
  type: 'list';
  content: string[];
} | {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  dataAiHint?: string;
} | {
  type: 'card';
  title: string;
  content: string[];
  buttonText?: string;
  buttonLink?: string;
} | {
    type: 'carousel';
    slides: {
      src: string;
      alt: string;
      caption?: string;
      dataAiHint?: string;
    }[];
  };

type BlogContentRendererProps = {
  content: ContentBlock[];
};

export function BlogContentRenderer({ content }: BlogContentRendererProps) {
  const { openContactPopup } = useContactPopup();
  
  if (!content || !Array.isArray(content) || content.length === 0) {
    return (
        <p>This post has no content yet.</p>
    );
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-6 text-foreground/90">
      {content.map((block, index) => {
        switch (block.type) {
          case 'heading':
            const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
            return <Tag key={index} dangerouslySetInnerHTML={{ __html: block.content }} />;
          
          case 'paragraph':
            return <p key={index} dangerouslySetInnerHTML={{ __html: block.content }} />;

          case 'list':
            return (
              <ul key={index} className="list-disc list-inside space-y-2">
                {block.content.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            );
          
          case 'image':
            return (
              <figure key={index} className="not-prose my-8">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image src={block.src} alt={block.alt} fill className="object-cover" data-ai-hint={block.dataAiHint || ''} />
                </div>
                {block.caption && <figcaption className="text-center text-sm text-muted-foreground mt-2">{block.caption}</figcaption>}
              </figure>
            );

          case 'card':
            const isContactCard = block.buttonLink === '#contact';
            return (
              <div key={index} className="not-prose my-8">
                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle className="text-primary" dangerouslySetInnerHTML={{ __html: block.title }} />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {block.content.map((p, i) => (
                            <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                        ))}
                        {block.buttonText && block.buttonLink && (
                           isContactCard ? (
                             <Button className="mt-4" onClick={() => openContactPopup(`Blog Post CTA: ${document.title}`)}>
                               {block.buttonText}
                             </Button>
                           ) : (
                             <Button asChild className="mt-4">
                               <Link href={block.buttonLink}>{block.buttonText}</Link>
                             </Button>
                           )
                        )}
                    </CardContent>
                </Card>
              </div>
            );
        
        case 'carousel':
            if (!block.slides || block.slides.length === 0) return null;
            return (
              <div key={index} className="not-prose my-8">
                <Carousel
                  className="w-full"
                  plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
                  opts={{ loop: true }}
                >
                  <CarouselContent>
                    {block.slides.map((slide, i) => (
                      <CarouselItem key={i}>
                        <figure className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 90vw, 800px"
                            data-ai-hint={slide.dataAiHint || ''}
                          />
                          {slide.caption && (
                             <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white text-center text-sm">
                               {slide.caption}
                             </figcaption>
                          )}
                        </figure>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex" />
                </Carousel>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
