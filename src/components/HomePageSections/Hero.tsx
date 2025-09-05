"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

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
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinSubmit = async () => {
    if (mobileNumber.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Registration successful! We will contact you soon.');
        setMobileNumber(''); // Clear the input
      } else {
        toast.error(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Join submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % carouselImages.length
        );
        setIsVisible(true);
      }, 300); // Half second for fade out
    }, 8000); // Change image every 8 seconds

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
                <div className="bg-blue-600 text-white px-3 sm:px-4 flex items-center justify-center font-semibold text-sm sm:text-base flex-shrink-0 py-4 sm:py-3">
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
                  className="flex-[2] sm:flex-[2.5] px-2 sm:px-3 py-4 sm:py-3 text-gray-700 placeholder-gray-400 outline-none border-none text-sm sm:text-base min-w-0"
                  maxLength={10}
                />

                {/* Join Button */}
                <button
                  className="bg-gradient-to-b from-yellow-300 to-yellow-500 hover:from-yellow-200 hover:to-yellow-400 text-black font-bold py-4 sm:py-3 text-xs sm:text-sm whitespace-nowrap flex-shrink-0 rounded-r-full w-16 sm:w-24 flex items-center justify-center transition-colors duration-200"
                  onClick={handleJoinSubmit}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-1">
                      <svg className="animate-spin h-3 w-3 text-black" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="hidden sm:inline">...</span>
                    </span>
                  ) : (
                    <>
                      <span className="hidden sm:inline">JOIN FOR FREE</span>
                      <span className="sm:hidden">JOIN</span>
                    </>
                  )}
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
                  className="bg-gradient-to-b from-yellow-300 to-yellow-500 hover:from-yellow-200 hover:to-yellow-400 text-black font-bold py-3 lg:py-4 xl:py-5 2xl:py-6 text-sm lg:text-base whitespace-nowrap flex-shrink-0 rounded-r-full w-32 lg:w-36 xl:w-40 2xl:w-44 flex items-center justify-center transition-colors duration-200"
                  onClick={handleJoinSubmit}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  ) : (
                    'JOIN FOR FREE'
                  )}
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
