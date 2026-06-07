import React, { useEffect } from 'react';
import { testimonials } from '@/data/homeData';
import TestimonialCard from '../TestimonialCard';

export default function TestimonialSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Swiper) {
      new (window as any).Swiper(".home1-testimonial-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 24,
        autoplay: {
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".testimonial-slider-next",
          prevEl: ".testimonial-slider-prev",
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
    <div className="home2-testimonial-section">
      <div className="container">
        <div className="row justify-content-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2>Hear It from Travelers</h2>
              <p>We go beyond just booking trips—we create unforgettable travel experiences that match your dreams!</p>
            </div>
          </div>
        </div>
        <div className="row mb-40">
          <div className="col-lg-12">
            <div className="swiper home1-testimonial-slider">
              <div className="swiper-wrapper">
                {testimonials.map((testimonial) => (
                  <div className="swiper-slide" key={testimonial.id}>
                    <TestimonialCard testimonialData={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="review-and-slider-btn wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <a href="https://www.trustpilot.com/" className="single-rating">
            <strong>4.5</strong>
            <div className="trustpilot-rating">
              <img src="/images/trustpilot-logo.svg" alt="" />
              <div className="rating-area">
                <img src="/images/trustpilot-star.svg" alt="" />
                <span>(2K reviews)</span>
              </div>
            </div>
          </a>
          <div className="slider-btn-grp">
            <div className="slider-btn testimonial-slider-prev">
              <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049" strokeWidth="1.5" strokeLinecap="round"></path>
                </g>
              </svg>
            </div>
            <div className="slider-btn testimonial-slider-next">
              <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049" strokeWidth="1.5" strokeLinecap="round"></path>
                </g>
              </svg>
            </div>
          </div>
          <a href="https://www.tripadvisor.com/" className="single-rating">
            <strong>4.5</strong>
            <div className="tripadvisor-rating">
              <img src="/images/tripadvisor-logo.svg" alt="" />
              <div className="rating-area">
                <span>Reviews</span>
                <img src="/images/tripadvisor-start.svg" alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
