"use client";
import React from "react";

type Props = {
  heading: string;
  subtitle?: string;
};

const Banner: React.FC<Props> = ({ heading, subtitle }) => {
  return (
    <section className="w-full bg-sky-100 relative overflow-hidden">
      <style jsx>{`
        @keyframes floatHorizontal {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(50px) translateY(-20px); }
          50% { transform: translateX(100px) translateY(10px); }
          75% { transform: translateX(30px) translateY(20px); }
        }
        
        @keyframes floatVertical {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-40px) translateX(20px); }
          50% { transform: translateY(-80px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(30px); }
        }
        
        @keyframes floatCircular {
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(60px) translateY(-30px); }
          50% { transform: translateX(80px) translateY(40px); }
          75% { transform: translateX(-20px) translateY(60px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        
        @keyframes floatDiagonal {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(-40px) translateY(-40px); }
          50% { transform: translateX(40px) translateY(-80px); }
          75% { transform: translateX(80px) translateY(-20px); }
        }
        
        @keyframes floatWave {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          20% { transform: translateY(-15px) translateX(20px); }
          40% { transform: translateY(10px) translateX(40px); }
          60% { transform: translateY(-25px) translateX(60px); }
          80% { transform: translateY(5px) translateX(40px); }
        }
        
        .float-horizontal { animation: floatHorizontal 8s ease-in-out infinite; }
        .float-vertical { animation: floatVertical 6s ease-in-out infinite; }
        .float-circular { animation: floatCircular 10s ease-in-out infinite; }
        .float-diagonal { animation: floatDiagonal 7s ease-in-out infinite; }
        .float-wave { animation: floatWave 5s ease-in-out infinite; }
        
        .delay-1 { animation-delay: 1s; }
        .delay-2 { animation-delay: 2s; }
        .delay-3 { animation-delay: 3s; }
        .delay-4 { animation-delay: 4s; }
      `}</style>

      {/* Background Circular SVG Effects with Movement Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circles with Movement */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-sky-200 rounded-full opacity-60 float-circular"></div>
        <div className="absolute top-8 -left-8 w-24 h-24 bg-blue-200 rounded-full opacity-40 float-horizontal delay-1"></div>
        <div className="absolute -bottom-4 right-12 w-16 h-16 bg-sky-300 rounded-full opacity-50 float-vertical delay-2"></div>
        <div className="absolute top-1/2 -left-4 w-12 h-12 bg-blue-300 rounded-full opacity-30 float-diagonal delay-3"></div>

        {/* Additional Moving Circles */}
        <div className="absolute top-16 right-1/3 w-20 h-20 bg-sky-200 rounded-full opacity-30 float-wave"></div>
        <div className="absolute bottom-20 left-1/5 w-28 h-28 bg-blue-100 rounded-full opacity-40 float-circular delay-4"></div>
        <div className="absolute top-1/3 right-16 w-14 h-14 bg-sky-400 rounded-full opacity-35 float-horizontal delay-2"></div>
        <div className="absolute bottom-1/3 left-20 w-18 h-18 bg-blue-200 rounded-full opacity-45 float-vertical delay-1"></div>

        {/* SVG Decorative Elements with Movement and Rotation */}
        <svg className="absolute top-12 right-1/4 w-20 h-20 text-sky-300 opacity-20 float-diagonal animate-spin" style={{ animationDuration: '15s' }} fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
        </svg>

        <svg className="absolute bottom-16 left-1/4 w-16 h-16 text-blue-400 opacity-25 float-circular delay-3 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.3" />
        </svg>

        <svg className="absolute top-1/4 left-1/3 w-12 h-12 text-sky-400 opacity-30 float-wave delay-2 animate-spin" style={{ animationDuration: '8s' }} fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="15,10" />
        </svg>

        {/* Floating dots with movement animations */}
        <div className="absolute top-20 left-1/3 w-3 h-3 bg-sky-400 rounded-full opacity-40 float-horizontal"></div>
        <div className="absolute bottom-24 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-50 float-vertical delay-1"></div>
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-sky-300 rounded-full opacity-35 float-circular delay-2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-40 float-diagonal delay-3"></div>
        <div className="absolute top-3/4 left-1/4 w-5 h-5 bg-sky-200 rounded-full opacity-50 float-wave delay-4"></div>
        <div className="absolute top-10 left-2/3 w-2 h-2 bg-blue-500 rounded-full opacity-35 float-horizontal delay-1"></div>

        {/* Additional decorative rings with movement */}
        <div className="absolute bottom-10 right-20 w-24 h-24 border-2 border-sky-300 rounded-full opacity-20 float-circular delay-2 animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute top-20 left-16 w-16 h-16 border border-blue-400 rounded-full opacity-25 float-vertical delay-4 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>

        {/* Extra floating elements for more movement */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-sky-100 rounded-full opacity-60 float-diagonal"></div>
        <div className="absolute bottom-1/2 left-1/3 w-6 h-6 bg-blue-150 rounded-full opacity-50 float-wave delay-3"></div>
        <div className="absolute top-2/3 right-1/5 w-10 h-10 bg-sky-250 rounded-full opacity-40 float-horizontal delay-4"></div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
          {heading}
        </h2>
      </div>
    </section>
  );
};

export default Banner;
