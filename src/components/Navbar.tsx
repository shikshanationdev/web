"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { MdCall } from "react-icons/md";

// Navigation items for the mobile and desktop
const navItems = [
  { label: "Courses", href: "/courses" },
  { label: "Skilling", href: "https://skilling.shikshanation.com" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Talk to our expert", href: "tel:+919821115117", phoneNumber: "+91 98211 15117" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if a navigation item is active
  const isActiveNavItem = (href: string) => {
    if (!pathname) return false;
    if (href === "/" && pathname === "/") {
      return true;
    }
    if (href !== "/" && pathname.startsWith(href)) {
      return true;
    }
    return false;
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full border-0 md:border-b border-blue-100 bg-white px-4 md:px-8 py-3 z-50">
        <nav className="w-full flex items-center justify-between max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="flex lg:hidden items-center justify-between w-full">
            {/* Left: Hamburger + Logo */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-sky-600 transition-colors"
                aria-label="Toggle menu"
              >
                <HiOutlineBars3BottomLeft className="w-8 h-8" />
              </button>
              <Link href="/" className="flex items-center select-none">
                <Image
                  src="/home/logo.webp"
                  alt="Shiksha Nation Logo"
                  width={120}
                  height={40}
                  className="h-auto"
                />
              </Link>
            </div>

            {/* Open App Button - Right */}
            <Link
              href="https://play.google.com/store/apps/details?id=app.shikshanation&hl=en_IN"
              className="px-4 py-2 border-2 border-sky-600 text-sky-600 rounded-full hover:bg-blue-50 transition-colors text-sm font-medium"
            >
              Open App
            </Link>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center select-none">
              <Image
                src="/home/logo.webp"
                alt="Shiksha Nation Logo"
                width={180}
                height={60}
                className="h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-5 lg:gap-8 xl:gap-20">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors ${item.phoneNumber
                    ? "text-green-500 text-sm hover:text-green-600 flex flex-col text-left"
                    : isActiveNavItem(item.href)
                      ? "text-sky-600"
                      : "text-gray-800 hover:text-sky-700"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    {item.phoneNumber && (
                      <MdCall className="w-4 h-4 text-green-500" />
                    )}
                    <span>{item.label}</span>
                  </div>
                  {item.phoneNumber && (
                    <span className="text-base font-bold text-green-700">{item.phoneNumber}</span>
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="flex items-center gap-4">
              <Link
                target="_blank"
                href="https://courses.shikshanation.com/login"
                className="px-6 py-2 border-2 border-sky-600 text-sky-600 rounded-full hover:bg-blue-50 transition-colors text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                target="_blank"
                href="https://courses.shikshanation.com/signup"
                className="px-6 py-2 bg-sky-700 text-white rounded-full hover:bg-sky-600 transition-colors text-sm font-medium"
              >
                Join for Free
              </Link>
            </div>
          </div>

          {/* Mobile Menu Overlay - Only covers the area not occupied by menu */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 z-40 lg:hidden"
              onClick={closeMenu}
            />
          )}

          {/* Mobile Menu */}
          <div className={`
            fixed top-0 left-0 h-full w-[280px] rounded-tr-4xl border-r border-sky-100 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="flex flex-col h-full">
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-center p-6">
                <Image
                  src="/home/logo.webp"
                  alt="Shiksha Nation Logo"
                  width={200}
                  height={40}
                  className="h-auto"
                />
              </div>

              {/* Menu Content */}
              <div className="flex flex-col px-6 py-8 space-y-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`transition-colors text-lg font-medium ${item.phoneNumber
                      ? "text-green-500 text-sm hover:text-green-600 flex flex-col"
                      : isActiveNavItem(item.href)
                        ? "text-sky-600"
                        : "text-gray-800 hover:text-sky-800"
                      }`}
                    onClick={closeMenu}
                  >
                    <div className="flex items-center gap-3">
                      {item.phoneNumber && (
                        <MdCall className="w-4 h-4 text-green-500" />
                      )}
                      <span>{item.label}</span>
                    </div>
                    {item.phoneNumber && (
                      <span className="text-base font-bold text-green-700">{item.phoneNumber}</span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Bottom Auth Buttons */}
              <div className="mt-auto p-6 space-y-4">
                <Link
                  target="_blank"
                  href="https://courses.shikshanation.com/login"
                  className="w-full py-3 px-6 border border-sky-600 text-sky-600 rounded-full hover:bg-blue-50 transition-colors text-center font-medium block"
                  onClick={closeMenu}
                >
                  Sign In
                </Link>
                <Link
                  target="_blank"
                  href="https://courses.shikshanation.com/signup"
                  className="w-full py-3 px-6 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors text-center font-medium block"
                  onClick={closeMenu}
                >
                  Join for Free
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent page content from being hidden behind fixed navbar */}
      <div className="h-14 md:h-16 lg:h-18" />
    </>
  );
};

export default Navbar;
