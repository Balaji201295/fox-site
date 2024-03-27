import React from "react";
import {
  ContactDetails,
  ContactForm,
  SectionHeading,
  SocialMedia,
} from "../components";
import styles from "../style";

const Footer = ({ isContactPage, sectionValue }) => {
  const footerStyle = isContactPage && { backgroundColor: "transparent" };

  const containerClasses = `${styles.boxWidth} ${styles.padding} w-full ${
    footerStyle ? footerStyle : "footer_bg bg-center bg-fixed bg-cover"
  } flex flex-col md:flex-row justify-center items-start`;

  const contentClasses = "w-full flex-1 flex flex-col gap-12 mr-0 md:mr-6";
  const titleClasses = `text-xl font-anton border-b border-[#1C1E21] pb-6 mt-6 ${
    footerStyle ? "text-black" : "text-white"
  }`;

  return (
    <footer className={containerClasses}>
      <div className={contentClasses}>
        <SectionHeading
          value={sectionValue}
          title="contact"
          textColor={footerStyle && "text-dark"}
        />
        <div className="flex-1 flex flex-col justify-start items-start gap-12">
          <ContactDetails footerStyle={footerStyle} />
          <SocialMedia footerStyle={footerStyle} />
        </div>
      </div>
      <div className="w-full flex-[1.25] justify-center items-start mt-12 md:mt-0">
        <h3 className={titleClasses}>
          I’m always open to discussing{" "}
          <span className="text-orange">product design work</span> or
          partnership
        </h3>
        <ContactForm footerStyle={footerStyle} />
      </div>
    </footer>
  );
};

export default Footer;
