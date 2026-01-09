
'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from '@/hooks/use-translations';

export const ExperienceSection = React.memo(function ExperienceSection() {
  const t = useTranslations('HomePage');
  return (
    <section className="container mx-auto px-4 pb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        {t('experience.title')}
      </h2>
      <div className="text-center mb-10 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <p className="text-lg text-foreground/80">
          {t('experience.description')}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl animate-fadeIn group" style={{ animationDelay: '0.3s' }}>
          <Image
            src="https://picsum.photos/seed/experience1/800/600"
            alt={t('experience.image1Alt')}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="clinic reception"
          />
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl animate-fadeIn group" style={{ animationDelay: '0.5s' }}>
          <Image
            src="https://picsum.photos/seed/experience2/800/600"
            alt={t('experience.image2Alt')}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="treatment room"
          />
        </div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = 'ExperienceSection';
