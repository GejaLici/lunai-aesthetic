
"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { serviceData } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { Cpu, Leaf, UsersRound, Star, ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredServiceCategories = serviceData.slice(0, 3);
  const [isClient, setIsClient] = useState(false);
  const autoplayPluginRef = React.useRef<any>(null); // For storing the Autoplay plugin instance

  useEffect(() => {
    setIsClient(true);
    // Initialize the Autoplay plugin only on the client side
    // and only if it hasn't been initialized yet.
    if (typeof window !== 'undefined' && !autoplayPluginRef.current) {
        autoplayPluginRef.current = Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true });
    }
  }, []); // Empty dependency array ensures this runs once on mount on client.


  const transformations = [
    {
      id: "t1",
      treatment: "Facial Rejuvenation",
      description: "Achieved a youthful glow and reduced fine lines with our signature facial treatment.",
      beforeHint: "woman tired skin",
      afterHint: "woman glowing skin",
    },
    {
      id: "t2",
      treatment: "Body Contouring",
      description: "Significant improvement in body shape and confidence after our advanced contouring procedure.",
      beforeHint: "body shape before",
      afterHint: "body shape after",
    },
    {
      id: "t3",
      treatment: "Smile Makeover",
      description: "A complete smile transformation, enhancing both aesthetics and function.",
      beforeHint: "teeth before smile",
      afterHint: "teeth after smile",
    },
    {
      id: "t4",
      treatment: "Advanced Skin Tightening",
      description: "Non-surgical skin tightening for a firmer, more youthful appearance.",
      beforeHint: "skin loose",
      afterHint: "skin firm",
    }
  ];
  
  const placeholderTestimonials = [
    {
      id: "1",
      quote: "My experience at Zenviora Aesthetics was phenomenal. The results exceeded my expectations, and the staff were incredibly professional and caring.",
      name: "Jessica M.",
      stars: 5,
    },
    {
      id: "2",
      quote: "I was nervous about my procedure, but the team at Zenviora made me feel completely at ease. I'm thrilled with my new look!",
      name: "David K.",
      stars: 5,
    },
    {
      id: "3",
      quote: "From consultation to post-treatment, every step was handled with expertise. I highly recommend Zenviora Aesthetics for anyone considering aesthetic treatments.",
      name: "Sarah L.",
      stars: 5,
    },
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-lg shadow-xl overflow-hidden">
        {isClient && (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute z-0 w-full h-full object-cover"
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-slate-600/50 z-10"></div>
          </>
        )}
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary mb-6 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            Zenviora Aesthetics
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            Reaching the Pinnacle of Beauty and Confidence
          </p>
          <div className="space-x-4 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="/consultation">Virtual Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="container mx-auto px-4 py-12">
        <Card className="shadow-lg overflow-hidden bg-card">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-6 md:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl font-headline text-primary">Welcome to Zenviora Aesthetics</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-lg text-foreground/90 space-y-4">
                <p>
                  At Zenviora Aesthetics, we believe that everyone deserves to feel confident and beautiful in their own skin. Our state-of-the-art clinic offers a comprehensive range of aesthetic treatments, delivered by experienced professionals dedicated to achieving exceptional, natural-looking results.
                </p>
                <p>
                  We combine artistry with the latest medical advancements to provide personalized care tailored to your unique needs and aspirations. Your journey to enhanced beauty and self-assurance begins here.
                </p>
              </CardContent>
            </div>
            <div className="relative h-64 md:h-full w-full min-h-[300px] md:min-h-full">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Welcoming clinic interior"
                fill
                className="object-cover"
                data-ai-hint="clinic interior"
              />
            </div>
          </div>
        </Card>
      </section>
      
      {/* Featured Services Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          Our Premier Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredServiceCategories.map((category, index) => (
            <Card
              key={category.id}
              className="flex flex-col bg-card shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-out transform hover:-translate-y-2 rounded-xl overflow-hidden border border-transparent hover:border-accent/50 animate-fadeIn"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <CardHeader className="p-6 items-center text-center">
                {category.icon && <category.icon className="h-16 w-16 text-accent mb-6" />}
                <CardTitle className="font-headline text-2xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                <CardDescription className="text-foreground/80 mb-6 text-sm text-center flex-grow">
                  {category.services.slice(0, 2).map(s => s.name).join(', ')} and more...
                </CardDescription>
                <Button asChild variant="outline" className="mt-auto w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-200" scroll={true}>
                  <Link href={`/services#${category.id}`}>Explore Treatments</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Patient Transformations Section - Carousel */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          Witness the Transformations
        </h2>
        {isClient ? (
          <Carousel
            plugins={autoplayPluginRef.current ? [autoplayPluginRef.current] : []}
            className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl mx-auto"
            onMouseEnter={() => autoplayPluginRef.current?.stop()}
            onMouseLeave={() => autoplayPluginRef.current?.play()}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-1">
              {transformations.map((transform, index) => (
                <CarouselItem key={transform.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-card shadow-lg rounded-xl overflow-hidden animate-fadeIn h-full flex flex-col" style={{ animationDelay: `${0.1 * index}s` }}>
                      <CardHeader>
                        <CardTitle className="font-headline text-xl text-foreground">{transform.treatment}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-semibold text-center text-muted-foreground mb-1">Before</p>
                            <div className="relative aspect-square w-full rounded-md overflow-hidden">
                              <Image src="https://placehold.co/300x300.png" alt={`Before ${transform.treatment}`} fill className="object-cover" data-ai-hint={transform.beforeHint} />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-center text-muted-foreground mb-1">After</p>
                            <div className="relative aspect-square w-full rounded-md overflow-hidden">
                              <Image src="https://placehold.co/300x300.png" alt={`After ${transform.treatment}`} fill className="object-cover" data-ai-hint={transform.afterHint} />
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-foreground/80">{transform.description}</p>
                      </CardContent>
                      <CardFooter>
                         <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80 ml-auto">
                            <Link href="/gallery">View More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                          </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-[-10px] sm:ml-[-20px] md:ml-[-30px]" />
            <CarouselNext className="mr-[-10px] sm:mr-[-20px] md:mr-[-30px]" />
          </Carousel>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Loading transformations gallery...</p>
          </div>
        )}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/gallery">Explore Full Gallery</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          Why Choose Zenviora Aesthetics?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <CardHeader className="items-center text-center">
              <UsersRound className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="font-headline text-2xl text-foreground">Expert & Personalized Care</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80">
                Our highly skilled professionals provide tailored treatments, focusing on your unique goals to ensure the best possible outcomes.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <CardHeader className="items-center text-center">
              <Cpu className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="font-headline text-2xl text-foreground">State-of-the-Art Technology</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80">
                We utilize the latest advancements and cutting-edge equipment in aesthetic medicine to deliver safe and effective results.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <CardHeader className="items-center text-center">
              <Leaf className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="font-headline text-2xl text-foreground">Commitment to Natural Results</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80">
                Our philosophy centers on enhancing your natural beauty, aiming for subtle yet significant improvements that look authentic.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          Hear From Our Clients
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderTestimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="bg-card shadow-lg rounded-xl flex flex-col animate-fadeIn" style={{ animationDelay: `${0.2 * index}s` }}>
              <CardHeader>
                <div className="flex">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, i) => (
                    <Star key={`empty-${i}`} className="h-5 w-5 text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/90 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
              <CardFooter>
                <p className="font-semibold text-foreground/80">- {testimonial.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action for Consultation */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary/90 to-blue-700 text-primary-foreground rounded-lg shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-headline font-bold mb-6">Ready for a Transformation?</h2>
          <p className="text-xl mb-8">
            Our AI-powered virtual consultant can help guide you towards the perfect treatment.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90 hover:text-primary">
            <Link href="/consultation">Start Your Virtual Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
