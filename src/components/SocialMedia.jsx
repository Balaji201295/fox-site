import React from "react";
import { socialItems } from "../constants";
const SocialMedia = ({ styles, footerStyle }) => (
  <div
    className={`w-full flex ${
      styles ? styles : "flex-row"
    } flex-wrap justify-start items-center gap-y-4 ss:gap-0`}
  >
    {socialItems.map(({ icon, href }, index) => {
      const IconImg = icon;
      return (
        <a
          href={href}
          target="_blank"
          key={index}
          className={`${!styles ? "mr-4 ss:mr-7" : "mb-4 ss:mb-7"} w-10 h-10 ${
            footerStyle ? "bg-[#F7F7F7]" : "bg-white/10"
          } rounded-full flex justify-center items-center transition-all duration-300 ${
            footerStyle ? "hover:bg-black/30" : "hover:bg-orange"
          } cursor-pointer`}
        >
          <IconImg color={footerStyle ? "#000" : "#fff"} fontSize={22} />
        </a>
      );
    })}
  </div>
);
export default SocialMedia;
