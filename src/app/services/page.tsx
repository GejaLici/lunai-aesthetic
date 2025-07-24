
      

"use client";

import { serviceData, ServiceItem } from '@/lib/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import { useTranslations, useServiceTranslation } from '@/hooks/use-translations';

function ServiceCard({ service }: { service: ServiceItem }) {
  const t = useTranslations('ServicesPage');
  const { name: serviceName, description: serviceDescription } = useServiceTranslation(service.id);
  
  const truncate = (text: string, length: number) => {
    if (!text || typeof text !== 'string') return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };
  
  let descriptionText = '';
  if (typeof serviceDescription === 'object' && serviceDescription !== null && 'what_is' in serviceDescription) {
    const firstSection = serviceDescription.what_is;
    if (firstSection && Array.isArray(firstSection.paragraphs) && firstSection.paragraphs.length > 0) {
      descriptionText = firstSection.paragraphs[0].replace(/<[^>]*>?/gm, '');
    }
  } else if (typeof serviceDescription === 'string') {
    descriptionText = serviceDescription;
  }


  return (
    <Card className="flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] bg-card">
      <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
        <Image
          src={service.imageAfter}
          alt={t('imageAlt', { serviceName })}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          data-ai-hint={service.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">{serviceName}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground/90">
          {truncate(descriptionText, 120)}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          <Link href={`/services/${service.id}`}>
            {t('learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const tServices = useTranslations('services');

  if (!serviceData || serviceData.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>{t('unavailable')}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-8">
        <Stethoscope className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">{t('title')}</h1>
        <p className="text-xl text-foreground/80 mt-4">
          {t('subtitle')}
        </p>
      </section>

      <Tabs defaultValue={serviceData[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-12 mb-8">
          {serviceData.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="py-2.5 text-base">
              {tServices(`categories.${category.id}.title`)}
            </TabsTrigger>
          ))}
        </TabsList>

        {serviceData.map((category) => (
          <TabsContent key={category.id} value={category.id} id={category.id}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

    