import React from 'react';

const mediaImages = [
  'https://featuringdaily.com/wp-content/uploads/2025/04/cropped-cropped-cropped-Untitled-design-54-2-1.webp',
  'https://businessup2date.com/wp-content/uploads/2021/06/Business-Up2Date-e1716444753574.webp',
  'https://mumbaimirror.co.in/wp-content/uploads/2025/04/cropped-logos-08-1-300x300.png',
  'https://www.medianews4u.com/wp-content/uploads/2019/08/MediaNews4U.png',
  'https://thehindustnexpress.com/wp-content/uploads/2025/05/cropped-hindustn-03.png',
  '/ground.png',
  'https://news18today.com/wp-content/uploads/2025/05/logos-12-1.png',
  'https://indiastoday.com/wp-content/uploads/2021/11/cropped-logos-01-300x300.png',
  'https://india24x7news.com/wp-content/uploads/2025/05/cropped-tinywow_change_bg_photo_79634246.png',
  'https://foxstoryindia.com/wp-content/uploads/2024/07/cropped-Add-a-heading1.png',
  "/carnival.png"
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
