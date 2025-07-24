'use client';

import { useServiceTranslation } from '@/hooks/use-translations';
import { ServicePageLayout } from '../service-page-layout';
import type { Metadata } from 'next';

const serviceId = 'chin-reshaping';

export async function generateMetadata(): Promise<Metadata> {
  // While this is a client component, metadata can be generated here.
  // However, the hook `useServiceTranslation` cannot be used in a server-side metadata function.
  // For simplicity, we will rely on the Head component in the layout for dynamic SEO.
  return {};
}

interface ContentSection {
  heading: string;
  paragraphs: string[];
}

interface ServiceContent {
  [key: string]: ContentSection;
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
      {content ? (
        <div className="space-y-6">
          {Object.values(content).map((section, index) => (
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
