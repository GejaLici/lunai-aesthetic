
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

const StatCard = ({ item, index }: { item: typeof statsData[0], index: number }) => {
  const t = useTranslations('HomePage.stats');
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
}

export const StatsSection = React.memo(function StatsSection() {
  const t = useTranslations('HomePage.stats');
  const firstRowStats = statsData.slice(0, 4);
  const secondRowStats = statsData.slice(4);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
        {t('title')}
      </h2>
      <div className="flex flex-col items-center gap-4 md:gap-6">
        {/* First Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl">
          {firstRowStats.map((item, index) => (
            <StatCard key={item.key} item={item} index={index} />
          ))}
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
          {secondRowStats.map((item, index) => (
            <StatCard key={item.key} item={item} index={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';
