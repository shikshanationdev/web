import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full border-b border-blue-100 bg-white px-8 py-3 flex items-center justify-between mx-auto font-light">
      <nav className="w-full flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 select-none">
            <div className="flex flex-col leading-tight">
              <Image
                src="/logo.webp"
                alt="Shiksha Nation Logo"
                width={150}
                height={100}
              />
            </div>
          </Link>
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-20 ml-8">
          <Link href="/" className="text-sky-600 hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-sky-600">
            About Us
          </Link>
          <Link href="/courses" className="text-gray-700 hover:text-sky-600">
            Courses
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-sky-600">
            Contact us
          </Link>
        </div>
        {/* Auth Buttons */}
        <div className={`flex items-center gap-4`}>
          <Link
            href="/signin"
            className="px-7 py-2 border-2 border-sky-600 text-sky-600 rounded-full hover:bg-blue-50 transition"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-7 py-2 bg-sky-700 text-white rounded-full hover:bg-sky-600 transition"
          >
            Join for Free
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
