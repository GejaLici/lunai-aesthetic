"use client";

import { allServices } from '@/lib/services';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GalleryHorizontal } from 'lucide-react';
import { useTranslations } from '@/hooks/use-translations';

export default function GalleryPage() {
  const t = useTranslations('GalleryPage');
  const tServices = useTranslations('services');

  if (!allServices || allServices.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <GalleryHorizontal className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">{t('title')}</h1>
        <p className="text-xl text-foreground/80 mt-4">
          {t('emptyState')}
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-8">
        <GalleryHorizontal className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">{t('title')}</h1>
        <p className="text-xl text-foreground/80 mt-4">
          {t('subtitle')}
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service) => {
          const serviceName = tServices(`items.${service.id}.name`);
          const serviceDescription = tServices(`items.${service.id}.description`);
          const descriptionText = Array.isArray(serviceDescription) ? serviceDescription[0] : serviceDescription;


          return (
            <Card key={service.id} id={service.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
              <CardHeader className="p-0">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square">
                    <Image src={service.imageBefore} alt={t('beforeImageAlt', { serviceName })} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 17vw" className="object-cover" data-ai-hint={`${service.dataAiHint} before`} />
                    <div className="absolute bottom-0 left-0 bg-black/50 text-white text-xs px-2 py-1">{t('before')}</div>
                  </div>
                  <div className="relative aspect-square">
                    <Image src={service.imageAfter} alt={t('afterImageAlt', { serviceName })} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 17vw" className="object-cover" data-ai-hint={`${service.dataAiHint} after`} />
                    <div className="absolute bottom-0 right-0 bg-black/50 text-white text-xs px-2 py-1">{t('after')}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-headline text-primary">{serviceName}</CardTitle>
                <CardDescription className="text-sm mt-1">{descriptionText}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
