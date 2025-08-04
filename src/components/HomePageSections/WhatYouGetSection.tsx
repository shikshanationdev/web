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
      <h2 className="text-4xl font-extrabold text-black text-center mb-4">
        What You’ll Get
      </h2>
      <p className="text-gray-600 text-lg text-center max-w-2xl mb-10">
        Lorem ipsum dolor sit amet consectetur. Lorem in volutpat vulputate
        pellentesque blandit feugiat. Porttitor enim nec vitae viverra id.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-5xl w-full justify-center">
        {features.slice(0, 4).map((feature) => (
          <InfoCard key={feature.label} icon={feature.icon} label={feature.label} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl w-full justify-center">
        {features.slice(4).map((feature) => (
          <InfoCard key={feature.label} icon={feature.icon} label={feature.label} />
        ))}
      </div>
      <button className="mt-2 px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-lg flex items-center gap-2 transition">
        Start Learning <span className="text-2xl">→</span>
      </button>
    </section>
  );
};

export default WhatYouGetSection;
