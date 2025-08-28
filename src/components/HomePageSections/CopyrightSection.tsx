import Link from "next/link";
import React from "react";

const CopyrightSection = () => {
  return (
    <div className="border-t border-sky-700 py-8 text-sky-700 bg-white">
      {/* Bottom Copyright Section */}
      <div className="text-center space-y-2 text-sm">
        <div>
          {/* <span className="font-semibold">Shiksha Nation™</span>{" "}
          is completely owned & operated by{" "} */}
          <span className="font-semibold">
            Rarepillar Education Services Private Limited
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-1 md:space-y-0">
          <div className="font-semibold">
            © 2025 All Rights Reserved
          </div>
          <div className="hidden md:block">
            &nbsp; | &nbsp;
          </div>
          <div>
            Designed by{" "}
            <Link href={"https://www.generativecrafts.com"} className="font-semibold">Generative Crafts</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightSection;
