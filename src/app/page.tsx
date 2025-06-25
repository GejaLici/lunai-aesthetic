
"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { serviceData, allServices, type ServiceCategory } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { Cpu, Leaf, UsersRound, Star, ArrowRight, Newspaper } from "lucide-react";
import { placeholderPosts as blogPostsData } from "@/lib/blog-posts";

const DynamicCarousel = dynamic(() => import('@/components/ui/carousel').then(mod => mod.Carousel), {
  ssr: false,
  loading: () => <div className="text-center py-8"><p className="text-muted-foreground">Loading transformations gallery...</p></div>
});
const DynamicCarouselContent = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselContent), { ssr: false });
const DynamicCarouselItem = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselItem), { ssr: false });
const DynamicCarouselPrevious = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselPrevious), { ssr: false });
const DynamicCarouselNext = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselNext), { ssr: false });

export default function HomePage() {
  const faceCategory = serviceData.find(category => category.id === 'face');
  const bodyCategory = serviceData.find(category => category.id === 'body');
  const dentistryCategory = serviceData.find(category => category.id === 'dentistry');

  const featuredServiceCategories = [faceCategory, bodyCategory, dentistryCategory].filter(Boolean) as ServiceCategory[];
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const transformations = allServices.slice(0, 6).map(service => ({
    id: service.id,
    treatment: service.name,
    description: service.description, 
    beforeImageUrl: service.imageBefore,
    afterImageUrl: service.imageAfter,
    beforeHint: `${service.dataAiHint} before`,
    afterHint: `${service.dataAiHint} after`,
  }));

  const placeholderTestimonials = [
    {
      id: "1",
      quote: "My experience at LUNAI was phenomenal. The results exceeded my expectations, and the staff were incredibly professional and caring.",
      name: "Jessica M.",
      stars: 5,
    },
    {
      id: "2",
      quote: "I was nervous about my procedure, but the team at LUNAI made me feel completely at ease. I'm thrilled with my new look!",
      name: "David K.",
      stars: 5,
    },
    {
      id: "3",
      quote: "From consultation to post-treatment, every step was handled with expertise. I highly recommend LUNAI for anyone considering aesthetic treatments.",
      name: "Sarah L.",
      stars: 5,
    },
  ];

  const whyChooseUsData = [
    {
      icon: UsersRound,
      title: "Expert & Personalized Aesthetic Care",
      description: "Our highly skilled professionals provide tailored aesthetic treatments, focusing on your unique goals to ensure exceptional, natural-looking outcomes and your utmost satisfaction.",
      moreInfo: "This includes a comprehensive consultation, advanced treatment planning, ongoing support, and a steadfast commitment to your well-being at every stage of your aesthetic journey at LUNAI."
    },
    {
      icon: Cpu,
      title: "Advanced State-of-the-Art Technology",
      description: "We utilize the latest advancements and cutting-edge equipment in aesthetic medicine to deliver safe, effective, and minimally invasive results with precision at LUNAI.",
      moreInfo: "Our investment in leading technology ensures you benefit from procedures that are not only advanced but also prioritize your comfort, safety, and achieve superior results."
    },
    {
      icon: Leaf,
      title: "Commitment to Natural, Enhancing Results",
      description: "Our core philosophy at LUNAI centers on enhancing your inherent beauty, aiming for subtle yet significant improvements that look authentic and feel like your best self.",
      moreInfo: "We collaborate with you to create a bespoke treatment plan that respects your individuality, ensuring results that reflect the best version of yourself, naturally."
    },
  ];

  const latestBlogPosts = blogPostsData.slice(0, 3);


  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center items-center text-center py-12 md:py-16 bg-gradient-to-br from-primary/10 via-background to-background rounded-lg shadow-xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover opacity-20"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-6 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            LUNAI: Premier Solutions for Lasting Beauty & Confidence
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            Experience transformative aesthetic and dental treatments with our expert team at LUNAI. Discover personalized treatments designed to enhance your natural beauty and boost your confidence. Our experts use the latest techniques for optimal results. Begin your journey to enhanced well-being today.
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              <Link href="/services">Explore Our Expert Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
              <Link href="/consultation">AI-Powered Virtual Consultation</Link>
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
                <CardTitle className="text-3xl font-headline text-primary">Welcome to LUNAI</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-lg text-card-foreground/90 space-y-4">
                <p>
                  At LUNAI, we believe everyone deserves to feel confident and radiant. Our state-of-the-art clinic offers a comprehensive suite of advanced aesthetic and dental treatments, delivered by highly experienced professionals dedicated to achieving exceptional, natural-looking results tailored to you.
                </p>
                <p>
                  We seamlessly integrate medical artistry with the latest technological advancements to provide personalized care that aligns with your unique aesthetic aspirations. Your journey to enhanced beauty and self-assurance starts here at LUNAI.
                </p>
              </CardContent>
            </div>
            <div className="relative h-64 md:h-full w-full min-h-[300px] md:min-h-full transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/about-us.jpeg"
                alt="Welcoming and professional clinic interior at LUNAI"
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
          Our Premier Aesthetic & Dental Services at LUNAI
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
                  {category.services.slice(0, 2).map(s => s.name).join(', ')} and more specialized treatments...
                </CardDescription>
                <Button asChild variant="outline" className="mt-auto w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-200" scroll={true}>
                  <Link href={`/services#${category.id}`}>Explore {category.title} Treatments <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Patient Transformations Section - Chosen Design */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          Witness Transformative Results at LUNAI
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
                <DynamicCarouselItem key={`chosen-carousel-${transform.id}`} className="sm:pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                     <Card 
                      className="relative flex flex-col h-96 bg-card shadow-lg rounded-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-primary/20 animate-fadeIn"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <Image
                        src={transform.afterImageUrl} 
                        alt={`Showcasing results for ${transform.treatment} at LUNAI`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={transform.afterHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                      <div className="relative mt-auto p-4 z-10">
                        <h3 className="text-lg font-headline text-white mb-1">{transform.treatment}</h3>
                        <Button
                          asChild
                          variant="link"
                          className="text-white p-0 hover:text-white/80 font-semibold text-sm"
                        >
                          <Link href={`/gallery#${transform.id}`}>
                            View Result <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
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
            <Link href="/gallery">Discover All Transformations</Link>
          </Button>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          Why Entrust LUNAI?
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

      {/* Step Inside LUNAI Section */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          Experience the LUNAI Difference
        </h2>
        <div className="text-center mb-10 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg text-foreground/80">
            Step into a sanctuary of calm and sophistication at LUNAI, where advanced aesthetic technology meets unparalleled patient care. Our clinic is meticulously designed with your comfort, privacy, and well-being as our foremost priorities, ensuring a serene and welcoming atmosphere for every visit.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl animate-fadeIn group" style={{ animationDelay: '0.3s' }}>
            <Image
              src="https://placehold.co/800x600.png"
              alt="Luxurious and welcoming clinic reception area at LUNAI"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="clinic reception"
            />
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl animate-fadeIn group" style={{ animationDelay: '0.5s' }}>
            <Image
              src="https://placehold.co/800x600.png"
              alt="Modern, clean, and advanced treatment room at LUNAI"
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
          Valued Client Experiences at LUNAI
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderTestimonials.map((testimonial, index) => (
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
          Expert Insights from Our LUNAI Blog
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
                  <Link href={post.slug}>Read Full Article <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/blog">Explore All LUNAI Blog Posts</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action for Consultation */}
      <section className="py-16 bg-primary text-primary-foreground rounded-lg shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-headline font-bold mb-6">Ready to Discover Your Best Self with LUNAI?</h2>
          <p className="text-xl mb-8">
            Our advanced AI-powered virtual consultant is ready to guide you towards your ideal aesthetic or dental treatment at LUNAI.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90 hover:text-primary">
            <Link href="/consultation">Begin Your Expert Virtual Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
