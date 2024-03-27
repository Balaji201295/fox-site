import React from "react";
import { Button, SkillsDetails } from "../components";
import { SectionHeading } from "../components";
import styles from "../style";
const MySkills = () => (
  <section
    className={`bg-light ${styles.boxWidth} ${styles.padding} flex flex-col md:flex-row justify-center items-center gap-10`}
  >
    <div className="flex-1 flex flex-col justify-start items-start">
      <SectionHeading value="02" title="My Skills" textColor="text-dark" />
      <p className="text-sm text-gray leading-7 my-6">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <Button
        label="DOWNLOAD CV"
        style="border border-solid border-transparent hover:border-orange"
      />
    </div>
    <div className="flex-1 w-full">
      <SkillsDetails />
    </div>
  </section>
);
export default MySkills;
