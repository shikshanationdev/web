"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

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
    <section className="relative w-full bg-white py-12 md:py-28 shadow-[0_-8px_16px_rgba(34,197,94,0.10),0_8px_16px_rgba(34,197,94,0.10)]">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center px-4">
        <div ref={scrollRef} className="w-full flex gap-3 md:gap-6 overflow-x-auto md:grid md:grid-cols-4 md:gap-0 md:overflow-x-visible scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {features.map((feature) => (
            <div key={feature.title} className="flex-shrink-0 flex flex-col items-center min-w-[140px] md:min-w-0">
              <div className="bg-lime-500 rounded-xl p-2 md:p-4 mb-2 md:mb-3 flex items-center justify-center shadow-md">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={38}
                  height={38}
                  className="md:w-16 md:h-16"
                />
              </div>
              <div className="text-black font-semibold text-[0.95rem] md:text-lg text-center whitespace-pre-line">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
        {/* Minimal green scrollbar indicator for mobile */}
        <div className="md:hidden w-full flex justify-center mt-2">
          <div className="h-3 w-40 bg-white flex items-center relative overflow-hidden">
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-2 bg-green-500 rounded-full"
              style={{ width: `${40 + scrollPercent * 80}px`, transition: 'width 0.2s' }}
            />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-2 border border-green-500 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
