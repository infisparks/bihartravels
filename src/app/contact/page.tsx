import LegalPageLayout from '@/components/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Taxi Service Bihar",
  description: "Get in touch with Taxi Service Bihar. Contact business owner Mohd Azim Ahmed Shaikh for reliable 24x7 taxi services across all districts of Bihar.",
  alternates: {
    canonical: "https://www.taxiservicebihar.com/contact",
  },
};

export default function Page() {
  return (
    <LegalPageLayout title="Contact Us" subtitle="Get in touch with us for booking and inquiries">
      <div style={{ color: '#111827', fontFamily: 'var(--font-poppins)', lineHeight: '1.6' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#111827' }}>Business Contact Details</h2>
        <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '30px' }}>
          If you have any questions, booking inquiries, or feedback, feel free to contact us. We are available 24/7 to assist you.
        </p>

        {/* Business details table */}
        <div className="table-responsive mb-4" style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
          <table className="table table-borderless m-0" style={{ fontSize: '15px' }}>
            <tbody>
              <tr className="border-bottom" style={{ borderColor: '#E5E7EB' }}>
                <td className="p-3 text-muted" style={{ width: '220px', fontWeight: '500' }}>Business Owner</td>
                <td className="p-3" style={{ fontWeight: '600', color: '#111827' }}>Mohd Azim Ahmed Shaikh</td>
              </tr>
              <tr className="border-bottom" style={{ borderColor: '#E5E7EB' }}>
                <td className="p-3 text-muted" style={{ fontWeight: '500' }}>Brand</td>
                <td className="p-3" style={{ fontWeight: '600', color: '#111827' }}>Taxi Service Bihar</td>
              </tr>
              <tr className="border-bottom" style={{ borderColor: '#E5E7EB' }}>
                <td className="p-3 text-muted" style={{ fontWeight: '500' }}>Business Type</td>
                <td className="p-3" style={{ color: '#111827' }}>Individual Sole Proprietor</td>
              </tr>
              <tr className="border-bottom" style={{ borderColor: '#E5E7EB' }}>
                <td className="p-3 text-muted" style={{ fontWeight: '500' }}>Operating Area</td>
                <td className="p-3" style={{ color: '#111827' }}>All Districts of Bihar</td>
              </tr>
              <tr className="border-bottom" style={{ borderColor: '#E5E7EB' }}>
                <td className="p-3 text-muted" style={{ fontWeight: '500' }}>Email Address</td>
                <td className="p-3">
                  <a href="mailto:taxiservicepatnabihar@gmail.com" style={{ color: '#4F46E5', fontWeight: '500' }}>
                    taxiservicepatnabihar@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-muted" style={{ fontWeight: '500' }}>Phone / WhatsApp</td>
                <td className="p-3">
                  <a href="tel:+919262550190" style={{ color: '#4F46E5', fontWeight: '600' }}>
                    +91 92625 50190
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Call to actions */}
        <div className="d-flex flex-wrap gap-3 mt-4">
          <a href="tel:+919262550190" className="primary-btn1" style={{ textDecoration: 'none' }}>
            <span>Call: +91 92625 50190</span>
          </a>
          <a href="https://wa.me/919262550190?text=Hello%20Taxi%20Service%20Bihar%2C%20I%20want%20to%20book%20a%20taxi." className="primary-btn1 two black-bg" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <span>WhatsApp Booking</span>
          </a>
        </div>
      </div>
    </LegalPageLayout>
  );
}
