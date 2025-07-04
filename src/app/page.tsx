
"use client";

import * as React from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from '@/hooks/use-translations';
import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { WhyChooseUsSection } from '@/components/home/why-choose-us-section';
import { ExperienceSection } from '@/components/home/experience-section';
import { Skeleton } from '@/components/ui/skeleton';


const FeaturedServicesSection = dynamic(() => import('@/components/home/featured-services-section').then(mod => mod.FeaturedServicesSection), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
});
const TransformationsSection = dynamic(() => import('@/components/home/transformations-section').then(mod => mod.TransformationsSection), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
  ssr: false
});
const TestimonialsSection = dynamic(() => import('@/components/home/testimonials-section').then(mod => mod.TestimonialsSection), {
  loading: () => <Skeleton className="h-[250px] w-full" />,
});
const BlogSection = dynamic(() => import('@/components/home/blog-section').then(mod => mod.BlogSection), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
});
const CtaSection = dynamic(() => import('@/components/home/cta-section').then(mod => mod.CtaSection));

export default function HomePage() {
  const t = useTranslations('HomePage');
  const tServices = useTranslations('services');
  const tBlog = useTranslations('blogPosts');

  return (
    <div className="space-y-16">
      <HeroSection t={t} />
      <AboutSection t={t} />
      <FeaturedServicesSection t={t} tServices={tServices} />
      <TransformationsSection t={t} tServices={tServices} />
      <WhyChooseUsSection t={t} />
      <ExperienceSection t={t} />
      <TestimonialsSection t={t} />
      <BlogSection t={t} tBlog={tBlog} />
      <CtaSection t={t} />
    </div>
  );
}
