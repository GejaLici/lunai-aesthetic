'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
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
    <section className="container mx-auto px-4 pb-12">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        {t('whyChooseUs.title')}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {whyChooseUsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.key} className="animate-fadeIn" style={{ animationDelay: `${0.2 * index}s` }}>
               <Card
                className="group flex flex-col p-8 text-center shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl rounded-xl border border-border/20 bg-card"
              >
                <div className="flex-grow">
                    <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-headline text-2xl text-primary mb-3">{t(`whyChooseUs.${item.key}.title`)}</h3>
                    <p className="text-card-foreground/90">
                        {t(`whyChooseUs.${item.key}.description`)}
                    </p>
                </div>
                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[1000px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <div className="mt-6 pt-4 border-t border-border/40 w-full">
                        <p className="text-sm text-muted-foreground">
                            {t(`whyChooseUs.${item.key}.moreInfo`)}
                        </p>
                    </div>
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
