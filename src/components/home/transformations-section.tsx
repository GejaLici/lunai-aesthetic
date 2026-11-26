
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { allServices, type ServiceItem } from '@/lib/services';
import { useTranslations, useServiceTranslation } from '@/hooks/use-translations';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const TransformationCard = ({ service }: { service: ServiceItem }) => {
  const { name: serviceName } = useServiceTranslation(service.id);
  return (
    <Card
      className={cn(
        'relative flex flex-col bg-card shadow-lg rounded-xl overflow-hidden group transition-all duration-300 ease-in-out h-full'
      )}
    >
      <Image
        src={service.imageAfter}
        alt={serviceName}
        fill
        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 40vw, 30vw"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        data-ai-hint={`${service.dataAiHint} after`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative mt-auto p-4 z-10 text-white">
        <h3 className="text-lg font-headline font-bold mb-1">{serviceName}</h3>
      </div>
    </Card>
  );
};

const TransformationInfo = ({ service, isActive, viewResultLabel }: { service: ServiceItem, isActive: boolean, viewResultLabel: string }) => {
  const { name: serviceName, meta_description } = useServiceTranslation(service.id);

  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out text-center lg:text-left",
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!isActive}
    >
      <h3 className="font-headline text-3xl text-primary mb-4">{serviceName}</h3>
      {meta_description ? (
        <p className="text-lg text-foreground/80 mb-6" dangerouslySetInnerHTML={{ __html: meta_description }}></p>
      ) : (
        <p className="text-lg text-foreground/80 mb-6">More details coming soon.</p>
      )}
      <Button asChild>
        <Link href={`/services/${service.id}`}>{viewResultLabel}</Link>
      </Button>
    </div>
  );
};

export const TransformationsSection = React.memo(function TransformationsSection() {
  const t = useTranslations('HomePage.transformations');
  const transformations = allServices.slice(0, 5);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const viewResultLabel = t('viewResult');

  return (
    <section className="container mx-auto px-4 pb-12 overflow-hidden">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold mb-12 text-primary">
          {t('title')}
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-center min-h-[450px]">
        {/* Carousel Side */}
        <div className="lg:col-span-3 relative h-[500px] flex items-center justify-center">
          <div className="w-full">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex items-center h-full -ml-4">
                {transformations.map((service, index) => {
                  const isActive = index === selectedIndex;
                  return (
                    <div key={service.id} className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-2/3 pl-4 h-full flex items-center">
                      <div
                        className={cn(
                          "relative w-full transition-all duration-500 ease-in-out cursor-pointer",
                          isActive ? 'h-[450px]' : 'h-[350px]'
                        )}
                        onClick={() => emblaApi?.scrollTo(index)}
                      >
                        <TransformationCard service={service} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
             <Button onClick={scrollPrev} variant="outline" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full h-10 w-10">
                <ArrowLeft />
            </Button>
            <Button onClick={scrollNext} variant="outline" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full h-10 w-10">
                <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:col-span-2 relative min-h-[200px]">
          {transformations.map((service, index) => (
            <TransformationInfo 
                key={service.id} 
                service={service} 
                isActive={index === selectedIndex} 
                viewResultLabel={viewResultLabel}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/gallery">{t('buttonAll')}</Link>
        </Button>
      </div>
    </section>
  );
});

TransformationsSection.displayName = 'TransformationsSection';
