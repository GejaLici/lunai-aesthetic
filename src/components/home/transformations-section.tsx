'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { allServices, type ServiceItem } from '@/lib/services';
import { useTranslations, useServiceTranslation } from '@/hooks/use-translations';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { cn } from '@/lib/utils';

const TransformationCard = ({ service, large = false }: { service: ServiceItem; large?: boolean }) => {
  const { name: serviceName } = useServiceTranslation(service.id);
  const cardHeight = large ? 'h-[450px]' : 'h-80';

  return (
    <Card
      className={`relative flex flex-col ${cardHeight} bg-card shadow-lg rounded-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-primary/20`}
    >
      <Image
        src={service.imageAfter}
        alt={serviceName}
        fill
        sizes={large ? "100vw" : "(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 17vw"}
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        data-ai-hint={`${service.dataAiHint} after`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative mt-auto p-4 z-10">
        <h3 className="text-lg font-headline text-white mb-1">{serviceName}</h3>
      </div>
    </Card>
  );
};

export const TransformationsSection = React.memo(function TransformationsSection() {
  const t = useTranslations('HomePage.transformations');
  const transformations = allServices.slice(0, 5); // Using 5 for a good carousel experience
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const activeTransformation = transformations[selectedIndex];
  const { name: activeServiceName } = useServiceTranslation(activeTransformation?.id);

  return (
    <section className="container mx-auto px-4 pb-12 overflow-hidden">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold mb-4 text-primary">
          {t('title')}
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-center min-h-[400px]">
        {/* Carousel Side */}
        <div className="lg:col-span-2 relative h-[400px] flex items-center justify-center">
          <div className="w-full">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex items-center h-full -ml-4">
                {transformations.map((service, index) => {
                  const isActive = index === selectedIndex;
                  return (
                    <div key={service.id} className="flex-grow-0 flex-shrink-0 basis-1/2 md:basis-1/3 pl-4 h-full flex items-center">
                      <div
                        className="relative w-full h-[300px] transition-transform duration-500 ease-in-out cursor-pointer"
                        style={{
                          transform: `scale(${isActive ? 1.1 : 0.8})`,
                          opacity: isActive ? 1 : 0.4,
                        }}
                        onClick={() => emblaApi?.scrollTo(index)}
                      >
                        <TransformationCard service={service} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="relative min-h-[200px]">
          {transformations.map((service, index) => {
            const isActive = index === selectedIndex;
            const { name: serviceName } = useServiceTranslation(service.id);
            return (
              <div
                key={service.id}
                className={cn(
                  "absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out text-center lg:text-left",
                  isActive ? 'opacity-100' : 'opacity-0'
                )}
                aria-hidden={!isActive}
              >
                <h3 className="font-headline text-3xl text-primary mb-4">{serviceName}</h3>
                <p className="text-lg text-foreground/80 mb-6">
                  Witness the incredible, natural-looking results our expert team achieves.
                </p>
                <Button asChild>
                  <Link href={`/services/${service.id}`}>{t('viewResult')}</Link>
                </Button>
              </div>
            );
          })}
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
