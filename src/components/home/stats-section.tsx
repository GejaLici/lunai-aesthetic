
'use client';

import React from 'react';
import { useTranslations } from '@/hooks/use-translations';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Star, Stethoscope, Calendar, HeartHandshake, Smile, Award } from 'lucide-react';

const statsData = [
  { key: 'doctors', icon: Stethoscope },
  { key: 'patients', icon: Users },
  { key: 'reviews', icon: Star },
  { key: 'experience', icon: Calendar },
  { key: 'surgeries', icon: Award },
  { key: 'clients', icon: HeartHandshake },
  { key: 'treatments', icon: Smile },
];

export const StatsSection = React.memo(function StatsSection() {
  const t = useTranslations('HomePage.stats');

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
        {t('title')}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6">
        {statsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.key}
              className="text-center p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card animate-fadeIn"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                <Icon className="h-8 w-8 md:h-10 md:w-10 text-accent mb-3" />
                <p className="text-2xl md:text-3xl font-bold font-headline text-primary">{t(`${item.key}.value`)}</p>
                <p className="text-sm md:text-base text-muted-foreground mt-1">{t(`${item.key}.label`)}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';
