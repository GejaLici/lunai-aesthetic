'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/use-translations';

export const HeroSection = React.memo(function HeroSection() {
  const t = useTranslations('HomePage');
  return (
    <div className="container mx-auto px-4 mt-8">
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center py-12 md:py-16 bg-neutral-900 rounded-lg shadow-xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover opacity-30"
          poster="https://placehold.co/1280x720.png"
        >
          {/* You may need to add this video file to the /public/videos/ directory */}
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-20 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-6 animate-fadeIn max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-200 mb-8 animate-fadeIn max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              <Link href="/services">{t('hero.buttonExplore')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-neutral-200 text-neutral-200 hover:bg-neutral-200 hover:text-primary w-full sm:w-auto">
              <Link href="/consultation">{t('hero.buttonConsult')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
});

HeroSection.displayName = 'HeroSection';
