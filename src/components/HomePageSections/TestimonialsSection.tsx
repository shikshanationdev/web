"use client";
import React from "react";

const baseTestimonials = [
  {
    name: "Priya Sharma",
    content: "These PDFs have been a game-changer for my daughter's studies. The chapter summaries are excellent and the practice questions really helped her improve her exam scores. Highly recommended for all parents!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    content: "The quality of content is outstanding. My son's confidence in Math and Science has improved significantly. The detailed solutions help him understand concepts he was struggling with in school.",
    rating: 5,
  },
  {
    name: "Anita Patel",
    content: "Affordable and comprehensive! The study materials are well-organized and cover the entire syllabus. My daughter loves the easy-to-understand explanations and visual diagrams.",
    rating: 5,
  },
  {
    name: "Suresh Reddy",
    content: "Excellent value for money. The PDFs are professionally designed and contain everything needed for exam preparation. My son's grades have improved remarkably since we started using these materials.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"
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

const TestimonialCard = ({ testimonial }: { testimonial: typeof baseTestimonials[0] }) => (
  <div className="testimonial-slide px-4">
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative h-full flex flex-col">
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

      {/* Content - Takes up remaining space */}
      <div className="pt-10 flex flex-col h-full">
        <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow overflow-hidden">
          {testimonial.content}
        </p>

        {/* Name and Rating - Fixed at bottom */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <h4 className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </h4>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  // Duplicate testimonials for seamless infinite scroll (like the reference code)
  const duplicatedTestimonials = [...baseTestimonials, ...baseTestimonials];

  return (
    <section className="w-full py-16 px-5 xl:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl px-5 md:px-0 font-bold text-gray-900 mb-4">
            What Our Learners Say
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Thousands of students and parents trust Shiksha Nation for quality learning.
          </p>
        </div>

        {/* Infinite Scrolling Testimonials - Following the reference structure */}
        <div className="testimonials-slider py-10">
          <div className="testimonials-track">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
