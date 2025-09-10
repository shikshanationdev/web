"use client";
import React, { useState } from "react";
import FaqItem from "./FaqItem";

type Faq = {
  q: string;
  a: string;
};

type Props = {
  items: Faq[];
  title?: string;
};

const FaqsList: React.FC<Props> = ({ items, title }) => {
  // Split items into two columns
  const leftColumnItems = items.filter((_, index) => index % 2 === 0);
  const rightColumnItems = items.filter((_, index) => index % 2 === 1);

  const [leftColumnOpenIndex, setLeftColumnOpenIndex] = useState<number>(-1);
  const [rightColumnOpenIndex, setRightColumnOpenIndex] = useState<number>(-1);

  const toggleLeftFaq = (columnIndex: number) => {
    setLeftColumnOpenIndex(prev => prev === columnIndex ? -1 : columnIndex);
  };

  const toggleRightFaq = (columnIndex: number) => {
    setRightColumnOpenIndex(prev => prev === columnIndex ? -1 : columnIndex);
  };

  return (
    <div className="w-full px-4">
      <div className="max-w-7xl mx-auto">
        {title && (
          <>
            <h2 className="text-center text-4xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-center text-gray-600 text-lg mb-10">
              Here are some of the most common questions we receive.
            </p>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col space-y-6">
            {leftColumnItems.map((item, columnIndex) => (
              <FaqItem
                key={`left-${columnIndex}`}
                q={item.q}
                a={item.a}
                isOpen={leftColumnOpenIndex === columnIndex}
                onToggle={() => toggleLeftFaq(columnIndex)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-6">
            {rightColumnItems.map((item, columnIndex) => (
              <FaqItem
                key={`right-${columnIndex}`}
                q={item.q}
                a={item.a}
                isOpen={rightColumnOpenIndex === columnIndex}
                onToggle={() => toggleRightFaq(columnIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsList;
