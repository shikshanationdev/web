"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const affiliations = [
  {
    img: "/MSME.webp",
    label: "MSME Registered",
    bg: "bg-green-50",
    text: "text-green-600",
  },
  {
    img: "/startup-india-23.webp",
    label: "Recognized by Startup India",
    bg: "bg-green-50",
    text: "text-green-600",
  },
  {
    img: "/images.webp",
    label: "ISO : Certified",
    bg: "bg-green-50",
    text: "text-green-600",
  },
  {
    img: "/nsdc-logo-ss.webp",
    label: "NSDC Certified",
    bg: "bg-green-50",
    text: "text-green-600",
  },
  {
    img: "/SkillIndia.webp",
    label: "Skill India Certified",
    bg: "bg-green-50",
    text: "text-green-600",
  },
];

const AffiliationsCertifications = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Check if user hasn't opted for reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Add data-animated="true" to enable the animation
      scroller.setAttribute("data-animated", "true");

      // Make an array from the elements within scroller inner
      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (!scrollerInner) return;

      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it and add aria-hidden
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      {/* Header Section - Centered */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Our Affiliations & Certifications
        </h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          Shiksha Nation is proud to be affiliated with leading education
          boards, institutions, and certified learning partners
        </p>
      </div>

      {/* Desktop Marquee Container */}
      <div className="hidden md:block">
        <div
          ref={scrollerRef}
          className="scroller w-full"
          data-speed="slow"
          data-direction="left"
        >
          <div className="scroller__inner py-4 flex gap-8">
            {affiliations.map((item, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 rounded-2xl ${item.bg} shadow-lg shadow-green-100 flex flex-col w-80 h-56 transition-all overflow-hidden hover:scale-105`}
              >
                <div className="h-[80%] flex items-center justify-center w-full bg-white p-4">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={240}
                    height={120}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div
                  className={`h-[20%] flex justify-center items-center w-full text-center font-semibold text-base ${item.text}`}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Static Grid */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {affiliations.map((item, idx) => (
          <div
            key={`mobile-${idx}`}
            className={`rounded-xl ${item.bg} shadow-lg shadow-green-100 flex flex-col transition-all overflow-hidden hover:scale-[1.02]`}
          >
            <div className="h-32 flex items-center justify-center w-full bg-white p-4">
              <Image
                src={item.img}
                alt={item.label}
                width={200}
                height={100}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            <div
              className={`py-3 flex justify-center items-center w-full text-center font-semibold text-sm ${item.text} px-4`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scroller[data-animated="true"] {
          overflow: hidden;
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 5%,
            white 95%,
            transparent
          );
          mask: linear-gradient(
            90deg,
            transparent,
            white 5%,
            white 95%,
            transparent
          );
        }

        .scroller[data-animated="true"] .scroller__inner {
          width: max-content;
          flex-wrap: nowrap;
          animation: scroll var(--_animation-duration, 40s)
            var(--_animation-direction, forwards) linear infinite;
        }

        .scroller[data-direction="right"] {
          --_animation-direction: reverse;
        }

        .scroller[data-direction="left"] {
          --_animation-direction: forwards;
        }

        .scroller[data-speed="fast"] {
          --_animation-duration: 25s;
        }

        .scroller[data-speed="slow"] {
          --_animation-duration: 50s;
        }

        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 1rem));
          }
        }

        .scroller__inner {
          flex-wrap: wrap;
        }

        @media (prefers-reduced-motion: reduce) {
          .scroller__inner {
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        /* Pause animation on hover */
        .scroller[data-animated="true"]:hover .scroller__inner {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AffiliationsCertifications;
