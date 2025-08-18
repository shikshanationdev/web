import React, { Suspense } from 'react';
import { CoursesHero, CoursesCatalog } from '@/components/courses';

// Loading component for CoursesCatalog suspense boundary
const CoursesCatalogLoader = () => (
  <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Explore Courses</h2>
      </div>
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    </div>
  </section>
);

const Courses = () => {
  return (
    <div>
      <CoursesHero />
      <Suspense fallback={<CoursesCatalogLoader />}>
        <CoursesCatalog />
      </Suspense>
    </div>
  );
};

export default Courses;
