"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, subtitle, children }: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main style={{ background: '#F5F6F8', minHeight: '80vh' }}>
        {/* Inner Page Banner */}
        <div className="home2-banner-section" style={{ height: '300px', position: 'relative', overflow: 'hidden' }}>
          <div className="banner-wrapper" style={{ height: '100%' }}>
            <div className="banner-img-area" style={{ height: '100%', position: 'absolute', width: '100%', top: 0, left: 0 }}>
              <Image
                src="/images/bihar-cab-highway.png"
                alt={title}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: 'cover', filter: 'brightness(0.4)' }}
              />
            </div>
            <div className="banner-content-wrap" style={{ position: 'relative', zIndex: 5, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'rgba(0, 0, 0, 0.5)' }}>
              <div className="container">
                <div className="banner-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <h1 style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {title}
                  </h1>
                  {subtitle && (
                    <p style={{ color: '#F3F4F6', fontSize: '16px', marginTop: '10px', fontWeight: '500' }}>
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="pt-60 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div 
                  className="bg-white p-4 p-md-5" 
                  style={{ 
                    borderRadius: '12px', 
                    border: '1px solid #E5E7EB', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.025)' 
                  }}
                >
                  {children}
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
