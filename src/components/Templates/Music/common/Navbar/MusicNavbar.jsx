import React, { useEffect, useState } from "react";
import "./MusicNavbar.css";
import MusicNavLinks from "./MusicNavLinks/MusicNavLinks";
import MusicAccount from "./MusicAccount/MusicAccount";
import { Link } from "react-router-dom";
const MusicNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    };
  }, []);
  return (
    <header
      className={isScrolled ? "musicNavbar musicIsScrolled" : "musicNavbar"}
    >
      <div className="musicLogo">
        <Link to="/music/home">Katie Melua</Link>
      </div>
      <nav className="musicNav">
        <ul className="musicNav_main_ul">
          <MusicNavLinks />
        </ul>
      </nav>

      <div className="musicAccount_container">
        <MusicAccount />
      </div>

      <div className="musicHamburger">
        <div className="musicHamburger_container">
          <div className="musicHamburger_div ham1"></div>
          <div className="musicHamburger_div ham2"></div>
          <div className="musicHamburger_div ham3"></div>
        </div>
      </div>
    </header>
  );
};

export default MusicNavbar;
