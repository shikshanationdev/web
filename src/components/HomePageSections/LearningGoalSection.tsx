import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const LearningGoalsSection = (): React.ReactElement => {
  // Define the learning goal cards data for easy mapping
  const learningGoals = [
    {
      id: "class-6-12",
      title: "Class 6-12",
      description: "For Classes 6 to 12 — CBSE, ICSE, and more",
      buttonText: "Explore Classes",
      bgColor: "bg-[#f7fff3]",
      titleColor: "text-[#3ebc00]",
      descriptionColor: "text-[#68c937]",
      buttonBgColor: "bg-[#8de561]",
      circleBgColor: "bg-[#eeffe6]",
      iconSrc: "/class-6-12.svg",
      position: "top-[239px] left-[203px]",
    },
    {
      id: "crack-neet",
      title: "Crack NEET",
      description: "Complete prep for Biology, Physics & Chemistry",
      buttonText: "Start NEET Prep",
      bgColor: "bg-[#e2fffc]",
      titleColor: "text-[#00988a]",
      descriptionColor: "text-[#03baa8]",
      buttonBgColor: "bg-[#4ed6c9]",
      circleBgColor: "bg-[#cdfffa]",
      iconSrc: "/crack-neet.svg",
      position: "top-[239px] left-[745px]",
    },
    {
      id: "ace-jee",
      title: "Ace JEE",
      description: "Detailed lessons with mock tests & problem-solving",
      buttonText: "Start JEE Prep",
      bgColor: "bg-[#fff5f5]",
      titleColor: "text-[#3ebc00]",
      descriptionColor: "text-[#d95b5b]",
      buttonBgColor: "bg-[#f37777]",
      circleBgColor: "bg-[#fbe9e9]",
      iconSrc: "/ace-jee.svg",
      position: "top-[491px] left-[203px]",
    },
    {
      id: "prepare-cuet",
      title: "Prepare for CUET",
      description: "Covers General Test, English & more",
      buttonText: "Start CUET Prep",
      bgColor: "bg-[#f5f8ff]",
      titleColor: "text-[#00988a]",
      descriptionColor: "text-[#54678f]",
      buttonBgColor: "bg-[#7092d8]",
      circleBgColor: "bg-[#e7eefc]",
      iconSrc: "/prepare-for-cuet.svg",
      position: "top-[491px] left-[745px]",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[40px] font-bold text-[#141219] text-center mb-5 font-['Lexend_Deca',Helvetica]">
          What&apos;s Your Learning Goal
        </h2>

        <p className="text-lg text-[#454648] text-center mb-12 max-w-3xl mx-auto font-['Lexend_Deca',Helvetica]">
          Lorem ipsum dolor sit amet consectetur. Lorem in volutpat vulputate
          pellentesque blandit feugiat. Porttitor enim nec vitae viverra id.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {learningGoals.map((goal) => (
            <Card
              key={goal.id}
              className={`${goal.bgColor} border-none overflow-hidden h-[202px] relative`}
            >
              <CardContent className="p-8">
                <h3
                  className={`${goal.titleColor} text-2xl font-bold font-['Lexend_Deca',Helvetica]`}
                >
                  {goal.title}
                </h3>

                <p
                  className={`${goal.descriptionColor} text-base mt-2 max-w-[265px] font-['Lexend_Deca',Helvetica]`}
                >
                  {goal.description}
                </p>

                <Button
                  className={`${goal.buttonBgColor} text-white rounded-xl mt-6 h-[50px] w-[232px] hover:opacity-90`}
                >
                  <span className="font-medium text-lg font-['Lexend_Deca',Helvetica]">
                    {goal.buttonText}
                  </span>
                  <FaChevronRight className="ml-2 h-6 w-6" />
                </Button>

                <div
                  className={`absolute w-[280px] h-[280px] top-[-39px] right-[-39px] ${goal.circleBgColor} rounded-[140px]`}
                >
                  <img
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24"
                    alt={`${goal.title} icon`}
                    src={goal.iconSrc}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LearningGoalsSection;
