import Image from "next/image";

const features = [
  {
    icon: "/ai-enhanced-live-class.svg",
    title: "AI-Enhanced\nLive Classes",
  },
  {
    icon: "/smart-note-concept.svg",
    title: "Smart Notes with\nConcept AI™",
  },
  {
    icon: "/ai-powerd-video.svg",
    title: "AI-Powered\nConcept Videos",
  },
  {
    icon: "/carrer-skill-lader.svg",
    title: "Career+ Skilling\nPrograms",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative w-full bg-white py-28 shadow-[0_-8px_16px_rgba(34,197,94,0.10),0_8px_16px_rgba(34,197,94,0.10)]">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center px-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="bg-green-500 rounded-xl p-4 mb-3 flex items-center justify-center shadow-md">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={38}
                  height={38}
                />
              </div>
              <div className="text-black font-semibold text-base text-center whitespace-pre-line">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
