import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiUsers, FiClock } from "react-icons/fi";

interface CourseCardProps {
  title: string;
  image: string;
  rating: number;
  reviews: string | number;
  price: number;
  oldPrice: number;
  enrollLink?: string;
  // Optional props for enhanced version
  instructor?: string;
  level?: string;
  students?: number;
  duration?: string;
  category?: string;
  isPopular?: boolean;
  variant?: 'default' | 'detailed'; // To switch between home page and catalog page versions
}

const CourseCard = ({
  title,
  image,
  rating,
  reviews,
  price,
  oldPrice,
  enrollLink,
  instructor,
  level,
  students,
  duration,
  category,
  isPopular = false,
  variant = 'default'
}: CourseCardProps) => {
  const handleEnrollClick = () => {
    if (enrollLink && enrollLink !== "#") {
      window.open(enrollLink, '_blank', 'noopener,noreferrer');
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      i < Math.floor(rating) ? (
        <AiFillStar
          key={i}
          className="w-4 h-4 text-yellow-400"
        />
      ) : (
        <AiOutlineStar
          key={i}
          className="w-4 h-4 text-gray-300"
        />
      )
    ));
  };

  // Default variant (for home page)
  if (variant === 'default') {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{title}</h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">{renderStars(rating)}</div>
            <span className="text-gray-500 text-sm">({reviews} Reviews)</span>
          </div>
          {price > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-800">₹{price}</span>
              <span className="text-gray-400 line-through">₹{oldPrice}</span>
            </div>
          )}
          <button
            onClick={handleEnrollClick}
            disabled={!enrollLink || enrollLink === "#"}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 mt-auto ${enrollLink && enrollLink !== "#"
              ? "bg-sky-700 text-white hover:bg-sky-800 cursor-pointer"
              : "bg-gray-400 text-white cursor-not-allowed"
              }`}
          >
            Enroll Now
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    );
  }

  // Detailed variant (for courses catalog page)
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Course Image */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {isPopular && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            POPULAR
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {category && (
            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {category}
            </span>
          )}
          {level && (
            <span className="text-xs text-gray-500">{level}</span>
          )}
        </div>

        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        {instructor && (
          <p className="text-sm text-gray-600 mb-3">{instructor}</p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-gray-600">
            {rating} ({reviews} Reviews)
          </span>
        </div>

        {/* Course Stats */}
        {(students || duration) && (
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
            {students && (
              <div className="flex items-center gap-1">
                <FiUsers className="w-3 h-3" />
                <span>{students} students</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center gap-1">
                <FiClock className="w-3 h-3" />
                <span>{duration}</span>
              </div>
            )}
          </div>
        )}

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          {price > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">₹{price}</span>
              <span className="text-sm text-gray-500 line-through">₹{oldPrice}</span>
            </div>
          )}
          <button
            onClick={handleEnrollClick}
            disabled={!enrollLink || enrollLink === "#"}
            className={`text-sm px-4 py-2 rounded-md transition-colors duration-200 ${price === 0 ? 'ml-auto' : ''} ${enrollLink && enrollLink !== "#"
              ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
              : "bg-gray-400 text-white cursor-not-allowed"
              }`}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
