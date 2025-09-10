"use client";
import React from "react";

type Props = {
  heading: string;
  subtitle?: string;
};

const Banner: React.FC<Props> = ({ heading, subtitle }) => {
  return (
    <section className="w-full bg-blue-50">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
          {heading}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Banner;
