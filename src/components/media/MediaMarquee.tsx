import React, { useEffect, useRef } from "react";

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

const MediaMarquee = () => {
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
  );
};

export default MediaMarquee;
