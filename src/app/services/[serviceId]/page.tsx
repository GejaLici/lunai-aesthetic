
import { allServices, type ServiceItem } from '@/lib/services';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, CalendarCheck2, HelpCircle, FileText, Users, Activity } from 'lucide-react';

// Helper to generate generic FAQs
const generateFaqs = (serviceName: string) => [
  {
    question: `What is involved in the ${serviceName} procedure?`,
    answer: `${serviceName} is a specialized procedure designed to address specific aesthetic concerns. Our expert team will provide a detailed explanation of the process, techniques used, and expected outcomes during your personal consultation.`,
  },
  {
    question: `Who is an ideal candidate for ${serviceName}?`,
    answer: `Ideal candidates for ${serviceName} are typically in good general health and have realistic expectations about the results. A comprehensive consultation with our specialists is necessary to determine if ${serviceName} is the most suitable and safe option for your individual needs and goals.`,
  },
  {
    question: 'What does the typical recovery process entail after this service?',
    answer: 'Recovery times and experiences vary depending on the individual and the specifics of the ${serviceName} procedure. We will provide you with detailed post-treatment care instructions and support to ensure a smooth and comfortable recovery.',
  },
  {
    question: `How long can I expect the results of ${serviceName} to last?`,
    answer: 'The longevity of results from ${serviceName} can depend on various factors, including the type of treatment, your lifestyle, skin type, and individual aging processes. This will be thoroughly discussed during your consultation to set clear expectations.',
  },
  {
    question: 'Are there any potential risks or side effects associated with this service?',
    answer: 'As with any medical or aesthetic procedure, there are potential risks and side effects. Our specialists will comprehensively discuss these with you before you decide to proceed, ensuring you are fully informed and comfortable with your treatment plan.',
  }
];

// Define icons for FAQ section
const faqIcons: Record<string, React.ElementType> = {
  "What is involved": FileText,
  "Who is an ideal candidate": Users,
  "What does the typical recovery": Activity,
  "How long can I expect": CalendarCheck2,
  "Are there any potential risks": HelpCircle,
};

export async function generateStaticParams() {
  return allServices.map((service) => ({
    serviceId: service.id,
  }));
}

export default async function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  const service = allServices.find(s => s.id === params.serviceId);

  if (!service) {
    notFound();
  }

  const faqs = generateFaqs(service.name);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/services" className="inline-flex items-center text-accent hover:text-accent/80">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to All Expert Services at Lunai
          </Link>
        </Button>
      </div>

      <Card className="shadow-xl overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative w-full h-80 md:h-[500px]">
            <Image
              src={service.imageBefore} 
              alt={`Illustrative image for ${service.name} at Lunai Aesthetics`}
              fill
              className="object-cover"
              data-ai-hint={service.dataAiHint}
              priority 
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
             <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <CardTitle className="font-headline text-3xl md:text-4xl text-white">
                 {service.name}
                </CardTitle>
             </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <CardDescription className="text-lg text-foreground/90 mb-6 leading-relaxed whitespace-pre-line">
            {service.description}
          </CardDescription>

          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mb-12">
            <Link href="/consultation">
              <CalendarCheck2 className="mr-2 h-5 w-5" />
              Book Your Consultation for {service.name}
            </Link>
          </Button>

          <section className="mt-8 pt-8 border-t">
            <h2 className="text-3xl font-headline font-semibold text-primary mb-6">
              Frequently Asked Questions: {service.name}
            </h2>
            {faqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => {
                  const IconComponent = Object.entries(faqIcons).find(([keyPrefix]) => faq.question.startsWith(keyPrefix))?.[1] || HelpCircle;
                  return (
                    <AccordionItem value={`item-${index}`} key={index} className="border-b border-border/50">
                      <AccordionTrigger className="text-left hover:no-underline py-4 text-base md:text-lg text-foreground/90">
                        <span className="flex items-center">
                           <IconComponent className="mr-3 h-5 w-5 text-accent flex-shrink-0" />
                           {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4 text-base text-foreground/80 pl-8">
                        {faq.answer.replace(/\$\{serviceName\}/g, service.name)}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            ) : (
              <p className="text-muted-foreground">Detailed FAQs for this service are coming soon. Please contact us for any immediate questions.</p>
            )}
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
