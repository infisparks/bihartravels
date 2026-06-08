import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://taxiservicebihar.com";
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
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/jquery-ui.css" rel="stylesheet" />
        <link href="/css/bootstrap-icons.css" rel="stylesheet" />
        <link href="/css/animate.min.css" rel="stylesheet" />
        <link href="/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/slick-theme.css" />
        <link rel="stylesheet" href="/css/daterangepicker.css" />
        <link href="/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body className="tt-magic-cursor">
        {/* Google tag (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-18221151440" 
          strategy="afterInteractive" 
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18221151440');
          `}
        </Script>

        <div id="magic-cursor">
          <div id="ball"></div>
        </div>

        {children}

        {/* Scripts */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-ui.js" strategy="beforeInteractive" />
        <Script src="/js/moment.min.js" strategy="beforeInteractive" />
        <Script src="/js/daterangepicker.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/js/slick.js" strategy="beforeInteractive" />
        <Script src="/js/waypoints.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="beforeInteractive" />
        <Script src="/js/wow.min.js" strategy="beforeInteractive" />
        <Script src="/js/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.fancybox.min.js" strategy="beforeInteractive" />
        <Script src="/js/select-dropdown.js" strategy="lazyOnload" />
        <Script src="/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
