import React, { useEffect, useState } from "react";
import { Logo } from "../assets";
import { navItems } from "../constants";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "../style";
import { Button } from "../components";
const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 120; // value adjusted
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (path) => {
    setToggleOpen(false);
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top after navigation
  };

  const renderLinks = (path, link) => (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "text-orange" : "text-gray")}
      onClick={() => handleNavLinkClick(path)}
    >
      {link}
    </NavLink>
  );

  return (
    <nav
      className={`${styles.boxWidth} ${
        styles.paddingX
      } flex justify-between items-center fixed top-0 left-0 right-0 z-10 w-full transition-all duration-500 ease-linear ${
        isScrolled ? "py-3 shadow-lg bg-dark" : "py-4 bg-transparent"
      }`}
    >
      <a href="/" className="flex justify-start items-center">
        <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
      </a>
      <ul className="md:flex hidden flex-1 justify-center items-center list-none gap-12">
        {navItems.map(({ path, link }) => (
          <li
            key={link}
            className="text-xs font-semibold uppercase transition-all duration-300"
          >
            {renderLinks(path, link)}
          </li>
        ))}
      </ul>
      <div className="md:flex hidden justify-end items-center">
        <Button
          label="contact"
          onClick={() => handleNavLinkClick("/contact")}
        />
      </div>
      {/* responsive navbar */}
      <div className="md:hidden block">
        <FaBars
          color="#fff"
          fontSize={24}
          className="cursor-pointer"
          onClick={() => setToggleOpen(true)}
        />
        {toggleOpen && (
          <div className="flex flex-col justify-center items-center fixed top-0 left-0 w-[100%] min-h-screen bg-dark transition-all slide-bottom z-[5]">
            <IoClose
              className="absolute top-5 right-5 text-white cursor-pointer"
              fontSize={27}
              onClick={() => setToggleOpen(false)}
            />
            <ul className="app__navbar-smallScreen_links">
              {navItems.map(({ path, link }) => (
                <li
                  key={link}
                  className="text-2xl text-orange font-semibold m-8 text-center cursor-pointer uppercase transition-all duration-300 hover:text-white"
                >
                  {renderLinks(path, link)}
                </li>
              ))}
            </ul>
            <div className="md:hidden flex justify-end items-center">
              <Button
                label="contact"
                onClick={() => handleNavLinkClick("/contact")}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
