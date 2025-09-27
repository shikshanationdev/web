"use client"
import React, { useState, useMemo, useRef } from "react";

const mediaPosts = [
  {
    logo: "/india-today.png",
    brand: "INDIA TODAY",
    title: "7 best strategies to score high in JEE Main",
    desc: "Cracking JEE requires not just hard work, but smart strategy. With JEE 2026 approaching, aspirants need a focused plan for concept mastery and exam efficiency.",
    date: "23 September, 2025",
    link: "https://www.indiatoday.in/education-today/tips-and-tricks/story/jee-2026-7-strategies-to-maximise-your-score-2792028-2025-09-23",
  },
  {
    logo: "https://www.hindustantimes.com/static-content/1y/ht/ht_100_logoblack@2x.webp",
    brand: "HINDUSTAN TIMES",
    title: "How to prepare for JEE in 3 months : A strategic approach",
    desc: "Students preparing for the JEE can still make progress in the final 3 months by choosing right mentors, studying selectively, and sticking to structured plan. ",
    date: "22 September, 2025",
    link: "https://www.hindustantimes.com/education/competitive-exams/how-to-prepare-for-jee-in-3-months-a-strategic-approach-101758539745230.html",
  },
  {
    logo: "https://www.educationtimes.com/EtNewLogo.jpg",
    brand: "EDUCATION TIMES",
    title: "Shiksha Nation launches AI-enabled bilingual learning platform",
    desc: "The use of AI will help in creating customised study plans, tracking progress, and maximising outcomes",
    date: "6 September, 2025",
    link: "https://www.educationtimes.com/article/newsroom/99739558/shiksha-nation-launches-ai-enabled-bilingual-learning-platform",
  },
  {
    logo: "data:image/png;base64,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 L/CegIcZ5GcAAAAASUVORK5CYII=",
    brand: "Amar Ujala",
    title: "Noida News: देश का पहला एआई आधारित द्विभाषी प्लेटफॉर्म शिक्षा नेशन लॉन्च",
    desc: "शिक्षाविदों की सहभागिता से किया गया तैयार, ग्रामीण और शहरी छात्रों को मिलेगा समान अवसर संवाद न्यूज एजेंसी नोएडा।",
    date: "6 September, 2025",
    link: "https://www.amarujala.com/delhi-ncr/noida/indias-first-ai-based-bilingual-platform-shiksha-nation-launched-grnoida-news-c-1-gnd1002-3373044-2025-09-06",
  },
  {
    logo: "https://bharatlive24news.com/wp-content/uploads/2023/12/LOGO.png",
    brand: "Bharat Live 24 News",
    title: "नोएडा से शुरू हुई शिक्षा में नई क्रांति, शिक्षा नेशन बना देश का पहला एआई-आधारित द्विभाषी मंच।",
    desc: "नोएडा से शुरू हुई शिक्षा में नई क्रांति, शिक्षा नेशन बना देश का पहला एआई-आधारित द्विभाषी मंच।",
    date: "6 September, 2025",
    link: "https://bharatlive24news.com/the-new-revolution-education-nation-in-education-started-from-noida-became-the-countrys-first-ai-based-bilingual-platform/",
  },
  {
    logo: "https://i0.wp.com/samajjagran.in/wp-content/uploads/2022/03/cropped-BANNER1.png?w=916&ssl=1",
    brand: "Samaj Jagran",
    title: "नोएडा से शुरू हुई शिक्षा में नई क्रांति, शिक्षा नेशन बना देश का पहला एआई-आधारित द्विभाषी मंच",
    desc: "शिक्षा में डिजिटल क्रांति: भारत का पहला एआई-समर्थित द्विभाषी लर्निंग प्लेटफ़ॉर्म लॉन्च",
    date: "6 September, 2025",
    link: "https://samajjagran.in/a-new-revolution-in-education-started-from-noida-shiksha/",
  },
  {
    logo: "https://blogger.googleusercontent.com/img/a/AVvXsEhdRB1SgLo7Ak7zzak64hqX-2DGotdhhiFQTEbx10Rg5CSJ5y5JBIhlarYyU8TMTVDuYH5MAwyM6MGYBJbvk6coq2VetJ0GKuZAkEk88k29sDOPZcEP-_MHMBR_HFtLCRZwf-dPneIKKOKe0qkX3mTsE63KgULbUZwdZkHhumezFccxub1c0BozN5fXuGA=s150",
    brand: "Story Today",
    title: "Grand Launch of Shiksha Nation – India’s First AI-Enabled Bilingual Learning Platform",
    desc: "Shiksha Nation, India’s first AI-powered bilingual learning platform, was officially launched today at a grand event in the city.",
    date: "6 September, 2025",
    link: "https://www.story-today.in/2025/09/Grand-launch-of-Shiksha-nationIndias-AI-enabled-bilingual-learning-platform.html",
  },
  {
    logo: "https://businessnewsthisweek.com/wp-content/uploads/2025/06/businessnewsthisweek-logo-1.png",
    brand: "Business News This Week",
    title: "Grand Launch of Shiksha Nation – India’s First AI-Enabled Bilingual Learning Platform",
    desc: "Shiksha Nation, India’s first AI-powered bilingual learning platform, was officially launched today at a grand event in the city.",
    date: "6 September, 2025",
    link: "https://businessnewsthisweek.com/education/grand-launch-of-shiksha-nation-indias-first-ai-enabled-bilingual-learning-platform/",
  },
  {
    logo: "https://infopost.org/wp-content/uploads/2024/11/cropped-Header-2.jpg",
    brand: "Info Post",
    title: "Shiksha Nation: शिक्षा के क्षेत्र में एक और डिजिटल क्रांति",
    desc: "देश का पहला एआई आधारित लर्निंग प्लेटफॉर्म शिक्षा नेशन एक समारोह में शुरू किया गया। शिक्षा नेशन की परिकल्पना और स्थापना देशभर के एजुकेटर्स ने की है।",
    date: "6 September, 2025",
    link: "https://infopost.org/2025/09/06/shiksha-nation/",
  },
  {
    logo: "/national-biz.png",
    brand: "National Bix News",
    title: "Grand Launch of Shiksha Nation – India’s First AI-Enabled Bilingual Learning Platform",
    desc: "Shiksha Nation, India’s first AI-powered bilingual learning platform, was officially launched today at a grand event in the city.",
    date: "6 September, 2025",
    link: "https://nationalbiznews.com/education/grand-launch-of-shiksha-nation-indias-first-ai-enabled-bilingual-learning-platform/",
  },
  {
    logo: "/media-bulletins.png",
    brand: "Media Bulletins",
    title: "Grand Launch of Shiksha Nation – India’s First AI-Enabled Bilingual Learning Platform",
    desc: "Shiksha Nation, India’s first AI-powered bilingual learning platform, was officially launched today at a grand event in the city.",
    date: "6 September, 2025",
    link: "https://mediabulletins.com/education/grand-launch-of-shiksha-nation-indias-first-ai-enabled-bilingual-learning-platform/",
  },
  {
    logo: "https://onlinemediacafe.com/wp-content/uploads/2025/07/online-media-cafe.png",
    brand: "Online Media Cafe",
    title: "Grand Launch of Shiksha Nation – India’s First AI-Enabled Bilingual Learning Platform",
    desc: "Shiksha Nation, India’s first AI-powered bilingual learning platform, was officially launched today at a grand event in the city.",
    date: "6 September, 2025",
    link: "https://onlinemediacafe.com/education/grand-launch-of-shiksha-nation-indias-first-ai-enabled-bilingual-learning-platform/",
  },
  {
    logo: "https://biznewsdesk.com/wp-content/uploads/2025/07/biz-news-desk.png",
    brand: "BIZ NEWS DESK",
    title: "Grand Launch of Shiksha Nation – India’s First AI-Enabled Bilingual Learning Platform",
    desc: "Shiksha Nation, India’s first AI-powered bilingual learning platform, was officially launched today at a grand event in the city.",
    date: "6 September, 2025",
    link: "https://biznewsdesk.com/education/grand-launch-of-shiksha-nation-indias-first-ai-enabled-bilingual-learning-platform/",
  },
  {
    logo: "https://blogger.googleusercontent.com/img/a/AVvXsEgGq6lJsQEmA_v4PCeWNhOZxT-1ibdGJrj04zcWHu5fagFn0mIap0Xm55gOfCDK1mhWj_7Bc7NAz86DyiZ_s64FAFSZJ58h5CHmu1Tkhf23qfb3tlxqtUielnM2i_kU6VXOT0FIbWiIKUIZI7iH7QgBJ4UxUNuutEQ12ORGREN5JjIb8-DLcM8v_9ve3G-q=s936",
    brand: "Media Edge 7",
    title: "Grand Launch of Shiksha Nation – India’s First AI-Enabled Bilingual Learning Platform",
    desc: "Shiksha Nation, India’s first AI-powered bilingual learning platform, was officially launched today at a grand event in the city.",
    date: "6 September, 2025",
    link: "https://www.mediaedge7.com/2025/09/Grand-launch-of-Shiksha-nationIndias-AI-enabled-bilingual-learning-platform.html",
  },
  {
    logo: "https://aimamedia.org/img/aimastrip1.jpg",
    brand: "AIMA MEDIA  ",
    title: "Grand Launch of Shiksha Nation – India’s First AI-Enabled Bilingual Learning Platform",
    desc: "Shiksha Nation, India’s first AI-powered bilingual learning platform, was officially launched today at a grand event in the city.",
    date: "6 September, 2025",
    link: "https://aimamedia.org/newsdetails.aspx?nid=501550",
  },
  {
    logo: "https://www.univarta.com/images/univarta%20logo.png",
    brand: "UNIVARTA",
    title: "देश का पहला एआई-समर्थित द्विभाषी लर्निंग प्लेटफ़ॉर्म हुआ लॉन्च",
    desc: "उत्तर प्रदेश के जिला गौतमबुद्धनगर परिक्षेत्र नोएडा से शुरू हुई शिक्षा में नई क्रांति कृत्रिम बुद्धिमता (एआई) आधारित द्विभाषी लर्निंग का प्लेटफार्म किया गया लॉन्च। ",
    date: "6 September, 2025",
    link: "https://www.univarta.com/news/uttar-pradesh/story/3568637.html",
  },
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
