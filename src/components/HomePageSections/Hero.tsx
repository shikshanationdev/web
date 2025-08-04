import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full bg-white py-12 md:px-10 md:py-20">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        {/* Left: Text */}
        <div className="basis-[60%] max-w-[60%]">
          <div className="flex items-center mb-2 w-full gap-5">
            <span
              className="text-gray-400 whitespace-nowrap"
              style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}
            >
              India’s Own Learning Revolution.
            </span>
            <div className="h-0.5 max-w-2xs flex-1 bg-gradient-to-r from-gray-400 via-gray-200 to-white rounded-full ml-0" />
          </div>
          <h1
            className="font-extrabold leading-tight text-black mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            India’s first{" "}
            <span className="bg-gradient-to-r from-blue-900 to-green-500 bg-clip-text text-transparent">
              AI-powered
            </span>
            <br className="hidden md:block" /> learning platform
          </h1>
          <div
            className="mb-4"
            style={{ fontSize: "clamp(1.1rem, 2.8vw, 2.2rem)" }}
          >
            <span className="text-black">From </span>
            <span className="italic text-green-600 font-bold">Class 6th</span>
            <span className="text-black"> to </span>
            <span className="text-blue-700 font-bold italic">Careers.</span>
          </div>
          <div className="mb-6">
            <Image
              src="/brush_effect.svg"
              alt="Brush Effect"
              width={400}
              height={100}
              className="object-contain"
            />
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sky-700 text-white rounded-full font-semibold text-lg shadow hover:bg-sky-800 transition-all duration-200"
          >
            Explore Courses
            <FaArrowRightLong />
          </Link>
        </div>
        {/* Right: Illustration */}
        <div className="basis-[40%] max-w-[40%] flex justify-center">
          <Image
            src="/hero_section_img.svg"
            alt="Learning Illustration"
            width={100}
            height={120}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
