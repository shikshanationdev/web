"use client";

import Image from "next/image";
import { useState } from "react";
import { FiSearch, FiFilter, FiUsers, FiClock, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdGridView } from "react-icons/md";

const CoursesCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Newly published");
  const [expandedCategories, setExpandedCategories] = useState(["Class 6th to 12th"]);

  const categories = [
    { name: "All Categories", count: 25, isMain: true },
    {
      name: "Class 6th to 12th",
      count: 20,
      isMain: true,
      subCategories: [
        { name: "Class 6th", count: 4 },
        { name: "Class 7th", count: 4 },
        { name: "Class 8th", count: 3 },
        { name: "Class 9th", count: 1 },
        { name: "Class 10th", count: 5 },
        { name: "Class 11th", count: 3 },
        { name: "Class 12th", count: 0 },
      ]
    },
    {
      name: "JEE",
      count: 20,
      isMain: true,
      subCategories: [
        { name: "Lectures", count: 7 },
        { name: "Live Lectures", count: 7 },
      ]
    },
    {
      name: "NEET",
      count: 8,
      isMain: true,
      subCategories: [
        { name: "Test Series", count: 7 },
        { name: "Live Lectures", count: 7 },
      ]
    },
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const courses = [
    {
      id: 1,
      title: "Course Name",
      instructor: "Instructor Name",
      rating: 4.5,
      reviews: 24,
      price: 799,
      originalPrice: 999,
      level: "Beginner",
      students: 156,
      duration: "12 hours",
      image: "/courses/Class 6th to 12th.jpg",
      category: "JEE",
      isPopular: true,
    },
    {
      id: 2,
      title: "Course Name",
      instructor: "Instructor Name",
      rating: 4.8,
      reviews: 18,
      price: 799,
      originalPrice: 999,
      level: "Intermediate",
      students: 203,
      duration: "15 hours",
      image: "/courses/NEET.jpg",
      category: "NEET",
      isPopular: false,
    },
    {
      id: 3,
      title: "Course Name",
      instructor: "Instructor Name",
      rating: 4.6,
      reviews: 32,
      price: 799,
      originalPrice: 999,
      level: "Advanced",
      students: 89,
      duration: "18 hours",
      image: "/courses/JEE.jpg",
      category: "JEE",
      isPopular: true,
    },
    {
      id: 4,
      title: "Course Name",
      instructor: "Instructor Name",
      rating: 4.7,
      reviews: 15,
      price: 799,
      originalPrice: 999,
      level: "Beginner",
      students: 167,
      duration: "10 hours",
      image: "/courses/Skill Development.jpg",
      category: "NEET",
      isPopular: false,
    },
    {
      id: 5,
      title: "Course Name",
      instructor: "Instructor Name",
      rating: 4.4,
      reviews: 28,
      price: 799,
      originalPrice: 999,
      level: "Intermediate",
      students: 234,
      duration: "14 hours",
      image: "/courses/Class 6th to 12th.jpg",
      category: "Class 10th",
      isPopular: false,
    },
    {
      id: 6,
      title: "Course Name",
      instructor: "Instructor Name",
      rating: 4.9,
      reviews: 42,
      price: 799,
      originalPrice: 999,
      level: "Advanced",
      students: 178,
      duration: "20 hours",
      image: "/courses/NEET.jpg",
      category: "Class 12th",
      isPopular: true,
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Courses</h2>
          <p className="text-gray-600">Showing {filteredCourses.length} of 29 Results</p>
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
                  <div key={category.name}>
                    {/* Main Category */}
                    <div className="flex items-center justify-between py-3">
                      <label className="flex items-center cursor-pointer flex-1">
                        <input
                          type="radio"
                          name="category"
                          value={category.name}
                          checked={selectedCategory === category.name}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className={`ml-3 text-sm ${selectedCategory === category.name
                          ? 'text-blue-600 font-medium'
                          : 'text-gray-700'
                          }`}>
                          {category.name}
                        </span>
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">({category.count})</span>
                        {category.subCategories && (
                          <button
                            onClick={() => toggleCategory(category.name)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            {expandedCategories.includes(category.name) ? (
                              <FiChevronUp className="w-3 h-3 text-gray-400" />
                            ) : (
                              <FiChevronDown className="w-3 h-3 text-gray-400" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Sub Categories */}
                    {category.subCategories && expandedCategories.includes(category.name) && (
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
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {course.isPopular && (
                      <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        POPULAR
                      </div>
                    )}
                  </div>

                  {/* Course Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {course.category}
                      </span>
                      <span className="text-xs text-gray-500">{course.level}</span>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          i < Math.floor(course.rating) ? (
                            <AiFillStar
                              key={i}
                              className="w-4 h-4 text-yellow-400"
                            />
                          ) : (
                            <AiOutlineStar
                              key={i}
                              className="w-4 h-4 text-gray-300"
                            />
                          )
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {course.rating} ({course.reviews} Reviews)
                      </span>
                    </div>

                    {/* Course Stats */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FiUsers className="w-3 h-3" />
                        <span>{course.students} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiClock className="w-3 h-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">₹{course.price}</span>
                        <span className="text-sm text-gray-500 line-through">₹{course.originalPrice}</span>
                      </div>
                      <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
