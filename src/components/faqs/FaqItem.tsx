"use client";
import React, { useState } from "react";

type Props = {
  q: string;
  a: string;
};

const FaqItem: React.FC<Props> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <button
        className={`w-full text-left px-6 py-4 flex justify-between items-center bg-blue-700 text-white font-semibold`}
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="ml-4 text-2xl">{open ? "−" : "＋"}</span>
      </button>
      {open && (
        <div className="px-6 py-6 bg-white text-slate-700 border-t">
          <p className="text-base leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
