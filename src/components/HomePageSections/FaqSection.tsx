"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What classes and exams does Shiksha Nation cover?",
    answer:
      "We provide learning content for Classes 1 to 12, and prep courses for entrance exams like NEET, JEE, CUET, and more.",
  },
  {
    question: "Can I try courses before enrolling?",
    answer: "Yes, you can access sample lessons and trial courses before enrolling.",
  },
  {
    question: "Are your courses live or pre-recorded?",
    answer: "We offer both live and pre-recorded courses to suit your learning style.",
  },
  {
    question: "Is Shiksha Nation suitable for school exam preparation?",
    answer: "Absolutely! Our courses are designed to help students excel in school exams as well as competitive exams.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto md:px-10">
        <h2 className="text-center text-4xl md:text-4xl font-bold text-gray-900 mb-4">
          Got Questions? We’ve Got Answers
        </h2>
        <p className="text-center text-gray-600 text-lg mb-10">
          Here are some of the most common questions we receive.
        </p>
        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className={`bg-sky-50/50 border border-sky-600 rounded-2xl px-8 py-6 transition-all duration-300 ${openIndex === idx ? "shadow-md" : ""}`}
            >
              <button
                className="w-full flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className="text-lg md:text-xl font-semibold text-sky-700 text-left">
                  {faq.question}
                </span>
                <span className="ml-4 text-3xl text-sky-600">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${openIndex === idx ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{
                  transitionProperty: 'max-height, opacity, margin-top',
                }}
              >
                <div className="text-sky-700 text-lg md:text-xl">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
