import React from 'react';
import { topDestinations } from '@/data/homeData';
import DestinationCard from '../DestinationCard';

export default function TopDestinations() {
  return (
    <div className="home2-destination-section mb-100">
      <div className="container">
        <div className="section-title text-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <h2>Top Destinations</h2>
        </div>
        <div className="destination-slider-area">
          <div className="swiper home2-destination-slider">
            <div className="swiper-wrapper">
              {topDestinations.map((destination) => (
                <div className="swiper-slide" key={destination.id}>
                  <DestinationCard destinationData={destination} />
                </div>
              ))}
            </div>
          </div>
          <div className="slider-btn-grp two">
            <div className="slider-btn destination-slider-prev">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 5.31421H16V6.68564H0V5.31421Z"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.685714 6.68569C3.9104 6.68569 6.54629 3.84958 6.54629 0.825119V0.139404H5.17486V0.825119C5.17486 3.12181 3.12412 5.31426 0.685714 5.31426H0V6.68569H0.685714Z"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.685714 5.31421C3.9104 5.31421 6.54629 8.15032 6.54629 11.1748V11.8605H5.17486V11.1748C5.17486 8.87901 3.12412 6.68564 0.685714 6.68564H0V5.31421H0.685714Z"></path>
              </svg>
            </div>
            <div className="slider-btn destination-slider-next">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 7.31421H-3.8147e-06V8.68564H16V7.31421Z"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.3143 8.68569C12.0896 8.68569 9.45371 5.84958 9.45371 2.82512V2.1394H10.8251V2.82512C10.8251 5.12181 12.8759 7.31426 15.3143 7.31426H16V8.68569H15.3143Z"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.3143 7.31421C12.0896 7.31421 9.45371 10.1503 9.45371 13.1748V13.8605H10.8251V13.1748C10.8251 10.879 12.8759 8.68564 15.3143 8.68564H16V7.31421H15.3143Z"></path></g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
