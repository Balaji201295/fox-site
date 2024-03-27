import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const path = location.pathname;
  const paths = path.split("/").filter((p) => p);

  const pathText = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="relative z-30">
      <NavLink
        to="/"
        className="text-base font-bold tracking-[0.64px] text-gray"
      >
        Home
      </NavLink>
      {paths.map((p, index) => (
        <span
          key={p}
          className="text-base font-bold tracking-[0.64px] text-gray"
        >
          {" "}
          /{" "}
          <NavLink
            to={`/${paths.slice(0, index + 1).join("/")}`}
            className="text-base font-bold tracking-[0.64px] text-white"
          >
            {pathText(p)}
          </NavLink>
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
