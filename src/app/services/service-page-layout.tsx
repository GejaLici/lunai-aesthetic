'use client';

import React from 'react';
import { allServices } from '@/lib/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from '@/hooks/use-translations';
import { Badge } from '@/components/ui/badge';
import Head from 'next/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useContactPopup } from '@/app/providers';

type ServicePageLayoutProps = {
  serviceName: string;
  serviceId: string;
  contentSections: any; // Allow any since structure can vary
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
};

export function ServicePageLayout({ serviceName, serviceId, contentSections, metaTitle, metaDescription, metaKeywords }: ServicePageLayoutProps) {
  const t = useTranslations('ServiceDetailsPage');
  const { openContactPopup } = useContactPopup();
  
  const service = allServices.find(s => s.id === serviceId);

  if (!service) {
    return (
        <div className="container mx-auto px-4 py-8">
            <p>Service not found.</p>
        </div>
    );
  }

  const isSurgical = service.serviceType === 'operation';
  
  const renderContent = () => {
    if (!contentSections || Object.keys(contentSections).length === 0) {
        return <p>Content for this service is not available yet. Please check back later.</p>
    }

    return Object.entries(contentSections).map(([key, section]: [string, any], index: number) => {
        if (!section || (section.type && !['paragraph', 'list', 'heading'].includes(section.type))) {
            return Object.entries(section).map(([subKey, subSection]: [string, any]) => {
                if (!subSection || !subSection.type) return null;
                 switch (subSection.type) {
                    case 'heading':
                         return <h2 key={`${key}-${subKey}`} className="text-3xl font-bold font-headline text-primary mb-4 mt-6" dangerouslySetInnerHTML={{ __html: subSection.content }}></h2>;
                    case 'paragraph':
                        return <p key={`${key}-${subKey}`} className="mb-4 text-foreground/90 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: subSection.content }}></p>;
                    case 'list':
                         return (
                            <div key={`${key}-${subKey}`} className="mb-8">
                                {subSection.title && <h3 className="text-2xl font-bold font-headline text-primary mb-3" dangerouslySetInnerHTML={{ __html: subSection.title }}></h3>}
                                <ul className="list-disc list-inside space-y-2 text-lg">
                                    {subSection.items.map((item: string, i: number) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
                                    ))}
                                </ul>
                            </div>
                        );
                    default:
                        return null;
                }
            })
        }

        switch (section.type) {
            case 'heading':
                 return <h2 key={key} className="text-3xl font-bold font-headline text-primary mb-4" dangerouslySetInnerHTML={{ __html: section.content }}></h2>;
            case 'paragraph':
                return <p key={key} className="mb-4 text-foreground/90 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: section.content }}></p>;
            case 'list':
                 return (
                    <div key={key} className="mb-8">
                        {section.title && <h3 className="text-2xl font-bold font-headline text-primary mb-3" dangerouslySetInnerHTML={{ __html: section.title }}></h3>}
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            {section.items.map((item: string, i: number) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                 // Handle cases where the section itself doesn't have a 'type', but its children do.
                 if (typeof section === 'object' && section !== null) {
                     return Object.entries(section).map(([subKey, subSection]: [string, any]) => {
                         if (!subSection || !subSection.heading || !subSection.paragraphs) return null;
                         return (
                             <div key={subKey} className="mb-6">
                                 <h2 className="text-2xl font-bold font-headline text-primary mb-3" dangerouslySetInnerHTML={{ __html: subSection.heading }}></h2>
                                 {subSection.paragraphs.map((p: string, i: number) => (
                                      <p key={i} className="mb-4 text-foreground/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: p }}></p>
                                 ))}
                             </div>
                         )
                     })
                 }
                 return null;
        }
    });
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
                    <main className="lg:col-span-3 prose prose-lg dark:prose-invert max-w-none">
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
