"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineBars3BottomLeft, HiChevronDown, HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full border-b border-blue-100 bg-white px-4 md:px-8 py-3 relative">
      <nav className="w-full flex items-center justify-between max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Mobile Menu Button - Left */}
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:text-sky-600 transition-colors"
            aria-label="Toggle menu"
          >
            <HiOutlineBars3BottomLeft className="w-6 h-6" />
          </button>

          {/* Logo - Center */}
          <Link href="/" className="flex items-center select-none">
            <Image
              src="/logo.webp"
              alt="Shiksha Nation Logo"
              width={150}
              height={50}
              className="h-auto"
            />
          </Link>

          {/* Open App Button - Right */}
          <Link
            href="/app"
            className="px-4 py-2 border-2 border-sky-600 text-sky-600 rounded-full hover:bg-blue-50 transition-colors text-sm font-medium"
          >
            Open App
          </Link>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center select-none">
            <Image
              src="/logo.webp"
              alt="Shiksha Nation Logo"
              width={180}
              height={60}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-24">
            <Link href="/" className="text-sky-600 hover:text-sky-700 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-sky-600 transition-colors">
              About Us
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-sky-600 transition-colors">
              Courses
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-sky-600 transition-colors">
              Contact us
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="px-6 py-2 border-2 border-sky-600 text-sky-600 rounded-full hover:bg-blue-50 transition-colors text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-sky-700 text-white rounded-full hover:bg-sky-600 transition-colors text-sm font-medium"
            >
              Join for Free
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay - Only covers the area not occupied by menu */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 z-40 md:hidden"
            onClick={closeMenu}
          />
        )}

        {/* Mobile Menu */}
        <div className={`
          fixed top-0 left-0 h-full w-[280px] rounded-tr-4xl border-r border-sky-100 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col h-full">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-center p-6">
              <Image
                src="/logo.webp"
                alt="Shiksha Nation Logo"
                width={200}
                height={40}
                className="h-auto"
              />
            </div>

            {/* Menu Content */}
            <div className="flex flex-col px-6 py-8 space-y-8">
              <Link 
                href="/" 
                className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              {/* Explore Courses with Dropdown Icon */}
              <div className="flex items-center justify-between">
                <Link 
                  href="/courses" 
                  className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
                  onClick={closeMenu}
                >
                  Explore Courses
                </Link>
                <HiChevronDown className="w-4 h-4 text-blue-600" />
              </div>

              <Link 
                href="/skilling" 
                className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
                onClick={closeMenu}
              >
                Skilling
              </Link>

              <Link 
                href="/test-series" 
                className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
                onClick={closeMenu}
              >
                All Test Series
              </Link>

              <Link 
                href="/exams" 
                className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
                onClick={closeMenu}
              >
                Exams
              </Link>

              <Link 
                href="/contact" 
                className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
                onClick={closeMenu}
              >
                Contact
              </Link>

              <Link 
                href="/media" 
                className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
                onClick={closeMenu}
              >
                Media
              </Link>

              <Link 
                href="/about" 
                className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </div>

            {/* Bottom Auth Buttons */}
            <div className="mt-auto p-6 space-y-4">
              <Link
                href="/signin"
                className="w-full py-3 px-6 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors text-center font-medium block"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-center font-medium block"
                onClick={closeMenu}
              >
                Join for Free
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
