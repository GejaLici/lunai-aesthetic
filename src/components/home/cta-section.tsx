
'use client';

import React from 'react';
import { useTranslations } from '@/hooks/use-translations';
import { ConsultationForm } from '@/app/consultation/consultation-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const CtaSection = React.memo(function CtaSection() {
  const t = useTranslations('HomePage');
  const tConsultation = useTranslations('ConsultationPage');

  return (
    <section className="py-16 bg-primary text-primary-foreground rounded-lg shadow-xl animate-fadeIn">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-headline font-bold mb-4">{t('cta.title')}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {t('cta.description')}
        </p>
        
        <div className="max-w-2xl mx-auto text-left">
            <Card className="shadow-lg bg-background text-foreground">
                <CardHeader>
                    <CardTitle>{tConsultation('formCard.title')}</CardTitle>
                    <CardDescription>
                        {tConsultation('formCard.description')}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ConsultationForm />
                </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
});

CtaSection.displayName = 'CtaSection';
