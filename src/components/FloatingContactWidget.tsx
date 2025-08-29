"use client";

import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaRobot } from 'react-icons/fa';

const FloatingContactWidget = () => {
  const [showLabels, setShowLabels] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [showMessage, setShowMessage] = useState(false);

  // Messages to cycle through
  const messages = [
    { text: '+91 98765 43210', type: 'phone', index: 1 }, // Call button (middle)
    { text: '+91 98765 43210', type: 'whatsapp', index: 0 }, // WhatsApp button (top)
    { text: 'Chat with us', type: 'chat', index: 2 } // Chat button (bottom)
  ];

  useEffect(() => {
    // Start the cycle after 7 seconds
    const initialDelay = setTimeout(() => {
      let messageIndex = 0;

      const cycleMessages = () => {
        setCurrentMessageIndex(messageIndex);
        setShowMessage(true);

        // Hide message after 7 seconds and move to next
        setTimeout(() => {
          setShowMessage(false);
          messageIndex = (messageIndex + 1) % messages.length;

          // Show next message after a brief pause
          setTimeout(() => {
            cycleMessages();
          }, 500);
        }, 7000);
      };

      cycleMessages();
    }, 7000);

    return () => clearTimeout(initialDelay);
  }, []);

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
          {/* WhatsApp Message */}
          <div className={`
            absolute right-20 top-1/2 transform -translate-y-1/2 
            bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap
            transition-all duration-500 z-10
            ${showMessage && currentMessageIndex === 1 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-2 scale-95 pointer-events-none'}
          `}>
            {messages[1]?.text}
            <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-green-600 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>

          <button
            onClick={handleWhatsApp}
            className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-4 border-green-200"
            title="WhatsApp Us"
          >
            <FaWhatsapp className="text-2xl" />
          </button>
          {/* Hover Label */}
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
          {/* Call Message */}
          <div className={`
            absolute right-20 top-1/2 transform -translate-y-1/2 
            bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap
            transition-all duration-500 z-10
            ${showMessage && currentMessageIndex === 0 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-2 scale-95 pointer-events-none'}
          `}>
            {messages[0]?.text}
            <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-blue-600 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>

          <button
            onClick={handleCall}
            className="w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-4 border-blue-200"
            title="Call Us"
          >
            <FaPhone className="text-xl" />
          </button>
          {/* Hover Label */}
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
          {/* Chat Message */}
          <div className={`
            absolute right-20 top-1/2 transform -translate-y-1/2 
            bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap
            transition-all duration-500 z-10
            ${showMessage && currentMessageIndex === 2 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-2 scale-95 pointer-events-none'}
          `}>
            {messages[2]?.text}
            <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>

          <button
            onClick={handleChatbot}
            className="w-16 h-16 bg-white hover:bg-sky-50 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-4 border-sky-400"
            title="Chat with us"
          >
            <FaRobot className="text-2xl text-blue-400" />
          </button>
          {/* Hover Label */}
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
