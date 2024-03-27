import React, { useState, useEffect } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const PortfolioFilter = ({ categories, filterItems, activeCategory }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderButtons = () => {
    return (
      <div className="hidden sm:flex">
        {categories.map((category, index) => (
          <button
            key={index}
            type="button"
            className={`text-xs font-montserrat font-semibold uppercase border border-solid py-3 px-4 rounded ${
              activeCategory === category
                ? "text-orange border-orange"
                : "text-gray border-transparent"
            }`}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };

  const renderDropdown = () => {
    return (
      <div className="sm:hidden relative">
        <select
          value={activeCategory}
          onChange={(e) => filterItems(e.target.value)}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="text-xs font-montserrat font-semibold uppercase border border-solid py-2 px-4 pr-8 rounded focus:outline-none appearance-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          {isDropdownOpen ? <FaCaretDown /> : <FaCaretUp />}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center">
      {isMobile ? renderDropdown() : renderButtons()}
    </div>
  );
};

export default PortfolioFilter;
