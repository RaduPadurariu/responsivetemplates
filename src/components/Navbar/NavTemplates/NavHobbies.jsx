import React from "react";
import { Link } from "react-router-dom";
import "./NavTemplates.css";
const NavHobbies = () => {
  const navHobbies = [
    {
      name: "Music",
      link: "/music/home",
    },
    {
      name: "Movies",
      link: "/movies/home",
    },
    {
      name: "Games - soon",
      link: "/games/home",
      soon: true,
    },
    {
      name: "Football - soon",
      link: "/football/home",
      soon: true,
    },
  ];
  return (
    <ul>
      {navHobbies.map((el, i) => (
        <li
          key={i + 1}
          className="homeNav_templates"
          style={{ opacity: `${el.soon ? "0.6" : "1"}` }}
        >
          <Link to={el.link}>{el.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavHobbies;
