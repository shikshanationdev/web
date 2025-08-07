import React from "react";

const stats = [
  { value: "6.3k", label: "Online courses" },
  { value: "26k", label: "Certified Instructor" },
  { value: "99.9%", label: "Success Rate" },
];

const LearningStatsSection = () => {
  return (
    <section className="w-full py-16 px-5 xl:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[3vw] xl:text-5xl font-bold text-sky-700 mb-6 lg:mb-8 leading-tight">
              Start learning with 67.1k students around the world.
            </h2>
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
              <button className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 bg-[rgb(var(--color-green-primary))] hover:bg-[rgb(var(--color-green-primary)/0.9)] text-white font-semibold rounded-full text-xs sm:text-sm transition-colors whitespace-nowrap">
                Start Learning Now
              </button>
              <button className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 bg-[rgb(var(--color-green-primary)/0.1)] text-[rgb(var(--color-green-primary))] font-semibold rounded-full text-xs sm:text-sm transition-colors border-2 border-[rgb(var(--color-green-primary)/0.3)] hover:bg-[rgb(var(--color-green-primary)/0.15)] whitespace-nowrap">
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
              {stats.map((stat, index) => (
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
