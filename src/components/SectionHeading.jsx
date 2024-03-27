import React, { useRef, useEffect } from "react";
const SectionHeading = ({ value, title, align, textColor, styles }) => (
  <div
    className={`flex ${
      align ? align : "justify-start"
    } items-center gap-3 sm:gap-6 ${styles}`}
  >
    <h2 className="text-orange font-anton text-5xl sm:text-6xl md:text-7xl tracking-[1.6px]">
      {value}
    </h2>
    <p
      className={`font-anton text-3xl sm:text-[40px] tracking-[0.8px] uppercase ${
        textColor ? textColor : "text-white"
      }`}
    >
      {title}
    </p>
  </div>
);
export default SectionHeading;
