import Image from "next/image";

const CoursesHero = () => {
  const courses = [
    {
      id: 1,
      title: "Class 6th to 12th",
      image: "/courses/Class 6th to 12th.jpg",
      description: "Comprehensive curriculum for secondary education"
    },
    {
      id: 2,
      title: "NEET",
      image: "/courses/NEET.jpg",
      description: "Medical entrance exam preparation"
    },
    {
      id: 3,
      title: "JEE",
      image: "/courses/JEE.jpg",
      description: "Engineering entrance exam preparation"
    },
    {
      id: 4,
      title: "Skill Development",
      image: "/courses/Skill Development.jpg",
      description: "Professional and technical skills"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-700 via-green-600 to-green-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white space-y-4">
            {/* Tagline */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <span className="mr-2">🌟</span>
              Explore. Learn. Excel.
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-wrap pr-20">
              Find the Right Course for Your Learning Journey
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-blue-100 max-w-lg">
              Browse curated courses for Classes 1-12, NEET, JEE, CUET, and beyond.
            </p>
          </div>

          {/* Right Content - Course Cards Grid */}
          <div className="lg:w-1/2 w-full max-w-md mx-auto lg:mx-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-32 sm:h-36"
                >
                  {/* Course Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>

                  {/* Course Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                    <h3 className="text-white text-sm sm:text-base font-bold mb-1">
                      {course.title}
                    </h3>
                    <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {course.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 rounded-xl transition-colors duration-300" />
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
