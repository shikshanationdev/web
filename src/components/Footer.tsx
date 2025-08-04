import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

const socialLinks = [
  { href: "https://www.facebook.com/shikshanation24/", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/shikshanation/", icon: FaInstagram, label: "Instagram" },
  { href: "https://x.com/shikshanation", icon: BsTwitterX, label: "X" },
  { href: "https://www.linkedin.com/company/shikshanation/", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.youtube.com/@shikshanation-rl7qo", icon: FaYoutube, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="pt-12 px-4 md:px-8 text-sky-700">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Logo & Contact Info */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="mb-6">
              <Image
                src="/logo.webp"
                alt="Shiksha Nation Logo"
                width={200}
                height={60}
                className="h-auto"
              />
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold">
                  Corporate Office:
                </span>
                <span className="ml-1">
                  10th Floor, Tower C, Bhutani
                  <br />
                  62 Avenue, Block-C, Phase 2, Noida, UP 201309
                </span>
              </div>
              <div>
                <span className="font-semibold">Call:</span>{" "}
                <Link
                  href="tel:+919821115117"
                  className="hover:underline"
                >
                  +91 98211 15117
                </Link>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-semibold">Email:</span>{" "}
                <Link
                  href="mailto:hello@shikshanation.In"
                  className="hover:underline"
                >
                  hello@shikshanation.In
                </Link>
                <div className="flex gap-2 ml-2">
                  {socialLinks.map((s) => {
                    const IconComponent = s.icon;
                    return (
                      <Link
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                      >
                        <IconComponent className="w-4 h-4 text-sky-700" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Right: Columns */}
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Top Categories */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-4">
                Top Categories
              </h3>
              <ul className="space-y-2">
                {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Test Series"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:underline text-sm transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Useful Links */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-4">
                Useful Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-sm transition-colors duration-200"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="flex items-center gap-1">
                  <Link
                    href="#"
                    className="hover:underline text-sm transition-colors duration-200"
                  >
                    Become Instructor
                  </Link>
                  <span className="text-sm">→</span>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-sm transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-sm transition-colors duration-200"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline text-sm transition-colors duration-200"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {["About Us", "Blog", "Media", "Career", "Contact Us"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:underline text-sm transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
