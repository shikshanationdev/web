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
  title: "Best AI-Powered Online Learning Platform | Shiksha Nation",
  description:
    "Best AI-based Online courses for classes 6–12, JEE, NEET & CUET. Learn with expert teachers anytime, anywhere to improve academic performance.",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Shikshanation",
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
    name: "Shiksha Nation",
    alternateName: "Shiksha Nation",
    url: "https://shikshanation.com/",
    logo: "https://shikshanation.com/_next/image?url=%2Fhome%2Flogo.webp&w=256&q=75",
    sameAs: [
      "https://www.facebook.com/shikshanation24/",
      "https://x.com/shikshanation",
      "https://www.instagram.com/shikshanation/",
      "https://www.youtube.com/@Shiksha_Nation",
      "https://www.linkedin.com/company/shikshanation/",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Shiksha Nation and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shiksha Nation is an online learning platform that offers live classes, recorded lessons, notes, and test series. Students can study anytime, anywhere, using our website or mobile app.",
        },
      },
      {
        "@type": "Question",
        name: "Which classes and exams do you cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide learning content for Classes 6 to 12, and prep courses for entrance exams like NEET, JEE, CUET, and more.",
        },
      },
      {
        "@type": "Question",
        name: "How can I enroll in a course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can explore available courses on our website or app, select your preferred course, and complete the enrollment process online.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide both school-level and competitive exam preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide learning content for Classes 6 to 12, and prep courses for entrance exams like NEET, JEE, CUET, and more.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods are accepted?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept all major payment methods, including credit/debit cards, UPI, net banking, and wallets.",
        },
      },
      {
        "@type": "Question",
        name: "Are your classes live, recorded, or both?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer both live interactive classes and pre-recorded video lessons. You can attend live sessions and revisit recorded content anytime.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a refund policy if I'm not satisfied?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we have a refund policy. Please check our terms and conditions or contact support for details.",
        },
      },
      {
        "@type": "Question",
        name: "How do I contact your support team for help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach us via email, phone, or the contact form on our website. Our support team is available 10 A.M. To 7 P.M. (Monday to Saturday).",
        },
      },
    ],
  };
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="SqOv08EL3rVNZLaQhI5gjSYn9J8-XDevKVDsdyUKK0g"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shikshanation" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema),
          }}
        />
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
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
})(window,document,'script','dataLayer','GTM-T75L3CTC');`,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T75L3CTC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
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
