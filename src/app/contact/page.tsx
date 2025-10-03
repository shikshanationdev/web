import ContactHero from "@/components/contact/ContactHero";
import ContactMap from "@/components/contact/ContactMap";
// import AboutHero from '@/components/contact/ContactHero'
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Shiksha Nation",
  description:
    "Get in touch with Shiksha Nation for support, queries, or guidance. We're here to help students and parents with the right information and assistance.",
};

const Contact = () => {
  return (
    <div className="max-w-[1536px] mx-auto">
      <ContactHero />
      <ContactMap />
    </div>
  );
};

export default Contact;
