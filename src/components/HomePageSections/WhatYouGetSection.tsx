import { FiArrowRight } from "react-icons/fi";
import InfoCard from "../ui/InfoCard";

const features = [
  {
    icon: "/100+ Courses.svg",
    label: "100+ Courses",
  },
  {
    icon: "/Test Series.svg",
    label: "Test Series",
  },
  {
    icon: "/Mock Tests & Notes.svg",
    label: "Mock Tests\n& Notes",
  },
  {
    icon: "/Recorded & Live Lectures.svg",
    label: "Recorded &\nLive Lectures",
  },
  {
    icon: "/Organized Learning.svg",
    label: "Organized\nLearning",
  },
  {
    icon: "/Expert Instructions.svg",
    label: "Expert\nInstructions",
  },
  {
    icon: "/Smart Solutions.svg",
    label: "Smart\nSolutions",
  },
];

const WhatYouGetSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-black text-center mb-4">
        What You’ll Get
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mb-10 px-4 text-center">
        Get everything you need for online studies: courses, tests, notes, live and recorded lectures, and expert guidance.
      </p>
      {/* Responsive grid layout: 1, 2, or 3 columns based on screen width; switches to row below 500px */}
      <div className="mb-8 w-full max-w-5xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 block lg:hidden">
        {features.map((feature) => (
          <div
            key={feature.label}
            className="relative flex items-center bg-white rounded-lg shadow-md px-6 w-full h-24"
          >
            <div className="text-left">
              <span className="text-lg font-bold text-sky-700 whitespace-pre-line">
                {feature.label}
              </span>
            </div>
            <div className="absolute right-0 top-0 h-full flex items-center justify-center w-24 rounded-lg rounded-l-4xl bg-blue-50">
              <img
                src={feature.icon}
                alt={feature.label}
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      {/* Desktop layout */}
      <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-5xl w-full justify-center lg:block">
        {features.slice(0, 4).map((feature) => (
          <InfoCard key={feature.label} icon={feature.icon} label={feature.label} />
        ))}
      </div>
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl w-full justify-center lg:block">
        {features.slice(4).map((feature) => (
          <InfoCard key={feature.label} icon={feature.icon} label={feature.label} />
        ))}
      </div>
      <button className="mt-2 px-6 sm:px-10 py-3 sm:py-4 justify-around bg-sky-700 hover:bg-sky-800 text-white font-semibold rounded-full text-lg sm:text-xl flex items-center gap-2 transition">
        <span> Start Learning</span>
        <div className="ml-4"><FiArrowRight className="text-2xl sm:text-3xl" /></div>
      </button>
    </section>
  );
};

export default WhatYouGetSection;
