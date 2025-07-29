import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 border-b border-blue-100">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between w-full px-10">
        {/* Left: Text */}
        <div className="basis-[60%] max-w-[60%]">
          <div className="flex items-center mb-2 w-full gap-5">
            <span className="text-gray-400 font-medium text-sm md:text-base whitespace-nowrap">
              India’s Own Learning Revolution.
            </span>
            <div className="h-0.5 max-w-2xs flex-1 bg-gradient-to-r from-gray-400 via-gray-200 to-white rounded-full ml-0" />
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
