import React from 'react';

const mediaImages = [
  '/media/wsj.png',
  '/media/bloomberg.png',
  '/media/fastcompany.png',
  '/media/forbes.png',
  '/media/new-york-time.png',
  '/media/business-insider.png',
  '/media/tc.png',
  '/media/fortune.png',
  '/media/entrepreneur.png',
  '/media/diginomica.png',
];

const MediaMarquee = () => {
  return (
    <div className="relative w-[90vw] max-w-4xl mx-auto overflow-hidden py-4">
      {/* Fade left */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
      {/* Fade right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />
      <div className="whitespace-nowrap flex items-center animate-marquee">
        {mediaImages.concat(mediaImages).map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="media logo"
            className="h-10 mx-4 inline-block opacity-80 grayscale hover:grayscale-0 transition duration-300"
            draggable="false"
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MediaMarquee;
