import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopCategoriesSection = (): React.ReactElement => {
  // Define the category cards data
  const topCategories = [
    {
      id: "class-6-12",
      title: "Class 6th to 12th",
      subtitle: "ShikshaBase",
      description: "Comprehensive courses for school education",
      buttonText: "Explore Classes",
      link: "/courses?category=ShikshaBase",
      image: "/home/category4.jpeg",
      icon: "/home/ShikshaBaseIcon.svg",
      gradient: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-500",
      textColor: "text-white",
      buttonColor: "bg-white text-teal-600 hover:bg-gray-100",
    },
    {
      id: "class-11-12",
      title: "JEE, NEET & CUET Prep",
      subtitle: "ShikshaEdge",
      description: "Advanced preparation for competitive exams",
      buttonText: "Start Learning",
      link: "/courses?category=ShikshaEdge",
      image: "/home/category3.jpeg",
      icon: "/home/ShikshaEdgeIcon.svg",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500",
      textColor: "text-white",
      buttonColor: "bg-white text-indigo-600 hover:bg-gray-100",
    },
    {
      id: "jee-neet-cuet",
      title: "JEE, NEET & CUET",
      subtitle: "ShikshaQuest",
      description: "Complete preparation for competitive exams",
      buttonText: "Start Preparation",
      link: "/courses?category=ShikshaEdge",
      image: "/home/category2.jpeg",
      icon: "/home/ShikshaQuestIcon.svg",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      textColor: "text-white",
      buttonColor: "bg-white text-purple-600 hover:bg-gray-100",
    },
    {
      id: "skill-development",
      title: "Skill Development",
      subtitle: "ShikshaPro",
      description: "Professional skills for career growth",
      buttonText: "Explore Skills",
      link: "/courses?category=ShikshaPro",
      image: "/home/category1.jpeg",
      icon: "/home/ShikshaPro.svg",
      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500",
      textColor: "text-white",
      buttonColor: "bg-white text-orange-600 hover:bg-gray-100",
    },
  ];

  return (
    <section className="w-full py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Lexend_Deca',Helvetica]">
            Top Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Lexend_Deca',Helvetica]">
            Discover our most popular learning categories designed to help you achieve your educational and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {topCategories.map((category) => (
            <Link key={category.id} href={category.link}>
              <div className="group relative w-full aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                {/* Background Image - Always visible */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Hover State - Gradient overlay with content */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    {/* Custom SVG Icon */}
                    <div className="w-12 h-12 mb-4 relative">
                      <Image
                        src={category.icon}
                        alt={`${category.subtitle} Icon`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold mb-2 ${category.textColor} font-['Lexend_Deca',Helvetica]`}>
                      {category.title}
                    </h3>

                    {/* Subtitle */}
                    <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                      <span className="text-white text-sm font-semibold font-['Lexend_Deca',Helvetica]">
                        {category.subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`text-sm mb-6 ${category.textColor} opacity-90 font-['Lexend_Deca',Helvetica]`}>
                      {category.description}
                    </p>

                    {/* Button */}
                    <button className={`px-6 py-2 rounded-full ${category.buttonColor} font-semibold text-sm transition-all duration-300 transform hover:scale-105 font-['Lexend_Deca',Helvetica]`}>
                      {category.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};
export default TopCategoriesSection;
