import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./FinancialNavbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export const FinancialNavbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <div className="financialHeader">
      <nav className="navbar">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="logo"
        >
          <img src="/images/Financial/logo.png" alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu burgerOn" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="demo"
              spy={true}
              smooth={true}
              offset={-140}
              duration={500}
              onClick={closeMenu}
            >
              Demo
            </Link>
          </li>
          <li className="nav-item">
            <NavLink to="/">Templates</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
