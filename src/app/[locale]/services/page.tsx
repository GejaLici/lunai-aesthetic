
import { serviceData } from '@/lib/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Stethoscope } from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
  if (!serviceData || serviceData.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Services are currently unavailable. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-8">
        <Stethoscope className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">Our Services</h1>
        <p className="text-xl text-foreground/80 mt-4">
          Comprehensive aesthetic and dental solutions tailored for you at LUNAI.
        </p>
      </section>

      <Tabs defaultValue={serviceData[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-12 mb-8">
          {serviceData.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="py-2.5 text-base">
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {serviceData.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <Card key={service.id} className="flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] bg-card">
                  <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
                    <Image
                      src={service.imageAfter}
                      alt={`Image for ${service.name}`}
                      fill
                      className="object-cover"
                      data-ai-hint={service.dataAiHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-foreground/90">
                      {Array.isArray(service.description) ? service.description[0] : service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Link href={`/services/${service.id}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
