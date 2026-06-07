import React, { useEffect } from 'react';
import { popularPackages } from '@/data/homeData';
import PackageCard from '../PackageCard';

export default function PopularPackages() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Swiper) {
      new (window as any).Swiper(".home1-trip-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 24,
        autoplay: {
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".package-slider-next",
          prevEl: ".package-slider-prev",
        },
        breakpoints: {
          280: { slidesPerView: 1 },
          386: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          992: { slidesPerView: 3, spaceBetween: 15 },
          1200: { slidesPerView: 3, spaceBetween: 15 },
          1400: { slidesPerView: 3 },
        },
      });
    }
  }, []);

  return (
    <div className="home2-package-slider-section mb-100">
      <div className="container">
        <div className="row justify-content-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2>Popular Bihar Taxi Routes</h2>
              <p>Most booked taxi routes across Bihar – reliable, comfortable, and on-time every time.</p>
            </div>
          </div>
        </div>
        <div className="row mb-40">
          <div className="col-lg-12">
            <div className="swiper home1-trip-slider">
              <div className="swiper-wrapper">
                {popularPackages.map((pkg) => (
                  <div className="swiper-slide" key={pkg.id}>
                    <PackageCard packageData={pkg} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="slider-btn-grp two">
              <div className="slider-btn package-slider-prev">
                <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 10.0571H22V11.9428H0V10.0571Z"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.942857 11.9429C5.3768 11.9429 9.00115 8.0432 9.00115 3.88457V2.94171H7.11543V3.88457C7.11543 7.04251 4.29566 10.0571 0.942857 10.0571H0V11.9429H0.942857Z"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.942857 10.0571C5.3768 10.0571 9.00115 13.9568 9.00115 18.1154V19.0583H7.11543V18.1154C7.11543 14.9587 4.29566 11.9428 0.942857 11.9428H0V10.0571H0.942857Z"></path>
                  </g>
                </svg>
              </div>
              <div className="slider-btn package-slider-next">
                <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M22 10.0571H-5.72205e-06V11.9428H22V10.0571Z"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.0571 11.9429C16.6232 11.9429 12.9989 8.0432 12.9989 3.88457V2.94171H14.8846V3.88457C14.8846 7.04251 17.7043 10.0571 21.0571 10.0571H22V11.9429H21.0571Z"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.0571 10.0571C16.6232 10.0571 12.9989 13.9568 12.9989 18.1154V19.0583H14.8846V18.1154C14.8846 14.9587 17.7043 11.9428 21.0571 11.9428H22V10.0571H21.0571Z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
