import React from "react";

const mediaPosts = [
  {
    logo: "/media/fortune.png",
    brand: "FORTUNE",
    title: "Managers want workers back in the office in the name of productivity",
    desc: "Shikshanation’s survey of 1,000 U.S. workers shows a shift in attitude toward productivity.",
    date: "2 May, 2025",
    link: "https://fortune.com/2023/05/02/return-to-office-managers-employees-productivity-definition/",
  },
  {
    logo: "/media/marketingbrew.png",
    brand: "MARKETING BREW",
    title: "Why a B2B tech company dropped an album featuring professional artists",
    desc: "Shikshanation’s first studio album hit 1M streams on Spotify and Apple Music in just two months.",
    date: "14 April, 2025",
    link: "https://fortune.com/2023/05/02/return-to-office-managers-employees-productivity-definition/",
  },
  {
    logo: "/media/fastcompany.png",
    brand: "FASTCOMPANY",
    title: "Shikshanation wants to be your AI-powered productivity superhub",
    desc: "Shikshanation’s AI text generation and summary tools are built right into the platform.",
    date: "28 February, 2025",
    link: "https://fortune.com/2023/05/02/return-to-office-managers-employees-productivity-definition/",
  },
  {
    logo: "/media/tc.png",
    brand: "TechCrunch",
    title: "Shikshanation raises $400M to scale its all-in-one productivity platform",
    desc: "TechCrunch covers Shikshanation’s massive Series C funding round to expand globally.",
    date: "2 May, 2025",
    link: "https://fortune.com/2023/05/02/return-to-office-managers-employees-productivity-definition/",
  },
  {
    logo: "/media/business-insider.png",
    brand: "BUSINESS INSIDER",
    title: "Inside Shikshanation’s culture of innovation and rapid iteration",
    desc: "A look into how Shikshanation continuously evolves its platform to meet user needs.",
    date: "14 April, 2025",
    link: "https://fortune.com/2023/05/02/return-to-office-managers-employees-productivity-definition/",
  },
  {
    logo: "/media/entrepreneur.png",
    brand: "Entrepreneur",
    title: "How Shikshanation is transforming team productivity across industries",
    desc: "Shikshanation’s CEO shares vision for unifying work tools in one seamless experience.",
    date: "28 February, 2025",
    link: "https://fortune.com/2023/05/02/return-to-office-managers-employees-productivity-definition/",
  },
];

const MediaGrid = () => {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {mediaPosts.map((post, idx) => (
        <a
          key={idx}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl bg-white shadow-md hover:shadow-lg transition-shadow duration-200 p-8 cursor-pointer h-full group min-h-[320px] flex flex-col"
        >
          <div>
            <div className="flex items-center mb-4">
              {post.logo && (
                <img src={post.logo} alt={post.brand} className="h-7 w-auto" />
              )}
            </div>
            <div className="font-bold text-xl mb-2 text-gray-900 group-hover:text-[#1abc6c]">{post.title}</div>
            <div className="text-gray-600 mb-6 text-base">{post.desc}</div>
          </div>
          <div className="flex items-center justify-between text-sm font-medium mt-auto pt-2">
            <span className="text-[#1976d2] group-hover:underline flex items-center">Read post <span className="ml-1">→</span></span>
            <span className="text-gray-400">{post.date}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default MediaGrid;
