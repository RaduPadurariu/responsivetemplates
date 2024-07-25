import React from "react";
import { Link } from "react-router-dom";
import "./NavTemplates.css";
const NavHobbies = () => {
  const navHobbies = [
    {
      name: "Cooking - soon",
      link: "/cooking",
    },
    {
      name: "Movies",
      link: "/movies/home",
    },
    {
      name: "Games - soon",
      link: "/games/home",
    },
    {
      name: "Football - soon",
      link: "/football/home",
    },
  ];
  return (
    <ul>
      {navHobbies.map((el, i) => (
        <li key={i + 1} className="homeNav_templates homeNav_templates_opacity">
          <Link to={el.link}>{el.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavHobbies;
