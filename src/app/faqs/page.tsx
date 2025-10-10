import React from "react";
import Banner from "../../components/Banner";
import FaqsList from "../../components/faqs/FaqsList";
import { faqs } from "../../data/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Shiksha Nation",
  description:
    "Find answers to common questions about Shiksha Nation's online education platform, courses, admissions, and support services.",
};

const Page = () => {
  return (
    <main className="min-h-screen">
      <Banner heading="Frequently Asked Questions" />
      <section className="bg-white py-12">
        <FaqsList items={faqs} />
      </section>
    </main>
  );
};

export default Page;
