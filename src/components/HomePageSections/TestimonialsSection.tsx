"use client";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    content: "Shiksha Nation made Science and Math so easy for me! The lessons are fun, and I love how I can revise anytime. My marks improved in just one term!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ravi Mehta",
    content: "As a parent, I was looking for a platform that's both reliable and easy to monitor. Shiksha Nation gave my son structured classes, progress reports, and expert support — we're very happy!",
    rating: 5,
  },
  {
    id: 3,
    name: "Mehul Raj",
    content: "Preparing for NEET felt overwhelming until I joined Shiksha Nation. The mock tests, doubt-solving sessions, and mentors really helped me stay focused and confident.",
    rating: 5,
  },
  // Duplicate for continuous scrolling
  {
    id: 4,
    name: "Ananya Sharma",
    content: "Shiksha Nation made Science and Math so easy for me! The lessons are fun, and I love how I can revise anytime. My marks improved in just one term!",
    rating: 5,
  },
  {
    id: 5,
    name: "Ravi Mehta",
    content: "As a parent, I was looking for a platform that's both reliable and easy to monitor. Shiksha Nation gave my son structured classes, progress reports, and expert support — we're very happy!",
    rating: 5,
  },
  {
    id: 6,
    name: "Mehul Raj",
    content: "Preparing for NEET felt overwhelming until I joined Shiksha Nation. The mock tests, doubt-solving sessions, and mentors really helped me stay focused and confident.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="w-full py-16 px-5 xl:px-0overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Learners Say
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Thousands of students and parents trust Shiksha Nation for quality learning.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden py-10">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)`,
            }}
          >
            {/* Duplicate testimonials for infinite scroll */}
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => {
              const position = index - currentIndex;
              const centerCard = position === 1;
              
              return (
                <div
                  key={`${testimonial.id}-${index}`}
                  className={`flex-shrink-0 w-full md:w-1/3 px-4 transition-all duration-700 ${
                    isMobile 
                      ? 'transform scale-100 z-10' 
                      : centerCard 
                        ? 'transform scale-110 z-10' 
                        : 'transform scale-90 z-0'
                  } ${!isMobile && !centerCard ? 'md:block' : ''}`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative min-h-[280px] flex flex-col mx-auto max-w-md">
                    {/* Quote Icon with Gradient */}
                    <div className="absolute top-4 left-4">
                      <svg
                        className="w-6 h-6"
                        fill="url(#blueGreenGradient)"
                        viewBox="0 0 24 24"
                      >
                        <defs>
                          <linearGradient id="blueGreenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#10B981" />
                          </linearGradient>
                        </defs>
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="pt-10 flex flex-col flex-grow">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                        {testimonial.content}
                      </p>

                      {/* Name and Rating */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.slice(0, 3).map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex % 3
                  ? 'bg-[rgb(var(--color-green-primary))] w-8'
                  : 'bg-gray-300 w-3'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
