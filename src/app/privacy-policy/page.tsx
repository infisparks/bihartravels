import LegalPageLayout from '@/components/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Taxi Service Bihar",
  description: "Read the Privacy Policy of Taxi Service Bihar, owned and operated by Mohd Azim Ahmed Shaikh. Learn how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://www.taxiservicebihar.com/privacy-policy",
  },
};

export default function Page() {
  return (
    <LegalPageLayout title="Privacy Policy" subtitle="Last Updated: July 2026">
      <div style={{ color: '#111827', fontFamily: 'var(--font-poppins)', lineHeight: '1.6' }}>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          At Taxi Service Bihar, we prioritize the privacy of our visitors. This Privacy Policy document outlines the types of personal information that is collected and recorded by Taxi Service Bihar and how we use it.
        </p>

        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px', fontWeight: '500' }}>
          Taxi Service Bihar is owned and operated by <strong>Mohd Azim Ahmed Shaikh</strong>, based in Patna, Bihar, India.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>1. Data Collection</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '16px' }}>
          We collect personal information that you provide to us when booking a taxi, submitting a request form, or contacting us directly. This information may include:
        </p>
        <ul style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px', paddingLeft: '20px' }}>
          <li>Your name, phone number, and email address.</li>
          <li>Your pickup location, drop location, travel date, and time.</li>
          <li>Any other details you choose to share in relation to your travel booking.</li>
        </ul>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>2. Cookies</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          Taxi Service Bihar uses 'cookies' to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>3. Third-party Services</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          We do not sell, trade, or otherwise transfer your personal information to outside parties except to verified driver partners who require this information to execute your travel bookings. We may also share information with trusted third-party services that assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>4. Google Ads & Tracking Technologies</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          Our website uses Google Ads, Google Tag Manager, and conversion tracking tags. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>5. User Rights</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '24px' }}>
          Under data protection laws, you have the right to request access to the personal data we hold about you, request corrections to any inaccuracies, or request the deletion of your personal data from our systems.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px', marginBottom: '12px', color: '#111827' }}>6. Contact Information</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '8px' }}>
          If you have any questions about this Privacy Policy, please contact the business owner:
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
