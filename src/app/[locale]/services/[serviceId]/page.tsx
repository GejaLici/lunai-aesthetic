import { allServices, ServiceItem } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type ServiceDetailPageProps = {
  params: {
    serviceId: string;
  };
};

// Generate static pages for all services
export function generateStaticParams() {
  return allServices.map((service) => ({
    serviceId: service.id,
  }));
}

const getService = (id: string): ServiceItem | undefined => {
  return allServices.find((service) => service.id === id);
};

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getService(params.serviceId);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Services
          </Link>
        </Button>
      </div>

      <Card className="shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
           <div className="p-6 md:p-8 flex flex-col">
            <CardHeader className="p-0 mb-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{service.serviceType === 'operation' ? 'Surgical Procedure' : 'Non-Surgical Treatment'}</p>
              <CardTitle className="font-headline text-4xl text-primary mt-1">{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <p className="text-lg text-foreground/90">{service.description}</p>
            </CardContent>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/contact">Book a Consultation</Link>
                </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 md:p-6 bg-secondary/30">
              <div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2 text-center">Before</h3>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-card">
                   <Image
                      src={service.imageBefore}
                      alt={`Before image for ${service.name}`}
                      fill
                      className="object-cover"
                      data-ai-hint={`${service.dataAiHint} before`}
                    />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2 text-center">After</h3>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-card">
                    <Image
                      src={service.imageAfter}
                      alt={`After image for ${service.name}`}
                      fill
                      className="object-cover"
                      data-ai-hint={`${service.dataAiHint} after`}
                    />
                </div>
              </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
