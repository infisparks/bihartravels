"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/home/HomeBanner';
import HomeFilter from '@/components/home/HomeFilter';
import PopularPackages from '@/components/home/PopularPackages';
import ServicesSection from '@/components/home/ServicesSection';
import TopDestinations from '@/components/home/TopDestinations';
import AboutSection from '@/components/home/AboutSection';
import OneDayTrip from '@/components/home/OneDayTrip';
import OfferBanner from '@/components/home/OfferBanner';
import OfferPackages from '@/components/home/OfferPackages';
import AwardBanner from '@/components/home/AwardBanner';
import PartnerSection from '@/components/home/PartnerSection';
import BlogSection from '@/components/home/BlogSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import CounterSection from '@/components/home/CounterSection';
import GallerySection from '@/components/home/GallerySection';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HomeBanner />
        <HomeFilter />
        <PopularPackages />
        <ServicesSection />
        <TopDestinations />
        <AboutSection />
        <OneDayTrip />
        <OfferBanner />
        <OfferPackages />
        <AwardBanner />
        <PartnerSection />
        <BlogSection />
        <TestimonialSection />
        <CounterSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
