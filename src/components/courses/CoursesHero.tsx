import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

const CoursesHero = () => {
  const courses = [
    {
      id: 1,
      title: "Class 6th to 12th",
      image: "/courses/Shiksha-Base.png",
      description: "Comprehensive curriculum for secondary education"
    },
    {
      id: 2,
      title: "NEET",
      image: "/courses/Shiksha-Edge.png",
      description: "Medical entrance exam preparation"
    },
    {
      id: 3,
      title: "JEE",
      image: "/courses/Shiksha-Pro.png",
      description: "Engineering entrance exam preparation"
    },
    {
      id: 4,
      title: "Skill Development",
      image: "/courses/Shiksha-Quest.png",
      description: "Professional and technical skills"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#0169B6] to-[#68BA4C] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white space-y-4">
            {/* Tagline */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <span className="mr-2"><FaGraduationCap className="w-4 h-4" /></span>
              Explore. Learn. Excel.
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-wrap">
              Find the Right Course for Your Learning Journey
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-blue-100 max-w-lg">
              Browse curated courses for Classes 1-12, NEET, JEE, CUET, and beyond.
            </p>
          </div>

          {/* Right Content - Course Cards Grid */}
          <div className="lg:w-1/2 w-full max-w-2xl mx-auto lg:mx-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-28 sm:h-32"
                >
                  {/* Course Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
