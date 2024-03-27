import React from "react";
import { experienceDetails } from "../constants";
import styles from "../style";

const ExperienceItems = () => {
  return (
    <div
      className={`w-full flex flex-wrap justify-center items-center my-12 gap-8`}
    >
      {experienceDetails.map(({ imgUrl, position, period, content }, index) => {
        return (
          <div
            key={index}
            className={`w-full flex-1 min-w-60 flex flex-col justify-start items-start`}
          >
            <img src={imgUrl} alt="Image" className="h-[18px] object-contain" />
            <div className="flex justify-start items-center pt-6 pb-3 gap-4">
              <h2 className="font-anton text-4xl text-orange tracking-[0.08px]">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </h2>
              <div className="flex flex-col justify-start items-start">
                <h3 className="text-base font-bold text-dark tracking-[-0.64px]">
                  {position}
                </h3>
                <p className="text-orange text-sm font-semibold tracking-[-0.56px]">
                  {period}
                </p>
              </div>
            </div>
            <p className="text-gray text-sm font-medium tracking-[-0.28px] max-w-52">
              {content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceItems;
