import React, { useState } from "react";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import { Link } from "react-router-dom";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { NavContact, NavProfile, NavLogo, NavSearch } from "../Navbar";
import "./HomeSideBar.css";
import NavTemplates from "../NavTemplates/NavTemplates";

const HomeSideBar = ({ openSideBar }) => {
  const [openTemplates, setOpenTemplates] = useState(false);
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
          Explore a diverse collection of React templates, all conveniently
          built and available on a single website. Whether you need e-commerce
          sites, landing pages or personal portfolios, our templates are
          designed to meet your needs with modern UI/UX and responsive design.
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
        <div
          className="homeNav_sideBar_menu_box"
          onClick={() => setOpenTemplates(!openTemplates)}
        >
          <p>Templates</p>
          <TiArrowSortedDown />
        </div>
        {openTemplates && <NavTemplates />}
      </div>
      <div className="homeNav_sideBar_contact_container">
        <NavSearch />
        <NavContact />
      </div>
    </div>
  );
};

export default HomeSideBar;
