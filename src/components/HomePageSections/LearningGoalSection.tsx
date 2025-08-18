import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const TopCategoriesSection = (): React.ReactElement => {
  // Define the category cards data
  const topCategories = [
    {
      id: "class-6-12",
      title: "Class 6th to 12th",
      description: "Comprehensive courses for school education",
      buttonText: "Explore Classes",
      link: "/courses",
      image: "/home/category1.jpeg",
      gradient: "from-blue-500/10 to-blue-600/20",
      textColor: "text-blue-700",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: "jee-neet",
      title: "JEE & NEET",
      description: "Complete preparation for engineering & medical entrance",
      buttonText: "Start Preparation",
      link: "/courses",
      image: "/home/category2.jpeg",
      gradient: "from-green-500/10 to-green-600/20",
      textColor: "text-green-700",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      id: "cuet",
      title: "CUET",
      description: "University entrance exam preparation",
      buttonText: "Start CUET Prep",
      link: "/courses",
      image: "/home/category3.jpeg",
      gradient: "from-purple-500/10 to-purple-600/20",
      textColor: "text-purple-700",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      id: "skill-development",
      title: "Skill Development",
      description: "Professional skills for career growth",
      buttonText: "Explore Skills",
      link: "/courses",
      image: "/home/category4.jpeg",
      gradient: "from-orange-500/10 to-orange-600/20",
      textColor: "text-orange-700",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Lexend_Deca',Helvetica]">
            Top Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Lexend_Deca',Helvetica]">
            Discover our most popular learning categories designed to help you achieve your educational and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {topCategories.map((category) => (
            <Link key={category.id} href={category.link}>
              <div className="group relative w-full aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Overlay Card */}
                <Card className="absolute inset-0 bg-white/95 backdrop-blur-sm border-none group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                  <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
                    <h3 className={`${category.textColor} text-2xl font-bold mb-3 font-['Lexend_Deca',Helvetica]`}>
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-['Lexend_Deca',Helvetica]">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
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
