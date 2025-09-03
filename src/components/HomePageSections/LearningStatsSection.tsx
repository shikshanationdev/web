"use client";
import React from "react";
import { useRouter } from "next/navigation";

const stats = [
  { value: "80+", label: "Online courses" },
  { value: "100+", label: "Certified Instructor" },
  { value: "99.9%", label: "Success Rate" },
];

const LearningStatsSection = () => {
  const router = useRouter();

  const handleStartLearningClick = () => {
    router.push("https://courses.shikshanation.com/signup");
  };

  const handleBrowseCoursesClick = () => {
    router.push("/courses");
  };

  return (
    <section className="w-full py-16 px-5 xl:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left md:px-5">
            <h2 className="text-2xl text-left sm:text-4xl lg:text-[3vw] xl:text-[2.5rem] font-bold text-sky-700 mb-6 lg:mb-8 leading-tight">
              Start learning with 67.1k students around the world.
            </h2>
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-starty lg:justify-start">
              <button
                className="px-3 w-full md:w-auto sm:px-4 md:px-6 lg:px-8 py-3 bg-green-primary font-bold hover:bg-green-primary/90 text-white rounded-full text-xs sm:text-sm transition-colors whitespace-nowrap"
                onClick={handleStartLearningClick}
              >
                Start Learning Now
              </button>
              <button
                className="px-3 w-full md:w-auto sm:px-4 md:px-6 lg:px-8 py-3 bg-green-primary/5 text-green-primary font-semibold rounded-full text-xs sm:text-sm transition-colors border-2 border-green-primary/30 hover:bg-green-primary/15 whitespace-nowrap"
                onClick={handleBrowseCoursesClick}
              >
                Browse All Courses
              </button>
            </div>
          </div>

          {/* Separator Line - Horizontal for mobile, Vertical for desktop */}
          <div className="lg:hidden w-full h-px bg-sky-700 my-4"></div>
          <div className="hidden lg:block w-px h-56 bg-sky-700"></div>

          {/* Right: Stats */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-sky-700 mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sky-700 font-medium text-xs sm:text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningStatsSection;
