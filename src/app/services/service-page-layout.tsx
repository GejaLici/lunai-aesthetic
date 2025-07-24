
'use client';

import { ReactNode } from 'react';
import { allServices, ServiceItem } from '@/lib/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from '@/hooks/use-translations';
import { Badge } from '@/components/ui/badge';
import Head from 'next/head';


type ServicePageLayoutProps = {
  serviceName: string;
  serviceId: string;
  children: ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
};

export function ServicePageLayout({ serviceName, serviceId, children, metaTitle, metaDescription, metaKeywords }: ServicePageLayoutProps) {
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
  
  return (
    <>
    {/* Although Next.js 13+ uses the Metadata API, placing meta tags here can be a fallback and is useful for client-side updates if needed. */}
    <Head>
        <title>{metaTitle || serviceName}</title>
        <meta name="description" content={metaDescription || `Learn more about ${serviceName} at LUNAI.`} />
        {metaKeywords && <meta name="keywords" content={metaKeywords} />}
    </Head>
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="mb-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/services">
            <MoveLeft className="mr-2 h-4 w-4" />
            {t('backButton')}
          </Link>
        </Button>
        <Badge variant={isSurgical ? 'destructive' : 'secondary'} className="mb-2">
            {isSurgical ? t('surgicalProcedure') : t('nonSurgicalTreatment')}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary" dangerouslySetInnerHTML={{ __html: serviceName }}>
        </h1>
      </header>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2 prose prose-lg dark:prose-invert max-w-none">
          {children}
        </main>

        <aside className="lg:col-span-1 space-y-6">
           <div className="grid grid-cols-1 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image src={service.imageBefore} alt={t('beforeImageAlt', { serviceName })} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" data-ai-hint={`${service.dataAiHint} before`} />
                <div className="absolute bottom-0 left-0 bg-black/50 text-white text-xs px-2 py-1">{t('before')}</div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image src={service.imageAfter} alt={t('afterImageAlt', { serviceName })} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" data-ai-hint={`${service.dataAiHint} after`} />
                 <div className="absolute bottom-0 right-0 bg-black/50 text-white text-xs px-2 py-1">{t('after')}</div>
              </div>
            </div>
            <Button asChild size="lg" className="w-full">
              <Link href="/consultation">{t('bookConsultation')}</Link>
            </Button>
        </aside>
      </div>
    </div>
    </>
  );
}

