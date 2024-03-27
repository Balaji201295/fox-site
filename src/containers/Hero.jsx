import React from "react";
import styles from "../style";
import { BreadCrumb } from "../components";

const Hero = ({ label, title }) => (
  <section
    className={`${styles.boxWidth} ${styles.paddingX} py-52 hero_bg bg-cover bg-fixed bg-no-repeat flex flex-col justify-center items-center relative z-0`}
  >
    <div className="absolute ss:flex hidden inset-0 w-full h-full  justify-center items-center z-10">
      <p className="text-white/[0.02] text-9xl sm:text-[10rem] lg:text-[18rem] leading-normal font-anton uppercase">
        {label}
      </p>
    </div>
    <h1 className="text-white font-anton text-7xl md:text-[10rem] tracking-[2px] uppercase">
      {title}
    </h1>
    <BreadCrumb />
  </section>
);
export default Hero;
