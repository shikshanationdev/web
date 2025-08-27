import { Navbar } from "@/components";
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";

import { Footer } from "@/components";
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
        <Navbar />
        <Toaster position="bottom-center" />
        {children}
        <LearningStatsSection />
        <Footer />
        <CopyrightSection />
      </body>
    </html>
  );
}
