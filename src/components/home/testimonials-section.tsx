'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useTranslations } from '@/hooks/use-translations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  { id: "1", stars: 5 },
  { id: "2", stars: 5 },
  { id: "3", stars: 5 },
];

export const TestimonialsSection = React.memo(function TestimonialsSection() {
  const t = useTranslations('HomePage');
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="container mx-auto px-4 pb-12">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
        {t('testimonials.title')}
      </h2>
      {isClient && (
        <Carousel
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-card shadow-lg rounded-xl flex flex-col h-full">
                    <CardHeader>
                      <div className="flex">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                        {[...Array(5 - testimonial.stars)].map((_, i) => (
                          <Star key={`empty-${i}`} className="h-5 w-5 text-yellow-400" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-card-foreground/90 italic mb-4">&ldquo;{t(`testimonials.items.${testimonial.id}.quote`)}&rdquo;</p>
                    </CardContent>
                    <CardFooter>
                      <p className="font-semibold text-card-foreground/80">- {t(`testimonials.items.${testimonial.id}.name`)}</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:-left-4 md:-left-8" />
          <CarouselNext className="right-2 sm:-right-4 md:-right-8" />
        </Carousel>
      )}
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';
