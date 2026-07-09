import LegalPageLayout from '@/components/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Refund Policy | Taxi Service Bihar",
  description: "Read the Refund Policy of Taxi Service Bihar, owned and operated by Mohd Azim Ahmed Shaikh. Learn how we handle cancellations and process refunds.",
  alternates: {
    canonical: "https://www.taxiservicebihar.com/refund-policy",
  },
};

export default function Page() {
  return (
    <LegalPageLayout title="Refund Policy" subtitle="Last Updated: July 2026">
      <div style={{ color: '#111827', fontFamily: 'var(--font-poppins)', lineHeight: '1.6' }}>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          At Taxi Service Bihar, we strive to offer the most transparent booking and cancellation experience. Please review our policies regarding refunds below.
        </p>

        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px', fontWeight: '500' }}>
          Taxi Service Bihar is owned and operated by <strong>Mohd Azim Ahmed Shaikh</strong>, based in Patna, Bihar, India.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>1. Cancellation Before Pickup</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '16px' }}>
          We understand that travel plans can change unexpectedly. You are eligible for a full refund of any advance amount paid if:
        </p>
        <ul style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px', paddingLeft: '20px' }}>
          <li>You cancel your taxi booking at least 24 hours prior to the scheduled pickup time.</li>
          <li>The cancellation is initiated by us or our driver partner due to vehicle breakdown, driver unavailability, or severe weather conditions.</li>
        </ul>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          Cancellations requested less than 24 hours prior to the pickup time may be subject to a nominal cancellation charge, which will be deducted from your advance payment before processing the refund.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>2. Refund Processing</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          Once your cancellation request is verified and approved under our terms, the refund amount will be calculated and processed. All approved refunds are credited back to the customer's original payment method (Credit/Debit Card, UPI, Net Banking, or Digital Wallet) or bank account within <strong>5 to 7 business days</strong>.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>3. Contact Information</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '8px' }}>
          For any refund-related queries, escalation, or cancellation requests, please contact us directly:
        </p>
        <ul style={{ fontSize: '15px', color: '#4B5563', marginBottom: '0', paddingLeft: '20px', listStyleType: 'none' }}>
          <li><strong>Owner Name:</strong> Mohd Azim Ahmed Shaikh</li>
          <li><strong>Contact Email:</strong> <a href="mailto:taxiservicepatnabihar@gmail.com" style={{ color: '#4F46E5' }}>taxiservicepatnabihar@gmail.com</a></li>
          <li><strong>Contact Number:</strong> <a href="tel:+919262550190" style={{ color: '#4F46E5' }}>+91 92625 50190</a></li>
        </ul>
      </div>
    </LegalPageLayout>
  );
}
