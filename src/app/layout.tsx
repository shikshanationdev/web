import { Navbar } from "@/components";
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import Script from "next/script";

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
  title: "Shiksha Nation - India's First AI-Enabled Bilingual Learning Platform",
  description: "Quality education through AI-powered online courses, JEE/NEET preparation, and skill development programs. Learn in Hindi & English with expert faculty.",
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: "SqOv08EL3rVNZLaQhI5gjSYn9J8-XDevKVDsdyUKK0g"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
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
      <body className={`${lexendDeca.className}`}>
        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />

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
        {/* End Google Tag Manager (noscript) */}

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
