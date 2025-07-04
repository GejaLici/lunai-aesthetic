'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Stethoscope, Activity, Smile } from 'lucide-react';
import { serviceData } from '@/lib/services';

const iconMap = {
  face: Stethoscope,
  body: Activity,
  dentistry: Smile,
};

type FeaturedServicesSectionProps = {
  t: (key: string, vars?: any) => string;
  tServices: (key: string) => string;
};

export const FeaturedServicesSection = React.memo(function FeaturedServicesSection({ t, tServices }: FeaturedServicesSectionProps) {
  
  const featuredServiceCategories = serviceData.filter((c) =>
    ['face', 'body', 'dentistry'].includes(c.id)
  );

  return (
    <section className="container mx-auto px-4 pb-12">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
        {t('featuredServices.title')}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featuredServiceCategories.map((category, index) => {
          const Icon = iconMap[category.id as keyof typeof iconMap];
          const categoryTitle = tServices(`categories.${category.id}.title`);
          return (
            <Card
              key={category.id}
              className="flex flex-col text-center items-center p-8 shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out transform hover:-translate-y-2 rounded-xl border border-border/20 animate-fadeIn"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex-grow flex flex-col items-center">
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="font-headline text-2xl text-primary mb-3">{categoryTitle}</h3>
                
                <p className="text-card-foreground/80 mb-6 text-sm flex-grow">
                  {category.services.slice(0, 3).map(s => tServices(`items.${s.id}.name`)).join(', ')}...
                </p>
              </div>

              <Button asChild variant="outline" className="mt-auto w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-200" scroll={true}>
                <Link href={`/services#${category.id}`}>
                    {t('featuredServices.buttonExplore', { category: categoryTitle })}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          );
        })}
      </div>
    </section>
  );
});

FeaturedServicesSection.displayName = 'FeaturedServicesSection';
