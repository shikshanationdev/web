"use client";

import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const FloatingContactWidget = () => {

  const handleCall = () => {
    window.open('tel:+919821115117', '_self');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to know more about your courses.');
    window.open(`https://wa.me/919821115117?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 left-6 z-[9999]">
      {/* Contact Icons - Always Visible */}
      <div className="flex flex-col gap-2">
        {/* Call Button - Blue (Top) */}
        <button
          onClick={handleCall}
          className="w-16 h-16 bg-blue-500 text-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-200"
          title="Call Us"
        >
          <FaPhone className="text-xl" />
        </button>

        {/* WhatsApp Button - Green (Bottom) */}
        <button
          onClick={handleWhatsApp}
          className="w-16 h-16 bg-green-500 text-white rounded-full shadow-xl flex items-center justify-center border-4 border-green-200"
          title="WhatsApp Us"
        >
          <FaWhatsapp className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default FloatingContactWidget;
