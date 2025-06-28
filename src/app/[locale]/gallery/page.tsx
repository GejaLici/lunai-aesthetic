import { allServices } from '@/lib/services';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GalleryHorizontal } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-8">
        <GalleryHorizontal className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">Patient Transformations</h1>
        <p className="text-xl text-foreground/80 mt-4">
          Witness the stunning, natural-looking results achieved at LUNAI.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service) => (
          <Card key={service.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
            <CardHeader className="p-0">
              <div className="grid grid-cols-2">
                <div className="relative aspect-square">
                  <Image src={service.imageBefore} alt={`Before ${service.name}`} fill className="object-cover" data-ai-hint={`${service.dataAiHint} before`} />
                  <div className="absolute bottom-0 left-0 bg-black/50 text-white text-xs px-2 py-1">Before</div>
                </div>
                <div className="relative aspect-square">
                  <Image src={service.imageAfter} alt={`After ${service.name}`} fill className="object-cover" data-ai-hint={`${service.dataAiHint} after`} />
                  <div className="absolute bottom-0 right-0 bg-black/50 text-white text-xs px-2 py-1">After</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg font-headline text-primary">{service.name}</CardTitle>
              <CardDescription className="text-sm mt-1">{Array.isArray(service.description) ? service.description[0] : service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
