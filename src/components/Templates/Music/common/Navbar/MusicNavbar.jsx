import React, { useEffect, useRef, useState } from "react";
import "./MusicNavbar.css";
import MusicNavLinks from "./MusicNavLinks/MusicNavLinks";
import MusicAccount from "./MusicAccount/MusicAccount";
import { Link } from "react-router-dom";
const MusicNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setClick(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [click]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 91) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header
      className={isScrolled ? "musicNavbar musicIsScrolled" : "musicNavbar"}
    >
      <div className="musicLogo">
        <Link to="/music/home">Katie Melua Fans</Link>
      </div>
      <nav className="musicNav">
        <div className="musicNav_main_ul">
          <MusicNavLinks />
        </div>
      </nav>

      <div className="musicAccount_container">
        <MusicAccount />
      </div>

      <div className="musicHamburger" onClick={handleClick}>
        <div className="musicHamburger_container">
          <div className="musicHamburger_div ham1"></div>
          <div className="musicHamburger_div ham2"></div>
          <div className="musicHamburger_div ham3"></div>
        </div>
      </div>
      <div
        className={click ? "musicMenu_bar musicMenu_active" : "musicMenu_bar"}
      >
        <div>
          <div className="musicMenu_overlay"></div>
          <div className="musicMenu_container" ref={navbarRef}>
            <div className="musicMenu_log_reg">
              <div className="musicMenu_login_ul">
                <MusicAccount />
              </div>
            </div>
            <nav className="musicMenu_nav">
              <ul className="musicMenu_links_ul">
                <MusicNavLinks closeMenu={closeMenu} />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MusicNavbar;
