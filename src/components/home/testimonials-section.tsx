'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  { id: "1", stars: 5 },
  { id: "2", stars: 5 },
  { id: "3", stars: 5 },
];

type TestimonialsSectionProps = {
  t: (key: string) => string;
};

export const TestimonialsSection = React.memo(function TestimonialsSection({ t }: TestimonialsSectionProps) {
  return (
    <section className="container mx-auto px-4 pb-12">
      <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
        {t('testimonials.title')}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={testimonial.id} className="bg-card shadow-lg rounded-xl flex flex-col animate-fadeIn" style={{ animationDelay: `${0.2 * index}s` }}>
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
        ))}
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';
