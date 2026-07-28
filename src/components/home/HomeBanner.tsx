"use client";

import React from 'react';
import { bannerSlides } from '@/data/homeData';
import Image from 'next/image';
import { trackWhatsAppClick, trackCallClick } from '@/utils/gtag';

export default function HomeBanner() {
  return (
    <div className="home2-banner-section">
      <div className="swiper home2-banner-slider">
        <div className="swiper-wrapper">
          {bannerSlides.map((slide) => (
            <div className="swiper-slide" key={slide.id}>
              <div className="banner-wrapper">
                {slide.type === 'video' ? (
                  <div className="banner-video-area">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={slide.src}
                      poster="/images/popular/Ashoka Pillar and Buddhist heritage.png"
                      style={{ pointerEvents: 'none' }}
                    ></video>
                  </div>
                ) : (
                  <div className="banner-img-area" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      priority={slide.id === 2}
                      sizes="100vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}
                <div className="banner-content-wrap">
                  <div className="container">
                    <div className="banner-content">
                      {slide.id === 1 ? (
                        <h1>{slide.title}</h1>
                      ) : (
                        <h2>{slide.title}</h2>
                      )}
                      <p>{slide.description}</p>
                      <div className="banner-btn-group mt-30" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href={slide.callLink} onClick={trackCallClick} className="primary-btn1">
                          <span>Call: +91 81025 50190</span>
                        </a>
                        <a href={`https://wa.me/918102550190?text=${encodeURIComponent(slide.waText)}`} onClick={trackWhatsAppClick} className="primary-btn1 two black-bg">
                          <span>Book on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-btn-grp">
        <div className="slider-btn banner-slider-prev">
          <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 10.0571H22V11.9428H0V10.0571Z"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M0.942857 11.9429C5.3768 11.9429 9.00115 8.0432 9.00115 3.88457V2.94171H7.11543V3.88457C7.11543 7.04251 4.29566 10.0571 0.942857 10.0571H0V11.9429H0.942857Z"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M0.942857 10.0571C5.3768 10.0571 9.00115 13.9568 9.00115 18.1154V19.0583H7.11543V18.1154C7.11543 14.9587 4.29566 11.9428 0.942857 11.9428H0V10.0571H0.942857Z"></path>
            </g>
          </svg>
        </div>
        <div className="slider-btn banner-slider-next">
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
  );
}
