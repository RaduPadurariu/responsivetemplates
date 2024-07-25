import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { NavContact, NavLogo, NavSearch } from "../Navbar";
import "./HomeSideBar.css";
import NavTemplates from "../NavTemplates/NavTemplates";
import NavHobbies from "../NavTemplates/NavHobbies";

const HomeSideBar = ({ openSideBar }) => {
  const [openTemplates, setOpenTemplates] = useState(false);
  const [openHobbies, setOpenHobbies] = useState(false);
  return (
    <div className={"homeNav_sideBar"}>
      <div className="homeNav_sideBar_box">
        <div className="homeNav_sideBar_closeBtn_container">
          <GrClose
            className="homeNav_sideBar_closeBtn"
            onClick={() => openSideBar()}
          />
        </div>

        <div className="honeNav_sideBar_main">
          <NavLogo />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
          amet dolor aliquet, posuere urna in, tincidunt mi. Curabitur imperdiet
          lorem vel dolor venenatis, et tempor ex porttitor. Ut sed libero
          mauris. Nulla facilisi. Phasellus a est a elit lacinia lacinia.
        </p>
        <div className="homeNav_sideBar_social">
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className="homeNav_sideBar_menu">
        {/* Templates */}
        <div
          className="homeNav_sideBar_menu_box"
          onClick={() => setOpenTemplates(!openTemplates)}
        >
          <p>Templates</p>
          {openTemplates ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {openTemplates && <NavTemplates />}

        {/* Hobbies */}
        <div
          className="homeNav_sideBar_menu_box"
          onClick={() => setOpenHobbies(!openHobbies)}
        >
          <p>Hobbies</p>
          {openHobbies ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {openHobbies && <NavHobbies />}
      </div>
      <div className="homeNav_sideBar_contact_container">
        <NavSearch />
        <NavContact />
      </div>
    </div>
  );
};

export default HomeSideBar;
