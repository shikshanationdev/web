"use client";
import React, { useState } from "react";

type Props = {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
};

const FaqItem: React.FC<Props> = ({ q, a, isOpen, onToggle }) => {
  return (
    <div className="bg-sky-50/50 border border-sky-600 rounded-2xl px-8 py-6 transition-all duration-300">
      <button
        className="w-full flex items-center justify-between focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-semibold text-sky-700 text-left">
          {q}
        </span>
        <span className="ml-4 text-3xl text-sky-600">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen
            ? "max-h-96 mt-3 opacity-100"
            : "max-h-0 mt-0 opacity-0"
          }`}
      >
        <div className="text-sky-700 text-lg md:text-xl pb-2">
          {a}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
