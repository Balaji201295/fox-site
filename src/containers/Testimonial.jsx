import React, { useState } from "react";
import { SectionHeading } from "../components";
import { testimonials } from "../constants";
import { FaQuoteRight } from "react-icons/fa";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import styles from "../style";

const Testimonial = ({ sectionValue }) => {
  const [index, setIndex] = useState(0);
  const { imgUrl, name, content, position } = testimonials[index];

  const prevPerson = () => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const nextPerson = () => {
    setIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const renderIndicator = (i) => (
    <div
      key={i}
      className={`w-5 h-1 rounded ${i === index ? "bg-orange" : "bg-gray"}`}
      onClick={() => setIndex(i)}
    ></div>
  );

  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <div className="md:hidden flex justify-center ss:justify-between items-center mb-12">
        <SectionHeading
          value={sectionValue}
          title="testimonials"
          textColor="text-dark"
        />
        <p className="hidden ss:block text-[24px] leading-normal text-[#C4C4C4] font-anton">
          <span className="text-orange">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
          /
          {testimonials.length < 10
            ? `0${testimonials.length}`
            : testimonials.length}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-start sm:gap-12">
        <div className="flex-[0.75] flex justify-center sm:justify-start items-center">
          <img
            src={imgUrl}
            alt={name}
            className="w-[100%] sm:w-[360px] object-contain"
          />
        </div>
        <div className="flex-[1.25] flex flex-col justify-start py-4 self-stretch">
          <div className="md:flex hidden justify-between items-end mb-12">
            <SectionHeading
              value={sectionValue}
              title="testimonials"
              textColor="text-dark"
            />
            <p className="text-[24px] leading-normal text-[#C4C4C4] font-anton">
              <span className="text-orange">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              /
              {testimonials.length < 10
                ? `0${testimonials.length}`
                : testimonials.length}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="ss:hidden block text-[24px] leading-normal text-[#C4C4C4] font-anton my-6">
              <span className="text-orange">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              /
              {testimonials.length < 10
                ? `0${testimonials.length}`
                : testimonials.length}
            </p>
            <FaQuoteRight fontSize={28} className="text-orange" />
            <p
              className={`${styles.paragraph} w-full max-w-[430px] text-dark py-6`}
            >
              {content}
            </p>
            <h3 className="text-base font-bold tracking-[-0.64px] text-orange">
              {name}
            </h3>
            <p
              className={`${styles.paragraph} font-semibold text-gray tracking-[-0.28px]`}
            >
              {position}
            </p>
          </div>
          <div className="w-full flex justify-between items-end mt-auto">
            <div className="flex gap-1">
              {testimonials.map((_, i) => renderIndicator(i))}
            </div>
            <div className="flex justify-between items-end gap-6 transition-all duration-300 mt-auto">
              <button
                type="button"
                className="p-1 sm:p-2 bg-orange hover:bg-light text-white hover:text-orange border-2 border-solid border-transparent hover:border-orange rounded-sm flex justify-center items-center  transition-all duration-300"
                onClick={prevPerson}
              >
                <GoArrowLeft fontSize={20} />
              </button>
              <button
                type="button"
                className="p-1 sm:p-2 bg-orange hover:bg-light text-white hover:text-orange border-2 border-solid border-transparent hover:border-orange rounded-sm flex justify-center items-center  transition-all duration-300"
                onClick={nextPerson}
              >
                <GoArrowRight fontSize={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
