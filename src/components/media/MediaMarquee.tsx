import React, { useEffect, useRef } from "react";

const mediaImages = [
  "https://featuringdaily.com/wp-content/uploads/2025/04/cropped-cropped-cropped-Untitled-design-54-2-1.webp",
  "https://businessup2date.com/wp-content/uploads/2021/06/Business-Up2Date-e1716444753574.webp",
  "https://mumbaimirror.co.in/wp-content/uploads/2025/04/cropped-logos-08-1-300x300.png",
  "https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg",
  "https://static.indiatvnews.com/responsive/images/logo-black.webp",
  "https://d10ge3ci2b88dm.cloudfront.net/india-today.webp",
  "https://www.hindustantimes.com/static-content/1y/ht/ht_100_logoblack@2x.webp",
  "https://www.educationtimes.com/EtNewLogo.jpg",
  "data:image/png;base64,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 L/CegIcZ5GcAAAAASUVORK5CYII=",
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
