"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdGridView } from "react-icons/md";
import CourseCard from "../ui/CourseCard";
import { coursesData, categories } from "@/data/courses";

const CoursesCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Newly published");
  const [expandedCategories, setExpandedCategories] = useState(["Class 6th to 12th"]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  // Filter courses based on selected category
  const getFilteredCourses = () => {
    if (selectedCategory === "All Categories") {
      return coursesData;
    } else if (selectedCategory === "Class 6th to 12th") {
      return coursesData.filter(course => course.category.includes("Class"));
    } else if (selectedCategory === "JEE") {
      return coursesData.filter(course => course.category === "JEE");
    } else if (selectedCategory === "NEET") {
      return coursesData.filter(course => course.category === "NEET");
    } else if (selectedCategory === "CUET") {
      return coursesData.filter(course => course.category === "CUET");
    } else if (selectedCategory === "Skill Development") {
      return coursesData.filter(course => course.category === "Skill Development");
    } else {
      // For subcategories
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

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Courses</h2>
          <p className="text-gray-600">Showing {filteredCourses.length} of {coursesData.length} Results</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg h-full lg:sticky lg:top-4">
              {/* Categories */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <MdGridView className="w-4 h-4 text-gray-600" />
                    <h3 className="font-medium text-gray-900">Categories</h3>
                  </div>
                  <FiChevronUp className="w-4 h-4 text-gray-400" />
                </div>

                <div className="space-y-3">{categories.map((category) => (
                  <div key={category.label}>
                    {/* Main Category */}
                    <div className="flex items-center justify-between py-3">
                      <label className="flex items-center cursor-pointer flex-1">
                        <input
                          type="radio"
                          name="category"
                          value={category.label}
                          checked={selectedCategory === category.label}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className={`ml-3 text-sm ${selectedCategory === category.label
                          ? 'text-blue-600 font-medium'
                          : 'text-gray-700'
                          }`}>
                          {category.label}
                        </span>
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">({category.count})</span>
                        {category.subCategories && (
                          <button
                            onClick={() => toggleCategory(category.label)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            {expandedCategories.includes(category.label) ? (
                              <FiChevronUp className="w-3 h-3 text-gray-400" />
                            ) : (
                              <FiChevronDown className="w-3 h-3 text-gray-400" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Sub Categories */}
                    {category.subCategories && expandedCategories.includes(category.label) && (
                      <div className="ml-7 space-y-2">
                        {category.subCategories.map((subCategory) => (
                          <label key={subCategory.name} className="flex items-center justify-between cursor-pointer py-2">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                name="category"
                                value={subCategory.name}
                                checked={selectedCategory === subCategory.name}
                                onChange={(e) => setSelectedCategory(e.target.value)}
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
            {/* Sort and View Options */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Newly published</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                  </select>
                  <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                    <div className="bg-blue-600 rounded-sm"></div>
                    <div className="bg-blue-600 rounded-sm"></div>
                    <div className="bg-blue-600 rounded-sm"></div>
                    <div className="bg-blue-600 rounded-sm"></div>
                  </div>
                </button>
                <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <div className="flex flex-col gap-0.5 w-4 h-4">
                    <div className="bg-gray-400 h-1 rounded-sm"></div>
                    <div className="bg-gray-400 h-1 rounded-sm"></div>
                    <div className="bg-gray-400 h-1 rounded-sm"></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.title}
                    image={course.image}
                    rating={course.rating}
                    reviews={course.reviews}
                    price={course.price}
                    oldPrice={course.oldPrice}
                    instructor={course.instructor}
                    level={course.level}
                    students={course.students}
                    duration={course.duration}
                    category={course.category}
                    isPopular={course.isPopular}
                    variant="detailed"
                  />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-16">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Coming Soon!</h3>
                  <p className="text-gray-600 text-center max-w-md">
                    We're working hard to bring you amazing skill development courses. Stay tuned for updates!
                  </p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                  &lt;
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-md">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                  3
                </button>
                <span className="px-2">...</span>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesCatalog;
