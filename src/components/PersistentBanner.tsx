"use client";

import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import Image from "next/image";

const PersistentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  // CloudFront base URL
  const cloudFrontUrl = "https://d10ge3ci2b88dm.cloudfront.net";

  return (
    <>
      {/* Style to adjust Tawk.to chat widget position */}
      <style jsx global>{`
        #tawk-bubble-container,
        .tawk-chat-panel,
        .tawk-min-container,
        iframe[title="chat widget"],
        iframe[title="Tawk"],
        div[id^="tawk"] {
          bottom: 90px !important;
        }
        @media (max-width: 640px) {
          #tawk-bubble-container,
          .tawk-chat-panel,
          .tawk-min-container,
          iframe[title="chat widget"],
          iframe[title="Tawk"],
          div[id^="tawk"] {
            bottom: 80px !important;
          }
        }
      `}</style>

      <div className="fixed bottom-0 left-0 right-0 z-40">
        <div className="relative">
          <a
            href="https://timesofindia.indiatimes.com/business/india-business/take-a-look-at-these-inspiring-icons-pioneers-of-change-and-impact/articleshow/124457781.cms"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative cursor-pointer hover:opacity-95 transition-opacity duration-200 overflow-hidden"
          >
            {/* Mobile - 393px */}
            <div className="block sm:hidden relative w-full h-auto">
              <Image
                src={`${cloudFrontUrl}/banner-mobile-393.png`}
                alt="Featured by Times of India - India's Icons of Change & Impact"
                width={393}
                height={80}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* iPad - 744px */}
            <div className="hidden sm:block md:hidden relative w-full h-auto">
              <Image
                src={`${cloudFrontUrl}/banner-ipad-744.png`}
                alt="Featured by Times of India - India's Icons of Change & Impact"
                width={744}
                height={80}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Small Web - 1024px */}
            <div className="hidden md:block lg:hidden relative w-full h-auto">
              <Image
                src={`${cloudFrontUrl}/banner-small-web-1024).png`}
                alt="Featured by Times of India - India's Icons of Change & Impact"
                width={1024}
                height={80}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Mid Web - 1440px */}
            <div className="hidden lg:block xl:hidden relative w-full h-auto">
              <Image
                src={`${cloudFrontUrl}/banner-mid-web-1440.png`}
                alt="Featured by Times of India - India's Icons of Change & Impact"
                width={1440}
                height={80}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Large Web - 1920px */}
            <div className="hidden xl:block relative w-full h-auto">
              <Image
                src={`${cloudFrontUrl}/banner-web-1920.png`}
                alt="Featured by Times of India - India's Icons of Change & Impact"
                width={1920}
                height={80}
                className="w-full h-auto"
                priority
              />
            </div>
          </a>

          {/* Close Button - Positioned 50% outside top edge, 50% inside - OUTSIDE anchor */}
          <button
            onClick={handleClose}
            className="absolute -top-[15px] left-2 sm:left-3 flex-shrink-0 hover:opacity-80 transition-all duration-200 z-10"
            aria-label="Close banner"
          >
            <TiDelete size={30} className="text-black drop-shadow-lg opacity-50" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PersistentBanner;
