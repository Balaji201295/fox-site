import React from "react";
import { SectionHeading } from "../components";
import styles from "../style";

const Brands = ({ brandItems, isAboutPage, sectionValue }) => (
  <section
    className={`${styles.boxWidth} ${styles.paddingX} flex flex-col justify-center items-center pt-20 py-48 -mb-28`}
  >
    {isAboutPage && (
      <div className="mb-12">
        <SectionHeading
          value={sectionValue}
          title="my partners"
          textColor="text-dark"
        />
      </div>
    )}
    <div className="flex flex-wrap justify-center items-center gap-12  ss:gap-16 lg:gap-24">
      {brandItems.map(({ imgUrl, title }) => (
        <div key={title}>
          <img
            src={imgUrl}
            alt={title}
            className="w-[90%] h-[100%] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Brands;
