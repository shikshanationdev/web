"use client";
import React from 'react';
import MediaMarquee from './MediaMarquee';

const MediaHero = () => {
  return (
    <div className="max-w-[1536px] mx-auto px-4 py-16">
      <div className="text-center mt-20 mb-8">
        <h2 className="text-4xl md:text-5xl font-semibold">
          <span className="bg-gradient-to-r from-[#1976d2] to-[#1abc6c] bg-clip-text text-transparent">
            Who’s talking about us?
          </span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[#1976d2] font-medium">
          Explore the stories, features, and voices that highlight Shiksha Nation’s impact.
        </p>
      </div>
      <div className="mt-12">
        {/* Animated media logos row */}
        <MediaMarquee />
      </div>
    </div>
  );
};
export default MediaHero;
