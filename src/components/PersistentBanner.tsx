"use client";

import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

const PersistentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has closed the banner in this session
    const bannerClosed = sessionStorage.getItem("persistent-banner-closed");
    if (bannerClosed) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("persistent-banner-closed", "true");
  };

  if (!isVisible) return null;

  return (
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
        {/* Main Content Container - 2 lines */}
        <div className="flex flex-col items-center justify-center gap-1 z-10">
          {/* First Line */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {/* Featured by text */}
            <span className="text-white font-normal text-sm sm:text-base whitespace-nowrap">
              Featured by
            </span>

            {/* Times of India Logo with white background */}
            <div className="bg-white rounded-md px-2 py-1 flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WcvLXOfB2hy51_D85gaGzw-jioBWtl5ySw&s"
                alt="Times of India Logo"
                className="h-5 sm:h-6 w-auto object-contain"
              />
            </div>

            {/* The Times of India text */}
            <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">
              The Times of India
            </span>

            {/* as one of text */}
            <span className="text-white font-normal text-sm sm:text-base whitespace-nowrap">
              as one of
            </span>
          </div>

          {/* Second Line */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {/* Flag emoji */}
            <span className="text-lg sm:text-xl">🇮🇳</span>

            {/* Main text */}
            <span className="text-white font-normal text-sm sm:text-base whitespace-nowrap">
              India's Icons of Change & Impact
            </span>

            {/* Arrow and emoji */}
            <span className="text-base sm:text-lg">🎉➜</span>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex-shrink-0 p-1.5 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200 z-20 bg-white bg-opacity-10"
          aria-label="Close banner"
        >
          <MdClose size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default PersistentBanner;
