'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Cpu, Leaf, UsersRound } from 'lucide-react';

const whyChooseUsData = [
  { icon: UsersRound, key: "expertCare" },
  { icon: Cpu, key: "advancedTech" },
  { icon: Leaf, key: "naturalResults" },
];

type WhyChooseUsSectionProps = {
  t: (key: string) => string;
};

export const WhyChooseUsSection = React.memo(function WhyChooseUsSection({ t }: WhyChooseUsSectionProps) {
  return (
    <section className="container mx-auto px-4 pb-12">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
        {t('whyChooseUs.title')}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyChooseUsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.key} className="animate-fadeIn" style={{ animationDelay: `${0.2 * index}s` }}>
               <Card
                className="group relative flex h-full flex-col items-center p-8 text-center shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 rounded-xl border border-border/20 bg-card"
              >
                <div className="flex-grow flex flex-col items-center">
                  <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-3">{t(`whyChooseUs.${item.key}.title`)}</h3>
                  <p className="text-card-foreground/80 mb-6 text-sm flex-grow">
                    {t(`whyChooseUs.${item.key}.description`)}
                  </p>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-primary/95 p-6 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="mb-4 font-headline text-2xl">{t(`whyChooseUs.${item.key}.title`)}</h3>
                  <p className="text-sm">
                    {t(`whyChooseUs.${item.key}.moreInfo`)}
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = 'WhyChooseUsSection';
