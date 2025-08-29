"use client";

import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaComments } from 'react-icons/fa';

const FloatingContactWidget = () => {
  const [showLabels, setShowLabels] = useState(false);

  const handleCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to know more about your courses.');
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleChatbot = () => {
    // You can implement your chatbot logic here
    alert('Chatbot feature coming soon!');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Icons - Always Visible */}
      <div className="flex flex-col gap-2">
        {/* WhatsApp Button - Green */}
        <div
          className="group relative"
          onMouseEnter={() => setShowLabels(true)}
          onMouseLeave={() => setShowLabels(false)}
        >
          <button
            onClick={handleWhatsApp}
            className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-4 border-green-200"
            title="WhatsApp Us"
          >
            <FaWhatsapp className="text-2xl" />
          </button>
          {/* Label */}
          <div className={`
            absolute right-20 top-1/2 transform -translate-y-1/2 
            bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap
            transition-all duration-200 shadow-lg
            ${showLabels ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}>
            WhatsApp
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>
        </div>

        {/* Call Button - Blue */}
        <div
          className="group relative"
          onMouseEnter={() => setShowLabels(true)}
          onMouseLeave={() => setShowLabels(false)}
        >
          <button
            onClick={handleCall}
            className="w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-4 border-blue-200"
            title="Call Us"
          >
            <FaPhone className="text-xl" />
          </button>
          {/* Label */}
          <div className={`
            absolute right-20 top-1/2 transform -translate-y-1/2 
            bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap
            transition-all duration-200 shadow-lg
            ${showLabels ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}>
            Call Us
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>
        </div>

        {/* Chatbot Button - Light Blue */}
        <div
          className="group relative"
          onMouseEnter={() => setShowLabels(true)}
          onMouseLeave={() => setShowLabels(false)}
        >
          <button
            onClick={handleChatbot}
            className="w-16 h-16 bg-sky-400 hover:bg-sky-500 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-4 border-sky-200"
            title="Chat with us"
          >
            <FaComments className="text-xl" />
          </button>
          {/* Label */}
          <div className={`
            absolute right-20 top-1/2 transform -translate-y-1/2 
            bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap
            transition-all duration-200 shadow-lg
            ${showLabels ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}>
            Live Chat
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingContactWidget;
