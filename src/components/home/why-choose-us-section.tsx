'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Leaf, UsersRound } from 'lucide-react';

const whyChooseUsData = [
  { icon: UsersRound, key: "expertCare" },
  { icon: Cpu, key: "advancedTech" },
  { icon: Leaf, key: "naturalResults" },
];

type WhyChooseUsSectionProps = {
  t: (key: string) => string;
};

export function WhyChooseUsSection({ t }: WhyChooseUsSectionProps) {
  return (
    <section className="container mx-auto px-4 pb-12">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
        {t('whyChooseUs.title')}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyChooseUsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card group animate-fadeIn" style={{ animationDelay: `${0.2 * index}s` }}>
              <CardHeader className="items-center text-center">
                <Icon className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-headline text-2xl text-card-foreground">{t(`whyChooseUs.${item.key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-card-foreground/80">
                  {t(`whyChooseUs.${item.key}.description`)}
                </p>
                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-4">
                  <p className="text-card-foreground/70 text-sm">
                    {t(`whyChooseUs.${item.key}.moreInfo`)}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
