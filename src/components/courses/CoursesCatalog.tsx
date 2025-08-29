"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FiChevronDown, FiChevronUp, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdGridView } from "react-icons/md";
import CourseCard from "../ui/CourseCard";
import { coursesData, categories } from "@/data/courses";
import { LuSettings2 } from "react-icons/lu";

const CoursesCatalog = () => {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams?.get('category');

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Newly published");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Set category from URL parameter on component mount
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const toggleMobileFilters = () => setIsMobileFiltersOpen(s => !s);

  // Reset to first page when category or sort changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
    setIsMobileFiltersOpen(false); // Close mobile filter panel
  };

  // Filter courses based on selected category
  const getFilteredCourses = () => {
    if (selectedCategory === "All Categories") {
      return coursesData;
    } else if (selectedCategory === "ShikshaBase") {
      return coursesData.filter(course =>
        course.category === "Class 6th" ||
        course.category === "Class 7th" ||
        course.category === "Class 8th" ||
        course.category === "Class 9th" ||
        course.category === "Class 10th"
      );
    } else if (selectedCategory === "ShikshaEdge") {
      return coursesData.filter(course =>
        course.category === "JEE" ||
        course.category === "NEET" ||
        course.category === "CUET"
      );
    } else if (selectedCategory === "ShikshaQuest") {
      return coursesData.filter(course =>
        course.category === "JEE" ||
        course.category === "NEET" ||
        course.category === "CUET"
      );
    } else if (selectedCategory === "ShikshaPro") {
      return coursesData.filter(course => course.category === "Skill Development");
    } else if (selectedCategory.includes("Class")) {
      return coursesData.filter(course => course.category === selectedCategory);
    } else if (selectedCategory === "JEE" || selectedCategory === "NEET" || selectedCategory === "CUET") {
      return coursesData.filter(course => course.category === selectedCategory);
    } else if (selectedCategory === "PCB") {
      return coursesData.filter(course => course.category === "NEET");
    } else if (selectedCategory === "PCM") {
      return coursesData.filter(course => course.category === "JEE");
    } else if (selectedCategory === "Humanities") {
      return coursesData.filter(course =>
        course.category === "CUET" &&
        (course.subCategory === "Humanities" || course.title === "CUET - Humanities PYQs")
      );
    } else if (selectedCategory === "Commerce") {
      return coursesData.filter(course =>
        course.category === "CUET" &&
        (course.subCategory === "Commerce" || course.title === "CUET - Commerce PYQs")
      );
    } else if (selectedCategory === "Artificial Intelligence - Advanced Program" ||
      selectedCategory === "Artificial Intelligence - Basic Program" ||
      selectedCategory === "Data Analytics" ||
      selectedCategory === "Digital Marketing" ||
      selectedCategory === "UI UX Design") {
      return coursesData.filter(course => course.title === selectedCategory);
    } else {
      // For other subcategories or legacy categories
      return coursesData.filter(course =>
        course.category === selectedCategory || course.subCategory === selectedCategory
      );
    }
  };

  let filteredCourses = getFilteredCourses();

  // Sort courses based on sortBy value
  switch (sortBy) {
    case "Price: Low to High":
      filteredCourses = [...filteredCourses].sort((a, b) => a.price - b.price);
      break;
    case "Price: High to Low":
      filteredCourses = [...filteredCourses].sort((a, b) => b.price - a.price);
      break;
    case "Rating":
      filteredCourses = [...filteredCourses].sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Keep original order for "Newly published"
      break;
  }

  // Pagination logic
  const totalCourses = filteredCourses.length;
  const totalPages = Math.ceil(totalCourses / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  // Pagination helper functions
  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to course grid section
    const courseGridElement = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.xl\\:grid-cols-3');
    if (courseGridElement) {
      courseGridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Explore Courses</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Sort and Filter Controls */}
          <div className="w-full lg:hidden flex gap-3">
            {/* Sort Dropdown */}
            <div className="relative flex-1">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="appearance-none w-full bg-white border-2 border-sky-600 rounded-full px-4 py-2 pr-8 text-sm text-sky-600 outline-none focus:ring-0"
              >
                <option>Newly published</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sky-600" />
            </div>

            {/* Filter Button */}
            <button
              onClick={toggleMobileFilters}
              aria-expanded={isMobileFiltersOpen}
              className="inline-flex justify-center items-center gap-2 px-4 py-2 text-sm border-2 border-sky-600 text-sky-600 rounded-full bg-white whitespace-nowrap"
            >
              <LuSettings2 className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>

          {/* Mobile Sliding Filters (hidden on desktop) */}
          <div className={`lg:hidden overflow-hidden transition-max-height duration-300 ${isMobileFiltersOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 max-h-[450px] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MdGridView className="w-4 h-4 text-gray-600" />
                  <h3 className="font-medium text-gray-900">Categories</h3>
                </div>
              </div>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.label}>
                    <div className="flex items-center justify-between py-2">
                      <label className="flex items-center cursor-pointer flex-1">
                        <input
                          type="radio"
                          name="mobile-category"
                          value={category.label}
                          checked={selectedCategory === category.label}
                          onChange={(e) => { handleCategoryChange(e.target.value); setIsMobileFiltersOpen(false); }}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className={`ml-3 text-sm font-bold text-black ${selectedCategory === category.label ? 'text-blue-600 font-medium' : ''}`}>
                          {category.label}
                        </span>
                      </label>
                    </div>

                    {category.subCategories && (
                      <div className="ml-6 space-y-2">
                        {category.subCategories.map((subCategory) => (
                          <label key={subCategory.name} className="flex items-center justify-between cursor-pointer py-2">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                name="mobile-category"
                                value={subCategory.name}
                                checked={selectedCategory === subCategory.name}
                                onChange={(e) => { handleCategoryChange(e.target.value); setIsMobileFiltersOpen(false); }}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className={`ml-3 text-sm ${selectedCategory === subCategory.name ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                                {subCategory.name}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">({subCategory.count})</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Filters (desktop only) */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg lg:sticky lg:top-4 lg:max-h-[calc(100vh-8rem)] lg:overflow-hidden">
              {/* Categories */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <MdGridView className="w-4 h-4 text-gray-600" />
                    <h3 className="font-medium text-gray-900">Categories</h3>
                  </div>
                </div>

                <div className="space-y-3 max-h-[calc(100vh-16rem)] overflow-y-auto scrollbar-hide">{categories.map((category) => (
                  <div key={category.label}>
                    {/* Main Category */}
                    <div className="flex items-center justify-between py-3">
                      <label className="flex items-center cursor-pointer flex-1">
                        <input
                          type="radio"
                          name="category"
                          value={category.label}
                          checked={selectedCategory === category.label}
                          onChange={(e) => handleCategoryChange(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className={`ml-3 text-sm font-bold text-black ${selectedCategory === category.label
                          ? 'text-blue-600 font-medium'
                          : ''
                          }`}>
                          {category.label}
                        </span>
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">({category.count})</span>
                      </div>
                    </div>

                    {/* Sub Categories */}
                    {category.subCategories && (
                      <div className="ml-7 space-y-2">
                        {category.subCategories.map((subCategory) => (
                          <label key={subCategory.name} className="flex items-center justify-between cursor-pointer py-2">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                name="category"
                                value={subCategory.name}
                                checked={selectedCategory === subCategory.name}
                                onChange={(e) => handleCategoryChange(e.target.value)}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className={`ml-3 text-sm ${selectedCategory === subCategory.name
                                ? 'text-blue-600 font-medium'
                                : 'text-gray-600'
                                }`}>
                                {subCategory.name}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">({subCategory.count})</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Results Count and View Options - Desktop only */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <div className="text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, totalCourses)} of {totalCourses} Results
                {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Options */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-sky-600">Sort by:</span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value)}
                      className="appearance-none bg-white border-2 border-sky-600 outline-none rounded-lg px-4 py-2 pr-10 text-sm text-sky-600 focus:ring-0 focus:border-blue-500 min-w-[200px]"
                    >
                      <option>Newly published</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rating</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-600" />
                  </div>
                </div>


              </div>
            </div>

            {/* Mobile Results Count only */}
            <div className="lg:hidden text-center text-sm text-gray-600 mb-6">
              Showing {startIndex + 1}-{Math.min(endIndex, totalCourses)} of {totalCourses} Results
              {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
              {currentCourses.length > 0 ? (
                currentCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.title}
                    image={course.image}
                    rating={course.rating}
                    reviews={course.reviews}
                    price={course.price}
                    oldPrice={course.oldPrice}
                    enrollLink={course.enrollLink}
                    instructor={course.instructor}
                    level={course.level}
                    students={course.students}
                    duration={course.duration}
                    category={course.category}
                    isPopular={course.isPopular}
                    variant="default"
                  />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-16">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Coming Soon!</h3>
                  <p className="text-gray-600 text-center max-w-md">
                    We&apos;re working hard to bring you amazing skill development courses. Stay tuned for updates!
                  </p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 flex items-center justify-center border rounded-md ${currentPage === 1
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    <FiChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Page Numbers */}
                  {getPageNumbers().map((pageNumber, index) => (
                    pageNumber === '...' ? (
                      <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                        ...
                      </span>
                    ) : (
                      <button
                        key={pageNumber}
                        onClick={() => goToPage(pageNumber as number)}
                        className={`w-10 h-10 flex items-center justify-center rounded-md ${currentPage === pageNumber
                          ? 'bg-blue-600 text-white'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        {pageNumber}
                      </button>
                    )
                  ))}

                  {/* Next Button */}
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 flex items-center justify-center border rounded-md ${currentPage === totalPages
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    <FiChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesCatalog;
