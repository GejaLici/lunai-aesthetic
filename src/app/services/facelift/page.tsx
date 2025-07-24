'use client';

import { ServicePageLayout } from '../service-page-layout';
import { useServiceTranslation } from '@/hooks/use-translations';

const serviceId = 'facelift';

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
  const { name, description } = useServiceTranslation(serviceId);
  const content = description as unknown as ServiceContent;

  return (
    <ServicePageLayout serviceName={name} serviceId={serviceId}>
      {content && content.content_sections ? (
        <div className="space-y-6">
          {Object.values(content.content_sections).map((section, index) => (
            <section key={index}>
              <h2 className="font-headline text-2xl text-primary" dangerouslySetInnerHTML={{ __html: section.heading }} />
              {section.paragraphs.map((p, pIndex) => (
                <p key={pIndex} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </section>
          ))}
        </div>
      ) : (
        <p>Content is loading or not available in the expected format.</p>
      )}
    </ServicePageLayout>
  );
}
