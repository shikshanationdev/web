import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 border-b border-blue-100 px-10">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-10">
        {/* Left: Text */}
        <div className="flex-1 w-[70%]">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gray-400 font-medium text-sm md:text-base w-full">
              India’s Own Learning Revolution.
            </span>
            <div className="h-0.5 w-full bg-gradient-to-r from-gray-500 via-gray-400 to-white rounded-full" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-blue-900 mb-4">
            India’s first <span className="text-green-600">AI-powered</span>
            <br className="hidden md:block" /> learning platform
            <span className="inline-block align-super text-yellow-400 text-2xl ml-2">
              ✦
            </span>
          </h1>
          <div className="text-lg md:text-xl font-semibold mb-4">
            <span className="text-black">From </span>
            <span className="italic text-green-600">Class 6th</span>
            <span className="text-black"> to </span>
            <span className="text-blue-700 font-bold">Careers.</span>
          </div>
          <div className="mb-6">
            <Image
              src="/brush_effect.svg"
              alt="Brush Effect"
              width={500}
              height={100}
              className="object-contain"
            />
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-700 text-white rounded-full font-semibold text-lg shadow hover:bg-blue-800 transition"
          >
            Explore Courses
            <span className="text-2xl">→</span>
          </Link>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center w-[30%">
          <Image
            src="/hero_section_img.svg"
            alt="Learning Illustration"
            width={100}
            height={120}
            className="w-full h-auto pl-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
