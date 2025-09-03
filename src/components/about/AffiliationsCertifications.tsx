import React from 'react';
import Image from 'next/image';

const affiliations = [
  {
    img: '/MSME.png',
    label: 'MSME Registered',
    bg: 'bg-green-50',
    text: 'text-green-600',
  },
  {
    img: '/startup-india-2.jpg',
    label: 'Recognized by Startup India',
    bg: 'bg-green-50',
    text: 'text-green-600',
  },
  {
    img: '/images.jpeg',
    label: 'ISO : Certified',
    bg: 'bg-green-50',
    text: 'text-green-600',
  },
  {
    img: '/nsdc-logo-ss.jpg',
    label: 'NSDC Certified',
    bg: 'bg-green-50',
    text: 'text-green-600',
  },
  {
    img: '/SkillIndia.jpg',
    label: 'Skill India Certified',
    bg: 'bg-green-50',
    text: 'text-green-600',
  },
];

const AffiliationsCertifications = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      {/* Header Section - Centered */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Our Affiliations & Certifications
        </h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          Shiksha Nation is proud to be affiliated with leading education boards, institutions, and certified learning partners
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Desktop Infinite scrolling carousel */}
        <div className="hidden md:flex animate-scroll-carousel">
          {/* First set of affiliations */}
          {affiliations.map((item, idx) => (
            <div
              key={`first-${idx}`}
              className={`flex-shrink-0 mx-4 rounded-2xl ${item.bg} shadow-lg shadow-green-100 flex flex-col w-80 h-56 transition-all overflow-hidden hover:scale-105`}
            >
              <div className="h-[80%] flex items-center justify-center w-full bg-white p-4">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={240}
                  height={120}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className={`h-[20%] flex justify-center items-center w-full text-center font-semibold text-base ${item.text}`}>
                {item.label}
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {affiliations.map((item, idx) => (
            <div
              key={`second-${idx}`}
              className={`flex-shrink-0 mx-4 rounded-2xl ${item.bg} shadow-lg shadow-green-100 flex flex-col w-80 h-56 transition-all overflow-hidden hover:scale-105`}
            >
              <div className="h-[80%] flex items-center justify-center w-full bg-white p-4">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={240}
                  height={120}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className={`h-[20%] flex justify-center items-center w-full text-center font-semibold text-base ${item.text}`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Static Grid */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {affiliations.map((item, idx) => (
            <div
              key={`mobile-${idx}`}
              className={`rounded-xl ${item.bg} shadow-lg shadow-green-100 flex flex-col transition-all overflow-hidden hover:scale-[1.02]`}
            >
              <div className="h-32 flex items-center justify-center w-full bg-white p-4">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={200}
                  height={100}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className={`py-3 flex justify-center items-center w-full text-center font-semibold text-sm ${item.text} px-4`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationsCertifications;
