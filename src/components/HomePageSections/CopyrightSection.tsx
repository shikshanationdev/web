import React from "react";

const CopyrightSection = () => {
  return (
    <div className="border-t border-sky-700 mt-12 py-8 text-sky-700">
      {/* Bottom Copyright Section */}
      <div className="text-center space-y-2 text-sm">
        <div className="font-semibold">
          © 2025 All Rights Reserved.
        </div>
        <div>
          <span className="font-semibold">Shiksha Nation™</span>{" "}
          is completely owned & operated by{" "}
          <span className="font-semibold">
            Rarepillar Education Services Private Limited
          </span>
        </div>
        <div>
          Designed by{" "}
          <span className="font-semibold">Generative Crafts</span>
        </div>
      </div>
    </div>
  );
};

export default CopyrightSection;
