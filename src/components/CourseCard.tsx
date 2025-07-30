import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface CourseCardProps {
  image: string;
  title: string;
  rating: number;
  reviews: string;
  price: number;
  oldPrice: number;
  enrollLink: string;
}

const CourseCard = ({
  image,
  title,
  rating,
  reviews,
  price,
  oldPrice,
  enrollLink,
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-xs flex flex-col">
      <div className="rounded-xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          width={400}
          height={180}
          className="w-full h-36 object-cover"
        />
      </div>
      <div className="font-semibold text-base mb-1">{title}</div>
      <div className="flex items-center text-sm mb-2">
        {/* Stars */}
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar
            key={i}
            className={i <= rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="ml-2 text-gray-400">({reviews} Reviews)</span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-gray-900">₹{price}</span>
        <span className="text-gray-400 line-through text-base">
          ₹{oldPrice}
        </span>
      </div>
      <Link
        href={enrollLink}
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl py-3 w-full flex items-center justify-center gap-2 transition-colors duration-200"
      >
        Enroll Now <span className="text-lg">→</span>
      </Link>
    </div>
  );
};

export default CourseCard;
