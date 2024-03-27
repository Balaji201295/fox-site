import React, { useState, useEffect } from "react";
import styles from "../style";
import { Button, SocialMedia } from "../components";
const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header
      className={`${
        isMobile ? "header_bg_new" : "header_bg"
      } bg-fixed bg-cover bg-no-repeat`}
    >
      <div
        className={`${styles.boxWidth} ${styles.padding} min-h-screen flex flex-col ss:flex-row justify-between items-center pt-32`}
      >
        <div className={`flex flex-col justify-start items-start gap-4`}>
          <p className="text-xl text-white font-bold tracking-[.96px]">
            <span className="text-orange">Hello,</span> I’m
          </p>
          <h1 className="font-anton text-white text-6xl md:text-9xl uppercase">
            robert fox
          </h1>
          <p className="capitalize text-white text-base font-bold tracking-[.64px]">
            Professional Product Designer
          </p>
          <Button label="let’s talk" style="mt-6" />
        </div>
        <div>
          <SocialMedia styles="flex-row gap-8 my-8 ss:my-0 ss:flex-col" />
        </div>
      </div>
    </header>
  );
};
export default Header;
