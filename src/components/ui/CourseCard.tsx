interface CourseCardProps {
  title: string;
  image: string;
  rating: number;
  reviews: string;
  price: number;
  oldPrice: number;
  enrollLink: string;
}

const CourseCard = ({ title, image, rating, reviews, price, oldPrice, enrollLink }: CourseCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-gray-500 text-sm">({reviews} Reviews)</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-800">₹{price}</span>
          <span className="text-gray-400 line-through">₹{oldPrice}</span>
        </div>
        <button className="w-full bg-sky-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-sky-800 transition-all duration-200 flex items-center justify-center gap-2">
          Enroll Now
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};
export default CourseCard;
