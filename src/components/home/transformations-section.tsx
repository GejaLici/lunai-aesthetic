'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { allServices, type ServiceItem } from '@/lib/services';
import { useTranslations, useServiceTranslation } from '@/hooks/use-translations';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

const TransformationCard = ({ service }: { service: ServiceItem; }) => {
  const t = useTranslations('HomePage');
  const { name: serviceName } = useServiceTranslation(service.id);

  return (
    <Card
      className="relative flex flex-col h-96 bg-card shadow-lg rounded-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-primary/20"
    >
      <Image
        src={service.imageAfter}
        alt={t('transformations.imageAlt', { treatment: serviceName })}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        data-ai-hint={`${service.dataAiHint} after`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative mt-auto p-4 z-10">
        <h3 className="text-lg font-headline text-white mb-1">{serviceName}</h3>
        <Button
          asChild
          variant="link"
          className="text-white p-0 hover:text-white/80 font-semibold text-sm"
        >
          <Link href={`/gallery#${service.id}`}>
            {t('transformations.viewResult')} <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export const TransformationsSection = React.memo(function TransformationsSection() {
  const t = useTranslations('HomePage');
  const transformations = (allServices || []).slice(0, 6);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="container mx-auto px-4 pb-12">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold mb-12 text-primary">
          {t('transformations.title')}
        </h2>
      </div>
      
      {isClient && (
         <Carousel
            className="w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto"
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent>
                {transformations.map((service, index) => (
                     <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                            <TransformationCard service={service} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:-left-4 md:-left-8" />
            <CarouselNext className="right-2 sm:-right-4 md:-right-8" />
        </Carousel>
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
