"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const features = [
  {
    icon: "/home/ai-enhanced-live-class.svg",
    title: "AI-Enhanced\nLive Classes",
    titleColor: "text-blue-600",
    shadowStyle: {
      boxShadow: "0 0 20px rgba(37, 99, 235, 0.1)",
    },
  },
  {
    icon: "/home/smart-note-concept.svg",
    title: "Smart Notes with\nConcept AI™",
    titleColor: "text-yellow-700",
    shadowStyle: {
      boxShadow: "0 0 20px rgba(161, 98, 7, 0.1)",
    },
  },
  {
    icon: "/home/ai-powerd-video.svg",
    title: "AI-Powered\nConcept Videos",
    titleColor: "text-red-600",
    shadowStyle: {
      boxShadow: "0 0 20px rgba(220, 38, 38, 0.1)",
    },
  },
  {
    icon: "/home/carrer-skill-lader.svg",
    title: "Career + Skilling\nPrograms",
    titleColor: "text-purple-600",
    shadowStyle: {
      boxShadow: "0 0 20px rgba(147, 51, 234, 0.1)",
    },
  },
];

const FeaturesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const percent = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
      setScrollPercent(percent);
    };
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      // Initial update
      handleScroll();
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section
      className="relative w-full bg-white py-12 md:py-20"
      style={{
        boxShadow: "0 0 40px rgba(34, 197, 94, 0.1)"
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center px-4">
        <div ref={scrollRef} className="w-full flex gap-6 overflow-x-auto md:grid md:grid-cols-4 md:gap-8 md:overflow-x-visible scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {features.map((feature) => (
            <div key={feature.title} className="flex-shrink-0 min-w-[280px] md:min-w-0">
              <div
                className="bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 flex flex-col items-center h-full hover:scale-105"
                style={feature.shadowStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, feature.shadowStyle);
                }}
              >
                <div className="mb-4 flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={72}
                    height={72}
                    className="md:w-24 md:h-24"
                  />
                </div>
                <div className={`${feature.titleColor} font-bold text-lg md:text-xl text-center whitespace-pre-line leading-tight`}>
                  {feature.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Minimal scrollbar indicator for mobile */}
        <div className="md:hidden w-full flex justify-center mt-4">
          <div className="h-2 w-32 bg-gray-200 rounded-full relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${25 + scrollPercent * 75}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
