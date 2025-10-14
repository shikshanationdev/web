'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShownInitial, setHasShownInitial] = useState(false);
  const [hasShownOnMouseLeave, setHasShownOnMouseLeave] = useState(false);

  useEffect(() => {
    // Show popup after 7 seconds on initial load
    const timer = setTimeout(() => {
      if (!hasShownInitial) {
        setIsVisible(true);
        setHasShownInitial(true);
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [hasShownInitial]);

  useEffect(() => {
    // Show popup when cursor leaves the window (only once)
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if cursor is leaving from the top of the page and banner hasn't been shown on mouse leave yet
      if (e.clientY <= 0 && !hasShownOnMouseLeave) {
        setIsVisible(true);
        setHasShownOnMouseLeave(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShownOnMouseLeave]);

  const closeBanner = () => {
    setIsVisible(false);
  };

  const handleBannerClick = () => {
    window.open('https://courses.shikshanation.com/courses/marks-guarantee-success-program-68e16514adb23bf6bdc7cc47', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="relative max-w-2xl mx-4 bg-white rounded-lg shadow-2xl">
        {/* Close button */}
        <button
          onClick={closeBanner}
          className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Close banner"
        >
          <IoClose className="w-7 h-7 text-gray-600" />
        </button>

        {/* Banner image - clickable */}
        <div
          className="relative cursor-pointer hover:opacity-95 transition-opacity"
          onClick={handleBannerClick}
        >
          <Image
            src="/banner2.gif"
            alt="Promotional Banner"
            width={700}
            height={500}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PopupBanner;
