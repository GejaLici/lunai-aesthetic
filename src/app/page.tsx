
"use client";

import * as React from 'react';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { Skeleton } from '@/components/ui/skeleton';


const FeaturedServicesSection = dynamic(() => import('@/components/home/featured-services-section').then(mod => mod.FeaturedServicesSection));
const TransformationsSection = dynamic(() => import('@/components/home/transformations-section').then(mod => mod.TransformationsSection), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
});
const WhyChooseUsSection = dynamic(() => import('@/components/home/why-choose-us-section').then(mod => mod.WhyChooseUsSection));
const ExperienceSection = dynamic(() => import('@/components/home/experience-section').then(mod => mod.ExperienceSection));

const TestimonialsSection = dynamic(() => import('@/components/home/testimonials-section').then(mod => mod.TestimonialsSection), {
  loading: () => <Skeleton className="h-[250px] w-full" />,
});
const BlogSection = dynamic(() => import('@/components/home/blog-section').then(mod => mod.BlogSection), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
});
const CtaSection = dynamic(() => import('@/components/home/cta-section').then(mod => mod.CtaSection));

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <AboutSection />
      <FeaturedServicesSection />
      <WhyChooseUsSection />
      <TransformationsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
    </div>
  );
}
