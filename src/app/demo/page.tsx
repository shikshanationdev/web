import React from "react";

const learningGoals = [
  {
    id: "ace-jee",
    title: "Ace JEE",
    description: "Detailed lessons with mock tests & problem-solving",
    buttonText: "Start JEE Prep",
  }
];

const MolecularStructure = () => {
  return (
    <svg 
      width="120" 
      height="100" 
      viewBox="0 0 120 100" 
      className="absolute right-4 top-1/2 transform -translate-y-1/2"
    >
      {/* Molecular bonds */}
      <g stroke="#FCD34D" strokeWidth="3" fill="none">
        <line x1="20" y1="30" x2="40" y2="20" />
        <line x1="40" y1="20" x2="60" y2="30" />
        <line x1="60" y1="30" x2="80" y2="20" />
        <line x1="80" y1="20" x2="100" y2="30" />
        <line x1="20" y1="30" x2="30" y2="50" />
        <line x1="30" y1="50" x2="50" y2="60" />
        <line x1="50" y1="60" x2="70" y2="50" />
        <line x1="70" y1="50" x2="90" y2="60" />
        <line x1="40" y1="20" x2="50" y2="40" />
        <line x1="60" y1="30" x2="70" y2="50" />
        <line x1="50" y1="40" x2="70" y2="50" />
        <line x1="30" y1="50" x2="50" y2="40" />
        <line x1="50" y1="60" x2="50" y2="80" />
        <line x1="70" y1="50" x2="90" y2="40" />
      </g>
      
      {/* Molecular nodes */}
      <circle cx="20" cy="30" r="6" fill="#8B5CF6" />
      <circle cx="40" cy="20" r="6" fill="#EC4899" />
      <circle cx="60" cy="30" r="6" fill="#06B6D4" />
      <circle cx="80" cy="20" r="6" fill="#8B5CF6" />
      <circle cx="100" cy="30" r="6" fill="#06B6D4" />
      <circle cx="30" cy="50" r="6" fill="#EC4899" />
      <circle cx="50" cy="40" r="6" fill="#10B981" />
      <circle cx="50" cy="60" r="6" fill="#8B5CF6" />
      <circle cx="70" cy="50" r="6" fill="#EC4899" />
      <circle cx="90" cy="40" r="6" fill="#06B6D4" />
      <circle cx="90" cy="60" r="6" fill="#EC4899" />
      <circle cx="50" cy="80" r="6" fill="#8B5CF6" />
    </svg>
  );
};

const page = () => {
  return (
    <div className="max-w-sm w-full h-44 border border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden flex">
      <div className="w-[70%] h-full p-6 flex flex-col justify-center pr-3 bg-green-50 py-4">
        <h1 className="text-2xl font-bold text-green-500 mb-2">
          {learningGoals[0].title}
        </h1>
        <p className="text-base text-gray-600 mb-4 leading-relaxed">
          {learningGoals[0].description}
        </p>
        <button className="bg-red-400 hover:bg-red-500 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors duration-200 flex items-center gap-2 w-fit shrink-0">
          {learningGoals[0].buttonText} 
          <span className="text-base">→</span>
        </button>
      </div>
      <div className="w-[30%] h-full relative bg-green-50 flex-shrink-0">
        <div className="w-full bg-gradient-to-br rounded-l-[60px] from-pink-100 to-purple-100 h-full relative flex-shrink-0">
          <MolecularStructure />
        </div>
      </div>
    </div>
  );
};

export default page;
