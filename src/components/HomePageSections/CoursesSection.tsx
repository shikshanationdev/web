"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import CourseCard from "../ui/CourseCard";
import { coursesData, categories, getCoursesByCategory, getPopularCourses } from "@/data/courses";
import { FiArrowRight } from "react-icons/fi";

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
  const [scrollIndex, setScrollIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const containerRef = useRef(null);
  const router = useRouter();

  // Get filtered courses based on selected category
  const getFilteredCourses = () => {
    if (selectedCategory === "all") {
      return getPopularCourses(); // Show popular courses for "All Categories"
    } else if (selectedCategory === "class6-12") {
      return coursesData.filter(course => course.category.includes("Class"));
    } else if (selectedCategory === "jee") {
      return coursesData.filter(course => course.category === "JEE");
    } else if (selectedCategory === "neet") {
      return coursesData.filter(course => course.category === "NEET");
    } else if (selectedCategory === "cuet") {
      return coursesData.filter(course => course.category === "CUET");
    } else if (selectedCategory === "skilling") {
      return coursesData.filter(course => course.category === "Skill Development");
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
      return coursesData.filter(course => course.category.includes("Class")).length;
    } else if (selectedCategory === "jee") {
      return coursesData.filter(course => course.category === "JEE").length;
    } else if (selectedCategory === "neet") {
      return coursesData.filter(course => course.category === "NEET").length;
    } else if (selectedCategory === "cuet") {
      return coursesData.filter(course => course.category === "CUET").length;
    } else if (selectedCategory === "skilling") {
      return coursesData.filter(course => course.category === "Skill Development").length;
    }
    return coursesData.length;
  };

  const totalCourseCount = getTotalCourseCount();

  // Handle navigation to courses page
  const handleSeeMoreClick = () => {
    router.push('/courses');
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
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [selectedCategory]);

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
        <div className="flex items-center justify-center mb-12 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          <div
            ref={containerRef}
            className="relative flex  items-center gap-6 sm:gap-12 md:gap-20 lg:gap-28 border-b border-gray-200 justify-start flex-nowrap px-2 sm:px-0 min-w-full hide-scrollbar"
            style={{ overflowX: 'auto' }}
          >
            {categoryOptions.map((cat) => (
              <button
                key={cat.value}
                ref={(el) => { tabRefs.current[cat.value] = el; }}
                className={`pb-3 text-base sm:text-xl md:text-2xl  transition-colors duration-300 whitespace-nowrap min-w-max relative z-10 ${selectedCategory === cat.value
                  ? "text-green-600 font-semibold"
                  : "text-gray-500 hover:text-gray-700 font-medium"
                  }`}
                onClick={() => {
                  setSelectedCategory(cat.value);
                }}
              >
                {cat.label}
              </button>
            ))}
            {/* Sliding Active Indicator */}
            <div
              className="absolute bottom-0 h-0.5 bg-green-600 transition-all duration-500 ease-out z-0 rounded-full"
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
        `}</style>
        {/* Courses Horizontal Scroll */}
        <div className="overflow-x-auto pb-6">
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
