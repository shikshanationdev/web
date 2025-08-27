
import React from "react";
import { MdQuestionAnswer } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';
import { MdOutlineContactSupport } from 'react-icons/md';

const contactOptions = [
  {
    icon: <MdQuestionAnswer size={40} className="text-[#00E676] bg-[#00E676]/10 rounded-xl p-2" />,
    title: "Press Inquiries",
    color: "text-[#00E676]",
    href: "mailto:press@shikshanation.com",
  },
  {
    icon: <FaHandshake size={40} className="text-[#8B5CF6] bg-[#8B5CF6]/10 rounded-xl p-2" />,
    title: "Partnerships",
    color: "text-[#8B5CF6]",
    href: "mailto:partners@shikshanation.com",
  },
  {
    icon: <MdOutlineContactSupport size={40} className="text-[#00E5FF] bg-[#00E5FF]/10 rounded-xl p-2" />,
    title: "All Other Inquiries",
    color: "text-[#00E5FF]",
    href: "mailto:info@shikshanation.com",
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
            className="flex flex-row items-center bg-white h-[120px] rounded-2xl shadow p-6 md:p-8 min-w-[260px] max-w-xs w-full hover:shadow-md transition group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-4">{opt.icon}</span>
            <span className={`text-xl md:text-xl font-bold ${opt.color} group-hover:underline text-left`}>{opt.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MediaContact;
