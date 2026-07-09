"use client";

import React from 'react';
import { serviceFeatures } from '@/data/homeData';
import { trackWhatsAppClick } from '@/utils/gtag';

export default function ServicesSection() {
  return (
    <div className="home2-service-section mb-100">
      <div className="container">
        <div className="service-wrapper two">
          <div className="row justify-content-center wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-9">
              <div className="section-title">
                <h2>Taxi Service Bihar – Your Journey, Our Priority!</h2>
                <svg height="6" viewBox="0 0 872 6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM867 3.5L872 5.88675V0.113249L867 2.5V3.5ZM4.5 3.5H867.5V2.5H4.5V3.5Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <ul className="service-list wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            {serviceFeatures.map((service) => (
              <li className="single-service" key={service.id}>
                <div className="icon" dangerouslySetInnerHTML={{ __html: service.iconSvg }} />
                <div className="content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="bottom-area d-flex justify-content-center wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="batch">
              <span>Book Your Bihar Taxi Now!</span>
            </div>
            <div className="batch two">
              <a href="https://wa.me/919262550190?text=Hello%20Taxi%20Service%20Bihar%2C%20I%20want%20to%20book%20a%20taxi." onClick={trackWhatsAppClick} target="_blank" rel="noopener noreferrer">
                Book Now
                <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
