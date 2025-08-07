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
      iconSrc: "/home/class-6-12.svg",
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
      iconSrc: "/home/crack-neet.svg",
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
      iconSrc: "/home/ace-jee.svg",
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
      iconSrc: "/home/prepare-for-cuet.svg",
    },
  ];

  return (
    <section className="w-full py-36 bg-white">
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
              className={`${goal.bgColor} border-none overflow-hidden relative`}
            >
              <CardContent className="p-4 md:px-8 relative z-10">
                <div className="flex justify-between items-center min-h-[160px] md:min-h-[202px]">
                  <div className="flex-1 pr-[110px] md:pr-[130px] flex flex-col">
                    <h3
                      className={`${goal.titleColor} text-xl md:text-2xl font-bold font-['Lexend_Deca',Helvetica]`}
                    >
                      {goal.title}
                    </h3>

                    <p
                      className={`${goal.descriptionColor} text-sm md:text-base mt-2 mb-4 md:mb-6 font-['Lexend_Deca',Helvetica]`}
                    >
                      {goal.description}
                    </p>

                    <Button
                      className={`${goal.buttonBgColor} text-white rounded-xl h-[40px] md:h-[50px] w-full max-w-[200px] md:max-w-[232px] hover:opacity-90 transition-opacity duration-200`}
                    >
                      <span className="font-medium text-sm md:text-lg font-['Lexend_Deca',Helvetica]">
                        {goal.buttonText}
                      </span>
                      <FaChevronRight className="ml-1 md:ml-2 h-4 w-4 md:h-6 md:w-6" />
                    </Button>
                  </div>

                  <div className="absolute top-0 right-0 h-full">
                    <div
                      className={`w-[100px] md:w-[120px] h-full ${goal.circleBgColor} flex items-center justify-center`}
                      style={{
                        borderTopLeftRadius: '60px',
                        borderBottomLeftRadius: '60px',
                      }}
                    >
                      <img
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                        alt={`${goal.title} icon`}
                        src={goal.iconSrc}
                      />
                    </div>
                  </div>
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
