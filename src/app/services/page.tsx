
import { serviceData } from '@/lib/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <h1 className="text-5xl font-headline font-bold text-primary">Our Services</h1>
        <p className="text-xl text-foreground/80 mt-4">
          Explore our comprehensive range of aesthetic treatments tailored to your needs.
        </p>
      </section>

      {serviceData.map((category) => (
        <section key={category.id} id={category.id} className="scroll-mt-20">
          <div className="flex items-center mb-8">
            {category.icon && <category.icon className="h-10 w-10 text-accent mr-4" />}
            <h2 className="text-3xl font-headline font-semibold text-foreground">{category.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.services.map((service) => (
              <Card key={service.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                    <Image
                      src={service.imageBefore} // Using 'before' image as a representative
                      alt={`Image for ${service.name}`}
                      fill
                      className="object-cover"
                      data-ai-hint={service.dataAiHint}
                    />
                  </div>
                  <CardDescription className="text-foreground/80 mb-4 text-sm">
                    {service.description}
                  </CardDescription>
                   <Button asChild variant="link" className="text-accent p-0 mt-auto">
                    <Link href={`/gallery#${service.id}`}>View Gallery &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
