import Image from "next/image";
import React from "react";

interface InfoCardProps {
  icon: string;
  label: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, label }) => (
  <div className="bg-white rounded-2xl shadow-md flex flex-col min-w-[240px] min-h-[240px] max-w-[280px] mx-auto overflow-hidden" style={{height:'280px'}}>
    {/* Top section: icon and background shape */}
    <div className="relative flex-1 flex items-center justify-center" style={{flexBasis:'75%', minHeight:'0'}}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[80px] flex items-center justify-center" style={{zIndex:1}}>
        <div className="w-20 h-20 relative flex items-center justify-center">
          <Image src={icon} alt={label} fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </div>
    {/* Bottom section: text */}
    <div className="flex items-center justify-center h-[25%] bg-transparent">
      <span className="text-blue-700 font-bold text-2xl text-center whitespace-pre-line">
        {label}
      </span>
    </div>
  </div>
);

export default InfoCard;
