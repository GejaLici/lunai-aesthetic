'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { ArrowRight, Stethoscope, Activity, Smile } from 'lucide-react';
import { serviceData } from '@/lib/services';
import { useTranslations } from '@/hooks/use-translations';

const iconMap = {
  face: Stethoscope,
  body: Activity,
  dentistry: Smile,
};

export const FeaturedServicesSection = React.memo(function FeaturedServicesSection() {
  const tHome = useTranslations('HomePage');
  const tServices = useTranslations('services');
  const tServicesPage = useTranslations('ServicesPage');
  
  const featuredServiceCategories = serviceData.filter((c) =>
    ['face', 'body', 'dentistry'].includes(c.id)
  );

  return (
    <section className="container mx-auto px-4 pb-12">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
        {tHome('featuredServices.title')}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featuredServiceCategories.map((category, index) => {
          const Icon = iconMap[category.id as keyof typeof iconMap];
          const categoryTitle = tServices(`categories.${category.id}.title`);
          const backgroundImage = category.services[0]?.imageAfter || 'https://placehold.co/600x400.png';
          const imageHint = category.services[0]?.dataAiHint || 'abstract';

          return (
            <Link key={category.id} href={`/services#${category.id}`} scroll={true} className="block group">
              <Card
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 animate-fadeIn aspect-[4/5]"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <Image
                  src={backgroundImage}
                  alt={categoryTitle}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  data-ai-hint={imageHint}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="relative h-full flex flex-col justify-between text-center items-center p-6 text-white">
                   <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/10 self-start">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <div className="text-center w-full">
                    <h3 className="font-headline text-2xl font-bold">{categoryTitle}</h3>
                    <div className="flex items-center justify-center text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity mt-1">
                        <span>{tServicesPage('learnMore')}</span>
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
});

FeaturedServicesSection.displayName = 'FeaturedServicesSection';
