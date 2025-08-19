import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const GetInTouchSection = () => {
  return (
    <section className="relative w-full bg-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 text-left py-4 md:py-10">
          <p className="text-white/70 text-[10px] md:text-lg mb-4 uppercase tracking-wider">
            GET IN TOUCH
          </p>
          <h2 className="text-white text-wrap pr-20 text-xl md:text-4xl font-bold mb-8 leading-tight">
            For Queries, Feedback or Assistance
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center bg-green-primary hover:bg-green-600 text-white font-semibold px-5 py-2 md:px-8 md:py-4 rounded-full transition-all duration-300 hover:scale-105 text-sm md:text-lg"
          >
            Contact Us
            <FiArrowRight className="ml-2 text-xl" />
          </Link>
        </div>

        {/* Right Decorative Image */}
        <div className="absolute top-0 right-0 w-1/3 h-full">
          <Image
            src="/about-us/Get in Touch Illustration.svg"
            alt="Get in Touch"
            fill
            className="object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
