
'use client';

import { useServiceTranslation } from '@/hooks/use-translations';
import { ServicePageLayout } from '../service-page-layout';

const serviceId = 'breast-reduction';

export default function ServicePage() {
  const { name, content_sections, meta_title, meta_description, meta_keywords } = useServiceTranslation(serviceId);

  return (
    <ServicePageLayout 
        serviceName={name} 
        serviceId={serviceId}
        metaTitle={meta_title}
        metaDescription={meta_description}
        metaKeywords={meta_keywords}
        contentSections={content_sections}
    />
  );
}
