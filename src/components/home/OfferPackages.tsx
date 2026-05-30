import React from 'react';
import { specialOffers } from '@/data/homeData';
import PackageCard from '../PackageCard';

export default function OfferPackages() {
  return (
    <div className="home2-offer-package-section mb-100">
      <div className="container">
        <div className="row justify-content-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2>Last Minute Deals!</h2>
              <p>A curated list of the most popular travel packages based on different destinations.</p>
            </div>
          </div>
        </div>
        <div className="row gy-md-5 gy-4">
          {specialOffers.map((pkg, index) => {
            const delay = `${(index + 1) * 200}ms`;
            return (
              <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay={delay} data-wow-duration="1500ms" key={pkg.id}>
                <PackageCard packageData={pkg} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
