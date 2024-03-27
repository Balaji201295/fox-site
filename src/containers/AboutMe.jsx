import React from "react";
import styles from "../style";
import { SectionHeading } from "../components";
import { aboutDetails } from "../constants";
const AboutMe = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:gap-0`}
  >
    <div className="w-full flex-1 flex flex-col ss:flex-row justify-center items-center gap-12">
      {aboutDetails.map(({ imgUrl, value, content }, index) => (
        <div
          key={index}
          className={`${
            index === aboutDetails.length - 1
              ? "flex-col-reverse self-start"
              : "self-end"
          } flex flex-col gap-4 sm:gap-12`}
        >
          <img
            src={imgUrl}
            alt={content}
            className="w-[230px] h-[256px] object-contain"
          />
          <div
            className={`${
              index === aboutDetails.length - 1 ? "flex-row-reverse" : ""
            } flex justify-end items-center gap-3`}
          >
            <p className="text-sm font-semibold text-dark tracking-[-0.56px] max-w-20">
              {content}
            </p>
            <h3 className="text-6xl font-anton text-orange tracking-[1.28px]">
              {value}
            </h3>
          </div>
        </div>
      ))}
    </div>
    <div className="flex-1">
      <SectionHeading value="01" title="About me" textColor="text-dark" />
      <div className="w-full flex flex-col gap-4 mt-6 sm:ml-20 max-w-[429px]">
        <p className={styles.paragraph}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p className={styles.paragraph}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </div>
  </section>
);
export default AboutMe;
