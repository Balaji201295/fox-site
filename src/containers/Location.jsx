import React from "react";
import styles from "../style";
import { SectionHeading } from "../components";
const Location = () => (
  <section className={`${styles.boxWidth} ${styles.padding}`}>
    <SectionHeading value="02" title="location" textColor="text-black" />
    <div className="w-full mt-12">
      <iframe
        title="Location Map"
        className="w-full h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.17535507417!2d-77.17939015787299!3d38.8939059008525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2sin!4v1709329648174!5m2!1sen!2sin"
      ></iframe>
    </div>
  </section>
);
export default Location;
