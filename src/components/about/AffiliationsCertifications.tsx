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
    <section className="w-full max-w-6xl mx-auto  px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
      <div className="flex-1 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight text-center md:text-left">
          Our Affiliations & Certifications
        </h2>
        <p className="text-lg text-gray-500 text-center md:text-left">
          Shiksha Nation is proud to be affiliated with leading education boards, institutions, and certified learning partners
        </p>
      </div>
      <div className="flex-1 grid grid-cols-1 gap-8 place-items-center pb-20 md:pb-0">
        {/* First row - 2 items */}
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          {affiliations.slice(0, 2).map((item, idx) => (
            <div key={item.label} className={`rounded-2xl ${item.bg} shadow-lg shadow-green-100 flex flex-col w-80 h-56 transition-all overflow-hidden`}>
              <div className="h-[80%] flex items-center justify-center w-full bg-white p-4">
                <Image src={item.img} alt={item.label} width={240} height={120} className="object-contain max-w-full max-h-full" />
              </div>
              <div className={`h-[20%] flex justify-center items-center w-full text-center font-semibold text-base ${item.text}`}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Second row - ISO and NSDC */}
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          {[affiliations[2], affiliations[3]].map((item, idx) => (
            <div key={item.label} className={`rounded-2xl ${item.bg} shadow-lg shadow-green-100 flex flex-col w-80 h-56 transition-all overflow-hidden`}>
              <div className="h-[80%] flex items-center justify-center w-full bg-white p-4">
                <Image src={item.img} alt={item.label} width={240} height={120} className="object-contain max-w-full max-h-full" />
              </div>
              <div className={`h-[20%] flex justify-center items-center w-full text-center font-semibold text-base ${item.text}`}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Third row - Skill India (centered) */}
        <div className="flex w-full justify-center">
          <div className={`rounded-2xl ${affiliations[4].bg} shadow-lg shadow-green-100 flex flex-col w-80 h-56 transition-all overflow-hidden`}>
            <div className="h-[80%] flex items-center justify-center w-full bg-white p-4">
              <Image src={affiliations[4].img} alt={affiliations[4].label} width={240} height={120} className="object-contain max-w-full max-h-full" />
            </div>
            <div className={`h-[20%] flex justify-center items-center w-full text-center font-semibold text-base ${affiliations[4].text}`}>{affiliations[4].label}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliationsCertifications;
