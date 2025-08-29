"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Hero = () => {
  // Carousel images with the Shiksha series
  const carouselImages = [
    "/home/ShikshaBase.png",
    "/home/ShikshaEdge.png",
    "/home/ShikshaQuest.png",
    "/home/ShikshaPro.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % carouselImages.length
        );
        setIsVisible(true);
      }, 500); // Half second for fade out
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="w-full bg-white">
      {/* Main Hero Content */}
      <div className="py-12 md:py-16 px-5 md:px-0 md:pl-20">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between w-full max-w-[1536px]">
          {/* Left: Text */}
          <div className="basis-[60%] md:max-w-[60%]">
            <div className="flex items-center mb-2 w-full gap-5">
              <div className="md:hidden h-0.5 max-w-2xs flex-1 bg-gradient-to-r from-white via-gray-200 to-gray-400 rounded-full ml-0" />
              <span
                className="text-gray-400 whitespace-nowrap"
                style={{ fontSize: "clamp(0.7rem, 2vw, 1.15rem)" }}
              >
                India’s Own Learning Revolution.
              </span>
              <div className="h-0.5 max-w-2xs flex-1 bg-gradient-to-r from-gray-400 via-gray-200 to-white rounded-full ml-0" />
            </div>
            <h1
              className="font-extrabold leading-tight text-black mb-4 text-center md:text-left"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              India’s first{" "}
              <span className="bg-gradient-to-r from-blue-900 to-green-500 bg-clip-text text-transparent">
                AI-powered
              </span>
              <br className="hidden md:block" /> learning platform
            </h1>
            <div
              className="mb-4 text-center md:text-left"
              style={{ fontSize: "clamp(1.1rem, 2.8vw, 2.2rem)" }}
            >
              <span className="text-black">From </span>
              <span className="italic text-green-600 font-bold">Class 6th</span>
              <span className="text-black"> to </span>
              <span className="text-blue-700 font-bold italic">Careers.</span>
            </div>
            <div className="mb-6 flex justify-center md:justify-start">
              <Image
                src="/home/brush_effect.svg"
                alt="Brush Effect"
                width={400}
                height={100}
                className="object-contain w-50 md:w-80 lg:w-120"
              />
            </div>

            {/* Mobile Number Input - appears before image on mobile, after image on desktop */}
            <div className="md:hidden flex justify-center mb-8">
              <div className="flex items-stretch bg-white rounded-full shadow-lg overflow-hidden w-full max-w-sm sm:max-w-md border border-gray-200">
                {/* Country Code */}
                <div className="bg-blue-600 text-white px-3 sm:px-4 flex items-center justify-center font-semibold text-sm sm:text-base flex-shrink-0 py-2.5 sm:py-3">
                  +91
                </div>

                {/* Mobile Number Input */}
                <input
                  type="tel"
                  placeholder="Enter Your Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 10) {
                      setMobileNumber(value);
                    }
                  }}
                  className="flex-[2] sm:flex-[2.5] px-2 sm:px-3 py-2.5 sm:py-3 text-gray-700 placeholder-gray-400 outline-none border-none text-sm sm:text-base min-w-0"
                  maxLength={10}
                />

                {/* Join Button */}
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-3 sm:px-4 py-2.5 sm:py-3 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm whitespace-nowrap flex-shrink-0 rounded-r-full"
                  disabled={mobileNumber.length !== 10}
                  onClick={() => {
                    if (mobileNumber.length === 10) {
                      // Handle join action here
                      console.log('Joining with mobile number:', mobileNumber);
                      // You can add navigation or API call here
                    }
                  }}
                >
                  <span className="hidden sm:inline">JOIN FOR FREE</span>
                  <span className="sm:hidden">JOIN</span>
                </button>
              </div>
            </div>

            {/* Mobile Image - appears after input on mobile */}
            <div className="md:hidden w-full flex justify-center mb-8">
              <div className="relative w-80 h-80">
                <Image
                  src={carouselImages[currentImageIndex]}
                  alt="Learning Platform"
                  width={320}
                  height={320}
                  className={`w-full h-full object-contain transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
                />
              </div>
            </div>

            {/* Desktop Number Input - appears after image on desktop */}
            <div className="hidden md:flex justify-center md:justify-start">
              <div className="flex items-stretch bg-white rounded-full shadow-lg overflow-hidden w-full max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl border border-gray-200">
                {/* Country Code */}
                <div className="bg-blue-600 text-white px-3 lg:px-4 xl:px-6 2xl:px-8 flex items-center justify-center font-semibold text-sm lg:text-base flex-shrink-0 py-3 lg:py-4 xl:py-5 2xl:py-6">
                  +91
                </div>

                {/* Mobile Number Input */}
                <input
                  type="tel"
                  placeholder="Enter Your Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 10) {
                      setMobileNumber(value);
                    }
                  }}
                  className="flex-[3] px-3 lg:px-4 xl:px-6 2xl:px-10 py-3 lg:py-4 xl:py-5 2xl:py-6 text-gray-700 placeholder-gray-400 outline-none border-none text-sm lg:text-base xl:text-lg 2xl:text-xl min-w-0"
                  maxLength={10}
                />

                {/* Join Button */}
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-3 lg:px-4 xl:px-5 2xl:px-6 py-3 lg:py-4 xl:py-5 2xl:py-6 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base whitespace-nowrap flex-shrink-0 rounded-r-full"
                  disabled={mobileNumber.length !== 10}
                  onClick={() => {
                    if (mobileNumber.length === 10) {
                      // Handle join action here
                      console.log('Joining with mobile number:', mobileNumber);
                      // You can add navigation or API call here
                    }
                  }}
                >
                  JOIN FOR FREE
                </button>
              </div>
            </div>
          </div>
          {/* Right: Illustration - Desktop only */}
          <div className="hidden md:flex basis-[40%] md:max-w-[40%] justify-center">
            <div className="relative w-full h-auto">
              <Image
                src={carouselImages[currentImageIndex]}
                alt="Learning Platform"
                width={340}
                height={340}
                className={`w-full h-auto object-contain transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                  }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
