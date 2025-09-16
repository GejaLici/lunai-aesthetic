
'use client';

import React from 'react';
import { useTranslations } from '@/hooks/use-translations';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Star, Stethoscope, Calendar, HeartHandshake, Smile, Award } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const statsData = [
  { key: 'doctors', icon: Stethoscope },
  { key: 'patients', icon: Users },
  { key: 'reviews', icon: Star },
  { key: 'experience', icon: Calendar },
  { key: 'surgeries', icon: Award },
  { key: 'clients', icon: HeartHandshake },
  { key: 'treatments', icon: Smile },
];

const StatCard = ({ item }: { item: typeof statsData[0] }) => {
  const t = useTranslations('HomePage.stats');
  const Icon = item.icon;
  return (
    <div className="p-1 h-full">
        <Card
            className="text-center p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col items-center justify-center"
        >
            <CardContent className="p-0 flex flex-col items-center justify-center">
                <Icon className="h-8 w-8 md:h-10 md:w-10 text-accent mb-3" />
                <p className="text-2xl md:text-3xl font-bold font-headline text-primary">{t(`${item.key}.value`)}</p>
                <p className="text-sm md:text-base text-muted-foreground mt-1">{t(`${item.key}.label`)}</p>
            </CardContent>
        </Card>
    </div>
  );
}

export const StatsSection = React.memo(function StatsSection() {
  const t = useTranslations('HomePage.stats');
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <section className="container mx-auto px-4 pb-16">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
        {t('title')}
      </h2>
      
      {isClient && (
         <Carousel
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
            <CarouselContent>
                {statsData.map((item) => (
                    <CarouselItem key={item.key} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <StatCard item={item} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:-left-4 md:-left-8" />
            <CarouselNext className="right-2 sm:-right-4 md:-right-8" />
        </Carousel>
      )}

    </section>
  );
});

StatsSection.displayName = 'StatsSection';
