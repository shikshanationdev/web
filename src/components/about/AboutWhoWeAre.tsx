import React from 'react';
import Image from 'next/image';

const AboutWhoWeAre = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-6">
      {/* Heading */}
      <h2 className="text-[26px] md:text-4xl font-bold text-center text-gray-900 mb-5 lg:mb-10">
        Who We Are
      </h2>

      <div className="relative">
        {/* Top Section: Left Image + Right Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Image with blue border */}
          <div className="flex justify-start">
            <div className="rounded-lg overflow-hidden p-1">
              <Image
                src="/about-us/whoweare.webp"
                alt="Graduation celebration"
                width={250}
                height={120}
                className="object-cover rounded-lg h-64 w-80"
                priority
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="flex flex-col justify-start">
            {/* Horizontal blue line */}
            <div className="w-32 h-1 bg-blue-500 mb-6"></div>

            {/* Blue text */}
            <p className="text-blue-600 text-lg leading-relaxed font-medium">
              At Shiksha Nation, we believe that education is the foundation of national progress.
              Our bilingual, inclusive, and technology-driven platform bridges urban-rural gaps,
              offering personalized learning experiences that are both academically rigorous and
              future-ready.
            </p>
          </div>
        </div>

        {/* Center Blur Element */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-20 h-20 bg-green-400 rounded-full blur-2xl opacity-70"></div>
        </div>

        {/* Bottom Section: Left Text + Right Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Text Section */}
          <div className="flex flex-col justify-start order-2 md:order-1">
            {/* Green text with left border */}
            <div className="border-l-4 border-green-500 pl-6 mb-6 text-right">
              <p className="text-green-600 text-lg font-medium leading-relaxed">
                Through live classes, smart notes, skilling programs, and exam prep, we empower
                students from Class 6 to 12 and beyond to achieve excellence — not just in marks,
                but in life.
              </p>
            </div>

            <div className="pl-6 text-right">
              <p className="text-green-600 text-lg font-medium leading-relaxed">
                We&apos;re building a nation of confident learners, problem-solvers, and dreamers who are
                ready to lead tomorrow.
              </p>
            </div>
          </div>

          {/* Right Image with blue border */}
          <div className="flex justify-end order-1 md:order-2">
            <div className="rounded-lg overflow-hidden p-1">
              <Image
                src="/about-us/whoweare3.webp"
                alt="Students group"
                width={250}
                height={220}
                className="object-cover rounded-lg h-64 w-80"
              />
            </div>
          </div>
        </div>

        {/* Bottom horizontal line */}
        <div className="flex justify-end mt-8">
          <div className="w-32 h-1 bg-blue-500"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
