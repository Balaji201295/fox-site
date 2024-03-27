import React from "react";
import { SectionHeading, ServiceItems } from "../components";
import styles from "../style";
const MyService = ({ sectionValue, sectionTitle }) => {
  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <SectionHeading
        value={sectionValue}
        title="my services"
        textColor="text-dark"
        align="justify-center"
      />
      <ServiceItems />
    </section>
  );
};
export default MyService;
