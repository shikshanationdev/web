import React from "react";

const contactOptions = [
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#00E676" fillOpacity="0.08"/><path d="M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#00E676"/><path d="M24 36c-5.333 0-10.667-2.667-12-4a2.667 2.667 0 0 1 0-3.733C14.667 26.667 19 24 24 24s9.333 2.667 12 4a2.667 2.667 0 0 1 0 3.733C34.667 33.333 29.333 36 24 36Z" fill="#00E676"/><path d="M24 12a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z" fill="#00E676"/></svg>
    ),
    title: "Press Inquiries",
    color: "text-[#00E676]",
    href: "mailto:press@sikshanation.com",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#8B5CF6" fillOpacity="0.08"/><path d="M24 34c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm0-18a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-2 10.414V28a2 2 0 1 0 4 0v-3.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L22 24.414Z" fill="#8B5CF6"/></svg>
    ),
    title: "Partnerships",
    color: "text-[#8B5CF6]",
    href: "mailto:partners@sikshanation.com",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#00E5FF" fillOpacity="0.08"/><circle cx="24" cy="24" r="8" stroke="#00E5FF" strokeWidth="2"/><path d="M24 20v4h2" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="24" cy="30" r="1" fill="#00E5FF"/></svg>
    ),
    title: "All Other Inquiries",
    color: "text-[#00E5FF]",
    href: "mailto:info@sikshanation.com",
  },
];

const MediaContact = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#f5fbff] to-[#f3fff7] rounded-3xl py-12 px-4 md:px-12 mt-16 mb-8 shadow-sm">
      <div className="text-center mb-10">
        <div className="text-[#1976d2] text-lg font-medium mb-2 tracking-wide">HAVE A QUESTION OR IDEA?</div>
        <div className="text-3xl md:text-5xl font-bold text-[#1976d2]">Let’s Get in Touch</div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {contactOptions.map((opt, idx) => (
          <a
            key={idx}
            href={opt.href}
            className="flex flex-row md:flex-col items-center md:items-start bg-white rounded-2xl shadow p-6 md:p-8 min-w-[260px] max-w-xs w-full hover:shadow-md transition group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-4 md:mr-0 mb-0 md:mb-4">{opt.icon}</span>
            <span className={`text-xl md:text-2xl font-bold ${opt.color} group-hover:underline text-left`}>{opt.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MediaContact;
