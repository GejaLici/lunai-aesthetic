
'use client';

import { ReactNode } from 'react';
import { allServices } from '@/lib/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from '@/hooks/use-translations';
import { Badge } from '@/components/ui/badge';
import Head from 'next/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


type ServicePageLayoutProps = {
  serviceName: string;
  serviceId: string;
  contentSections: { [key: string]: { heading?: string; paragraphs: string[] } };
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
};

export function ServicePageLayout({ serviceName, serviceId, contentSections, metaTitle, metaDescription, metaKeywords }: ServicePageLayoutProps) {
  const t = useTranslations('ServiceDetailsPage');
  
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
    return Object.values(contentSections).map((section, index) => (
        <div key={index} className="mb-8">
            {section.heading && <h2 className="text-2xl font-bold font-headline text-primary mb-4" dangerouslySetInnerHTML={{ __html: section.heading }}></h2>}
            {section.paragraphs.map((p, pIndex) => (
                <p key={pIndex} className="mb-4 text-foreground/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: p }}></p>
            ))}
        </div>
    ));
  }
  
  return (
    <>
    <Head>
        <title>{metaTitle || serviceName}</title>
        <meta name="description" content={metaDescription || `Learn more about ${serviceName} at LUNAI.`} />
        {metaKeywords && <meta name="keywords" content={metaKeywords} />}
    </Head>
    <div className="container mx-auto px-4 py-8 max-w-6xl">
       <div className="mb-8">
         <Button asChild variant="ghost" className="mb-4 text-muted-foreground hover:text-primary">
            <Link href="/services">
                <MoveLeft className="mr-2 h-4 w-4" />
                {t('backButton')}
            </Link>
         </Button>
         <Badge variant={isSurgical ? 'destructive' : 'secondary'} className="mb-2 text-sm py-1 px-3">
            {isSurgical ? t('surgicalProcedure') : t('nonSurgicalTreatment')}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mt-2" dangerouslySetInnerHTML={{ __html: serviceName }}>
        </h1>
      </div>
      
      <div className="grid lg:grid-cols-5 gap-12">
        <main className="lg:col-span-3">
            <Card className="shadow-lg">
                <CardContent className="p-8">
                     {renderContent()}
                </CardContent>
            </Card>
        </main>

        <aside className="lg:col-span-2 space-y-8">
           <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Results</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-square rounded-lg overflow-hidden group">
                        <Image src={service.imageBefore} alt={t('beforeImageAlt', { serviceName })} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={`${service.dataAiHint} before`} />
                        <div className="absolute bottom-0 w-full text-center bg-black/60 text-white text-xs py-1 font-semibold">{t('before')}</div>
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden group">
                        <Image src={service.imageAfter} alt={t('afterImageAlt', { serviceName })} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={`${service.dataAiHint} after`} />
                        <div className="absolute bottom-0 w-full text-center bg-black/60 text-white text-xs py-1 font-semibold">{t('after')}</div>
                    </div>
                </CardContent>
           </Card>
           <Card className="shadow-lg bg-secondary/50 text-center p-6">
                <CardTitle className="text-xl mb-4">Ready for Your Transformation?</CardTitle>
                 <Button asChild size="lg" className="w-full">
                    <Link href="/consultation">{t('bookConsultation')}</Link>
                </Button>
           </Card>
        </aside>
      </div>
    </div>
    </>
  );
}
