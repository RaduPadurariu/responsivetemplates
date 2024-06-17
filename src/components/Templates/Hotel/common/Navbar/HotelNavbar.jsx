import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HotelNavbar.css";
import "../../Hotel.css";

export const HotelNavbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="hotelNavbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/hotel/home" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/hotel/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/hotel/gallery" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/hotel/destinations" onClick={closeMobileMenu}>
                Destination
              </Link>
            </li>
            <li>
              <Link to="/hotel/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/hotel/testimonial" onClick={closeMobileMenu}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="/hotel/contact" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="login-area flex">
            <li>
              <Link to="/hotel/sign-in">
                <i className="">Sign In</i>
              </Link>
            </li>
            <li>
              <Link to="/hotel/register">
                <i className="">Register</i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <button className="primary-btn" id="backTemplates-btn">
                  Templates
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <header className="hotelHeader">
        <div className="container flex_space">
          <div className="logo">
            <img src="/images/Hotel/logo.png" alt="no-logo" />
          </div>

          <div className="contact">
            <div className="box flex_space">
              <div className="icons">
                <i className="fas fa-clock"></i>
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/hotel/contact">
                  Monday - Sunday: 9.00am to 6.00pm
                </Link>
              </div>
            </div>

            <div className="box flex_space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4>Call Us</h4>
                <Link to="/hotel/contact">+011 123 4567</Link>
              </div>
            </div>

            <div className="box flex_space">
              <div className="icons">
                <i className="far fa-envelope"></i>
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/hotel/contact">info@example.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
