
import { allServices } from '@/lib/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <h1 className="text-5xl font-headline font-bold text-primary">Visual Gallery at LUNAI</h1>
        <p className="text-xl text-foreground/80 mt-4">
          Witness the transformative results achieved at LUNAI.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          (Patient confidentiality and consent are paramount. Images are illustrative placeholders.)
        </p>
      </section>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {allServices.map((service) => (
          <Card key={service.id} id={service.id} className="shadow-lg scroll-mt-20">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-foreground">{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2 text-center">Before</h3>
                  <div className="relative w-full aspect-square rounded-md overflow-hidden">
                    <Image
                      src={service.imageBefore}
                      alt={`Before image for ${service.name}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={`${service.dataAiHint} before`}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2 text-center">After</h3>
                  <div className="relative w-full aspect-square rounded-md overflow-hidden">
                    <Image
                      src={service.imageAfter}
                      alt={`After image for ${service.name}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={`${service.dataAiHint} after`}
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm text-foreground/80 mt-4">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
