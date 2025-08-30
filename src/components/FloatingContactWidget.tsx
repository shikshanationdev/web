"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaWhatsapp, FaRobot } from 'react-icons/fa';

const FloatingContactWidget = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [showMessage, setShowMessage] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);

  // Use refs to track timeouts and prevent double cycling
  const timeoutRefs = useRef<{
    initial?: NodeJS.Timeout;
    hide?: NodeJS.Timeout;
    next?: NodeJS.Timeout;
  }>({});
  const cyclingRef = useRef(false);

  // Messages to cycle through
  const messages = [
    { action: 'Call Us', details: '+91 98765 43210', type: 'phone', index: 1 }, // Call button (middle)
    { action: 'WhatsApp Us', details: '+91 98765 43210', type: 'whatsapp', index: 0 }, // WhatsApp button (top)
    { action: 'Chat with Us', details: 'Live Support', type: 'chat', index: 2 } // Chat button (bottom)
  ];

  // Clear all timeouts helper function
  const clearAllTimeouts = () => {
    Object.values(timeoutRefs.current).forEach(timeout => {
      if (timeout) clearTimeout(timeout);
    });
    timeoutRefs.current = {};
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsPaused(true);
    setShowMessage(false); // Hide auto-cycling message
    clearAllTimeouts(); // Clear any running timeouts
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
    setIsPaused(false);
  };

  useEffect(() => {
    // Clear any existing timeouts when starting new cycle
    clearAllTimeouts();

    if (isPaused || cyclingRef.current) return;

    const startCycling = () => {
      if (cyclingRef.current) return; // Prevent double cycling
      cyclingRef.current = true;

      let messageIndex = 0;

      const showNextMessage = () => {
        if (isPaused) {
          cyclingRef.current = false;
          return;
        }

        setCurrentMessageIndex(messageIndex);
        setShowMessage(true);

        // Schedule hiding this message and showing next
        timeoutRefs.current.hide = setTimeout(() => {
          if (isPaused) {
            cyclingRef.current = false;
            return;
          }

          setShowMessage(false);

          // Brief pause before next message
          timeoutRefs.current.next = setTimeout(() => {
            if (isPaused) {
              cyclingRef.current = false;
              return;
            }

            messageIndex = (messageIndex + 1) % messages.length;
            showNextMessage();
          }, 500);
        }, 7000);
      };

      showNextMessage();
    };

    // Initial delay before starting the cycle
    timeoutRefs.current.initial = setTimeout(startCycling, 7000);

    return () => {
      clearAllTimeouts();
      cyclingRef.current = false;
    };
  }, [isPaused, messages.length]);

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
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          {/* WhatsApp Message - Expands from icon to the left */}
          <div className={`
            absolute right-0 top-1/2 transform -translate-y-1/2 
            bg-white text-green-600 rounded-full shadow-2xl text-sm font-semibold border-2 border-white
            transition-all duration-500 ease-out z-10 flex items-center
            h-16
            ${(showMessage && currentMessageIndex === 1 && !isPaused) || hoveredIndex === 1
              ? 'w-64 px-5 opacity-100'
              : 'w-16 px-0 opacity-0'}
            overflow-hidden
          `}>
            <div className="flex items-center gap-3 w-full">
              <div className="flex flex-col">
                <span className={`transition-all duration-300 text-green-600 font-semibold ${(showMessage && currentMessageIndex === 1 && !isPaused) || hoveredIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
                  {messages[1]?.action}
                </span>
                <span className={`transition-all duration-300 text-green-500 text-xs ${(showMessage && currentMessageIndex === 1 && !isPaused) || hoveredIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
                  {messages[1]?.details}
                </span>
              </div>
            </div>
          </div>

          {/* Remove Hover Tooltip - Not needed */}

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
        <div
          className="group relative"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Call Message - Expands from icon to the left */}
          <div className={`
            absolute right-0 top-1/2 transform -translate-y-1/2 
            bg-white text-blue-600 rounded-full shadow-2xl text-sm font-semibold border-2 border-white
            transition-all duration-500 ease-out z-10 flex items-center
            h-16
            ${(showMessage && currentMessageIndex === 0 && !isPaused) || hoveredIndex === 0
              ? 'w-64 px-5 opacity-100'
              : 'w-16 px-0 opacity-0'}
            overflow-hidden
          `}>
            <div className="flex items-center gap-3 w-full">
              <div className="flex flex-col">
                <span className={`transition-all duration-300 text-blue-600 font-semibold ${(showMessage && currentMessageIndex === 0 && !isPaused) || hoveredIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  {messages[0]?.action}
                </span>
                <span className={`transition-all duration-300 text-blue-500 text-xs ${(showMessage && currentMessageIndex === 0 && !isPaused) || hoveredIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  {messages[0]?.details}
                </span>
              </div>
            </div>
          </div>

          {/* Remove Hover Tooltip - Not needed */}

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
        <div
          className="group relative"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Chat Message - Expands from icon to the left */}
          <div className={`
            absolute right-0 top-1/2 transform -translate-y-1/2 
            bg-white text-gray-600 rounded-full shadow-2xl text-sm font-semibold border-2 border-white
            transition-all duration-500 ease-out z-10 flex items-center
            h-16
            ${(showMessage && currentMessageIndex === 2 && !isPaused) || hoveredIndex === 2
              ? 'w-64 px-5 opacity-100'
              : 'w-16 px-0 opacity-0'}
            overflow-hidden
          `}>
            <div className="flex items-center gap-3 w-full">
              <div className="flex flex-col">
                <span className={`transition-all duration-300 text-gray-600 font-semibold ${(showMessage && currentMessageIndex === 2 && !isPaused) || hoveredIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
                  {messages[2]?.action}
                </span>
                <span className={`transition-all duration-300 text-gray-500 text-xs ${(showMessage && currentMessageIndex === 2 && !isPaused) || hoveredIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
                  {messages[2]?.details}
                </span>
              </div>
            </div>
          </div>

          {/* Remove Hover Tooltip - Not needed */}

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
