import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 relative right-0 left-0 bottom-0 flex items-center justify-center h-12">
      <div className="font-poppin text-[11px] md:text-xs text-gray-300">
        Developed with{"  "}
        <i class="em em-heart" aria-label="HEAVY BLACK HEART"></i> By{"  "}
        <span className="text-red-600 underline cursor-pointer">Fortunate</span>
      </div>
    </div>
  );
};

export default Footer;
