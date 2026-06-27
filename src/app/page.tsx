import { Metadata } from 'next';
import HomeClient from './home-client';

const SITE_URL = "https://www.taxiservicebihar.com";
const THUMBNAIL = "https://raw.githubusercontent.com/infisparks/images/refs/heads/main/bihartravel/thumbnail.png";

export const metadata: Metadata = {
  title: "Best Taxi Service in Bihar | Patna Airport Taxi | Outstation Cab",
  description: "Book reliable taxi service in Bihar. 24x7 Patna Airport taxi, outstation cab service, one-way taxi and local cab booking across Bihar.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    title: "Best Taxi Service in Bihar | Patna Airport Taxi | Outstation Cab",
    description: "Book reliable taxi service in Bihar. 24x7 Patna Airport taxi, outstation cab service, one-way taxi and local cab booking across Bihar.",
    siteName: "Taxi Service Bihar",
    images: [
      {
        url: THUMBNAIL,
        width: 1200,
        height: 630,
        alt: "Best Taxi Service in Bihar | Patna Airport Taxi | Outstation Cab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Taxi Service in Bihar | Patna Airport Taxi | Outstation Cab",
    description: "Book reliable taxi service in Bihar. 24x7 Patna Airport taxi, outstation cab service, one-way taxi and local cab booking across Bihar.",
    images: [THUMBNAIL],
  },
};

export default function Page() {
  return <HomeClient />;
}
