'use client';

import {
  serviceData,
  ServiceItem,
  ServiceCategory,
} from '@/lib/services';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import {
  useTranslations,
  useServiceTranslation,
} from '@/hooks/use-translations';
import { Badge } from '@/components/ui/badge';
import React from 'react';

function ServiceCard({ service }: { service: ServiceItem }) {
  const t = useTranslations('ServicesPage');
  const tDetails = useTranslations('ServiceDetailsPage');
  const { name: serviceName } = useServiceTranslation(service.id);

  const isSurgical = service.serviceType === 'operation';

  return (
    <Card className="flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] bg-card group">
      <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
        <Image
          src={service.imageAfter}
          alt={t('imageAlt', { serviceName })}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={service.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary h-12 flex items-center">
          {serviceName}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/90 text-sm h-10">
          {t('learnMore')} about {serviceName}.
        </p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="outline"
          className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
        >
          <Link href={`/services/${service.id}`}>
            {t('learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function CategorySection({ category }: { category: ServiceCategory }) {
  const tSubcategories = useTranslations('services.subcategories');
  const surgicalServices = category.services.filter(
    (s) => s.serviceType === 'operation'
  );
  const nonSurgicalServices = category.services.filter(
    (s) => s.serviceType === 'treatment'
  );

  return (
    <Tabs defaultValue="surgical" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="surgical">
          {tSubcategories('surgical')} ({surgicalServices.length})
        </TabsTrigger>
        <TabsTrigger value="non-surgical">
          {tSubcategories('nonSurgical')} ({nonSurgicalServices.length})
        </TabsTrigger>
      </TabsList>
      <TabsContent value="surgical">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {surgicalServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="non-surgical">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonSurgicalServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

function DentistrySection({ category }: { category: ServiceCategory }) {
  const tSubcategories = useTranslations('services.subcategories');
  const dentalSubcategories = [
    'aesthetics',
    'prosthetics',
    'orthodontics',
    'therapy',
    'surgery',
    'pedodontics',
  ];

  return (
    <Tabs defaultValue="aesthetics" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto mb-8">
        {dentalSubcategories.map((sub) => (
          <TabsTrigger key={sub} value={sub}>
            {tSubcategories(sub)}
          </TabsTrigger>
        ))}
      </TabsList>
      {dentalSubcategories.map((sub) => (
        <TabsContent key={sub} value={sub}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.services
              .filter((s) => s.dentalCategory === sub)
              .map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const tCategories = useTranslations('services.categories');
  const [activeTab, setActiveTab] = React.useState(serviceData[0].id);

  if (!serviceData || serviceData.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>{t('unavailable')}</p>
      </div>
    );
  }

  const activeCategory = serviceData.find(c => c.id === activeTab);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center pt-8 pb-12">
        <Stethoscope className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">
          {t('title')}
        </h1>
        <p className="text-xl text-foreground/80 mt-4 max-w-3xl mx-auto">
          {tCategories(`${activeTab}.title`)}
        </p>
      </section>

      <Tabs
        defaultValue={serviceData[0].id}
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-16 mb-12 bg-secondary p-2 rounded-xl">
          {serviceData.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="py-3 text-lg rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md data-[state=active]:text-primary"
            >
              {tCategories(`${category.id}.title`)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="face">
          <CategorySection category={serviceData.find(c => c.id === 'face')!} />
        </TabsContent>

        <TabsContent value="body">
          <CategorySection category={serviceData.find(c => c.id === 'body')!} />
        </TabsContent>

        <TabsContent value="dentistry">
          <DentistrySection category={serviceData.find(c => c.id === 'dentistry')!} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
