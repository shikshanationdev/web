"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  // Carousel images - you can add more images to this array later
  const carouselImages = [
    "/home/Carousal1.png",
    // Add more images here when available
  ];

  return (
    <section className="w-full bg-white">
      {/* Top Carousel Banner */}
      <div className="overflow-hidden relative bg-white border-b mt-10 md:mt-0 border-blue-100" style={{ height: '40px' }}>
        <div
          className="w-full h-full flex"
          style={{ position: 'absolute', width: '200%', height: '100%', left: 0, top: 0 }}
        >
          <div
            className="flex h-full animate-banner-scroll"
            style={{ width: '100%' }}
          >
            <Image
              src="/home/Carousal1.png"
              alt="Carousel Image"
              width={2160}
              height={135}
              className="h-full object-cover flex-shrink-0"
              priority
              quality={100}
            />
            <Image
              src="/home/Carousal1.png"
              alt="Carousel Image"
              width={2160}
              height={135}
              className="h-full object-cover flex-shrink-0"
              quality={100}
            />
          </div>
          <div
            className="flex h-full animate-banner-scroll"
            style={{ width: '100%' }}
          >
            <Image
              src="/home/Carousal1.png"
              alt="Carousel Image"
              width={2160}
              height={135}
              className="h-full object-cover flex-shrink-0"
              quality={100}
            />
            <Image
              src="/home/Carousal1.png"
              alt="Carousel Image"
              width={2160}
              height={135}
              className="h-full object-cover flex-shrink-0"
              quality={100}
            />
          </div>
        </div>
        <style jsx>{`
          @keyframes banner-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-banner-scroll {
            animation: banner-scroll 20s linear infinite;
          }
        `}</style>
      </div>

      {/* Main Hero Content */}
      <div className="px-5 md:px-10 pb-12 md:pb-20 pt-10">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
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

            {/* Mobile Image - appears between content and button */}
            <div className="md:hidden w-full flex justify-center mb-8">
              <Image
                src="/home/hero_section_img.svg"
                alt="Learning Illustration"
                width={340}
                height={340}
                className="w-80 h-50 object-contain"
              />
            </div>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-4 py-2 md:px-8 md:py-3 bg-sky-600 text-nowrap text-white rounded-full md:font-semibold text-lg shadow hover:bg-sky-800 transition-all duration-200"
              >
                Explore Courses
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
          {/* Right: Illustration - Desktop only */}
          <div className="hidden md:flex basis-[40%] md:max-w-[40%] justify-center">
            <Image
              src="/home/hero_section_img.svg"
              alt="Learning Illustration"
              width={340}
              height={340}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
