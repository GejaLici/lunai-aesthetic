'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type AboutSectionProps = {
  t: (key: string) => string;
};

export const AboutSection = React.memo(function AboutSection({ t }: AboutSectionProps) {
  return (
    <section className="container mx-auto px-4 pb-12">
      <Card className="shadow-lg overflow-hidden bg-card">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-6 md:p-8">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-3xl font-headline text-primary">{t('about.title')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-lg text-card-foreground/90 space-y-4">
              <p>
                {t('about.paragraph1')}
              </p>
              <p>
                {t('about.paragraph2')}
              </p>
            </CardContent>
          </div>
          <div className="relative h-64 md:h-full w-full min-h-[300px] md:min-h-full transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/about-us.png"
              alt={t('about.imageAlt')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              data-ai-hint="clinic interior"
            />
          </div>
        </div>
      </Card>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';
