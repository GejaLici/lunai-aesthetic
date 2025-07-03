'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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

export function FeaturedServicesSection({ t, tServices }: FeaturedServicesSectionProps) {
  
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
          return (
            <Card
              key={category.id}
              className="flex flex-col bg-card shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-out transform hover:-translate-y-2 rounded-xl overflow-hidden border border-transparent hover:border-accent animate-fadeIn"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <CardHeader className="p-6 items-center text-center">
                {Icon && <Icon className="h-16 w-16 text-accent mb-6" />}
                <CardTitle className="font-headline text-2xl text-card-foreground text-center">{tServices(`categories.${category.id}.title`)}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                <CardDescription className="text-card-foreground/80 mb-6 text-sm text-center flex-grow">
                  {category.services.slice(0, 2).map(s => tServices(`items.${s.id}.name`)).join(', ')} {t('featuredServices.andMore')}
                </CardDescription>
                <Button asChild variant="outline" className="mt-auto w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-200" scroll={true}>
                  <Link href={`/services#${category.id}`}>{t('featuredServices.buttonExplore', { category: tServices(`categories.${category.id}.title`) })} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
