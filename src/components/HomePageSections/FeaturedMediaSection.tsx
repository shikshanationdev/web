"use client";
import React, { useEffect, useRef } from "react";
import { TiStarFullOutline } from "react-icons/ti";

// Media logos from MediaMarquee component
const mediaImages = [
  "https://featuringdaily.com/wp-content/uploads/2025/04/cropped-cropped-cropped-Untitled-design-54-2-1.webp",
  "https://businessup2date.com/wp-content/uploads/2021/06/Business-Up2Date-e1716444753574.webp",
  "https://mumbaimirror.co.in/wp-content/uploads/2025/04/cropped-logos-08-1-300x300.png",
  "https://www.medianews4u.com/wp-content/uploads/2019/08/MediaNews4U.png",
  "https://thehindustnexpress.com/wp-content/uploads/2025/05/cropped-hindustn-03.png",
  "https://d10ge3ci2b88dm.cloudfront.net/ground.webp",
  "https://news18today.com/wp-content/uploads/2025/05/logos-12-1.png",
  "https://indiastoday.com/wp-content/uploads/2021/11/cropped-logos-01-300x300.png",
  "https://india24x7news.com/wp-content/uploads/2025/05/cropped-tinywow_change_bg_photo_79634246.png",
  "https://foxstoryindia.com/wp-content/uploads/2024/07/cropped-Add-a-heading1.png",
  "https://d10ge3ci2b88dm.cloudfront.net/carnival.webp",
];

// First article from media page
const featuredArticle = {
  logo: "https://static.toiimg.com/photo/92222747.cms",
  brand: "THE INDIAN EXPRESS",
  title: "Take a look at these inspiring icons: Pioneers of change and impact",
  desc: "These visionaries have transformed their fields through innovation, resilience, and leadership. Their contributions have inspired change, uplifted communities ...",
  date: "16 October, 2025",
  link: "https://timesofindia.indiatimes.com/business/india-business/take-a-look-at-these-inspiring-icons-pioneers-of-change-and-impact/articleshow/124457781.cms",
};

const FeaturedMediaSection = () => {
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
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold mb-4">
            Who&apos;s talking about us?
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            Explore the stories, features, and voices that highlight Shiksha Nation&apos;s impact.
          </p>
        </div>

        {/* Featured Article Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <a
            href={featuredArticle.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl bg-white shadow-lg shadow-green-100/60 hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group relative"
          >
            {/* Top Featured Badge - attached to top with light green background */}
            <div className="flex justify-center py-2 bg-green-50">
              <div className="inline-flex items-center gap-2">
                <span className="text-orange-200 text-base"><TiStarFullOutline /></span>
                <span className="text-orange-300 text-xl"><TiStarFullOutline /></span>
                <span className="text-orange-300 text-2xl"><TiStarFullOutline /></span>
                <span className="text-orange-300 font-light text-sm md:text-lg uppercase tracking-wider">
                  TOP FEATURED
                </span>
                <span className="text-orange-300 text-2xl"><TiStarFullOutline /></span>
                <span className="text-orange-300 text-xl"><TiStarFullOutline /></span>
                <span className="text-orange-200 text-base"><TiStarFullOutline /></span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                {featuredArticle.logo && (
                  <img
                    src={featuredArticle.logo}
                    alt={featuredArticle.brand}
                    className="h-7 w-auto"
                  />
                )}
              </div>
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-gray-900 group-hover:text-[#1abc6c] transition-colors duration-200">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                {featuredArticle.desc}
              </p>
              <div className="flex items-center justify-between text-xs md:text-sm font-medium">
                <span className="text-[#1976d2] group-hover:underline flex items-center">
                  Read post <span className="ml-2">→</span>
                </span>
                <span className="text-gray-400">{featuredArticle.date}</span>
              </div>
            </div>
          </a>
        </div>

        {/* Recently Featured In Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            {/* Left horizontal line - white to gray gradient */}
            <div className="h-0.5 w-24 md:w-64 bg-gradient-to-r from-white to-gray-400"></div>

            <h3 className="text-2xl text-gray-700 font-normal whitespace-nowrap">
              Recently Featured In
            </h3>

            {/* Right horizontal line - gray to white gradient */}
            <div className="h-0.5 w-24 md:w-64 bg-gradient-to-r from-gray-400 to-white"></div>
          </div>

          {/* Media Logos Animation - using exact same implementation as MediaMarquee */}
          <>
            <div
              ref={scrollerRef}
              className="scroller w-[90vw] max-w-4xl mx-auto"
              data-speed="fast"
              data-direction="left"
            >
              <div className="scroller__inner py-4 flex gap-8">
                {mediaImages.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="media logo"
                    className="h-10 flex-shrink-0 opacity-80 grayscale hover:grayscale-0 transition duration-300"
                    draggable="false"
                  />
                ))}
              </div>
            </div>

            <style jsx>{`
          .scroller[data-animated="true"] {
            overflow: hidden;
            -webkit-mask: linear-gradient(
              90deg,
              transparent,
              white 10%,
              white 90%,
              transparent
            );
            mask: linear-gradient(
              90deg,
              transparent,
              white 10%,
              white 90%,
              transparent
            );
          }

          .scroller[data-animated="true"] .scroller__inner {
            width: max-content;
            flex-wrap: nowrap;
            animation: scroll var(--_animation-duration, 30s)
              var(--_animation-direction, forwards) linear infinite;
          }

          .scroller[data-direction="right"] {
            --_animation-direction: reverse;
          }

          .scroller[data-direction="left"] {
            --_animation-direction: forwards;
          }

          .scroller[data-speed="fast"] {
            --_animation-duration: 20s;
          }

          .scroller[data-speed="slow"] {
            --_animation-duration: 60s;
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
            }
          }
        `}</style>
          </>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMediaSection;
