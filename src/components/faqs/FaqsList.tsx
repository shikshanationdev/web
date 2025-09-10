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
  const [openStates, setOpenStates] = useState<boolean[]>(
    new Array(items.length).fill(false)
  );

  const toggleFaq = (index: number) => {
    setOpenStates(prev =>
      prev.map((isOpen, i) => i === index ? !isOpen : isOpen)
    );
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto md:px-10">
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
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="break-inside-avoid mb-6">
              <FaqItem
                q={item.q}
                a={item.a}
                isOpen={openStates[idx]}
                onToggle={() => toggleFaq(idx)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsList;
