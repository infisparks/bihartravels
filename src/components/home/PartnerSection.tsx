import React from 'react';
import { partnerImages } from '@/data/homeData';

export default function PartnerSection() {
  return (
    <div className="partner-section mb-100">
      <div className="container">
        <div className="partner-title wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <h5>Those Company You Can Easily Trust!</h5>
        </div>
        <div className="partner-wrap">
          <div className="marquee">
            <div className="marquee__group">
              {partnerImages.map((img, idx) => (
                <a href="#" key={`group1-${idx}`}>
                  <img src={img} alt="" />
                </a>
              ))}
            </div>
            <div aria-hidden="true" className="marquee__group">
              {partnerImages.map((img, idx) => (
                <a href="#" key={`group2-${idx}`}>
                  <img src={img} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
