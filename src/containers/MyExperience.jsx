import React from "react";
import styles from "../style";
import { ExperienceItems, SectionHeading } from "../components";
const MyExperience = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} flex flex-col justify-center items-center`}
  >
    <SectionHeading value="03" title="My Experiences" textColor="text-dark" />
    <ExperienceItems />
  </section>
);
export default MyExperience;
