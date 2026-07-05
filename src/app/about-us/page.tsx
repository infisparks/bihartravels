import LegalPageLayout from '@/components/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Taxi Service Bihar",
  description: "Learn more about Taxi Service Bihar, owned and operated by Mohd Azim Ahmed Shaikh. Providing safe, reliable, and affordable taxi services across Bihar.",
  alternates: {
    canonical: "https://www.taxiservicebihar.com/about-us",
  },
};

export default function Page() {
  return (
    <LegalPageLayout title="About Us" subtitle="Learn more about Taxi Service Bihar">
      <div style={{ color: '#111827', fontFamily: 'var(--font-poppins)', lineHeight: '1.6' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#111827' }}>About Taxi Service Bihar</h2>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '16px' }}>
          Taxi Service Bihar is a premier taxi booking and travel assistance platform providing one-way, round-trip, airport transfer, railway station pickup, and outstation taxi services across all districts of Bihar.
        </p>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '30px' }}>
          We are committed to providing safe, reliable, affordable, and on-time transportation services through our extensive network of verified, professional drivers.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px', color: '#111827' }}>Ownership & Operations</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '16px' }}>
          Taxi Service Bihar is proudly owned and operated by <strong>Mohd Azim Ahmed Shaikh</strong>, based in Patna, Bihar, India.
        </p>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '30px' }}>
          Our primary goal is to make local, railway station, airport, and intercity outstation taxi booking simple, transparent, and available 24×7 to everyone across Bihar.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px', color: '#111827' }}>Our Priorities</h3>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '0' }}>
          Customer satisfaction, transparent fixed pricing (with no hidden fees), and reliable on-time service remain our highest priorities. Whether you are traveling for business, family, or holiday, we ensure your journey is safe and comfortable.
        </p>
      </div>
    </LegalPageLayout>
  );
}
