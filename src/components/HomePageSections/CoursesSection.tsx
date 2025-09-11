"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import CourseCard from "../ui/CourseCard";
import { coursesData, getPopularCourses, getHomepageTopCourses } from "@/data/courses";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const categoryOptions = [
  { label: "All Categories", value: "all" },
  { label: "Class 6th to 12th", value: "class6-12" },
  { label: "JEE", value: "jee" },
  { label: "NEET", value: "neet" },
  { label: "CUET", value: "cuet" },
  { label: "Skill Development", value: "skilling" },
];

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const containerRef = useRef(null);
  const coursesScrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Get filtered courses based on selected category
  const getFilteredCourses = () => {
    if (selectedCategory === "all") {
      return getHomepageTopCourses(); // Show specific curated courses for "All Categories"
    } else if (selectedCategory === "class6-12") {
      // Show only core subjects and PDF notes for each class (2 courses per class)
      const classCategories = ["Class 6th", "Class 7th", "Class 8th", "Class 9th", "Class 10th"];
      const selectedCourses: any[] = [];

      classCategories.forEach(classCategory => {
        const classCourses = coursesData.filter(course => course.category === classCategory);

        // Get core subjects course
        const coreSubjectsCourse = classCourses.find(course =>
          course.subCategory === "Live Classes" || course.title.includes("Core Subjects")
        );
        if (coreSubjectsCourse) selectedCourses.push(coreSubjectsCourse);

        // Get PDF notes course
        const pdfCourse = classCourses.find(course =>
          course.subCategory === "Study Material" || course.title.includes("PDF Notes")
        );
        if (pdfCourse) selectedCourses.push(pdfCourse);
      });

      return selectedCourses;
    } else if (selectedCategory === "jee") {
      return coursesData.filter((course) => course.category === "JEE");
    } else if (selectedCategory === "neet") {
      return coursesData.filter((course) => course.category === "NEET");
    } else if (selectedCategory === "cuet") {
      return coursesData.filter((course) => course.category === "CUET");
    } else if (selectedCategory === "skilling") {
      return coursesData.filter(
        (course) => course.category === "Skill Development"
      );
    }
    return coursesData;
  };

  const filteredCourses = getFilteredCourses();

  // Show more courses for horizontal scrolling to accommodate the new selection
  // Show appropriate number of courses for animation based on category
  const getVisibleCourses = () => {
    if (selectedCategory === "all") {
      return filteredCourses; // Show all filtered courses for "all" category
    } else {
      // For other categories, show more courses if available to enable smooth animation
      const courseCount = filteredCourses.length;
      if (courseCount <= 6) {
        return filteredCourses; // Show all if 6 or fewer
      } else {
        return filteredCourses.slice(0, Math.min(12, courseCount)); // Show up to 12 courses for animation
      }
    }
  };

  const visibleCourses = getVisibleCourses();

  // Scroller speed varies by selected category: make JEE/NEET/CUET faster
  const scrollerSpeed = ["jee", "neet", "skilling"].includes(selectedCategory)
    ? "fast"
    : "slow";

  // Duplicate courses in useEffect for infinite scrolling (like MediaMarquee)
  useEffect(() => {
    const scroller = coursesScrollRef.current;
    if (!scroller) return;

    console.log('Setting up infinite scroll animation...');

    // Always enable animation, regardless of reduced motion preference for this demo
    scroller.setAttribute("data-animated", "true");
    console.log('Added data-animated=true to scroller');

    // Make an array from the elements within scroller inner
    const scrollerInner = scroller.querySelector(".scroller__inner");
    if (!scrollerInner) {
      console.log('No scroller__inner found');
      return;
    }

    // Clear existing duplicated content
    const existingDuplicates = scrollerInner.querySelectorAll('[aria-hidden="true"]');
    console.log('Removing', existingDuplicates.length, 'existing duplicates');
    existingDuplicates.forEach(item => item.remove());

    const scrollerContent = Array.from(scrollerInner.children);
    console.log('Found', scrollerContent.length, 'original items to duplicate');

    // For each item in the array, clone it and add aria-hidden
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });

    console.log('Animation setup complete. Total items now:', scrollerInner.children.length);
  }, [visibleCourses]);

  // Get total count for "See More" card display
  const getTotalCourseCount = () => {
    if (selectedCategory === "all") {
      return getHomepageTopCourses().length; // Show count of curated courses for "All Categories"
    } else if (selectedCategory === "class6-12") {
      // Return count of 2 courses per class (core subjects + PDF notes) = 10 total
      return 10;
    } else if (selectedCategory === "jee") {
      return coursesData.filter((course) => course.category === "JEE").length;
    } else if (selectedCategory === "neet") {
      return coursesData.filter((course) => course.category === "NEET").length;
    } else if (selectedCategory === "cuet") {
      return coursesData.filter((course) => course.category === "CUET").length;
    } else if (selectedCategory === "skilling") {
      return coursesData.filter(
        (course) => course.category === "Skill Development"
      ).length;
    }
    return coursesData.length;
  };

  // Handle navigation to courses page
  const handleSeeMoreClick = () => {
    // Navigate to courses page with the current selected category filter
    if (selectedCategory === "all") {
      router.push("/courses");
    } else if (selectedCategory === "class6-12") {
      router.push("/courses?category=ShikshaBase");
    } else if (selectedCategory === "jee") {
      router.push("/courses?category=JEE");
    } else if (selectedCategory === "neet") {
      router.push("/courses?category=NEET");
    } else if (selectedCategory === "cuet") {
      router.push("/courses?category=CUET");
    } else if (selectedCategory === "skilling") {
      router.push("/courses?category=ShikshaPro");
    } else {
      router.push("/courses");
    }
  };

  // Handle category selection with better mobile support
  const handleCategoryClick = (
    categoryValue: string,
    event?: React.MouseEvent | React.TouchEvent
  ) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setSelectedCategory(categoryValue);
  };

  // Update indicator position and width when category changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeTab = tabRefs.current[selectedCategory];
      const container = containerRef.current;

      if (activeTab && container) {
        // Get the tab's position relative to its parent container
        const tabOffsetLeft = activeTab.offsetLeft;
        const tabWidth = activeTab.offsetWidth;

        setIndicatorStyle({
          width: tabWidth,
          left: tabOffsetLeft,
        });
      }
    };

    // Small delay to ensure DOM is updated
    const timer = setTimeout(updateIndicator, 50);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // Handle window resize to recalculate positions
  useEffect(() => {
    const handleResize = () => {
      const activeTab = tabRefs.current[selectedCategory];
      const container = containerRef.current;

      if (activeTab && container) {
        const tabOffsetLeft = activeTab.offsetLeft;
        const tabWidth = activeTab.offsetWidth;

        setIndicatorStyle({
          width: tabWidth,
          left: tabOffsetLeft,
        });
      }
    };

    // Only add event listener if window is available (client-side)
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [selectedCategory]);

  // Pause/resume handlers for animation
  const handleMouseEnter = () => {
    console.log('Mouse entered - pausing animation');
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    console.log('Mouse left - resuming animation');
    setIsPaused(false);
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Top Courses</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Our most popular programs, trusted by thousands of learners.
          </p>
        </div>

        {/* Category Tabs with Sliding Indicator */}
        <div
          className="flex items-center justify-center mb-12 overflow-x-auto lg:overflow-x-visible"
          style={{ scrollbarWidth: "none", touchAction: "pan-x" }}
        >
          <div
            ref={containerRef}
            className="relative flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 border-b border-gray-200 justify-start lg:justify-center flex-nowrap px-2 sm:px-0 min-w-full lg:min-w-0 hide-scrollbar"
          >
            {categoryOptions.map((cat) => (
              <button
                key={cat.value}
                ref={(el) => {
                  tabRefs.current[cat.value] = el;
                }}
                className={`pb-3 text-base sm:text-xl md:text-2xl transition-colors duration-300 whitespace-nowrap min-w-max relative z-20 cursor-pointer select-none ${selectedCategory === cat.value
                  ? "text-green-600 font-semibold"
                  : "text-gray-500 hover:text-gray-700 font-medium"
                  }`}
                style={{ touchAction: "manipulation" }}
                onClick={(e) => handleCategoryClick(cat.value, e)}
                onTouchEnd={(e) => handleCategoryClick(cat.value, e)}
              >
                {cat.label}
              </button>
            ))}
            {/* Sliding Active Indicator */}
            <div
              className="absolute bottom-0 h-0.5 bg-green-600 transition-all duration-500 ease-out z-0 rounded-full pointer-events-none"
              style={{
                width: `${indicatorStyle.width}px`,
                left: `${indicatorStyle.left}px`,
              }}
            />
          </div>
        </div>

        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
          .overflow-x-auto {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* Ensure proper touch handling on mobile */
          button {
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          /* Prevent scrolling interference with button taps */
          .relative {
            touch-action: auto;
          }

          /* Infinite scrolling animation styles */
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

          .scroller[data-animated="true"] .scroller__inner.paused {
            animation-play-state: paused !important;
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
              transform: translate(calc(-50% - 1.5rem));
            }
          }

          .scroller__inner {
            flex-wrap: wrap;
          }

          @media (prefers-reduced-motion: reduce) {
            .scroller__inner {
              flex-wrap: wrap;
            }
            .scroller[data-animated="true"] .scroller__inner {
              animation: none;
            }
          }
        `}</style>
        {/* Courses Infinite Scroll Container */}
        <div className="relative">
          {/* Courses Container */}
          <div
            ref={coursesScrollRef}
            className="scroller w-full"
            data-speed={scrollerSpeed}
            data-direction="left"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`scroller__inner py-4 flex gap-6 ${isPaused ? 'paused' : ''}`}>
              {visibleCourses.map((course, idx) => (
                <div
                  key={`${course.id}-${idx}`}
                  className="w-80 flex-shrink-0"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <CourseCard {...course} status={course.status} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore All Courses Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleSeeMoreClick}
            className="inline-flex items-center px-8 py-3 border-2 border-sky-700 rounded-full text-sky-700 font-semibold hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all duration-200"
          >
            Explore all courses
          </button>
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;
