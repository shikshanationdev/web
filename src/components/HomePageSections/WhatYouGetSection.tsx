import Image from "next/image";

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
          <div
            key={feature.label}
            className="bg-white rounded-2xl shadow-md flex flex-col items-center p-7 min-w-[200px] min-h-[200px] max-w-[240px] mx-auto"
          >
            <div className="w-24 h-24 flex items-center justify-center mb-4 relative">
              <Image
                src={feature.icon}
                alt={feature.label}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="text-blue-700 font-bold text-xl text-center whitespace-pre-line">
              {feature.label}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl w-full justify-center">
        {features.slice(4).map((feature) => (
          <div
            key={feature.label}
            className="bg-white rounded-2xl shadow-md flex flex-col items-center p-7 min-w-[200px] min-h-[200px] max-w-[240px] mx-auto"
          >
            <div className="w-24 h-24 flex items-center justify-center mb-4 relative">
              <Image
                src={feature.icon}
                alt={feature.label}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="text-blue-700 font-bold text-xl text-center whitespace-pre-line">
              {feature.label}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-2 px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-lg flex items-center gap-2 transition">
        Start Learning <span className="text-2xl">→</span>
      </button>
    </section>
  );
};

export default WhatYouGetSection;
