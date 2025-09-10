"use client";
import React from "react";
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
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((it, idx) => (
          <FaqItem key={idx} q={it.q} a={it.a} />
        ))}
      </div>
    </div>
  );
};

export default FaqsList;
