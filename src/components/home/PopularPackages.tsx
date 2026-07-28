"use client";

import React, { useRef } from 'react';
import { popularPackages } from '@/data/homeData';
import PackageCard from '../PackageCard';

export default function PopularPackages() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardItem = container.querySelector('.popular-route-card-item');
      const cardWidth = cardItem ? cardItem.getBoundingClientRect().width : 360;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="home2-package-slider-section mb-100">
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2>Popular Bihar Taxi Routes</h2>
              <p>Most booked taxi routes across Bihar – reliable, comfortable, and on-time every time.</p>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', width: '100%' }}>
          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="popular-routes-track"
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: '16px',
              paddingTop: '4px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {popularPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="popular-route-card-item"
                style={{
                  flex: '0 0 calc(33.333% - 16px)',
                  minWidth: '280px',
                  scrollSnapAlign: 'start',
                  boxSizing: 'border-box',
                }}
              >
                <PackageCard packageData={pkg} />
              </div>
            ))}
          </div>

          {/* Scoped CSS for responsive card widths */}
          <style jsx>{`
            .popular-routes-track::-webkit-scrollbar {
              display: none;
            }
            @media (max-width: 991px) {
              .popular-route-card-item {
                flex: 0 0 calc(50% - 12px) !important;
              }
            }
            @media (max-width: 575px) {
              .popular-route-card-item {
                flex: 0 0 100% !important;
                min-width: 100% !important;
              }
            }
          `}</style>

          {/* Navigation Buttons */}
          <div className="row mt-4">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="slider-btn-grp two d-flex gap-3">
                <button
                  type="button"
                  onClick={() => handleScroll('left')}
                  className="slider-btn package-slider-prev"
                  aria-label="Previous routes"
                  style={{
                    border: 'none',
                    background: 'var(--white-color, #ffffff)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 10.0571H22V11.9428H0V10.0571Z" fill="currentColor"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.942857 11.9429C5.3768 11.9429 9.00115 8.0432 9.00115 3.88457V2.94171H7.11543V3.88457C7.11543 7.04251 4.29566 10.0571 0.942857 10.0571H0V11.9429H0.942857Z" fill="currentColor"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.942857 10.0571C5.3768 10.0571 9.00115 13.9568 9.00115 18.1154V19.0583H7.11543V18.1154C7.11543 14.9587 4.29566 11.9428 0.942857 11.9428H0V10.0571H0.942857Z" fill="currentColor"></path>
                    </g>
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => handleScroll('right')}
                  className="slider-btn package-slider-next"
                  aria-label="Next routes"
                  style={{
                    border: 'none',
                    background: 'var(--white-color, #ffffff)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M22 10.0571H-5.72205e-06V11.9428H22V10.0571Z" fill="currentColor"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M21.0571 11.9429C16.6232 11.9429 12.9989 8.0432 12.9989 3.88457V2.94171H14.8846V3.88457C14.8846 7.04251 17.7043 10.0571 21.0571 10.0571H22V11.9429H21.0571Z" fill="currentColor"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M21.0571 10.0571C16.6232 10.0571 12.9989 13.9568 12.9989 18.1154V19.0583H14.8846V18.1154C14.8846 14.9587 17.7043 11.9428 21.0571 11.9428H22V10.0571H21.0571Z" fill="currentColor"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
