
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Leaf, UsersRound } from 'lucide-react';
import { useTranslations } from '@/hooks/use-translations';

const whyChooseUsData = [
  { icon: UsersRound, key: "expertCare" },
  { icon: Cpu, key: "advancedTech" },
  { icon: Leaf, key: "naturalResults" },
];

export const WhyChooseUsSection = React.memo(function WhyChooseUsSection() {
  const t = useTranslations('HomePage');
  return (
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          {t('whyChooseUs.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={item.key} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card animate-fadeIn" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <CardHeader className="p-0 mb-4">
                  <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-primary">{t(`whyChooseUs.${item.key}.title`)}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-card-foreground/90 mb-4">
                    {t(`whyChooseUs.${item.key}.description`)}
                  </p>
                  <p className="text-card-foreground/70 text-sm">
                    {t(`whyChooseUs.${item.key}.moreInfo`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = 'WhyChooseUsSection';
