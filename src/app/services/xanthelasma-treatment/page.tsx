'use client';

import { useServiceTranslation } from '@/hooks/use-translations';
import { ServicePageLayout } from '../service-page-layout';

const serviceId = 'xanthelasma-treatment';

interface ContentSection {
  heading: string;
  paragraphs: string[];
}

interface ServiceContent {
  content_sections: {
    [key: string]: ContentSection;
  };
}

export default function ServicePage() {
  const { name, description, meta_title, meta_description, meta_keywords } = useServiceTranslation(serviceId);
  const content = description as unknown as ServiceContent;

  return (
    <ServicePageLayout 
        serviceName={name} 
        serviceId={serviceId}
        metaTitle={meta_title}
        metaDescription={meta_description}
        metaKeywords={meta_keywords}
    >
      {content && content.content_sections ? (
        <div className="space-y-6">
          {Object.values(content.content_sections).map((section, index) => (
            <section key={index}>
              <h2 className="font-headline text-2xl text-primary" dangerouslySetInnerHTML={{ __html: section.heading }} />
              <div className="space-y-4">
                {section.paragraphs.map((p, pIndex) => (
                  <p key={pIndex} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <p>Content is loading or not available in the expected format.</p>
      )}
    </ServicePageLayout>
  );
}
