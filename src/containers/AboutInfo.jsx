import React from "react";
import { SectionHeading } from "../components";
import { aboutDetails } from "../constants";
import styles, { layout } from "../style";
import { Image_3 } from "../assets";

const AboutInfo = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} ${layout.sectionReverse}`}
  >
    <div className={`${layout.sectionImg} ${layout.sectionImgReverse}`}>
      <img
        src={Image_3}
        alt="About Me"
        className="w-full h-full object-contain"
      />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <div className="w-full border-b border-solid border-[#F2F3F4] pb-8">
        <SectionHeading value="01" title="about me" textColor="text-dark" />
      </div>
      <h2 className="font-anton text-2xl sm:text-3xl capitalize pt-10 pb-4">
        I'm Professional Designer and Front-End Web Developer That Solve Your
        Problems
      </h2>
      <div className="flex flex-col gap-4 w-full max-w-[558px] pb-14">
        <p className="text-xs sm:text-sm leading-6 font-normal tracking-[-0.28px] text-gray">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p className="text-xs sm:text-sm leading-6 font-normal tracking-[-0.28px] text-gray">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="flex flex-row-reverse justify-start items-start gap-4 ss:gap-8 sm:gap-16">
        {aboutDetails.map(({ value, content }, index) => (
          <div key={index} className="flex justify-start items-center gap-3">
            <h3 className="text-4xl sm:text-6xl font-anton text-orange tracking-[1.28px]">
              {value}
            </h3>
            <p className="text-sm font-semibold text-dark tracking-[-0.56px] max-w-20">
              {content}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default AboutInfo;
