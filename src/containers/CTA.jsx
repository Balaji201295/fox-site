import React from "react";
import { Button } from "../components";
import { MdOutlineFileDownload } from "react-icons/md";
import styles from "../style";
const CTA = ({ isAboutPage }) => (
  <section
    className={`${styles.boxWidth} ${styles.paddingX} w-full ${
      isAboutPage ? "mb-12" : ""
    }`}
  >
    <div className="cta_bg bg-center bg-fixed bg-cover flex flex-col justify-center items-center text-center gap-8 p-6 sm:p-16">
      <h1 className={`${styles.heading} text-white`}>
        let’s work together on Your Next Project
      </h1>
      <Button label="hire me now" />
      <a
        href="/"
        className="text-sm text-gray tracking-[-0.56px] font-semibold flex items-center"
      >
        <MdOutlineFileDownload className="mr-2 text-orange" fontSize={24} />
        <span>Download CV</span>
      </a>
    </div>
  </section>
);
export default CTA;
