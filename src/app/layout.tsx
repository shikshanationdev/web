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
  title: "Shikshanation - Quality Education for All",
  description: "Shikshanation provides quality education through online courses, JEE/NEET preparation, and skill development programs.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
