'use client';

import { ServicePageLayout } from '../service-page-layout';
import { useServiceTranslation } from '@/hooks/use-translations';

const serviceId = 'sclerotherapy';

export default function ServicePage() {
  const { name, description } = useServiceTranslation(serviceId);

  return (
    <ServicePageLayout serviceName={name} serviceId={serviceId}>
      <section>
        {Array.isArray(description) ? 
            description.map((p: string, i: number) => <p key={i}>{p}</p>) : 
            <p>{description}</p>
        }
      </section>
    </ServicePageLayout>
  );
}
