import React from "react";

const PortfolioItems = ({ items }) => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-6">
      {items.map((item) => {
        const { imgUrl, title } = item;
        return (
          <div
            key={title}
            className="flex-1 w-full min-w-[270px] max-w-[364px]"
          >
            <img
              src={imgUrl}
              alt={title}
              className="w-[100%] h-[250px] object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioItems;
