
import { serviceData, type ServiceItem } from '@/lib/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';
import { Sparkles, Construction, AlignCenter, ClipboardCheck, Scissors, Baby, ArrowRight } from 'lucide-react'; // Import icons for dental subcategories

// Helper map for dental subcategory icons
const subCategoryIcons: Record<string, LucideIcon | undefined> = {
  "AESTHETIC DENTISTRY": Sparkles,
  "PROSTHODONTICS": Construction,
  "ORTHODONTICS": AlignCenter,
  "GENERAL & RESTORATIVE DENTISTRY": ClipboardCheck,
  "ORAL SURGERY": Scissors,
  "PEDIATRIC DENTISTRY (PEDODONTICS)": Baby,
};

const MAX_DESC_LENGTH = 120;

function getShortDescription(description: string): string {
  if (description.length <= MAX_DESC_LENGTH) {
    return description;
  }
  const truncated = description.substring(0, MAX_DESC_LENGTH);
  // Ensure we don't cut in the middle of a word for the short description
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + "...";
}


export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8 pb-8 border-b border-border/30">
        <h1 className="text-5xl font-headline font-bold text-primary">Comprehensive Aesthetic Services at Zenith Aesthetics</h1>
        <p className="text-xl text-foreground/80 mt-4">
          Explore our extensive range of advanced aesthetic treatments, from facial rejuvenation and body contouring to specialized dental aesthetics, all meticulously tailored to meet your unique goals and enhance your natural beauty at Zenith Aesthetics.
        </p>
      </section>

      {serviceData.map((category) => {
        if (category.id === 'dentistry') {
          // Special handling for DENTISTRY category
          const dentalServicesBySubCategory: Record<string, ServiceItem[]> = {};
          category.services.forEach(service => {
            // Use more descriptive titles for subcategories if available
            const subCategoryKey = service.dentalSubCategoryTitle === "AESTHETICS" ? "AESTHETIC DENTISTRY" :
                                   service.dentalSubCategoryTitle === "PROSTHETICS" ? "PROSTHODONTICS" :
                                   service.dentalSubCategoryTitle === "THERAPY" ? "GENERAL & RESTORATIVE DENTISTRY" :
                                   service.dentalSubCategoryTitle === "SURGERY" ? "ORAL SURGERY" :
                                   service.dentalSubCategoryTitle === "PEDODONTICS (CHILDREN'S DENTISTRY)" ? "PEDIATRIC DENTISTRY (PEDODONTICS)" :
                                   service.dentalSubCategoryTitle || "General Dentistry";
            
            if (!dentalServicesBySubCategory[subCategoryKey]) {
              dentalServicesBySubCategory[subCategoryKey] = [];
            }
            dentalServicesBySubCategory[subCategoryKey].push(service);
          });

          return (
            <section key={category.id} id={category.id} className="scroll-mt-20 py-6 border-b border-border/30 last:border-b-0">
              <div className="flex items-center pb-4 mb-6 border-b border-border/20">
                {category.icon && <category.icon className="h-10 w-10 text-accent mr-4 flex-shrink-0" />}
                <h2 className="text-3xl font-headline font-semibold text-foreground">{category.title}</h2>
              </div>

              {Object.entries(dentalServicesBySubCategory).map(([subCategoryTitle, servicesInSubCategory]) => {
                const operations = servicesInSubCategory.filter(s => s.serviceType === 'operation');
                const treatments = servicesInSubCategory.filter(s => s.serviceType === 'treatment');
                const SubCategoryIcon = subCategoryIcons[subCategoryTitle];

                return (
                  <div key={subCategoryTitle} className="mb-8 pl-4 border-l-2 border-primary/20">
                    <div className="flex items-center p-3 mb-4 rounded-md bg-secondary/20 shadow-sm">
                         {SubCategoryIcon && <SubCategoryIcon className="h-8 w-8 text-primary/80 mr-3 flex-shrink-0" />}
                         <h3 className="text-2xl font-headline text-primary/90">{subCategoryTitle}</h3>
                    </div>

                    {operations.length > 0 && (
                      <>
                        {(treatments.length > 0) && (
                          <h4 className="text-xl font-headline text-foreground/70 mb-3 ml-4">Surgical Procedures</h4>
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
                                    alt={`Image illustrating ${service.name}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={service.dataAiHint}
                                  />
                                </div>
                                <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                                  {getShortDescription(service.description)}
                                </CardDescription>
                                <Button asChild variant="link" className="text-accent p-0 mt-auto self-start hover:text-accent/80">
                                  <Link href={`/services/${service.id}`}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
                          <h4 className="text-xl font-headline text-foreground/70 mb-3 ml-4">Non-Surgical Treatments</h4>
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
                                    alt={`Image illustrating ${service.name}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={service.dataAiHint}
                                  />
                                </div>
                                <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                                  {getShortDescription(service.description)}
                                </CardDescription>
                                <Button asChild variant="link" className="text-accent p-0 mt-auto self-start hover:text-accent/80">
                                  <Link href={`/services/${service.id}`}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
                                    alt={`Image illustrating ${service.name}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={service.dataAiHint}
                                    />
                                </div>
                                <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                                    {getShortDescription(service.description)}
                                </CardDescription>
                                <Button asChild variant="link" className="text-accent p-0 mt-auto self-start hover:text-accent/80">
                                    <Link href={`/services/${service.id}`}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
            <section key={category.id} id={category.id} className="scroll-mt-20 py-6 border-b border-border/30 last:border-b-0">
              <div className="flex items-center pb-4 mb-6 border-b border-border/20">
                {category.icon && <category.icon className="h-10 w-10 text-accent mr-4 flex-shrink-0" />}
                <h2 className="text-3xl font-headline font-semibold text-foreground">{category.title}</h2>
              </div>

              {operations.length > 0 && (
                <>
                  {(treatments.length > 0 || unclassified.length > 0) && (
                    <h3 className="text-2xl font-headline text-primary/80 mb-4 ml-2">Surgical Procedures</h3>
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
                              alt={`Image illustrating ${service.name}`}
                              fill
                              className="object-cover"
                              data-ai-hint={service.dataAiHint}
                            />
                          </div>
                          <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                            {getShortDescription(service.description)}
                          </CardDescription>
                          <Button asChild variant="link" className="text-accent p-0 mt-auto self-start hover:text-accent/80">
                            <Link href={`/services/${service.id}`}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
                    <h3 className="text-2xl font-headline text-primary/80 mb-4 ml-2">Non-Surgical Treatments</h3>
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
                              alt={`Image illustrating ${service.name}`}
                              fill
                              className="object-cover"
                              data-ai-hint={service.dataAiHint}
                            />
                          </div>
                          <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                            {getShortDescription(service.description)}
                          </CardDescription>
                          <Button asChild variant="link" className="text-accent p-0 mt-auto self-start hover:text-accent/80">
                            <Link href={`/services/${service.id}`}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
                      <h3 className="text-2xl font-headline text-primary/80 mb-4 ml-2">Other Specialized Services</h3>
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
                              alt={`Image illustrating ${service.name}`}
                              fill
                              className="object-cover"
                              data-ai-hint={service.dataAiHint}
                              />
                          </div>
                          <CardDescription className="text-foreground/80 mb-4 text-sm flex-grow">
                              {getShortDescription(service.description)}
                          </CardDescription>
                          <Button asChild variant="link" className="text-accent p-0 mt-auto self-start hover:text-accent/80">
                              <Link href={`/services/${service.id}`}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
