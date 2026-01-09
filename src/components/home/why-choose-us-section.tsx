'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Leaf, UsersRound } from 'lucide-react';
import { useTranslations } from '@/hooks/use-translations';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';

const whyChooseUsData = [
  { icon: UsersRound, key: "expertCare", link: '/services' },
  { icon: Cpu, key: "advancedTech", link: '/about' }, // Assuming no direct page, can link to about
  { icon: Leaf, key: "naturalResults", link: '/gallery' },
];

export const WhyChooseUsSection = React.memo(function WhyChooseUsSection() {
  const t = useTranslations('HomePage');
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);
  
  const activeItem = whyChooseUsData[selectedIndex];

  return (
    <section className="pb-16 overflow-hidden">
       <div className="container mx-auto px-4">
            <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                {t('whyChooseUs.title')}
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Carousel Side */}
                <div className="relative h-[400px] flex items-center justify-center">
                    <div className="w-full">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex items-center h-full -ml-4">
                                {whyChooseUsData.map((item, index) => {
                                    const Icon = item.icon;
                                    const isActive = index === selectedIndex;
                                    return (
                                        <div key={item.key} className="flex-grow-0 flex-shrink-0 basis-1/2 md:basis-1/3 pl-4">
                                            <div 
                                                className="relative transition-transform duration-500 ease-in-out"
                                                style={{ 
                                                    transform: `scale(${isActive ? 1 : 0.8})`,
                                                    opacity: isActive ? 1 : 0.5,
                                                }}
                                                onClick={() => emblaApi?.scrollTo(index)}
                                            >
                                                <Card className="p-8 text-center shadow-lg rounded-xl border border-border/20 bg-card aspect-[3/4] flex flex-col justify-center items-center">
                                                    <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                                                        <Icon className="h-8 w-8 text-primary" />
                                                    </div>
                                                    <h3 className="font-headline text-2xl text-primary mb-3">{t(`whyChooseUs.${item.key}.title`)}</h3>
                                                </Card>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="relative min-h-[250px]">
                    {whyChooseUsData.map((item, index) => {
                         const isActive = index === selectedIndex;
                         return (
                            <div 
                                key={item.key}
                                className={cn(
                                    "absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out",
                                    isActive ? 'opacity-100' : 'opacity-0'
                                )}
                                aria-hidden={!isActive}
                            >
                                <h3 className="font-headline text-3xl text-primary mb-4">{t(`whyChooseUs.${item.key}.title`)}</h3>
                                <p className="text-lg text-card-foreground/90 mb-4">
                                    {t(`whyChooseUs.${item.key}.description`)}
                                </p>
                                <p className="text-base text-muted-foreground mb-6">
                                    {t(`whyChooseUs.${item.key}.moreInfo`)}
                                </p>
                                <Button asChild>
                                    <Link href={item.link}>Learn More</Link>
                                </Button>
                            </div>
                         )
                    })}
                </div>
            </div>
       </div>
    </section>
  );
});

WhyChooseUsSection.displayName = 'WhyChooseUsSection';
