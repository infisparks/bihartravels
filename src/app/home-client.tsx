"use client";

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/home/HomeBanner';
import HomeFilter from '@/components/home/HomeFilter';
import PopularPackages from '@/components/home/PopularPackages';
import ServicesSection from '@/components/home/ServicesSection';

// Defer non-critical and heavy animation components
const AboutSection = dynamic(() => import('@/components/home/AboutSection'), { ssr: false });
const OfferBanner = dynamic(() => import('@/components/home/OfferBanner'), { ssr: false });
const AwardBanner = dynamic(() => import('@/components/home/AwardBanner'), { ssr: false });
const TestimonialSection = dynamic(() => import('@/components/home/TestimonialSection'), { ssr: false });
const CounterSection = dynamic(() => import('@/components/home/CounterSection'), { ssr: false });

export default function HomeClient() {
  return (
    <>
      <Header />
      <main>
        <HomeBanner />
        <HomeFilter />
        <PopularPackages />
        <ServicesSection />
        <AboutSection />
        <OfferBanner />
        <AwardBanner />
        <TestimonialSection />
        <CounterSection />
      </main>
      <Footer />
    </>
  );
}
