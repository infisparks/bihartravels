import LegalPageLayout from '@/components/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cancellation Policy | Taxi Service Bihar",
  description: "Read the Cancellation Policy of Taxi Service Bihar, owned and operated by Mohd Azim Ahmed Shaikh. Learn about our cancellation rules, timelines, and charges.",
  alternates: {
    canonical: "https://www.taxiservicebihar.com/cancellation-policy",
  },
};

export default function Page() {
  return (
    <LegalPageLayout title="Cancellation Policy" subtitle="Last Updated: July 2026">
      <div style={{ color: '#111827', fontFamily: 'var(--font-poppins)', lineHeight: '1.6' }}>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          At Taxi Service Bihar, we believe in a transparent and fair cancellation policy for both our passengers and driver partners. Please review our rules and charges regarding ride cancellations.
        </p>

        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px', fontWeight: '500' }}>
          Taxi Service Bihar is owned and operated by <strong>Mohd Azim Ahmed Shaikh</strong>, based in Patna, Bihar, India.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>1. Cancellation by the Customer</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '16px' }}>
          Customers can cancel their bookings via our phone support or WhatsApp line. The following rules apply:
        </p>
        <ul style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px', paddingLeft: '20px' }}>
          <li><strong>Free Cancellation:</strong> No cancellation charges apply if the booking is cancelled <strong>24 hours or more</strong> prior to the scheduled pickup time.</li>
          <li><strong>Late Cancellation:</strong> If you cancel within <strong>24 hours</strong> of the scheduled pickup time, a nominal cancellation fee (up to 10% of the booking value or the advance payment amount) may be charged to cover driver allocation and routing costs.</li>
          <li><strong>No-Show Fee:</strong> If you do not show up at the designated pickup location within 30 minutes of the scheduled pickup time without prior notification, the ride will be marked as a no-show, and any advance payment will be forfeited.</li>
        </ul>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>2. Cancellation by Driver or Platform</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          In rare circumstances, such as vehicle breakdown, accident, driver emergency, or extreme weather conditions, we or our driver partners may need to cancel a booking. In such cases, we will immediately offer a replacement vehicle or process a <strong>100% refund</strong> of any advance amount paid, without any deductions.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>3. How to Cancel</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          To request a cancellation, please call us directly or message our support team on WhatsApp at <a href="tel:+918102550190" style={{ color: '#4F46E5', fontWeight: '600' }}>+91 81025 50190</a>. Make sure to provide your booking name and trip details.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>4. Contact Information</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '8px' }}>
          For any questions about cancellations, please contact:
        </p>
        <ul style={{ fontSize: '15px', color: '#4B5563', marginBottom: '0', paddingLeft: '20px', listStyleType: 'none' }}>
          <li><strong>Owner Name:</strong> Mohd Azim Ahmed Shaikh</li>
          <li><strong>Contact Email:</strong> <a href="mailto:taxiservicepatnabihar@gmail.com" style={{ color: '#4F46E5' }}>taxiservicepatnabihar@gmail.com</a></li>
          <li><strong>Contact Number:</strong> <a href="tel:+918102550190" style={{ color: '#4F46E5' }}>+91 81025 50190</a></li>
        </ul>
      </div>
    </LegalPageLayout>
  );
}
