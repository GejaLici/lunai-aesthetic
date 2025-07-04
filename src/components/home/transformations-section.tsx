'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { allServices } from '@/lib/services';

const DynamicCarousel = dynamic(() => import('@/components/ui/carousel').then(mod => mod.Carousel), {
  ssr: false,
  loading: () => <div className="text-center py-8"><p className="text-muted-foreground">Loading transformations gallery...</p></div>
});
const DynamicCarouselContent = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselContent), { ssr: false });
const DynamicCarouselItem = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselItem), { ssr: false });
const DynamicCarouselPrevious = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselPrevious), { ssr: false });
const DynamicCarouselNext = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselNext), { ssr: false });

type TransformationsSectionProps = {
  t: (key: string, vars?: any) => string;
  tServices: (key: string) => string;
};

export const TransformationsSection = React.memo(function TransformationsSection({ t, tServices }: TransformationsSectionProps) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);
  
  const transformations = (allServices || []).slice(0, 6).map(service => ({
    id: service.id,
    beforeImageUrl: service.imageBefore,
    afterImageUrl: service.imageAfter,
    beforeHint: `${service.dataAiHint} before`,
    afterHint: `${service.dataAiHint} after`,
  }));

  return (
    <section className="container mx-auto px-4 pb-12">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold mb-12 text-primary">
          {t('transformations.title')}
        </h2>
      </div>
      {isClient && (
        <DynamicCarousel
          className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <DynamicCarouselContent className="sm:-ml-1">
            {transformations.map((transform, index) => (
              <DynamicCarouselItem key={`chosen-carousel-${transform.id}`} className="sm:pl-1 md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card
                    className="relative flex flex-col h-96 bg-card shadow-lg rounded-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-primary/20 animate-fadeIn"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <Image
                      src={transform.afterImageUrl}
                      alt={t('transformations.imageAlt', { treatment: tServices(`items.${transform.id}.name`) })}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      data-ai-hint={transform.afterHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="relative mt-auto p-4 z-10">
                      <h3 className="text-lg font-headline text-white mb-1">{tServices(`items.${transform.id}.name`)}</h3>
                      <Button
                        asChild
                        variant="link"
                        className="text-white p-0 hover:text-white/80 font-semibold text-sm"
                      >
                        <Link href={`/gallery#${transform.id}`}>
                          {t('transformations.viewResult')} <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </div>
              </DynamicCarouselItem>
            ))}
          </DynamicCarouselContent>
          <DynamicCarouselPrevious className="left-2 sm:-left-[10px] md:-left-[20px] lg:-left-[30px]" />
          <DynamicCarouselNext className="right-2 sm:-right-[10px] md:-right-[20px] lg:-right-[30px]" />
        </DynamicCarousel>
      )}
      <div className="text-center mt-12">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/gallery">{t('transformations.buttonAll')}</Link>
        </Button>
      </div>
    </section>
  );
});

TransformationsSection.displayName = 'TransformationsSection';
