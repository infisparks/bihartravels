import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { PageDetailData } from '@/data/pagesData';

interface PageDetailTemplateProps {
  data: PageDetailData;
}

export default function PageDetailTemplate({ data }: PageDetailTemplateProps) {
  // WhatsApp link generator
  const getWhatsAppLink = (text: string) => {
    return `https://wa.me/918102550190?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <Header />
      <main>
        {/* Gallery Section */}
        <div className="destination-details-gallery-section mb-50">
          <div className="swiper destination-details-gallery-slider">
            <div className="swiper-wrapper" style={{ display: 'flex', gap: '15px', overflowX: 'auto', padding: '10px 0' }}>
              {data.galleryImages.map((img, idx) => (
                <div className="swiper-slide" key={idx} style={{ flex: '0 0 350px', borderRadius: '10px', overflow: 'hidden' }}>
                  <img src={img} alt={`${data.heading} Gallery ${idx + 1}`} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="destination-details-section mb-100">
          <div className="container">
            <div className="row justify-content-center mb-60">
              <div className="col-lg-10">
                <div className="destination-details-content">
                  <h2>{data.heading}</h2>
                  
                  <ul className="destination-info">
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

                  <p>{data.overview}</p>

                  <div style={{ marginTop: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <a href="tel:+918102550190" className="primary-btn1 two">
                      <span>Call for Price Booking</span>
                    </a>
                    <a href={getWhatsAppLink(`I want to book a taxi for: ${data.heading}`)} className="primary-btn1 two transparent">
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
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
                    img: "/images/tour-package-img2.jpg",
                    features: "4 Passengers | 2 Bags | AC | Music System"
                  },
                  {
                    name: "Ertiga (with Carrier)",
                    desc: "Spacious 6-seater vehicle with a robust top luggage carrier. Ideal for family trips, wedding travels, and airport drops with heavy bags.",
                    img: "/images/bihar-cab-highway.png",
                    features: "6 Passengers | 5 Bags | Roof Carrier | AC"
                  },
                  {
                    name: "Ertiga (without Carrier)",
                    desc: "Sleek and comfortable 6-seater MUV without a carrier. Perfect for local site visits, short weekend getaways, and smooth highway trips.",
                    img: "/images/bihar-cab-highway.png",
                    features: "6 Passengers | 2 Bags | Rear AC Vents | Music System"
                  },
                  {
                    name: "SUV (Bolero, Scorpio)",
                    desc: "Rugged and powerful 7-seater vehicles designed for rural roads, rough terrains, and pilgrimage sites with absolute durability.",
                    img: "/images/destination-dt-location-img3.jpg",
                    features: "7 Passengers | 4 Bags | High Clearance | AC"
                  },
                  {
                    name: "Innova Crysta",
                    desc: "Premium executive multi-purpose vehicle. Offers captain seats, high safety rating, dual-zone AC, and maximum luxury for long journeys.",
                    img: "/images/destination-dt-location-img2.jpg",
                    features: "7 Passengers | 4 Bags | Premium Interior | Dual AC"
                  },
                  {
                    name: "Tempo Traveller",
                    desc: "Perfect for large group outings, school picnics, or extended family pilgrimages. Available in 12, 17, and 26-seater variants with pushback seats.",
                    img: "/images/destination-dt-location-img5.jpg",
                    features: "9-26 Passengers | Large Boot | Pushback Seats | AC"
                  }
                ].map((car, idx) => (
                  <div className="col-lg-4 col-md-6" key={idx}>
                    <div className="why-choose-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#FFFFFF', transition: 'all 0.3s ease' }}>
                      <img src={car.img} alt={car.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                      <div style={{ padding: '20px' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>{car.name}</h4>
                        <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: '500', display: 'block', marginBottom: '12px', borderBottom: '1px solid #E5E7EB', paddingBottom: '8px' }}>
                          {car.features}
                        </span>
                        <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.5', marginBottom: '18px', height: '70px', overflow: 'hidden' }}>{car.desc}</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <a href="tel:+918102550190" style={{ flex: '1', textAlign: 'center', background: '#4F46E5', color: '#FFFFFF', padding: '10px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                            Call for Price
                          </a>
                          <a href={getWhatsAppLink(`I want to book: ${car.name} for ${data.heading}`)} style={{ flex: '1', textAlign: 'center', border: '1px solid #4F46E5', color: '#4F46E5', padding: '10px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold' }}>
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
                          <img src={place.img} alt={place.name} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
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
