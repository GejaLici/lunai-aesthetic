
"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { serviceData, allServices } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { Cpu, Leaf, UsersRound, Star, ArrowRight, Newspaper } from "lucide-react";
import { placeholderPosts as blogPostsData } from "@/app/blog/page.tsx"; // Import blog data

const DynamicCarousel = dynamic(() => import('@/components/ui/carousel').then(mod => mod.Carousel), {
  ssr: false,
  loading: () => <div className="text-center py-8"><p className="text-muted-foreground">Loading transformations gallery...</p></div>
});
const DynamicCarouselContent = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselContent), { ssr: false });
const DynamicCarouselItem = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselItem), { ssr: false });
const DynamicCarouselPrevious = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselPrevious), { ssr: false });
const DynamicCarouselNext = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselNext), { ssr: false });


export default function HomePage() {
  const featuredServiceCategories = serviceData.slice(0, 3);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const transformations = allServices.slice(0, 6).map(service => ({
    id: service.id,
    treatment: service.name,
    description: `See the remarkable before and after results for ${service.name.toLowerCase()}.`,
    beforeImageUrl: service.imageBefore,
    afterImageUrl: service.imageAfter,
    beforeHint: `${service.dataAiHint} before`,
    afterHint: `${service.dataAiHint} after`,
  }));

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

  const whyChooseUsData = [
    {
      icon: UsersRound,
      title: "Expert & Personalized Care",
      description: "Our highly skilled professionals provide tailored treatments, focusing on your unique goals to ensure the best possible outcomes.",
      moreInfo: "This includes a thorough consultation process, ongoing support, and a commitment to your satisfaction and well-being at every step."
    },
    {
      icon: Cpu,
      title: "State-of-the-Art Technology",
      description: "We utilize the latest advancements and cutting-edge equipment in aesthetic medicine to deliver safe and effective results.",
      moreInfo: "Our investment in technology means you benefit from procedures that are not only advanced but also prioritize your comfort and safety."
    },
    {
      icon: Leaf,
      title: "Commitment to Natural Results",
      description: "Our philosophy centers on enhancing your natural beauty, aiming for subtle yet significant improvements that look authentic.",
      moreInfo: "We work with you to create a personalized plan that respects your individuality, ensuring results that feel like the best version of yourself."
    },
  ];

  const latestBlogPosts = blogPostsData.slice(0, 3);


  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center items-center text-center py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-lg shadow-xl overflow-hidden">
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
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </>
        )}
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-6 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            Zenviora Aesthetics
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            Reaching the Pinnacle of Beauty and Confidence
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
              <Link href="/consultation">Virtual Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="container mx-auto px-4 pb-12">
        <Card className="shadow-lg overflow-hidden bg-card">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-6 md:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl font-headline text-primary">Welcome to Zenviora Aesthetics</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-lg text-card-foreground/90 space-y-4">
                <p>
                  At Zenviora Aesthetics, we believe that everyone deserves to feel confident and beautiful in their own skin. Our state-of-the-art clinic offers a comprehensive range of aesthetic treatments, delivered by experienced professionals dedicated to achieving exceptional, natural-looking results.
                </p>
                <p>
                  We combine artistry with the latest medical advancements to provide personalized care tailored to your unique needs and aspirations. Your journey to enhanced beauty and self-assurance begins here.
                </p>
              </CardContent>
            </div>
            <div className="relative h-64 md:h-full w-full min-h-[300px] md:min-h-full transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/about-us.jpeg"
                alt="Nice looking women after treatments"
                fill
                className="object-cover"
                data-ai-hint="clinic interior"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Featured Services Section */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          Our Premier Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredServiceCategories.map((category, index) => (
            <Card
              key={category.id}
              className="flex flex-col bg-card shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-out transform hover:-translate-y-2 rounded-xl overflow-hidden border border-transparent hover:border-accent animate-fadeIn"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <CardHeader className="p-6 items-center text-center">
                {category.icon && <category.icon className="h-16 w-16 text-accent mb-6" />}
                <CardTitle className="font-headline text-2xl text-card-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                <CardDescription className="text-card-foreground/80 mb-6 text-sm text-center flex-grow">
                  {category.services.slice(0, 2).map(s => s.name).join(', ')} and more...
                </CardDescription>
                <Button asChild variant="outline" className="mt-auto w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-200" scroll={true}>
                  <Link href={`/services#${category.id}`}>Explore Treatments <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Patient Transformations Section - Carousel */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          Witness the Transformations
        </h2>
        {isClient && (
          <DynamicCarousel
            className="w-full -mx-4 sm:mx-0 sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl sm:mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <DynamicCarouselContent className="sm:-ml-1">
              {transformations.map((transform, index) => (
                <DynamicCarouselItem key={transform.id} className="sm:pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-card shadow-lg rounded-xl overflow-hidden animate-fadeIn h-full flex flex-col" style={{ animationDelay: `${0.1 * index}s` }}>
                      <CardHeader>
                        <CardTitle className="font-headline text-xl text-card-foreground">{transform.treatment}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-semibold text-center text-muted-foreground mb-1">Before</p>
                            <div className="relative aspect-square w-full rounded-md overflow-hidden">
                              <Image src={transform.beforeImageUrl} alt={`Before ${transform.treatment}`} fill className="object-cover" data-ai-hint={transform.beforeHint} />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-center text-muted-foreground mb-1">After</p>
                            <div className="relative aspect-square w-full rounded-md overflow-hidden">
                              <Image src={transform.afterImageUrl} alt={`After ${transform.treatment}`} fill className="object-cover" data-ai-hint={transform.afterHint} />
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-card-foreground/80">{transform.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80 ml-auto">
                          <Link href={`/gallery#${transform.id}`}>View More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </DynamicCarouselItem>
              ))}
            </DynamicCarouselContent>
            <DynamicCarouselPrevious className="left-2 sm:-left-[10px] md:-left-[20px] lg:-left-[30px]" />
            <DynamicCarouselNext className="right-2 sm:-right-[10px] md:-right-[20px] lg:-right-[30px]" />
          </DynamicCarousel>
        )}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/gallery">Explore Full Gallery</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          Why Choose Zenviora Aesthetics?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card group animate-fadeIn" style={{ animationDelay: `${0.2 * index}s` }}>
              <CardHeader className="items-center text-center">
                <item.icon className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-headline text-2xl text-card-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-card-foreground/80">
                  {item.description}
                </p>
                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-4">
                  <p className="text-card-foreground/70 text-sm">
                    {item.moreInfo}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Step Inside Zenviora Aesthetics Section */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          Step Inside Zenviora Aesthetics
        </h2>
        <div className="text-center mb-10 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg text-foreground/80">
            Experience a sanctuary of calm and sophistication, where advanced technology meets unparalleled care. Our clinic is meticulously designed with your comfort, privacy, and well-being as our utmost priorities, ensuring a serene and welcoming atmosphere for every visit.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl animate-fadeIn group" style={{ animationDelay: '0.3s' }}>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Luxurious and welcoming clinic reception area"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="clinic reception"
            />
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl animate-fadeIn group" style={{ animationDelay: '0.5s' }}>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Modern, clean, and advanced treatment room"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="treatment room"
            />
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="container mx-auto px-4 pb-12">
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
                <p className="text-card-foreground/90 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
              <CardFooter>
                <p className="font-semibold text-card-foreground/80">- {testimonial.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* From Our Blog Section */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary flex items-center justify-center">
          <Newspaper className="h-10 w-10 text-accent mr-3" />
          From Our Blog
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogPosts.map((post, index) => (
            <Card key={post.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card animate-fadeIn" style={{ animationDelay: `${0.2 * index}s` }}>
              <CardHeader className="p-0">
                <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={post.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-6 flex flex-col">
                <CardTitle className="font-headline text-xl text-primary mb-2">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
                <CardDescription className="text-foreground/90 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80">
                  <Link href={post.slug}>Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/blog">View All Blog Posts</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action for Consultation */}
      <section className="py-16 bg-primary text-primary-foreground rounded-lg shadow-xl">
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
