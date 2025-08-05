import React from "react";

const stats = [
  { value: "25k", label: "Students" },
  { value: "6k", label: "Enrolled Learners" },
  { value: "11+", label: "Expert Instructors" },
  { value: "96%", label: "Satisfaction Rate" },
];

const StatsSection = () => {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-4">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-light text-black mb-2">
                {stat.value}
              </div>
              <div className="text-sky-700 font-bold text-lg md:text-2xl text-center text-wrap px-2 md:px-0">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
