
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { allServices, type ServiceItem } from '@/lib/services';
import { useTranslations, useServiceTranslation } from '@/hooks/use-translations';

const TransformationCard = ({ service, index }: { service: ServiceItem; index: number }) => {
  const t = useTranslations('HomePage');
  const { name: serviceName } = useServiceTranslation(service.id);

  return (
    <Card
      className="relative flex flex-col h-96 bg-card shadow-lg rounded-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-primary/20 animate-fadeIn"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <Image
        src={service.imageAfter}
        alt={t('transformations.imageAlt', { treatment: serviceName })}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        data-ai-hint={`${service.dataAiHint} after`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative mt-auto p-4 z-10">
        <h3 className="text-lg font-headline text-white mb-1">{serviceName}</h3>
        <Button
          asChild
          variant="link"
          className="text-white p-0 hover:text-white/80 font-semibold text-sm"
        >
          <Link href={`/gallery#${service.id}`}>
            {t('transformations.viewResult')} <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export const TransformationsSection = React.memo(function TransformationsSection() {
  const t = useTranslations('HomePage');
  const transformations = (allServices || []).slice(0, 6);

  return (
    <section className="container mx-auto px-4 pb-12">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold mb-12 text-primary">
          {t('transformations.title')}
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {transformations.map((service, index) => (
            <TransformationCard key={service.id} service={service} index={index} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/gallery">{t('transformations.buttonAll')}</Link>
        </Button>
      </div>
    </section>
  );
});

TransformationsSection.displayName = 'TransformationsSection';
