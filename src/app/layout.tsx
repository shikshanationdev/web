import { Navbar } from "@/components";
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

import { Footer, FloatingContactWidget, TawkToWidget } from "@/components";
import { LearningStatsSection } from "@/components/HomePageSections";
import CopyrightSection from "@/components/HomePageSections/CopyrightSection";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shikshanation - Quality Education for All",
  description: "Shikshanation provides quality education through online courses, JEE/NEET preparation, and skill development programs.",
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Shikshanation',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shiksha Nation",
    "alternateName": "Shiksha Nation",
    "url": "https://shikshanation.com/",
    "logo": "https://shikshanation.com/_next/image?url=%2Fhome%2Flogo.webp&w=256&q=75",
    "sameAs": [
      "https://www.facebook.com/shikshanation24/",
      "https://x.com/shikshanation",
      "https://www.instagram.com/shikshanation/",
      "https://www.youtube.com/@Shiksha_Nation",
      "https://www.linkedin.com/company/shikshanation/"
    ]
  };
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="SqOv08EL3rVNZLaQhI5gjSYn9J8-XDevKVDsdyUKK0g" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shikshanation" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema)
          }}
        />
      </head>

      <body className={`${lexendDeca.className}`}>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T75L3CTC');`
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T75L3CTC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <Toaster position="bottom-center" />
        {children}
        <LearningStatsSection />
        <Footer />
        <CopyrightSection />
        <FloatingContactWidget />
        <TawkToWidget />
      </body>
    </html>
  );
}
