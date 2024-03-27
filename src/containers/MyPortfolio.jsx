import React, { useState } from "react";
import styles from "../style";
import { PortfolioFilter, PortfolioItems, SectionHeading } from "../components";
import { portfolioItems } from "../constants";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const allCategories = [
  "all",
  ...new Set(portfolioItems.map((item) => item.category)),
];
const itemsPerPage = 3;

const MyPortfolio = ({ sectionValue }) => {
  const [menuItems, setMenuItems] = useState(portfolioItems);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filterItems = (category) => {
    setSelectedCategory(category);
    setMenuItems(
      category === "all"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === category)
    );
    setCurrentIndex(0);
  };

  const updateIndex = (offset) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + offset + menuItems.length) % menuItems.length
    );
  };

  const prevPortfolio = () => updateIndex(-itemsPerPage);
  const nextPortfolio = () => updateIndex(itemsPerPage);

  const shouldDisablePrev = currentIndex === 0;
  const shouldDisableNext = currentIndex + itemsPerPage >= menuItems.length;

  const renderIndicator = (i) => (
    <div
      key={i}
      className={`w-5 h-1 rounded cursor-pointer ${
        i === currentIndex / itemsPerPage ? "bg-orange" : "bg-gray"
      }`}
      onClick={() => setCurrentIndex(i * itemsPerPage)}
    ></div>
  );

  return (
    <section className={`${styles.boxWidth} ${styles.padding} bg-light`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <SectionHeading
          value={sectionValue}
          title="portfolio"
          textColor="text-dark"
        />
        <PortfolioFilter
          categories={allCategories}
          filterItems={filterItems}
          activeCategory={selectedCategory}
        />
        <div className="hidden md:flex  justify-between items-center gap-6 transition-all duration-300">
          <button
            type="button"
            className={`p-1 sm:p-2 bg-orange hover:bg-light text-white hover:text-orange border-2 border-solid border-transparent hover:border-orange rounded-sm flex justify-center items-center transition-all duration-300 ${
              shouldDisablePrev
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
            onClick={prevPortfolio}
            disabled={shouldDisablePrev}
          >
            <GoArrowLeft fontSize={20} />
          </button>
          <button
            type="button"
            className={`p-1 sm:p-2 bg-orange hover:bg-light text-white hover:text-orange border-2 border-solid border-transparent hover:border-orange rounded-sm flex justify-center items-center transition-all duration-300 ${
              shouldDisableNext
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
            onClick={nextPortfolio}
            disabled={shouldDisableNext}
          >
            <GoArrowRight fontSize={20} />
          </button>
        </div>
      </div>
      <PortfolioItems
        items={menuItems.slice(currentIndex, currentIndex + itemsPerPage)}
      />
      <div className="flex justify-center items-center my-6 gap-1">
        {Array.from({ length: Math.ceil(menuItems.length / itemsPerPage) }).map(
          (_, i) => renderIndicator(i)
        )}
      </div>

      <div className="flex md:hidden  justify-center items-center gap-6 transition-all duration-300 my-6">
        <button
          type="button"
          className={`p-1 sm:p-2 bg-orange hover:bg-light text-white hover:text-orange border-2 border-solid border-transparent hover:border-orange rounded-sm flex justify-center items-center transition-all duration-300 ${
            shouldDisablePrev
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          onClick={prevPortfolio}
          disabled={shouldDisablePrev}
        >
          <GoArrowLeft fontSize={20} />
        </button>
        <button
          type="button"
          className={`p-1 sm:p-2 bg-orange hover:bg-light text-white hover:text-orange border-2 border-solid border-transparent hover:border-orange rounded-sm flex justify-center items-center transition-all duration-300 ${
            shouldDisableNext
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          onClick={nextPortfolio}
          disabled={shouldDisableNext}
        >
          <GoArrowRight fontSize={20} />
        </button>
      </div>
    </section>
  );
};

export default MyPortfolio;
