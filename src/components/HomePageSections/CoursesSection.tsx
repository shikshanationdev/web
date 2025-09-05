"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import CourseCard from "../ui/CourseCard";
import { coursesData, getPopularCourses } from "@/data/courses";
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const containerRef = useRef(null);
  const coursesScrollRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  // Get filtered courses based on selected category
  const getFilteredCourses = () => {
    if (selectedCategory === "all") {
      return getPopularCourses(); // Show popular courses for "All Categories"
    } else if (selectedCategory === "class6-12") {
      return coursesData.filter((course) => course.category.includes("Class"));
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

  // Show only first 6 courses for horizontal scrolling
  const visibleCourses = filteredCourses.slice(0, 6);

  // Get total count for "See More" card display
  const getTotalCourseCount = () => {
    if (selectedCategory === "all") {
      return coursesData.length; // Show total courses count for "All Categories"
    } else if (selectedCategory === "class6-12") {
      return coursesData.filter((course) => course.category.includes("Class"))
        .length;
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

  // Handle course scroll navigation
  const scrollCourses = (direction: "left" | "right") => {
    const container = coursesScrollRef.current;
    if (!container) return;

    // Temporarily pause auto-scroll when user manually scrolls
    if (isAutoScrolling) {
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
    }

    const cardWidth = 320; // Width of course card (320px as defined in w-80)
    const gap = 24; // Gap between cards (gap-6 = 24px)
    const scrollAmount = cardWidth + gap; // Total space per card including gap
    const currentScroll = container.scrollLeft;

    const newScroll =
      direction === "left"
        ? Math.max(0, currentScroll - scrollAmount)
        : currentScroll + scrollAmount;

    container.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });

    // Update current scroll index for auto-scroll reference
    const newIndex = Math.round(newScroll / scrollAmount);
    setCurrentScrollIndex(newIndex);
  };

  // Update scroll button states
  const updateScrollButtons = () => {
    const container = coursesScrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  // Check scroll buttons on component mount and when courses change
  useEffect(() => {
    const container = coursesScrollRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);

    return () => container.removeEventListener("scroll", updateScrollButtons);
  }, [visibleCourses]);

  // Update scroll buttons on window resize
  useEffect(() => {
    const handleResize = () => {
      updateScrollButtons();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

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

  // Auto-scroll functionality
  useEffect(() => {
    const container = coursesScrollRef.current;
    if (!container) return;

    // Clear any existing interval
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }

    // Only auto-scroll if we have more than 4 courses (including the "See More" card)
    const totalCards = visibleCourses.length + 1; // +1 for "See More" card
    if (totalCards <= 4) {
      setIsAutoScrolling(false);
      setCurrentScrollIndex(0);
      return;
    }

    setIsAutoScrolling(true);

    // Start auto-scrolling
    autoScrollIntervalRef.current = setInterval(() => {
      if (isPaused) return;

      const cardWidth = 320; // Width of course card (w-80 = 320px)
      const gap = 24; // Gap between cards (gap-6 = 24px)
      const scrollAmount = cardWidth + gap;
      const maxScrollIndex = Math.max(0, totalCards - 4); // How many positions we can scroll

      setCurrentScrollIndex((prevIndex) => {
        const nextIndex = prevIndex >= maxScrollIndex ? 0 : prevIndex + 1;

        // Scroll to the new position
        const newScrollLeft = nextIndex * scrollAmount;
        container.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });

        return nextIndex;
      });
    }, 3000); // Move every 3 seconds

    // Cleanup interval on unmount or when dependencies change
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };
  }, [visibleCourses.length, isPaused]);

  // Pause/resume auto-scroll handlers
  const handleMouseEnter = () => {
    if (isAutoScrolling) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (isAutoScrolling) {
      setIsPaused(false);
    }
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
                className={`pb-3 text-base sm:text-xl md:text-2xl transition-colors duration-300 whitespace-nowrap min-w-max relative z-20 cursor-pointer select-none ${
                  selectedCategory === cat.value
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
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
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
        `}</style>
        {/* Courses Horizontal Scroll with Navigation */}
        <div className="relative">
          {/* Left Arrow - Positioned further out to avoid card content */}
          <button
            onClick={() => scrollCourses("left")}
            disabled={!canScrollLeft}
            className={`absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center ${
              canScrollLeft
                ? "bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 cursor-pointer border border-gray-200"
                : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-300"
            }`}
            aria-label="Scroll courses left"
          >
            <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Right Arrow - Positioned further out to avoid card content */}
          <button
            onClick={() => scrollCourses("right")}
            disabled={!canScrollRight}
            className={`absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center ${
              canScrollRight
                ? "bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 cursor-pointer border border-gray-200"
                : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-300"
            }`}
            aria-label="Scroll courses right"
          >
            <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Courses Container */}
          <div
            ref={coursesScrollRef}
            className="overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-6 w-max">
              {/* Course Cards */}
              {visibleCourses.map((course) => (
                <div key={course.id} className="w-80 flex-shrink-0">
                  <CourseCard {...course} />
                </div>
              ))}

              {/* See More Courses Card */}
              <div
                className="w-80 flex-shrink-0 cursor-pointer"
                onClick={handleSeeMoreClick}
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden w-full h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-2 border-dashed border-gray-300 hover:border-sky-500">
                  <div className="flex-1 flex flex-col items-center justify-center p-8">
                    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                      <FiArrowRight className="w-8 h-8 text-sky-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      See More Courses
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore All Courses Button (keep as fallback) */}
        <div className="text-center">
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
