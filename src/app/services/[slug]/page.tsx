
'use client';

import { useServiceTranslation } from '@/hooks/use-translations';
import { ServicePageLayout } from '../service-page-layout';
import { allServices } from '@/lib/services';
import { notFound } from 'next/navigation';

type ServicePageProps = {
  params: {
    slug: string;
  };
};

// This function generates static pages for all services at build time
export function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.id,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = allServices.find(s => s.id === slug);
  const { name, content, meta_title, meta_description, meta_keywords } = useServiceTranslation(slug);

  if (!service) {
    notFound();
  }

  return (
    <ServicePageLayout 
        serviceId={slug}
        serviceName={name} 
        content={content}
        metaTitle={meta_title}
        metaDescription={meta_description}
        metaKeywords={meta_keywords}
    />
  );
}
