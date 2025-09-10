"use client";
import React, { useEffect, useState } from "react";

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [tocItems] = useState<TableOfContentsItem[]>([
    { id: "eligibility", title: "Eligibility for Refund", level: 1 },
    { id: "non-refundable", title: "Non-Refundable Situations", level: 1 },
    { id: "how-to-request", title: "How to Request a Refund", level: 1 },
    { id: "refund-process", title: "Refund Process", level: 1 },
    { id: "contact", title: "Contact Us", level: 1 },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Close mobile menu after clicking
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center justify-between w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          <span className="font-medium text-gray-800">Table of Contents</span>
          <svg
            className={`w-5 h-5 text-gray-600 transition-transform ${isMobileOpen ? "rotate-180" : ""
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Mobile Dropdown */}
        {isMobileOpen && (
          <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <nav>
              <ul className="space-y-2">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left w-full px-3 py-2 rounded-md text-sm transition-colors duration-200 hover:bg-sky-50 hover:text-sky-700 ${activeSection === item.id
                          ? "bg-sky-100 text-sky-700 font-medium"
                          : "text-gray-600"
                        }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:block sticky top-24 bg-white border border-gray-200 rounded-4xl shadow-sm p-6 h-fit">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Table of Contents
        </h3>
        <nav>
          <ul className="space-y-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left w-full px-3 py-2 rounded-md text-sm transition-colors duration-200 hover:bg-sky-50 hover:text-sky-700 ${activeSection === item.id
                      ? "bg-sky-100 text-sky-700 font-medium border-l-3 border-sky-500"
                      : "text-gray-600"
                    }`}
                  style={{
                    paddingLeft: `${12 + item.level * 16}px`,
                  }}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TableOfContents;
