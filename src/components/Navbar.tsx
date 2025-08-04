"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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
        {/* Logo */}
        <Link href="/" className="flex items-center select-none z-50 relative">
          <Image
            src="/logo.webp"
            alt="Shiksha Nation Logo"
            width={180}
            height={60}
            className="h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-24">
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
        <div className="hidden md:flex items-center gap-4">
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 relative p-2 text-gray-700 hover:text-sky-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          />
        )}

        {/* Mobile Menu */}
        <div className={`
          fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col h-full pt-20 pb-6 px-6">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-16 mb-8">
              <Link 
                href="/" 
                className="text-sky-600 hover:text-sky-700 transition-colors text-lg font-medium"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-sky-600 transition-colors text-lg"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link 
                href="/courses" 
                className="text-gray-700 hover:text-sky-600 transition-colors text-lg"
                onClick={closeMenu}
              >
                Courses
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-sky-600 transition-colors text-lg"
                onClick={closeMenu}
              >
                Contact us
              </Link>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-4 mt-auto">
              <Link
                href="/signin"
                className="w-full py-3 px-6 border-2 border-sky-600 text-sky-600 rounded-full hover:bg-blue-50 transition-colors text-center font-medium"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="w-full py-3 px-6 bg-sky-700 text-white rounded-full hover:bg-sky-600 transition-colors text-center font-medium"
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
