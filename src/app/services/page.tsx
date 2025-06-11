
import { serviceData, type ServiceItem } from '@/lib/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';
import { Sparkles, Construction, AlignCenter, ClipboardCheck, Scissors, Baby } from 'lucide-react'; // Import icons for dental subcategories

// Helper map for dental subcategory icons
const subCategoryIcons: Record<string, LucideIcon | undefined> = {
  "AESTHETICS": Sparkles,
  "PROSTHETICS": Construction,
  "ORTHODONTICS": AlignCenter,
  "THERAPY": ClipboardCheck,
  "SURGERY": Scissors,
  "PEDODONTICS (CHILDREN'S DENTISTRY)": Baby,
};


export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <h1 className="text-5xl font-headline font-bold text-primary">Our Services</h1>
        <p className="text-xl text-foreground/80 mt-4">
          Explore our comprehensive range of aesthetic treatments tailored to your needs.
        </p>
      </section>

      {serviceData.map((category) => {
        if (category.id === 'dentistry') {
          // Special handling for DENTISTRY category
          const dentalServicesBySubCategory: Record<string, ServiceItem[]> = {};
          category.services.forEach(service => {
            if (service.dentalSubCategoryTitle) {
              if (!dentalServicesBySubCategory[service.dentalSubCategoryTitle]) {
                dentalServicesBySubCategory[service.dentalSubCategoryTitle] = [];
              }
              dentalServicesBySubCategory[service.dentalSubCategoryTitle].push(service);
            }
          });

          return (
            <section key={category.id} id={category.id} className="scroll-mt-20">
              <div className="flex items-center mb-6">
                {category.icon && <category.icon className="h-10 w-10 text-accent mr-4 flex-shrink-0" />}
                <h2 className="text-3xl font-headline font-semibold text-foreground">{category.title}</h2>
              </div>

              {Object.entries(dentalServicesBySubCategory).map(([subCategoryTitle, servicesInSubCategory]) => {
                const operations = servicesInSubCategory.filter(s => s.serviceType === 'operation');
                const treatments = servicesInSubCategory.filter(s => s.serviceType === 'treatment');
                const SubCategoryIcon = subCategoryIcons[subCategoryTitle];

                return (
                  <div key={subCategoryTitle} className="mb-10 pl-4 border-l-2 border-primary/20"> {/* Indent subcategories */}
                    <div className="flex items-center mb-4 mt-2"> {/* Added mt-2 for spacing from border */}
                         {SubCategoryIcon && <SubCategoryIcon className="h-8 w-8 text-primary/80 mr-3 flex-shrink-0" />}
                         <h3 className="text-2xl font-headline text-primary/90">{subCategoryTitle}</h3>
                    </div>

                    {operations.length > 0 && (
                      <>
                        {(treatments.length > 0) && (
                          <h4 className="text-xl font-headline text-foreground/70 mb-3 ml-4">Operations</h4>
                        )}
                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                          {operations.map((service) => (
                            <Card key={service.id} id={service.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                              <CardHeader>
                                <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                              </CardHeader>
                              <CardContent className="flex-grow flex flex-col">
                                <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                                  <Image
                                    src={service.imageBefore}
                                    alt={`Image for ${service.name}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={service.dataAiHint}
                                  />
                                </div>
                                <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                                  {service.description}
                                </CardDescription>
                                <Button asChild variant="link" className="text-accent p-0 mt-auto self-start">
                                  <Link href={`/gallery#${service.id}`}>View Gallery &rarr;</Link>
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </>
                    )}

                    {treatments.length > 0 && (
                      <>
                        {(operations.length > 0) && (
                          <h4 className="text-xl font-headline text-foreground/70 mb-3 ml-4">Treatments</h4>
                        )}
                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                          {treatments.map((service) => (
                             <Card key={service.id} id={service.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                               <CardHeader>
                                <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                              </CardHeader>
                              <CardContent className="flex-grow flex flex-col">
                                <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                                  <Image
                                    src={service.imageBefore}
                                    alt={`Image for ${service.name}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={service.dataAiHint}
                                  />
                                </div>
                                <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                                  {service.description}
                                </CardDescription>
                                <Button asChild variant="link" className="text-accent p-0 mt-auto self-start">
                                  <Link href={`/gallery#${service.id}`}>View Gallery &rarr;</Link>
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </>
                    )}
                    
                    {operations.length === 0 && treatments.length === 0 && servicesInSubCategory.length > 0 && (
                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {servicesInSubCategory.map((service) => (
                            <Card key={service.id}  id={service.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                                    <Image
                                    src={service.imageBefore}
                                    alt={`Image for ${service.name}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={service.dataAiHint}
                                    />
                                </div>
                                <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                                    {service.description}
                                </CardDescription>
                                <Button asChild variant="link" className="text-accent p-0 mt-auto self-start">
                                    <Link href={`/gallery#${service.id}`}>View Gallery &rarr;</Link>
                                </Button>
                                </CardContent>
                            </Card>
                            ))}
                        </div>
                    )}
                  </div>
                );
              })}
            </section>
          );
        } else {
          // Existing logic for non-dentistry categories
          const operations = category.services.filter(s => s.serviceType === 'operation');
          const treatments = category.services.filter(s => s.serviceType === 'treatment');
          const unclassified = category.services.filter(s => !s.serviceType); 

          return (
            <section key={category.id} id={category.id} className="scroll-mt-20">
              <div className="flex items-center mb-6">
                {category.icon && <category.icon className="h-10 w-10 text-accent mr-4 flex-shrink-0" />}
                <h2 className="text-3xl font-headline font-semibold text-foreground">{category.title}</h2>
              </div>

              {operations.length > 0 && (
                <>
                  {(treatments.length > 0 || unclassified.length > 0) && (
                    <h3 className="text-2xl font-headline text-primary/80 mb-4 ml-2">Operations</h3>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {operations.map((service) => (
                      <Card key={service.id} id={service.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                          <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                            <Image
                              src={service.imageBefore}
                              alt={`Image for ${service.name}`}
                              fill
                              className="object-cover"
                              data-ai-hint={service.dataAiHint}
                            />
                          </div>
                          <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                            {service.description}
                          </CardDescription>
                          <Button asChild variant="link" className="text-accent p-0 mt-auto self-start">
                            <Link href={`/gallery#${service.id}`}>View Gallery &rarr;</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}

              {treatments.length > 0 && (
                <>
                  {(operations.length > 0 || unclassified.length > 0) && (
                    <h3 className="text-2xl font-headline text-primary/80 mb-4 ml-2">Treatments</h3>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {treatments.map((service) => (
                      <Card key={service.id} id={service.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                          <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                            <Image
                              src={service.imageBefore}
                              alt={`Image for ${service.name}`}
                              fill
                              className="object-cover"
                              data-ai-hint={service.dataAiHint}
                            />
                          </div>
                          <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                            {service.description}
                          </CardDescription>
                          <Button asChild variant="link" className="text-accent p-0 mt-auto self-start">
                            <Link href={`/gallery#${service.id}`}>View Gallery &rarr;</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
              
              {unclassified.length > 0 && (
                   <>
                   { (operations.length > 0 || treatments.length > 0) && (
                      <h3 className="text-2xl font-headline text-primary/80 mb-4 ml-2">Other Services</h3>
                   )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {unclassified.map((service) => (
                      <Card key={service.id} id={service.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <CardHeader>
                          <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow flex flex-col">
                          <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                              <Image
                              src={service.imageBefore}
                              alt={`Image for ${service.name}`}
                              fill
                              className="object-cover"
                              data-ai-hint={service.dataAiHint}
                              />
                          </div>
                          <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                              {service.description}
                          </CardDescription>
                          <Button asChild variant="link" className="text-accent p-0 mt-auto self-start">
                              <Link href={`/gallery#${service.id}`}>View Gallery &rarr;</Link>
                          </Button>
                          </CardContent>
                      </Card>
                      ))}
                  </div>
                 </>
              )}
            </section>
          );
        }
      })}
    </div>
  );
}

    