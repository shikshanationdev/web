import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVisionCard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl px-5 xl:px-0 mx-auto py-16 overflow-hidden">
      {/* Mission */}
      <div className="flex-1 bg-[#2563eb] p-8 flex flex-col justify-center items-center md:items-start rounded-t-3xl md:rounded-none md:rounded-l-3xl">
        <div className="flex items-center mb-4">
          <FaBullseye className="text-white text-2xl mr-3" />
          <h3 className="text-white text-2xl font-bold">Our Mission</h3>
        </div>
        <p className="text-white text-base md:text-[16px] leading-relaxed font-medium text-center md:text-left">
          To make high-quality, affordable education accessible to every learner in India — blending academic success with career readiness, and building a self-reliant, skilled Bharat.
        </p>
      </div>
      {/* Vision */}
      <div className="flex-1 bg-[#22c55e] p-8 flex flex-col justify-center items-center md:items-end rounded-b-3xl md:rounded-none md:rounded-r-3xl">
        <div className="flex items-center mb-4">
          <FaEye className="text-white text-2xl mr-3" />
          <h3 className="text-white text-2xl font-bold">Our Vision</h3>
        </div>
        <p className="text-white text-base md:text-[16px] leading-relaxed font-medium text-center md:text-right">
          To be India’s most trusted learning platform, uniting school education, entrance preparation, and skill development under one digital roof — and creating a generation of future-ready citizens who thrive in a global economy.
        </p>
      </div>
    </div>
  );
};

export default MissionVisionCard;
