'use client';

import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CaseStudySection from '@/components/sections/CaseStudySection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <CaseStudySection />
      <ExpertiseSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
