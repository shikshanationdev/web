import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://facebook.com", icon: "/facebook.svg", label: "Facebook" },
  { href: "https://instagram.com", icon: "/instagram.svg", label: "Instagram" },
  { href: "https://linkedin.com", icon: "/linkedin.svg", label: "LinkedIn" },
  { href: "https://twitter.com", icon: "/twitter.svg", label: "Twitter" },
  { href: "https://youtube.com", icon: "/youtube.svg", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-blue-100 pt-10 pb-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* Left: Logo & Contact */}
        <div className="flex-1 min-w-[260px] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/file.svg"
              alt="Shiksha Nation Logo"
              width={60}
              height={60}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-semibold text-blue-900 tracking-wide">
                SHIKSHA
              </span>
              <span className="text-green-500 text-lg font-medium -mt-1">
                NATION
              </span>
            </div>
          </div>
          <div className="text-blue-900 text-sm">
            <span className="font-bold">Corporate Office:</span> 10th Floor,
            Tower C, Bhutani
            <br />
            62 Avenue, Block-C, Phase 2, Noida, UP 201309
          </div>
          <div className="text-blue-900 text-sm">
            <span className="font-bold">Call:</span>{" "}
            <Link href="tel:+919821115117" className="hover:underline">
              +91 98211 15117
            </Link>
          </div>
          <div className="text-blue-900 text-sm flex items-center gap-2">
            <span className="font-bold">Email:</span>
            <Link
              href="mailto:Hello@Shikshanation.In"
              className="hover:underline"
            >
              Hello@Shikshanation.In
            </Link>
          </div>
          <div className="flex gap-2 mt-2">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                className="bg-blue-50 rounded p-1.5 hover:bg-blue-100"
              >
                <Image src={s.icon} alt={s.label} width={22} height={22} />
              </Link>
            ))}
          </div>
        </div>
        {/* Center: Categories & Links */}
        <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-blue-900 mb-2">Top Categories</div>
            <ul className="space-y-1 text-blue-700 text-sm">
              <li>
                <Link href="#">Class 6</Link>
              </li>
              <li>
                <Link href="#">Class 7</Link>
              </li>
              <li>
                <Link href="#">Class 8</Link>
              </li>
              <li>
                <Link href="#">Class 9</Link>
              </li>
              <li>
                <Link href="#">Class 10</Link>
              </li>
              <li>
                <Link href="#">Test Series</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-blue-900 mb-2">Useful Links</div>
            <ul className="space-y-1 text-blue-700 text-sm">
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li className="flex items-center gap-1">
                <Link href="#">Become Instructor</Link>{" "}
                <span className="text-lg">→</span>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">Refund Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-blue-900 mb-2">Company</div>
            <ul className="space-y-1 text-blue-700 text-sm">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Media</Link>
              </li>
              <li>
                <Link href="#">Career</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom: Copyright */}
      <div className="border-t border-blue-100 mt-8 pt-6 text-center text-blue-800 text-sm">
        <div className="font-semibold text-blue-900">
          © 2025 All Rights Reserved.
        </div>
        <div className="mt-1">
          <span className="font-semibold text-blue-900">Shiksha Nation™</span>{" "}
          is completely owned & operated by{" "}
          <span className="font-semibold">
            Rarepillar Education Services Private Limited
          </span>
        </div>
        <div className="mt-1">
          Designed by{" "}
          <span className="font-semibold text-blue-700">Generative Crafts</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
