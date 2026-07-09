"use client";

import React from 'react';
import { trackWhatsAppClick, trackCallClick } from '@/utils/gtag';

export default function TrustAndBusinessInfo() {
  const trustItems = [
    { icon: "bi bi-headset", title: "24×7 Customer Support", desc: "Always here to assist with your bookings and ride queries." },
    { icon: "bi bi-shield-check", title: "Verified Drivers", desc: "Background-checked, trained, and polite professional drivers." },
    { icon: "bi bi-lock-fill", title: "Secure Booking", desc: "Your data is fully protected; safe & private transfers guaranteed." },
    { icon: "bi bi-cash-stack", title: "Transparent Pricing", desc: "No hidden charges, no surprise toll or fuel costs on route." },
    { icon: "bi bi-airplane", title: "Airport Transfers", desc: "Prompt airport pickups and drops matching flight schedules." },
    { icon: "bi bi-cursor-fill", title: "Outstation Taxi", desc: "Intercity outstation services to any city or remote block." },
    { icon: "bi bi-geo-alt-fill", title: "Bihar Coverage", desc: "Safe, direct cabs connecting all districts of Bihar." },
    { icon: "bi bi-telephone-outbound-fill", title: "Customer Support", desc: "Instant phone booking and help desk always operational." },
  ];

  return (
    <div className="home2-trust-business-info-section mb-100" style={{ background: '#F5F6F8', padding: '80px 0', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container">
        
        {/* Trust Section */}
        <div className="row justify-content-center mb-50">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2>Our Trust Elements</h2>
              <p>Why thousands of passengers trust Taxi Service Bihar for their travel across the region.</p>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-60">
          {trustItems.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="trust-card p-4 h-100" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '10px', transition: 'all 0.3s' }}>
                <div className="icon-wrap mb-3 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(79, 70, 229, 0.1)', color: '#4F46E5' }}>
                  <i className={`${item.icon}`} style={{ fontSize: '24px' }}></i>
                </div>
                <h5 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', color: '#111827' }}>{item.title}</h5>
                <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Business Information Section */}
        <div className="row justify-content-center mb-40">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2>Business Information</h2>
              <p>Transparent and verified registration details for our services.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="business-info-card p-4 p-md-5" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px' }}>
              <div className="row g-4 text-center text-md-start">
                <div className="col-md-4 border-end border-md-end-none" style={{ borderColor: '#E5E7EB' }}>
                  <h6 style={{ fontSize: '13px', textTransform: 'uppercase', color: '#6B7280', letterSpacing: '0.05em', marginBottom: '8px' }}>Business Name</h6>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', margin: 0 }}>Taxi Service Bihar</p>
                </div>
                <div className="col-md-4 border-end border-md-end-none" style={{ borderColor: '#E5E7EB' }}>
                  <h6 style={{ fontSize: '13px', textTransform: 'uppercase', color: '#6B7280', letterSpacing: '0.05em', marginBottom: '8px' }}>Business Owner</h6>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', margin: 0 }}>Mohd Azim Ahmed Shaikh</p>
                </div>
                <div className="col-md-4">
                  <h6 style={{ fontSize: '13px', textTransform: 'uppercase', color: '#6B7280', letterSpacing: '0.05em', marginBottom: '8px' }}>Location</h6>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', margin: 0 }}>Patna, Bihar, India</p>
                </div>
                <div className="col-12 mt-4 pt-3 border-top" style={{ borderColor: '#E5E7EB' }}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                        <i className="bi bi-envelope-fill text-muted" style={{ fontSize: '18px' }}></i>
                        <span className="text-muted">Email:</span>
                        <a href="mailto:taxiservicepatnabihar@gmail.com" style={{ fontWeight: '600', color: '#4F46E5' }}>taxiservicepatnabihar@gmail.com</a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                        <i className="bi bi-telephone-fill text-muted" style={{ fontSize: '18px' }}></i>
                        <span className="text-muted">Phone:</span>
                        <a href="tel:+919262550190" onClick={trackCallClick} style={{ fontWeight: '600', color: '#4F46E5' }}>+91 92625 50190</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
