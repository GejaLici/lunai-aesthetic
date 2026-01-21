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

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = allServices.find(s => s.id === slug);
  const { name, meta_title, meta_description, meta_keywords } = useServiceTranslation(slug);

  if (!service) {
    notFound();
  }

  return (
    <ServicePageLayout 
        serviceId={slug}
        serviceName={name} 
        metaTitle={meta_title}
        metaDescription={meta_description}
        metaKeywords={meta_keywords}
    />
  );
}

export function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.id,
  }));
}
