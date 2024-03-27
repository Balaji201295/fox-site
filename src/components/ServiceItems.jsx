import React from "react";
import { services } from "../constants";
const ServiceItems = () => (
  <div className="w-full grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:py-16 py-10 gap-8 ss:gap-12">
    {services.map(({ icon, title, content }, index) => (
      <div
        key={title}
        className={`flex flex-col justify-start items-start  px-5 py-8 ${
          index === services.length - 1 ? "bg-orange" : "bg-light"
        }`}
      >
        <img src={icon} alt={title} className="w-8 h-8" />
        <h3
          className={`text-base font-bold tracking-[-0.64px] pt-6 pb-2 ${
            index === services.length - 1 ? "text-white" : "text-dark"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm font-medium tracking-[-0.28px] ${
            index === services.length - 1 ? "text-[#FFD7CE]" : "text-gray"
          }`}
        >
          {content}
        </p>
      </div>
    ))}
  </div>
);
export default ServiceItems;
