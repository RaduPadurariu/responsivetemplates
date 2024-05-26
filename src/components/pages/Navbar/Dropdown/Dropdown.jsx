import React, { useState } from "react";
import "./Dropdown.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

export const Dropdown = () => {
  return (
    <>
      <ul className={"dropdown-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
