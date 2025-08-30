"use client";

import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaRobot } from 'react-icons/fa';

const FloatingContactWidget = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [showMessage, setShowMessage] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

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
        <div className="group relative">
          {/* WhatsApp Message - Expands from icon to the left */}
          <div className={`
            absolute right-0 top-1/2 transform -translate-y-1/2 
            bg-white text-green-600 rounded-full shadow-2xl text-sm font-semibold border-2 border-white
            transition-all duration-500 ease-out z-10 flex items-center
            h-16
            ${showMessage && currentMessageIndex === 1
              ? 'w-64 px-5 opacity-100'
              : 'w-16 px-0 opacity-0'}
            overflow-hidden
          `}>
            <div className="flex items-center gap-3 w-full">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-lg text-white" />
              </div>
              <span className={`transition-all duration-300 text-green-600 ${showMessage && currentMessageIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
                {messages[1]?.text}
              </span>
            </div>
          </div>

          <button
            onClick={handleWhatsApp}
            className={`w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl 
              transition-all duration-300 hover:scale-110 flex items-center justify-center
              relative z-20
              ${showMessage && currentMessageIndex === 1 ? 'scale-105 border-4 border-white' : 'border-4 border-green-200'}
            `}
            title="WhatsApp Us"
          >
            <FaWhatsapp className="text-2xl" />
          </button>
        </div>

        {/* Call Button - Blue */}
        <div className="group relative">
          {/* Call Message - Expands from icon to the left */}
          <div className={`
            absolute right-0 top-1/2 transform -translate-y-1/2 
            bg-white text-blue-600 rounded-full shadow-2xl text-sm font-semibold border-2 border-white
            transition-all duration-500 ease-out z-10 flex items-center
            h-16
            ${showMessage && currentMessageIndex === 0
              ? 'w-64 px-5 opacity-100'
              : 'w-16 px-0 opacity-0'}
            overflow-hidden
          `}>
            <div className="flex items-center gap-3 w-full">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-lg text-white" />
              </div>
              <span className={`transition-all duration-300 text-blue-600 ${showMessage && currentMessageIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
                {messages[0]?.text}
              </span>
            </div>
          </div>

          <button
            onClick={handleCall}
            className={`w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-xl 
              transition-all duration-300 hover:scale-110 flex items-center justify-center
              relative z-20
              ${showMessage && currentMessageIndex === 0 ? 'scale-105 border-4 border-white' : 'border-4 border-blue-200'}
            `}
            title="Call Us"
          >
            <FaPhone className="text-xl" />
          </button>
        </div>

        {/* Chatbot Button - Purple */}
        <div className="group relative">
          {/* Chat Message - Expands from icon to the left */}
          <div className={`
            absolute right-0 top-1/2 transform -translate-y-1/2 
            bg-white text-gray-600 rounded-full shadow-2xl text-sm font-semibold border-2 border-white
            transition-all duration-500 ease-out z-10 flex items-center
            h-16
            ${showMessage && currentMessageIndex === 2
              ? 'w-64 px-5 opacity-100'
              : 'w-16 px-0 opacity-0'}
            overflow-hidden
          `}>
            <div className="flex items-center gap-3 w-full">
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                <FaRobot className="text-lg text-white" />
              </div>
              <span className={`transition-all duration-300 text-gray-600 ${showMessage && currentMessageIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
                {messages[2]?.text}
              </span>
            </div>
          </div>

          <button
            onClick={handleChatbot}
            className={`w-16 h-16 bg-white hover:bg-sky-50 text-white rounded-full shadow-xl 
              transition-all duration-300 hover:scale-110 flex items-center justify-center
              relative z-20
              ${showMessage && currentMessageIndex === 2 ? 'scale-105 border-4 border-white' : 'border-4 border-sky-400'}
            `}
            title="Chat with us"
          >
            <FaRobot className="text-2xl text-blue-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingContactWidget;
