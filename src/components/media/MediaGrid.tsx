"use client"
import React, { useState, useMemo, useRef } from "react";

const mediaPosts = [
  {
    logo: "https://featuringdaily.com/wp-content/uploads/2025/04/cropped-cropped-cropped-Untitled-design-54-2-1.webp",
    brand: "FEATURING DAILY",
    title: "Shiksha Nation Dr. Saurabh Kumar Leads AI Learning",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment of Dr. Saurabh Kumar as its Founder and Chief Executive Officer.",
    date: "30 August, 2025",
    link: "https://featuringdaily.com/2025/08/30/shiksha-nation-dr-saurabh-kumar/",
  },
  {
    logo: "https://businessup2date.com/wp-content/uploads/2021/06/Business-Up2Date-e1716444753574.webp",
    brand: "BUSINESS UP2 DATE",
    title: "Shiksha Nation Dr. Saurabh Kumar Leads AI Learning",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment of Dr. Saurabh Kumar as its Founder and Chief Executive Officer.",
    date: "30 August, 2025",
    link: "https://businessup2date.com/shiksha-nation-dr-saurabh-kumar/",
  },
  {
    logo: "https://mumbaimirror.co.in/wp-content/uploads/2025/04/cropped-logos-08-1-300x300.png",
    brand: "MUMBAI MIRROR",
    title: "Shiksha Nation Dr. Saurabh Kumar Leads AI Learning",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment of Dr. Saurabh Kumar as its Founder and Chief Executive Officer.",
    date: "30 August, 2025",
    link: "https://mumbaimirror.co.in/shiksha-nation-dr-saurabh-kumar/",
  },
  {
    logo: "https://www.medianews4u.com/wp-content/uploads/2019/08/MediaNews4U.png",
    brand: "MEDIA NEWS 4U",
    title: "Dr. Saurabh Kumar appointed as Founder & CEO at Shiksha Nation",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment ...",
    date: "30 August, 2025",
    link: "https://www.medianews4u.com/dr-saurabh-kumar-appointed-as-founder-ceo-at-shiksha-nation/",
  },
  {
    logo: "https://thehindustnexpress.com/wp-content/uploads/2025/05/cropped-hindustn-03.png",
    brand: "THE HINDUSTAN EXPRESS",
    title: "Shiksha Nation Dr. Saurabh Kumar Leads AI Learning",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment of Dr. Saurabh Kumar as its Founder and Chief Executive Officer.",
    date: "30 August, 2025",
    link: "https://thehindustnexpress.com/index.php/2025/08/30/shiksha-nation-dr-saurabh-kumar/",
  },
  {
    logo: "/ground.png",
    brand: "FEATURING DAILY",
    title: "Dr. Saurabh Kumar appointed as Founder & CEO at Shiksha Nation",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment ...",
    date: "30 August, 2025",
    link: "https://ground.news/article/dr-saurabh-kumar-appointed-as-founder-and-ceo-at-shiksha-nation",
  },
  {
    logo: "https://news18today.com/wp-content/uploads/2025/05/logos-12-1.png",
    brand: "NEWS 18 TODAY",
    title: "Shiksha Nation Dr. Saurabh Kumar Leads AI Learning",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment of Dr. Saurabh Kumar as its Founder and Chief Executive Officer.",
    date: "30 August, 2025",
    link: "https://news18today.com/shiksha-nation-dr-saurabh-kumar/",
  },
  {
    logo: "https://indiastoday.com/wp-content/uploads/2021/11/cropped-logos-01-300x300.png",
    brand: "INDIA TODAY",
    title: "Shiksha Nation Dr. Saurabh Kumar Leads AI Learning",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment of Dr. Saurabh Kumar as its Founder and Chief Executive Officer.",
    date: "30 August, 2025",
    link: "https://indiastoday.com/shiksha-nation-dr-saurabh-kumar/",
  },
  {
    logo: "https://india24x7news.com/wp-content/uploads/2025/05/cropped-tinywow_change_bg_photo_79634246.png",
    brand: "INDIA 24x7 NEWS",
    title: "Shiksha Nation Dr. Saurabh Kumar Leads AI Learning",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment of Dr. Saurabh Kumar as its Founder and Chief Executive Officer.",
    date: "30 August, 2025",
    link: "https://india24x7news.com/2025/08/30/shiksha-nation-dr-saurabh-kumar/",
  },
  {
    logo: "https://foxstoryindia.com/wp-content/uploads/2024/07/cropped-Add-a-heading1.png",
    brand: "FOX STORY INDIA",
    title: "Dr. Saurabh Kumar Appointed Founder & CEO of Shiksha Nation – India’s First AI-Enabled Bilingual Learning Platform",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment ...",
    date: "30 August, 2025",
    link: "https://foxstoryindia.com/2025/08/30/dr-saurabh-kumar-appointed-founder-ceo-of-shiksha-nation-indias-first-ai-enabled-bilingual-learning-platform/",
  },
  {
    logo: "/carnival.png",
    brand: "The City Carnival",
    title: "Shiksha Nation Dr. Saurabh Kumar Leads AI Learning",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment of Dr. Saurabh Kumar as its Founder and Chief Executive Officer.",
    date: "30 August, 2025",
    link: "https://thecitycarnival.com/shiksha-nation-dr-saurabh-kumar/",
  },
  {
    logo: "https://indiavoicenews.in/wp-content/uploads/2025/05/logos-15-removebg-preview.png",
    brand: "INDIA VOICE NEWS",
    title: "Shiksha Nation Dr. Saurabh Kumar Leads AI Learning",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment of Dr. Saurabh Kumar as its Founder and Chief Executive Officer.",
    date: "30 August, 2025",
    link: "https://indiavoicenews.in/?p=9297",
  },
  {
    logo: "https://theinfluencersofindia.com/wp-content/uploads/2023/05/Influencer-Logo-1-e1684496696797-1024x681.jpg",
    brand: "The Influencers Of India",
    title: "Shiksha Nation Dr. Saurabh Kumar Leads AI Learning",
    desc: "India’s first AI-enabled bilingual learning platform, has announced the appointment of Dr. Saurabh Kumar as its Founder and Chief Executive Officer.",
    date: "30 August, 2025",
    link: "https://theinfluencersofindia.com/shiksha-nation-dr-saurabh-kumar/30/",
  },
];

const MediaGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const mediaGridRef = useRef<HTMLDivElement>(null);

  // Calculate pagination values
  const totalPages = Math.ceil(mediaPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  // Get current page posts
  const currentPosts = useMemo(() => {
    return mediaPosts.slice(startIndex, endIndex);
  }, [startIndex, endIndex]);

  // Pagination handlers
  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the media grid when page changes
    setTimeout(() => {
      if (mediaGridRef.current) {
        const rect = mediaGridRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop - 100; // 100px offset from top

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to ensure content is rendered
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      {/* Media Grid */}
      <div
        ref={mediaGridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      >
        {currentPosts.map((post, idx) => (
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center">
          {/* Pagination Buttons Container */}
          <div className="grid grid-cols-3 items-center gap-8 w-full max-w-7xl">
            {/* Previous Button */}
            <div className="flex justify-start">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                  }`}
              >
                Previous
              </button>
            </div>

            {/* Page Numbers */}
            <div className="flex items-center justify-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${page === currentPage
                    ? 'bg-[#1abc6c] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                  }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGrid;
