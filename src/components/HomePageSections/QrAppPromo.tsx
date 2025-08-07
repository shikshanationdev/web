// src/components/ShikshaAppBanner.tsx

import React from 'react';
import Image from 'next/image';


// SVG for Google Play Badge
const GooglePlayBadge: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="162" height="48" viewBox="0 0 162 48">
    <rect width="162" height="48" rx="6" fill="#000"/>
    <g transform="translate(12, 12)">
        <path fill="#2196F3" d="M8.32 7.68.58 15.42c-.37-.35-.57-.83-.57-1.35V1.93C.01 1.4.22.92.6.56l7.72 7.12z"></path>
  <path fill="#FFC107" d="M15.01 8c0 .7-.38 1.32-1.01 1.67l-2.2 1.22-2.73-2.52-.75-.69 2.89-2.89L14 6.33c.63.35 1.01.97 1.01 1.67z"></path>
  <path fill="#4CAF50" d="M8.32 7.68.6.56C.7.46.83.37.96.29 1.59-.09 2.35-.1 3 .26l8.21 4.53-2.89 2.89z"></path>
  <path fill="#F44336" d="M11.8 10.89 3 15.74c-.31.18-.66.26-1 .26-.36 0-.72-.09-1.04-.29a1.82 1.82 0 0 1-.38-.29l7.74-7.74.75.69 2.73 2.52z"></path>
    </g>
    <g transform="translate(48, 10)">
      <text fill="#FFF" fontSize="10" fontFamily="Roboto, sans-serif" letterSpacing="0.5">
        <tspan x="0" y="10">GET IT ON</tspan>
      </text>
      <text fill="#FFF" fontSize="18" fontFamily="Roboto, sans-serif" fontWeight="500">
        <tspan x="0" y="30">Google Play</tspan>
      </text>
    </g>
  </svg>
);

// SVG for App Store Badge
const AppStoreBadge: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="144" height="48" viewBox="0 0 144 48">
    <rect width="144" height="48" rx="6" fill="#000"/>
    <g transform="translate(12, 12)">
        <path d="M21.1,13.4c0-2.8-2-4.5-4.8-4.5-2,0-3.4,1.1-4.3,2.2-.9-1.1-2.4-2.2-4.3-2.2-2.8,0-4.8,1.7-4.8,4.5,0,2.6,1.8,4,4.2,5.7l.6.5c2.2,1.5,3.3,2.4,3.3,3.6s-1,2.1-2.9,2.1c-2,0-3-1-4.3-2.1l-1.3.9c1.6,1.5,3.4,2.7,5.6,2.7,2.8,0,4.8-1.6,4.8-4.2,0-2.4-1.7-3.8-4.1-5.5l-.6-.5c-1.8-1.2-2.9-2.1-2.9-3.3s.9-1.6,2.5-1.6c1.8,0,2.6,1,3.7,2l1.2-.9C20,14.5,21.1,13.4,21.1,13.4Z" fill="#FFF"/>
        <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22.5A10.5,10.5,0,1,1,22.5,12,10.5,10.5,0,0,1,12,22.5Z" fill="#FFF"/>
    </g>
    <g transform="translate(48, 10)">
      <text fill="#FFF" fontSize="10" fontFamily="Roboto, sans-serif" letterSpacing="0.5">
        <tspan x="0" y="10">Download on the</tspan>
      </text>
      <text fill="#FFF" fontSize="18" fontFamily="Roboto, sans-serif" fontWeight="500">
        <tspan x="0" y="30">App Store</tspan>
      </text>
    </g>
  </svg>
);


const QrAppPromo: React.FC = () => {
  return (
    <section className="bg-white px-5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section: Image Mockups */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">            
            {/* Device Mockup Image - Using next/image */}
            <Image 
              src="/home/Phone & Tablet Mockup.png" 
              width={500}
              height={500}
              alt="Shiksha Nation App on Phone & Tablet"
              className="relative z-10 w-full max-w-md lg:max-w-xl transform transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>

          {/* Right Section: Text Content & QR Code */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left ">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Learn <span className="text-sky-600">Anytime, Anywhere </span> 
              with the Shiksha Nation App
            </h1>
            
            <p className="mt-4 text-lg text-gray-700 font-medium max-w-md">
              Access live classes, notes, tests & progress — all in one app.
            </p>

            <div className="mt-10 flex flex-col items-center lg:items-start">
              {/* QR Code with decorative border - Using next/image */}
              <div className="relative w-36 h-36">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-blue-700 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-blue-700 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-green-400 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-green-400 rounded-br-lg"></div>
                <Image 
                  src="/home/qr.png" 
                  alt="QR code to download app" 
                  fill
                  sizes="144px"
                  className="p-1 object-contain"
                />
              </div>

              <p className="mt-6 text-base text-gray-500">
                Available on Android, iOS & Website
              </p>

              {/* App Store Buttons */}
              <div className="flex items-center pt-4 gap-2">
                <a href="#google-play" aria-label="Get it on Google Play" className="transform hover:scale-105 transition-transform">
                  <Image
                    src="/home/get-it-on-playstore.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={40}
                  />
                </a>
                <a href="#app-store" aria-label="Download on the App Store" className="transform hover:scale-105 transition-transform">
                  <Image
                    src="/home/get-it-on-appstore.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QrAppPromo;
