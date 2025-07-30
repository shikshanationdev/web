"use client";
import React, { useState } from "react";

const categories = [
  { label: "All Categories", value: "all" },
  { label: "Class 6th to 12th", value: "class6-12" },
  { label: "JEE", value: "jee" },
  { label: "NEET", value: "neet" },
  { label: "CUET", value: "cuet" },
  { label: "Skilling", value: "skilling" },
];

const courses = [
  {
    id: 1,
    title: "Course Name",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    rating: 3,
    reviews: "2k",
    price: 799,
    oldPrice: 1699,
    enrollLink: "#",
    category: "all",
  },
  {
    id: 2,
    title: "Course Name",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    rating: 3,
    reviews: "2k",
    price: 799,
    oldPrice: 1699,
    enrollLink: "#",
    category: "all",
  },
  {
    id: 3,
    title: "Course Name",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    rating: 3,
    reviews: "2k",
    price: 799,
    oldPrice: 1699,
    enrollLink: "#",
    category: "all",
  },
  {
    id: 4,
    title: "Course Name",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    rating: 3,
    reviews: "2k",
    price: 799,
    oldPrice: 1699,
    enrollLink: "#",
    category: "all",
  },
];

interface CourseCardProps {
  title: string;
  image: string;
  rating: number;
  reviews: string;
  price: number;
  oldPrice: number;
  enrollLink: string;
}

const CourseCard = ({ title, image, rating, reviews, price, oldPrice, enrollLink }: CourseCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-gray-500 text-sm">({reviews} Reviews)</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-800">₹{price}</span>
          <span className="text-gray-400 line-through">₹{oldPrice}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          Enroll Now
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [scrollIndex, setScrollIndex] = useState(0);

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  // Slider logic (show 4 at a time)
  const visibleCourses = filteredCourses.slice(scrollIndex, scrollIndex + 4);
  const canScrollLeft = scrollIndex > 0;
  const canScrollRight = scrollIndex + 4 < filteredCourses.length;

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Top Courses</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Lorem in volutpat vulputate
            pellentesque blandit feugiat. Porttitor enim nec vitae viverra id.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-8 border-b border-gray-200 w-full max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`pb-3 text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat.value
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setScrollIndex(0);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Explore All Courses Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3 border-2 border-blue-600 rounded-full text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
            Explore all courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
