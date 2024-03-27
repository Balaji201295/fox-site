import React, { useState } from "react";
import { faq } from "../constants";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "../style";
import { SectionHeading } from "../components";
const FAQ = ({ sectionValue }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleIndex = (index) =>
    setActiveIndex(index === activeIndex ? null : index);
  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <div className="bg-light flex flex-col justify-center items-center w-full xl:py-20 xl:px-40 lg:px-32 md:p-16 sm:p-12 p-4 ">
        <SectionHeading
          value={sectionValue}
          title="HAVE ANY QUESTIONS?"
          textColor="text-black"
          styles="border-b w-full border-solid border-[#DFE2E5] flex justify-center pb-6"
        />
        <div className="w-full flex flex-col my-8 gap-6">
          {faq.map(({ question, answer }, index) => {
            const isActive = index === activeIndex ? "active" : "";
            return (
              <div
                key={index}
                className={`w-full p-4 md:p-6 rounded ${
                  isActive
                    ? "border-transparent bg-white"
                    : "border-[#DFE2E5] bg-transparent"
                } border border-solid`}
                onClick={() => toggleIndex(index)}
              >
                <h2 className="text-base sm:text-[20px] leading-normal font-anton text-dark pb-2 flex justify-between items-center cursor-pointer">
                  {question}
                  <span>
                    {isActive ? (
                      <IoIosArrowDown fontSize={16} color="#100D22" />
                    ) : (
                      <IoIosArrowUp fontSize={16} color="#100D22" />
                    )}
                  </span>
                </h2>
                {isActive && (
                  <div>
                    <p className={`${styles.paragraph} font-normal leading-8`}>
                      {answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
