
'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from '@/hooks/use-translations';

export const AboutSection = React.memo(function AboutSection() {
  const t = useTranslations('HomePage.about');

  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-80 lg:h-[500px] w-full rounded-lg shadow-xl overflow-hidden group order-last lg:order-first">
            <Image
              src="/images/about-us.jpeg"
              alt={t('imageAlt')}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="clinic interior"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary">{t('title')}</h2>
            <div className="text-lg text-foreground/80 space-y-4">
                <p>{t('paragraph1')}</p>
                <p>{t('paragraph2')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';
