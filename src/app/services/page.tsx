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
import { ArrowRight, Stethoscope, Activity, Smile } from 'lucide-react';
import Image from 'next/image';
import {
  useTranslations,
  useServiceTranslation,
} from '@/hooks/use-translations';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// This is the old component, kept for the dentistry tab
function ServiceCard({ service }: { service: ServiceItem }) {
  const t = useTranslations('ServicesPage');
  const { name: serviceName, meta_description } = useServiceTranslation(service.id);

  return (
    <Card className="flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] bg-card group border border-transparent hover:border-primary/30">
      <div className="relative w-full h-60 rounded-t-lg overflow-hidden">
        <Image
          src={service.imageAfter}
          alt={t('imageAlt', { serviceName })}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={service.dataAiHint}
        />
      </div>
      <CardHeader className="p-6 pb-2">
        <CardTitle className="font-headline text-xl text-primary h-14 flex items-start">
          {serviceName}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-4 flex-grow">
        <p className="text-foreground/80 text-sm h-28 overflow-hidden">
          {meta_description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
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

// Standalone ServiceLink component to comply with Rules of Hooks
const ServiceLink = ({
  service,
  isActive,
  onMouseEnter,
}: {
  service: ServiceItem;
  isActive: boolean;
  onMouseEnter: (service: ServiceItem) => void;
}) => {
  const { name, casualName } = useServiceTranslation(service.id);
  return (
    <Link
      href={`/services/${service.id}`}
      onMouseEnter={() => onMouseEnter(service)}
      className={cn(
        'block p-4 rounded-md transition-all duration-200 text-left border-l-4 text-lg',
        isActive
          ? 'bg-primary/10 text-primary font-bold border-primary'
          : 'text-foreground/70 hover:bg-secondary/70 hover:text-foreground border-transparent hover:border-accent'
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="flex-grow">{name} {casualName && <span className="text-sm text-muted-foreground">({casualName})</span>}</span>
        <div className="w-6 shrink-0" /> {/* Icon placeholder */}
      </div>
    </Link>
  );
};


// New interactive component for Face and Body categories
const InteractiveCategoryView = ({ services }: { services: ServiceItem[] }) => {
    const tSubcategories = useTranslations('services.subcategories');
    const tServicesPage = useTranslations('ServicesPage');
    const [activeService, setActiveService] = useState<ServiceItem | null>(null);

    useEffect(() => {
        if (services.length > 0 && !activeService) {
            setActiveService(services[0]);
        }
    }, [services, activeService]);
    
    // Call hook at the top level
    const { name: activeServiceName, casualName: activeServiceCasualName } = useServiceTranslation(activeService?.id || '');

    const surgicalServices = services.filter(s => s.serviceType === 'operation');
    const nonSurgicalServices = services.filter(s => s.serviceType === 'treatment');

    return (
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
                {surgicalServices.length > 0 && (
                     <div>
                        <h3 className="text-sm font-semibold mb-3 font-headline text-muted-foreground tracking-wider uppercase">{tSubcategories('surgical')}</h3>
                        <div className="space-y-1">
                            {surgicalServices.map(service => (
                                <ServiceLink 
                                    key={service.id} 
                                    service={service} 
                                    isActive={activeService?.id === service.id}
                                    onMouseEnter={setActiveService}
                                />
                            ))}
                        </div>
                     </div>
                )}
                 {nonSurgicalServices.length > 0 && (
                     <div>
                        <h3 className="text-sm font-semibold mb-3 font-headline text-muted-foreground tracking-wider uppercase">{tSubcategories('nonSurgical')}</h3>
                         <div className="space-y-1">
                            {nonSurgicalServices.map(service => (
                                <ServiceLink 
                                    key={service.id} 
                                    service={service} 
                                    isActive={activeService?.id === service.id}
                                    onMouseEnter={setActiveService}
                                />
                            ))}
                        </div>
                     </div>
                )}
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl lg:sticky lg:top-24 lg:col-span-3">
                {activeService && (
                    <>
                        <Image
                            key={activeService.id} // Force re-render for animation
                            src={activeService.imageAfter}
                            alt={activeServiceName}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover animate-fade-in"
                            data-ai-hint={activeService.dataAiHint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                         <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-2xl font-bold font-headline">{activeServiceName} {activeServiceCasualName && <span className="text-lg font-normal text-white/80">({activeServiceCasualName})</span>}</h3>
                            <Button asChild variant="secondary" size="sm" className="mt-2">
                                <Link href={`/services/${activeService.id}`}>
                                    {tServicesPage('learnMore')} <ArrowRight className="ml-2 h-4 w-4"/>
                                </Link>
                            </Button>
                         </div>
                    </>
                )}
                 {!activeService && (
                    <div className="bg-muted w-full h-full animate-pulse" />
                )}
            </div>
        </div>
    )
}

function CategoryContent({ category }: { category: ServiceCategory }) {
  const tSubcategories = useTranslations('services.subcategories');

  // Use new interactive view for face and body
  if (category.id === 'face' || category.id === 'body') {
    return <InteractiveCategoryView services={category.services} />;
  }
  
  // Keep old grid view for dentistry
  if (category.id === 'dentistry') {
    const dentalSubcategories = [
      'aesthetics', 'prosthetics', 'orthodontics', 
      'therapy', 'surgery', 'pedodontics'
    ];
    
    return (
      <div className="space-y-12">
        {dentalSubcategories.map(sub => {
          const services = category.services.filter(s => s.dentalCategory === sub);
          if (services.length === 0) return null;
          
          return (
            <div key={sub}>
               <div className="relative my-12">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-background px-4 text-2xl font-semibold text-muted-foreground">{tSubcategories(sub)}</span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(service => <ServiceCard key={service.id} service={service} />)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  // Fallback for any other category type
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.services.map(service => <ServiceCard key={service.id} service={service} />)}
    </div>
  )
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
  const ActiveIcon = activeCategory?.icon || Stethoscope;

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center pt-8 pb-12">
        <ActiveIcon className="h-16 w-16 text-accent mx-auto mb-4 transition-all" />
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
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-12 gap-2">
          {serviceData.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="py-4 text-lg font-medium rounded-lg text-muted-foreground transition-all hover:bg-muted/50 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-inner"
            >
              {tCategories(`${category.id}.title`)}
            </TabsTrigger>
          ))}
        </TabsList>

        {serviceData.map((category) => (
            <TabsContent key={category.id} value={category.id} className="min-h-[500px]">
                <CategoryContent category={category} />
            </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
