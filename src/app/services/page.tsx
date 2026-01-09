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
  const { name: serviceName } = useServiceTranslation(service.id);
  
  const truncate = (text: string, length: number) => {
    if (!text || typeof text !== 'string') return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };
  
  let descriptionText = `Learn more about ${serviceName}`;
  
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
  const tCategories = useTranslations('services.categories');
  const tSubcategories = useTranslations('services.subcategories');

  if (!serviceData || serviceData.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>{t('unavailable')}</p>
      </div>
    );
  }

  const surgicalServices = (category: string) => serviceData.find(c => c.id === category)?.services.filter(s => s.serviceType === 'operation') || [];
  const nonSurgicalServices = (category: string) => serviceData.find(c => c.id === category)?.services.filter(s => s.serviceType === 'treatment') || [];

  const dentalSubcategories = ['aesthetics', 'prosthetics', 'orthodontics', 'therapy', 'surgery', 'pedodontics'];
  const dentistryServices = serviceData.find(c => c.id === 'dentistry')?.services || [];

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
              {tCategories(`${category.id}.title`)}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Facial Aesthetics */}
        <TabsContent value="face">
          <Tabs defaultValue="surgical" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="surgical">{tSubcategories('surgical')}</TabsTrigger>
              <TabsTrigger value="non-surgical">{tSubcategories('nonSurgical')}</TabsTrigger>
            </TabsList>
            <TabsContent value="surgical">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {surgicalServices('face').map(service => <ServiceCard key={service.id} service={service} />)}
              </div>
            </TabsContent>
            <TabsContent value="non-surgical">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nonSurgicalServices('face').map(service => <ServiceCard key={service.id} service={service} />)}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* Body Contouring */}
        <TabsContent value="body">
           <Tabs defaultValue="surgical" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="surgical">{tSubcategories('surgical')}</TabsTrigger>
              <TabsTrigger value="non-surgical">{tSubcategories('nonSurgical')}</TabsTrigger>
            </TabsList>
            <TabsContent value="surgical">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {surgicalServices('body').map(service => <ServiceCard key={service.id} service={service} />)}
              </div>
            </TabsContent>
            <TabsContent value="non-surgical">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nonSurgicalServices('body').map(service => <ServiceCard key={service.id} service={service} />)}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* Dentistry */}
        <TabsContent value="dentistry">
           <Tabs defaultValue="aesthetics" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto mb-8">
               {dentalSubcategories.map(sub => <TabsTrigger key={sub} value={sub}>{tSubcategories(sub)}</TabsTrigger>)}
            </TabsList>
            {dentalSubcategories.map(sub => (
              <TabsContent key={sub} value={sub}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dentistryServices.filter(s => s.dentalCategory === sub).map(service => <ServiceCard key={service.id} service={service} />)}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
}