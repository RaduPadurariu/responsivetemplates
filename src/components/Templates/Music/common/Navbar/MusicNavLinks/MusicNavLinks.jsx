import React from "react";
import "./MusicNavLinks.css";
import { NavLink } from "react-router-dom";
const MusicNavLinks = ({ closeMenu }) => {
  let navLinks = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Albums",
      link: "albums",
    },
    {
      name: "News",
      link: "news",
    },
    {
      name: "Contact",
      link: "contact",
    },
    {
      name: "Templates",
      link: "/",
    },
  ];
  return (
    <ul className="musicNav_ul">
      {navLinks.map((el, i) => (
        <li key={i + 1} className="musicNav_ul_li">
          <NavLink
            to={el.link}
            className={({ isActive }) => (isActive ? "musicActive" : "")}
            onClick={closeMenu}
          >
            {el.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MusicNavLinks;
