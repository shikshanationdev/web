import React from "react";
import Banner from "../../components/Banner";
import FaqsList from "../../components/faqs/FaqsList";
import { faqs } from "../../data/faqs";

const Page = () => {
  return (
    <main className="min-h-screen">
      <Banner heading="Frequently Asked Questions" />

      <section className="bg-white py-12">
        <FaqsList items={faqs} title={"Got Questions? We\'ve Got Answers!"} />
      </section>
    </main>
  );
};

export default Page;
