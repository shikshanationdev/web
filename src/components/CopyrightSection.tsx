import React from "react";

const CopyrightSection = () => {
  return (
    <div className="border-t border-blue-700 mt-12 py-8">
      {/* Bottom Copyright Section */}
      <div className="text-center space-y-2 text-sm">
        <div className="font-semibold text-sky-600">
          © 2025 All Rights Reserved.
        </div>
        <div className="text-gray-700">
          <span className="font-semibold text-sky-600">Shiksha Nation™</span>{" "}
          is completely owned & operated by{" "}
          <span className="font-semibold text-sky-600">
            Rarepillar Education Services Private Limited
          </span>
        </div>
        <div className="text-gray-600">
          Designed by{" "}
          <span className="font-semibold text-sky-800">Generative Crafts</span>
        </div>
      </div>
    </div>
  );
};

export default CopyrightSection;
