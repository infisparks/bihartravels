import LegalPageLayout from '@/components/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms & Conditions | Taxi Service Bihar",
  description: "Read the Terms and Conditions of Taxi Service Bihar, owned and operated by Mohd Azim Ahmed Shaikh. Learn about our booking, cancellation, and refund policies.",
  alternates: {
    canonical: "https://www.taxiservicebihar.com/terms-and-conditions",
  },
};

export default function Page() {
  return (
    <LegalPageLayout title="Terms & Conditions" subtitle="Last Updated: July 2026">
      <div style={{ color: '#111827', fontFamily: 'var(--font-poppins)', lineHeight: '1.6' }}>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          Welcome to Taxi Service Bihar. Please read these Terms & Conditions carefully before booking a ride or using our services. By booking a taxi through our platform, you agree to comply with and be bound by the following terms.
        </p>

        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px', fontWeight: '500' }}>
          Taxi Service Bihar is owned and operated by <strong>Mohd Azim Ahmed Shaikh</strong>, based in Patna, Bihar, India.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>1. Booking Policy</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          All bookings are subject to vehicle availability. Bookings can be made online via our booking forms, over the phone, or via WhatsApp. Standard rates are provided upfront, but final fares may vary depending on actual route deviations, waiting times, and additional toll or parking fees.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>2. Cancellation Policy</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          Customers can cancel their bookings before pickup. If a booking is cancelled at least 24 hours prior to the scheduled pickup time, no cancellation fee will apply. Cancellations made within 24 hours of the pickup time may attract a standard cancellation fee.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>3. Refund Policy</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          Refunds for eligible cancellations will be processed within 5-7 business days to the customer's original payment method or bank account. If the ride is cancelled by the driver or due to technical/vehicle breakdowns, a full refund of any advance payment will be initiated.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>4. Driver Availability</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          We coordinate bookings with our network of verified driver partners. While we guarantee a driver and vehicle will be dispatched, we are not liable for delayed pickups caused by severe traffic congestion, weather emergencies, force majeure, or sudden road blocks.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>5. User Responsibilities</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          Passengers are responsible for ensuring that they travel with valid ID proofs and do not carry illegal substances or violate any transport guidelines. Passengers must treat driver partners with respect. Any damage to the vehicle caused by the passenger during the trip will be billed directly to the passenger.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>6. Limitation of Liability</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          Taxi Service Bihar operates as a booking and coordination platform. We are not directly liable for any loss, damage, injury, delay, or inconvenience suffered by the passenger during the journey, which is the direct operating responsibility of the respective driver partner.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>7. Contact Information</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '8px' }}>
          For any questions regarding these Terms & Conditions, please contact us:
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
