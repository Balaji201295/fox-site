import React from "react";
import styles from "../style";
const Copyright = () => (
  <div className={`${styles.boxWidth} ${styles.paddingX} py-8 bg-[#0C0C0E]`}>
    <p className="text-xs sm:text-sm font-normal tracking-[-0.56px] text-gray text-center">
      &copy; Copyright{" "}
      <span className="text-white font-semibold">Banana Studio 2024</span> All
      Right Reserved.
    </p>
  </div>
);
export default Copyright;
