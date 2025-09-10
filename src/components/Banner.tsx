"use client";
import React from "react";

type Props = {
  heading: string;
  subtitle?: string;
};

const Banner: React.FC<Props> = ({ heading, subtitle }) => {
  return (
    <section className="w-full bg-sky-100">
      <div className="max-w-7xl mx-auto py-24 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
          {heading}
        </h2>
      </div>
    </section>
  );
};

export default Banner;
