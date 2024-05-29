import React, { useState } from "react";
import "./BookNavbar.css";
import logoImg from "/images/BookSearch/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const BookNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  return (
    <nav className="bookNavbar" id="bookNavbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb flex-ac">
          <Link to="/bookSearch/home/book" className="navbar-brand flex">
            <img src={logoImg} alt="site logo" />
            <span className="text-uppercase fw-7 fs-16 ls-1">bookhub</span>
          </Link>
          <button
            type="button"
            className={
              toggleMenu
                ? "navbar-toggler-btn navbar-toggler-btn-fixed"
                : "navbar-toggler-btn"
            }
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{ color: `${toggleMenu ? "fff" : "#010101"}` }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/bookSearch/home/book"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                onClick={handleNavbar}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/bookSearch/home/about"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                onClick={handleNavbar}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/bookSearch/myBook"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                onClick={handleNavbar}
              >
                My Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Templates
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BookNavbar;
