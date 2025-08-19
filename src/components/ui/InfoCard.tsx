import Image from "next/image";
import React from "react";

interface InfoCardProps {
  icon: string;
  label: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, label }) => (
  <div className="bg-white rounded-2xl shadow-md flex flex-col min-w-[240px] min-h-[240px] max-w-[300px] mx-auto overflow-hidden" style={{ height: '180px' }}>
    {/* Top section: icon and background shape */}
    <div className="relative flex-1 flex items-center justify-center" style={{ flexBasis: '70%', minHeight: '0' }}>
      <div className="absolute -top-5 -right-5 w-48 h-44 bg-sky-50 rounded-b-full" style={{ zIndex: 1 }}>
        <div className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <Image src={icon} alt={label} fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </div>
    {/* Bottom section: text */}
    <div className="flex items-center justify-start pl-5 h-[30%] bg-transparent">
      <span className="text-sky-700 font-bold text-xl text-center whitespace-pre-line">
        {label}
      </span>
    </div>
  </div>
);

export default InfoCard;
