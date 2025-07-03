"use client";

import * as React from 'react';
import { useTranslations } from '@/hooks/use-translations';
import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { FeaturedServicesSection } from '@/components/home/featured-services-section';
import { TransformationsSection } from '@/components/home/transformations-section';
import { WhyChooseUsSection } from '@/components/home/why-choose-us-section';
import { ExperienceSection } from '@/components/home/experience-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { BlogSection } from '@/components/home/blog-section';
import { CtaSection } from '@/components/home/cta-section';

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
