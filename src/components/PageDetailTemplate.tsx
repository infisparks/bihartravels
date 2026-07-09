"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { trackWhatsAppClick, trackCallClick } from '@/utils/gtag';
import { PageDetailData } from '@/data/pagesData';
import Image from 'next/image';
import "../../public/css/jquery.fancybox.min.css";

interface PageDetailTemplateProps {
  data: PageDetailData;
}

export default function PageDetailTemplate({ data }: PageDetailTemplateProps) {
  // WhatsApp link generator
  const getWhatsAppLink = (text: string) => {
    return `https://wa.me/919262550190?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner Section */}
        <div className="home2-banner-section" style={{ height: '480px', position: 'relative', overflow: 'hidden' }}>
          <div className="banner-wrapper" style={{ height: '100%' }}>
            <div className="banner-img-area" style={{ height: '100%', position: 'absolute', width: '100%', top: 0, left: 0 }}>
              <Image
                src={data.galleryImages[0] || "/images/bihar-cab-highway.png"}
                alt={data.heading}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: 'cover', filter: 'brightness(0.5)' }}
              />
            </div>
            <div className="banner-content-wrap" style={{ position: 'relative', zIndex: 5, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'rgba(0, 0, 0, 0.45)' }}>
              <div className="container">
                <div className="banner-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <h1 style={{ color: '#FFFFFF', fontSize: '38px', fontWeight: '800', textShadow: '2px 2px 8px rgba(0,0,0,0.8)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {data.heading}
                  </h1>
                  <p style={{ color: '#F3F4F6', fontSize: '18px', textShadow: '1px 1px 4px rgba(0,0,0,0.8)', marginTop: '15px', fontWeight: '500' }}>
                    Safe, Fast & Affordable 24x7 Taxi Service in Bihar
                  </p>
                  <div className="banner-btn-group mt-30" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
                    <a href="tel:+919262550190" onClick={trackCallClick} className="primary-btn1">
                      <span>Call: +91 92625 50190</span>
                    </a>
                    <a onClick={trackWhatsAppClick} href={getWhatsAppLink(`I want to book a taxi for: ${data.heading}`)} className="primary-btn1 two black-bg">
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="destination-details-section pt-60 mb-100">
          <div className="container">
            <div className="row justify-content-center mb-60">
              <div className="col-lg-10">
                <div className="destination-details-content">
                  <ul className="destination-info" style={{ marginBottom: '30px' }}>
                    {data.distance && (
                      <li>
                        <div className="content">
                          <span>Distance -</span> {data.distance}
                        </div>
                      </li>
                    )}
                    {data.duration && (
                      <li>
                        <div className="content">
                          <span>Duration -</span> {data.duration}
                        </div>
                      </li>
                    )}
                    <li>
                      <div className="content">
                        <span>Availability -</span> 24x7 Cabs
                      </div>
                    </li>
                  </ul>

                  <div 
                    style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151' }} 
                    dangerouslySetInnerHTML={{ __html: data.overview }}
                  />
                </div>
              </div>
            </div>

            {/* Fleet Section (CRITICAL - Ertiga with/without carrier, Sedan, SUV, Innova, Tempo Traveller) */}
            <div className="destination-dt-why-choose-section mb-100">
              <div className="section-title text-center mb-60">
                <h2>Our Available Fleet</h2>
                <p>Choose from our wide range of premium, sanitized vehicles tailored to your journey. Toll/parking is extra. No hidden fees.</p>
              </div>

              <div className="row g-4 justify-content-center">
                {[
                  {
                    name: "Sedan (Dzire, Etios)",
                    desc: "Perfect for up to 4 passengers. Compact, fuel-efficient, and fully air-conditioned for comfortable short or long-distance city rides.",
                    img: "/images/dzire_sedan.png",
                    features: "4 Passengers | 2 Bags | AC | Music System"
                  },
                  {
                    name: "Ertiga (with Carrier)",
                    desc: "Spacious 6-seater vehicle with a robust top luggage carrier. Ideal for family trips, wedding travels, and airport drops with heavy bags.",
                    img: "/images/ertiga_carrier.png",
                    features: "6 Passengers | 5 Bags | Roof Carrier | AC"
                  },
                  {
                    name: "Ertiga (without Carrier)",
                    desc: "Sleek and comfortable 6-seater MUV without a carrier. Perfect for local site visits, short weekend getaways, and smooth highway trips.",
                    img: "/images/ertiga_no_carrier.png",
                    features: "6 Passengers | 2 Bags | Rear AC Vents | Music System"
                  },
                  {
                    name: "SUV (Bolero, Scorpio)",
                    desc: "Rugged and powerful 7-seater vehicles designed for rural roads, rough terrains, and pilgrimage sites with absolute durability.",
                    img: "/images/scorpio_suv.png",
                    features: "7 Passengers | 4 Bags | High Clearance | AC"
                  },
                  {
                    name: "Innova Crysta",
                    desc: "Premium executive multi-purpose vehicle. Offers captain seats, high safety rating, dual-zone AC, and maximum luxury for long journeys.",
                    img: "/images/innova_crysta.png",
                    features: "7 Passengers | 4 Bags | Premium Interior | Dual AC"
                  },
                  {
                    name: "Tempo Traveller",
                    desc: "Perfect for large group outings, school picnics, or extended family pilgrimages. Available in 12, 17, and 26-seater variants with pushback seats.",
                    img: "/images/tempo_traveller.png",
                    features: "9-26 Passengers | Large Boot | Pushback Seats | AC"
                  }
                ].map((car, idx) => (
                  <div className="col-lg-4 col-md-6" key={idx}>
                    <div className="why-choose-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#FFFFFF', transition: 'all 0.3s ease' }}>
                      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                        <Image
                          src={car.img}
                          alt={car.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ padding: '20px' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>{car.name}</h4>
                        <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: '500', display: 'block', marginBottom: '12px', borderBottom: '1px solid #E5E7EB', paddingBottom: '8px' }}>
                          {car.features}
                        </span>
                        <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.5', marginBottom: '18px', height: '70px', overflow: 'hidden' }}>{car.desc}</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <a href="tel:+919262550190" onClick={trackCallClick} style={{ flex: '1', textAlign: 'center', background: '#4F46E5', color: '#FFFFFF', padding: '10px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                            Call for Price
                          </a>
                          <a onClick={trackWhatsAppClick} href={getWhatsAppLink(`I want to book: ${car.name} for ${data.heading}`)} style={{ flex: '1', textAlign: 'center', border: '1px solid #4F46E5', color: '#4F46E5', padding: '10px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tourist Sights Section (Conditional) */}
            {data.touristPlaces && data.touristPlaces.length > 0 && (
              <div className="location-slider-wrap mb-100">
                <h4>Popular Sights & Sights on the Way</h4>
                <div className="row g-4">
                  {data.touristPlaces.map((place, idx) => (
                    <div className="col-md-4" key={idx}>
                      <div className="location-card">
                        <div className="location-img">
                          <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                            <Image
                              src={place.img}
                              alt={place.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        </div>
                        <div className="location-content">
                          <h6>{place.name}</h6>
                          <p style={{ fontSize: '13px', color: '#6B7280', marginTop: '5px' }}>{place.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Us Section */}
            <div className="destination-dt-why-choose-section mb-100">
              <div className="row justify-content-center mb-50">
                <div className="col-xl-6 col-lg-8">
                  <div className="section-title text-center">
                    <h2>Why Book Cabs With Us?</h2>
                    <p>We are Bihar's most trusted taxi service agency, committed to providing clean, safe, and stress-free rides.</p>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="why-choose-card">
                    <h4>Local Expertise</h4>
                    <p>Our drivers are locals who know the highway networks, toll rules, best regional stops, and tourist hotspots thoroughly.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="why-choose-card">
                    <h4>No Hidden Fees</h4>
                    <p>We guarantee complete transparency. Call us to lock your pricing quote. No surprise fuel hikes or driver boarding charges.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="why-choose-card">
                    <h4>24/7 Booking Support</h4>
                    <p>Need a late-night pickup or an early-morning train catch? Our customer care is awake 24/7 to manage your bookings.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="destination-dt-faq-section mb-100">
              <div className="container">
                <div className="faq-area">
                  <div className="row justify-content-center mb-50">
                    <div className="col-xl-6 col-lg-8">
                      <div className="section-title text-center">
                        <h2>Questions & Answers</h2>
                        <p>Frequently asked questions about {data.heading}.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                      <div className="faq-wrap">
                        {data.faqs.map((faq, idx) => (
                          <div className="accordion-item" key={idx} style={{ borderBottom: '1px solid #E5E7EB', padding: '15px 0' }}>
                            <h5 style={{ fontSize: '16px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
                              Q: {faq.question}
                            </h5>
                            <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.6' }}>
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
