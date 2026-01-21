'use client';

import React, { useEffect, useState } from 'react';
import { allServices } from '@/lib/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveLeft, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useTranslations, useLocale } from '@/hooks/use-translations';
import { Badge } from '@/components/ui/badge';
import Head from 'next/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useContactPopup } from '@/app/providers';

type ServicePageLayoutProps = {
  serviceName: string;
  serviceId: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
};

export function ServicePageLayout({ serviceName, serviceId, metaTitle, metaDescription, metaKeywords }: ServicePageLayoutProps) {
  const t = useTranslations('ServiceDetailsPage');
  const { openContactPopup } = useContactPopup();
  const { locale } = useLocale();

  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const service = allServices.find(s => s.id === serviceId);

  useEffect(() => {
    if (serviceId && locale) {
      setIsLoading(true);
      fetch(`/api/service-content/${locale}/${serviceId}`)
        .then(res => {
          if (!res.ok) {
            throw new Error(`Content not found for service ${serviceId} in locale ${locale}`);
          }
          return res.text();
        })
        .then(data => {
          setHtmlContent(data);
        })
        .catch(err => {
          console.error(err);
          setHtmlContent('<p>Content for this service is not available yet. Please check back later.</p>');
        })
        .finally(() => setIsLoading(false));
    }
  }, [serviceId, locale]);

  if (!service) {
    return (
        <div className="container mx-auto px-4 py-8">
            <p>Service not found.</p>
        </div>
    );
  }

  const isSurgical = service.serviceType === 'operation';
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center space-x-2">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Loading content...</span>
        </div>
      );
    }
    if (!htmlContent) {
        return <p>Content for this service is not available yet. Please check back later.</p>
    }
    // The prose styles will be applied to the rendered HTML from the API
    return <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  }
  
  return (
    <>
    <Head>
        <title>{metaTitle || serviceName}</title>
        <meta name="description" content={metaDescription || `Learn more about ${serviceName} at LUNAI.`} />
        {metaKeywords && <meta name="keywords" content={metaKeywords} />}
    </Head>
    <article>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-center text-white overflow-hidden">
             <div className="absolute inset-0 z-0">
                <Image
                    src={service.imageAfter}
                    alt={t('afterImageAlt', { serviceName })}
                    fill
                    className="object-cover"
                    data-ai-hint={`${service.dataAiHint} after`}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="ghost" className="mb-4 text-white/80 hover:text-white hover:bg-white/10 absolute top-8 left-4 md:left-8">
                        <Link href="/services">
                            <MoveLeft className="mr-2 h-4 w-4" />
                            {t('backButton')}
                        </Link>
                    </Button>
                    <Badge variant={isSurgical ? 'destructive' : 'secondary'} className="mb-4 text-sm py-1 px-3">
                        {isSurgical ? t('surgicalProcedure') : t('nonSurgicalTreatment')}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-headline font-bold" dangerouslySetInnerHTML={{ __html: serviceName }}></h1>
                </div>
            </div>
        </section>
        
        {/* Content Section */}
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-5 gap-12">
                    <main className="lg:col-span-3">
                        {renderContent()}
                    </main>

                    <aside className="lg:col-span-2 space-y-8 lg:sticky lg:top-24 h-max">
                        <Card className="shadow-xl border-border/20">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl text-primary">Witness the Transformation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ReactCompareSlider
                                    className="w-full aspect-square rounded-lg overflow-hidden border-2 border-border"
                                    itemOne={<ReactCompareSliderImage src={service.imageBefore} alt={t('beforeImageAlt', { serviceName })} />}
                                    itemTwo={<ReactCompareSliderImage src={service.imageAfter} alt={t('afterImageAlt', { serviceName })} />}
                                />
                            </CardContent>
                       </Card>
                       <Card className="shadow-xl bg-secondary/30 text-center p-6 border-border/10">
                            <CardTitle className="text-2xl mb-4 font-headline text-primary">Ready for Your Transformation?</CardTitle>
                             <Button size="lg" className="w-full text-lg py-6" onClick={() => openContactPopup(`Service: ${serviceName}`)}>
                                {t('bookConsultation')}
                            </Button>
                       </Card>
                    </aside>
                </div>
            </div>
        </section>
    </article>
    </>
  );
}
