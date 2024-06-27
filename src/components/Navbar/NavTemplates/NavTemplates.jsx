import React from "react";
import { Link } from "react-router-dom";
import "./NavTemplates.css";
const NavTemplates = () => {
  const navTemplate = [
    {
      name: "Financial",
      link: "/financial",
    },
    {
      name: "Hotel",
      link: "/hotel/home",
    },
    {
      name: "BookHub",
      link: "/bookSearch/home",
    },
    {
      name: "Cooking",
      link: "/cooking/home",
    },
  ];
  return (
    <ul>
      {navTemplate.map((el, i) => (
        <li key={i + 1} className="homeNav_templates">
          <Link to={el.link}>{el.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavTemplates;
