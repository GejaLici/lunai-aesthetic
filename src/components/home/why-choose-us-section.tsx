'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
              <Accordion type="single" collapsible className="w-full bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <AccordionItem value={item.key} className="border-b-0">
                  <AccordionTrigger className="hover:no-underline p-6 text-left [&[data-state=open]>div>svg]:rotate-12 [&[data-state=open]>div>h3]:text-accent">
                    <div className="flex flex-col items-center text-center w-full gap-4">
                      <Icon className="h-12 w-12 text-accent transition-transform duration-300" />
                      <h3 className="font-headline text-2xl text-card-foreground transition-colors">{t(`whyChooseUs.${item.key}.title`)}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-center">
                    <p className="text-card-foreground/80 mb-4">
                      {t(`whyChooseUs.${item.key}.description`)}
                    </p>
                    <p className="text-card-foreground/70 text-sm">
                      {t(`whyChooseUs.${item.key}.moreInfo`)}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = 'WhyChooseUsSection';
