// components/about/AboutHero.tsx
import React from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';
import { FaSkype, FaFacebookF, FaTwitter } from 'react-icons/fa';

const ContactHero: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're here to answer your questions, guide your journey,
                and help you get started with confidence.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MdEmail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                    EMAIL
                  </div>
                  <div className="text-gray-900 font-medium">
                    hello@shikshanation.com
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MdPhone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                    PHONE
                  </div>
                  <div className="text-gray-900 font-medium">
                    +91 98211 15117
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MdLocationOn className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                    ADDRESS
                  </div>
                  <div className="text-gray-900 font-medium">
                    10th floor Tower C Bhutani 62 Avenue,<br />
                    Block - C, Phase 2, Industrial Area,<br />
                    Noida, Uttar Pradesh 201309
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MdAccessTime className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                    OFFICE HOURS
                  </div>
                  <div className="text-gray-900 font-medium">
                    10:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Illustration with Social Icons */}
            <div className="flex items-center space-x-4 pt-8">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors">
                  <FaSkype className="text-white text-lg" />
                </div>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <FaFacebookF className="text-white text-sm" />
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                  <FaTwitter className="text-white text-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="rounded-2xl bg-sky-50 p-8">
            <h2 className="text-4xl font-light text-blue-600 mb-8">Get In Touch</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <input
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />

              <textarea
                rows={4}
                placeholder="Write a message"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreement"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="agreement" className="text-sm text-gray-600">
                  I agree that my submitted data is being collected & stored.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
