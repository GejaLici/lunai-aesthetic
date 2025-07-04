'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/use-translations';

export const CtaSection = React.memo(function CtaSection() {
  const t = useTranslations('HomePage');
  return (
    <section className="py-16 bg-primary text-primary-foreground rounded-lg shadow-xl animate-fadeIn">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-headline font-bold mb-6">{t('cta.title')}</h2>
        <p className="text-xl mb-8">
          {t('cta.description')}
        </p>
        <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90 hover:text-primary">
          <Link href="/consultation">{t('cta.button')}</Link>
        </Button>
      </div>
    </section>
  );
});

CtaSection.displayName = 'CtaSection';
