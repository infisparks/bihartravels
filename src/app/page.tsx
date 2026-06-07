"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/home/HomeBanner';
import HomeFilter from '@/components/home/HomeFilter';
import PopularPackages from '@/components/home/PopularPackages';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import OfferBanner from '@/components/home/OfferBanner';
import AwardBanner from '@/components/home/AwardBanner';
import TestimonialSection from '@/components/home/TestimonialSection';
import CounterSection from '@/components/home/CounterSection';

export default function Page() {
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
