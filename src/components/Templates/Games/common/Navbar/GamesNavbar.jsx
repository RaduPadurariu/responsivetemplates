import React, { useState } from "react";
import "./GamesNavbar.css";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { BsRssFill, BsSteam, BsTwitch, BsYoutube } from "react-icons/bs";
const GamesNavbar = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  return (
    <div className="games_navbar_container">
      <div className="games_subContainer">
        <div className="games_navbar-content">
          <div className="games_brand-and-toggler">
            <Link to="/games/home" className="games_navbar-brand">
              cool <span>games</span>
            </Link>
            <button
              type="button"
              className="games_navbar-show-btn"
              onClick={() => setSidebarStatus(true)}
            >
              <HiOutlineMenuAlt3 size={25} />
            </button>
          </div>

          <div
            className={`games_navbar-collapse ${sidebarStatus ? "show" : ""}`}
          >
            <button
              type="button"
              className="games_navbar-hide-btn"
              onClick={() => setSidebarStatus(false)}
            >
              <MdClose size={25} />
            </button>

            <ul className="games_navbar-nav">
              <li className="games_nav-item">
                <Link to="/games/home" className="games_nav-link">
                  home
                </Link>
              </li>
              <li className="games_nav-item">
                <Link to="/games/creators" className="games_nav-link">
                  creators
                </Link>
              </li>
              <li className="games_nav-item">
                <Link to="/games/stores" className="games_nav-link">
                  stores
                </Link>
              </li>
              <li className="games_nav-item">
                <Link to="/games/myGames" className="games_nav-link">
                  personal
                </Link>
              </li>
              <li className="games_nav-item">
                <Link to="/" className="games_nav-link">
                  templates
                </Link>
              </li>
            </ul>

            <ul className="games_connect-list">
              <li className="games_connect_btn games_connect-text">connect</li>
              <li className="games_connect-item">
                <Link to="/games/home" className="games_connect-link">
                  <BsRssFill />
                </Link>
              </li>
              <li className="games_connect-item">
                <Link to="/games/home" className="games_connect-link">
                  <BsSteam size={18} />
                </Link>
              </li>
              <li className="games_connect-item">
                <Link to="/games/home" className="games_connect-link">
                  <BsTwitch size={18} />
                </Link>
              </li>
              <li className="games_connect-item">
                <Link to="/games/home" className="games_connect-link">
                  <BsYoutube size={19} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesNavbar;
