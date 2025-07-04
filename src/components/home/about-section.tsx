'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from '@/hooks/use-translations';
import { Card } from '@/components/ui/card';

export const AboutSection = React.memo(function AboutSection() {
  const t = useTranslations('HomePage.about');

  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8 items-center">
          
          <div className="relative h-80 lg:h-[500px] w-full group animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <Image
              src="/images/about-us.jpeg"
              alt={t('imageAlt')}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="clinic interior"
              priority
            />
          </div>

          <div className="lg:-ml-24 relative z-10 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <Card className="p-8 lg:p-12 shadow-2xl bg-background">
                <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-6">{t('title')}</h2>
                <div className="text-lg text-foreground/80 space-y-4">
                    <p>{t('paragraph1')}</p>
                    <p>{t('paragraph2')}</p>
                </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';
