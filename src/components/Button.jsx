import React from "react";
const Button = ({ type, style, label, onClick }) => (
  <button
    type={type ? type : "button"}
    className={`text-xs font-semibold uppercase text-white font-montserrat py-4 px-6 rounded bg-orange ${style} transition-all duration-300 hover:bg-white hover:text-orange`}
    onClick={onClick}
  >
    {label}
  </button>
);
export default Button;
