"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

const socialLinks = [
  { href: "https://www.facebook.com/shikshanation24/", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/shikshanation/", icon: FaInstagram, label: "Instagram" },
  { href: "https://x.com/shikshanation", icon: BsTwitterX, label: "X" },
  { href: "https://www.linkedin.com/company/shikshanation/", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.youtube.com/@shikshanation-rl7qo", icon: FaYoutube, label: "YouTube" },
];

const Footer = () => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    // Map footer categories to course page categories
    const categoryMap: { [key: string]: string } = {
      "ShikshaBase": "ShikshaBase",
      "ShikshaEdge": "ShikshaEdge",
      "ShikshaQuest": "ShikshaQuest",
      "ShikshaPro": "ShikshaPro",
      "Class 8": "Class 8th",
      "Class 9": "Class 9th",
      "Class 10": "Class 10th",
      "JEE": "JEE",
      "NEET": "NEET",
      "Skilling": "Skilling"
    };

    const mappedCategory = categoryMap[category] || category;
    router.push(`/courses?category=${encodeURIComponent(mappedCategory)}`);
  };
  return (
    <footer className="py-12 px-4 md:px-8 text-sky-700 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Logo & Contact Info - comes first on mobile */}
          <div className="w-full lg:w-2/5 flex-shrink-0 order-1 lg:order-1">
            <div className="flex flex-col gap-6">
              {/* Logo and Company Info */}
              <div>
                <div className="mb-6">
                  <Image
                    src="/home/logo.webp"
                    alt="Shiksha Nation Logo"
                    width={200}
                    height={60}
                    className="h-auto"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-md text-black mb-2 font-medium italic leading-none">
                    "Of Bharat, By Bharat, For Bharat."
                  </p>
                  <p className="text-md text-black font-medium leading-none">
                    India's Own Learning Revolution.
                  </p>
                </div>
                <div className="space-y-3 text-sm py-5">
                  <div>
                    <span className="font-semibold text-sky-700">
                      Corporate Office:
                    </span>
                    <span className="ml-1 text-sky-600">
                      10th Floor, Tower C, Bhutani
                      <br />
                      62 Avenue, Block-C, Phase 2, Noida, UP 201309
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-sky-700">Call:</span>{" "}
                    <Link
                      href="tel:+919821115117"
                      className="hover:underline text-sky-600"
                    >
                      +91 98211 15117
                    </Link>
                  </div>
                  <div>
                    <span className="font-semibold text-sky-700">Email:</span>{" "}
                    <Link
                      href="mailto:support@shikshanation.in"
                      className="hover:underline text-sky-600"
                    >
                      support@shikshanation.in
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-sky-700">Let's Get Social</h4>
                <div className="flex gap-3">
                  {socialLinks.map((s) => {
                    const IconComponent = s.icon;
                    return (
                      <Link
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                      >
                        <IconComponent className="w-4 h-4 text-sky-700" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Columns - comes second on mobile */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6 order-2 lg:order-2">
            {/* First Row: Top Categories, Top Live Classes */}
            <div className="flex flex-row gap-4 lg:gap-8">
              {/* Top Categories */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-4 text-sky-700">
                  Top Categories
                </h3>
                <ul className="space-y-2">
                  {["ShikshaBase", "ShikshaEdge", "ShikshaQuest", "ShikshaPro"].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => handleCategoryClick(item)}
                        className="hover:underline text-sm transition-colors duration-200 text-left text-sky-600"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Live Classes */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-4 text-sky-700">
                  Top Live Classes
                </h3>
                <ul className="space-y-2">
                  {["Class 8", "Class 9", "Class 10"].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => handleCategoryClick(item)}
                        className="hover:underline text-sm transition-colors duration-200 text-left text-sky-600"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Second Row: Upcoming Courses, Company */}
            <div className="flex flex-row gap-4 lg:gap-8">
              {/* Upcoming Courses */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-4 text-sky-700">
                  Upcoming Courses
                </h3>
                <ul className="space-y-2">
                  {["JEE", "NEET", "Skilling"].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => handleCategoryClick(item)}
                        className="hover:underline text-sm transition-colors duration-200 text-left text-sky-600"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-4 text-sky-700">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="hover:underline text-sm transition-colors duration-200 text-sky-600"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://blog.shikshanation.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-sm transition-colors duration-200 text-sky-600"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/media"
                      className="hover:underline text-sm transition-colors duration-200 text-sky-600"
                    >
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="hover:underline text-sm transition-colors duration-200 text-sky-600"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:underline text-sm transition-colors duration-200 text-sky-600"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Third Row: Useful Links, Download Now */}
            <div className="flex flex-row gap-4 lg:gap-8">
              {/* Useful Links */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-4 text-sky-700">
                  Useful Links
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-1">
                    <Link
                      href="/become-instructor"
                      className="hover:underline text-sm transition-colors duration-200 text-sky-600"
                    >
                      Become Instructor
                    </Link>
                    <span className="text-sm text-sky-600">→</span>
                  </li>
                  <li>
                    <Link
                      href="/faqs"
                      className="hover:underline text-sm transition-colors duration-200 text-sky-600"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="hover:underline text-sm transition-colors duration-200 text-sky-600"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-conditions"
                      className="hover:underline text-sm transition-colors duration-200 text-sky-600"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund-policy"
                      className="hover:underline text-sm transition-colors duration-200 text-sky-600"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Download Now */}
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-4 text-sky-700">Download Now</h4>
                <div className="flex flex-col gap-2">
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src="/home/get-it-on-playstore.png"
                      alt="Get it on Google Play"
                      width={120}
                      height={36}
                      className="h-auto"
                    />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src="/home/get-it-on-appstore.png"
                      alt="Download on the App Store"
                      width={120}
                      height={36}
                      className="h-auto"
                    />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src="/home/get-it-on-windows-store.png"
                      alt="Get it from Microsoft"
                      width={120}
                      height={36}
                      className="h-auto"
                    />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src="/home/dowload_for_mac_os.png"
                      alt="Download for macOS"
                      width={120}
                      height={36}
                      className="h-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
