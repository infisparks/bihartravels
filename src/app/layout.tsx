import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/bootstrap-icons.css";
import "../../public/css/animate.min.css";
import "../../public/css/swiper-bundle.min.css";
import "../../public/css/boxicons.min.css";
import "../../public/css/style.css";

const SITE_URL = "https://www.taxiservicebihar.com";
const THUMBNAIL = "https://raw.githubusercontent.com/infisparks/images/refs/heads/main/bihartravel/thumbnail.png";

export const metadata: Metadata = {
  title: "Taxi Service Bihar – Your Journey, Our Priority!",
  description: "Fast, safe & affordable taxi service across Bihar. 24x7 Patna Airport/Junction pickups, one-way taxi, outstation tour packages with 2000+ driver network. Book instantly via WhatsApp or Call +91 81025 50190.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/images/fav-icon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Taxi Service Bihar – Your Journey, Our Priority!",
    description: "Fast, safe & affordable taxi service across Bihar. Book one-way, outstation & round-trip taxis instantly. 2000+ drivers. 24x7 service.",
    siteName: "Taxi Service Bihar",
    images: [
      {
        url: THUMBNAIL,
        width: 1200,
        height: 630,
        alt: "Taxi Service Bihar – Your Journey, Our Priority",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Service Bihar – Your Journey, Our Priority!",
    description: "Fast, safe & affordable taxi service across Bihar. Book one-way, outstation & round-trip taxis instantly. 2000+ drivers. 24x7 service.",
    images: [THUMBNAIL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Courgette&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="tt-magic-cursor">
        {/* Google tag (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-18220328304" 
          strategy="afterInteractive" 
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Base configs
            gtag('config', 'AW-18220328304');
            gtag('config', 'AW-18221151440');
            gtag('config', 'AW-7666815030');

            // Phone tracking config:
            // Using the known conversion label for AW-18221151440 (9aYZCOW007ocENDpwvBD)
            gtag('config', 'AW-18221151440/9aYZCOW007ocENDpwvBD', {
              'phone_conversion_number': '+91 81025 50190'
            });

            // Global conversion reporter for Click to call
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              // Track Click to call (2)
              gtag('event', 'conversion', {
                  'send_to': 'AW-18220328304/d7fWCPLR68ccEPDKkPBD',
                  'value': 1.0,
                  'currency': 'INR'
              });
              // Track Click to call (1)
              gtag('event', 'conversion', {
                  'send_to': 'AW-7666815030/Bm-eCLag6cccEPDKkPBD',
                  'value': 1.0,
                  'currency': 'INR',
                  'event_callback': callback
              });
              return false;
            };
          `}
        </Script>

        <div id="magic-cursor">
          <div id="ball"></div>
        </div>

        {children}

        {/* Scripts */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/popper.min.js" strategy="lazyOnload" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.fancybox.min.js" strategy="lazyOnload" />
        <Script src="/js/select-dropdown.js" strategy="lazyOnload" />
        <Script src="/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
