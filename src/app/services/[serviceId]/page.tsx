"use client";

import { allServices, ServiceItem } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useTranslations } from '@/hooks/use-translations';

type ServiceDetailPageProps = {
  params: {
    serviceId: string;
  };
};

const getService = (id: string): ServiceItem | undefined => {
  return allServices.find((service) => service.id === id);
};

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const t = useTranslations('ServiceDetailsPage');
  const tServices = useTranslations('services');

  const service = getService(params.serviceId);

  if (!service) {
    notFound();
  }

  const serviceName = tServices(`items.${service.id}.name`);
  const serviceDescription = tServices(`items.${service.id}.description`);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backButton')}
          </Link>
        </Button>
      </div>

      <Card className="shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
           <div className="p-6 md:p-8 flex flex-col">
            <CardHeader className="p-0 mb-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{service.serviceType === 'operation' ? t('surgicalProcedure') : t('nonSurgicalTreatment')}</p>
              <CardTitle className="font-headline text-4xl text-primary mt-1">{serviceName}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <div className="space-y-4 text-lg text-foreground/90">
                {Array.isArray(serviceDescription) ? (
                  serviceDescription.map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p>{serviceDescription}</p>
                )}
              </div>
            </CardContent>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/contact">{t('bookConsultation')}</Link>
                </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 md:p-6 bg-secondary/30">
              <div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2 text-center">{t('before')}</h3>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-card">
                   <Image
                      src={service.imageBefore}
                      alt={t('beforeImageAlt', { serviceName })}
                      fill
                      className="object-cover"
                      data-ai-hint={`${service.dataAiHint} before`}
                    />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2 text-center">{t('after')}</h3>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-card">
                    <Image
                      src={service.imageAfter}
                      alt={t('afterImageAlt', { serviceName })}
                      fill
                      className="object-cover"
                      data-ai-hint={`${service.dataAiHint} after`}
                    />
                </div>
              </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
