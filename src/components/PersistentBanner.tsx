"use client";

import React, { useState, useEffect } from "react";
import { CiCircleRemove } from "react-icons/ci";

const PersistentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

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
          bottom: 120px !important;
        }
        @media (max-width: 640px) {
          #tawk-bubble-container,
          .tawk-chat-panel,
          .tawk-min-container,
          iframe[title="chat widget"],
          iframe[title="Tawk"],
          div[id^="tawk"] {
            bottom: 100px !important;
          }
        }
      `}</style>

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0066cc] shadow-2xl overflow-hidden">
        {/* Decorative lines - left side */}
        <div className="absolute left-0 top-0 bottom-0 w-96 opacity-20">
          <svg
            viewBox="0 0 400 80"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,20 Q100,10 200,20 T400,20"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,30 Q100,20 200,30 T400,30"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,40 Q100,30 200,40 T400,40"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,50 Q100,40 200,50 T400,50"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,60 Q100,50 200,60 T400,60"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        {/* Decorative lines - right side */}
        <div className="absolute right-0 top-0 bottom-0 w-96 opacity-20">
          <svg
            viewBox="0 0 400 80"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,20 Q100,10 200,20 T400,20"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,30 Q100,20 200,30 T400,30"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,40 Q100,30 200,40 T400,40"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,50 Q100,40 200,50 T400,50"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,60 Q100,50 200,60 T400,60"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-full mx-auto px-6 py-3 sm:py-4 flex items-center justify-center relative">
          {/* Main Content Container with Close Button */}
          <div className="flex items-center gap-3 sm:gap-4 z-10">
            <a
              href="https://timesofindia.indiatimes.com/business/india-business/take-a-look-at-these-inspiring-icons-pioneers-of-change-and-impact/articleshow/124457781.cms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 sm:gap-4 cursor-pointer hover:opacity-90 transition-opacity duration-200"
            >
              {/* TOI Logo with red/orange background - LEFT SIDE - SQUARE */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl sm:text-2xl tracking-tight" style={{ fontFamily: 'Times New Roman, serif' }}>
                  TOI
                </span>
              </div>

              {/* Content on the RIGHT in 2 lines */}
              <div className="flex flex-col gap-1">
                {/* First Line */}
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  {/* Featured by text */}
                  <span className="text-white font-normal text-sm sm:text-base whitespace-nowrap">
                    Featured by
                  </span>

                  {/* THE TIMES OF INDIA text with Times New Roman font - LARGER and UNDERLINED */}
                  <span className="text-white font-bold text-base sm:text-lg whitespace-nowrap tracking-wide underline" style={{ fontFamily: 'Times New Roman, serif' }}>
                    THE TIMES OF INDIA
                  </span>

                  {/* as one of text */}
                  <span className="text-white font-normal text-sm sm:text-base whitespace-nowrap">
                    as one of
                  </span>
                </div>

                {/* Second Line */}
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  {/* India Flag SVG */}
                  <svg
                    width="24"
                    height="16"
                    viewBox="0 0 900 600"
                    className="h-4 sm:h-5 w-auto"
                  >
                    {/* Saffron band */}
                    <rect width="900" height="200" fill="#FF9933" />
                    {/* White band */}
                    <rect y="200" width="900" height="200" fill="#FFFFFF" />
                    {/* Green band */}
                    <rect y="400" width="900" height="200" fill="#138808" />
                    {/* Ashoka Chakra */}
                    <g transform="translate(450, 300)">
                      <circle r="80" fill="none" stroke="#000080" strokeWidth="4" />
                      {/* 24 spokes */}
                      {Array.from({ length: 24 }).map((_, i) => {
                        const angle = (i * 360) / 24;
                        const rad = (angle * Math.PI) / 180;
                        const x2 = Math.cos(rad) * 80;
                        const y2 = Math.sin(rad) * 80;
                        return (
                          <line
                            key={i}
                            x1="0"
                            y1="0"
                            x2={x2}
                            y2={y2}
                            stroke="#000080"
                            strokeWidth="4"
                          />
                        );
                      })}
                      <circle r="5" fill="#000080" />
                    </g>
                  </svg>

                  {/* Main text */}
                  <span className="text-white font-normal text-sm sm:text-base whitespace-nowrap">
                    India's Icons of Change & Impact
                  </span>

                  {/* Custom Arrow SVG */}
                  <svg
                    width="32"
                    height="16"
                    viewBox="0 0 32 16"
                    className="w-6 sm:w-8 h-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Arrow line */}
                    <path
                      d="M2 8 L26 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    {/* Arrow head */}
                    <path
                      d="M20 3 L28 8 L20 13"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </a>

            {/* Close Button - RIGHT of content */}
            <button
              onClick={handleClose}
              className="flex-shrink-0 hover:opacity-80 transition-all duration-200 ml-2"
              aria-label="Close banner"
            >
              <CiCircleRemove size={32} className="text-white" strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersistentBanner;
