import React, { useState } from "react";
import "./Navbar.css";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import HomeProfile from "./Profile/HomeProfile";
import HomeNotification from "./Notification/HomeNotification";
import NavTemplates from "./NavTemplates/NavTemplates";
import HomeSideBar from "./SideBar/HomeSideBar";

const Navbar = () => {
  const [homeProfile, setHomeProfile] = useState(false);
  const [homeNotification, setHomeNotification] = useState(false);
  const [homeNavTemplate, setHomeNavTemplate] = useState(false);
  const [homeSideBar, setHomeSideBar] = useState(false);

  const openNavTemplate = () => {
    if (!homeNavTemplate) {
      setHomeNavTemplate(true);
      setHomeNotification(false);
      setHomeProfile(false);
      setHomeSideBar(false);
    } else {
      setHomeNavTemplate(false);
    }
  };
  const openNotification = () => {
    if (!homeNotification) {
      setHomeNotification(true);
      setHomeNavTemplate(false);
      setHomeProfile(false);
      setHomeSideBar(false);
    } else {
      setHomeNotification(false);
    }
  };
  const openProfile = () => {
    if (!homeProfile) {
      setHomeProfile(true);
      setHomeNavTemplate(false);
      setHomeNotification(false);
      setHomeSideBar(false);
    } else {
      setHomeProfile(false);
    }
  };

  const openSideBar = () => {
    if (!homeSideBar) {
      setHomeSideBar(true);
      setHomeProfile(false);
      setHomeNavTemplate(false);
      setHomeNotification(false);
    } else {
      setHomeSideBar(false);
    }
  };

  return (
    <>
      <nav className="homeNav">
        <div className="homeNav_logo_container">
          {/* Logo */}
          <NavLogo />
          <div className="homeNav_li_show">
            <NavSearch />
          </div>
        </div>

        {/* Navbar */}

        <div className="homeNav_navigation_container">
          <ul className="homeNav_ul">
            {/* Templates */}

            <li className="homeNav_li homeNav_li_show">
              <NavTemplate
                openNavTemplate={openNavTemplate}
                homeNavTemplate={homeNavTemplate}
              />
            </li>

            {/* Notification */}
            <li
              className="homeNav_li homeNav_notification"
              onClick={() => openNotification()}
            >
              <MdNotifications className={"homeNav_notify"} />
              {homeNotification && <HomeNotification />}
            </li>

            {/* Contact */}
            <li className="homeNav_li homeNav_li_show">
              <NavContact />
            </li>

            {/* Profile */}
            <li className="homeNav_li">
              <NavProfile openProfile={openProfile} homeProfile={homeProfile} />
            </li>

            {/* MENU BUTTON */}

            <li className="homeNav_menuBtn">
              <div className="homeNav_li">
                <CgMenuRight
                  className="homeNav_menuIcon"
                  onClick={() => openSideBar()}
                />
                {homeSideBar && (
                  <HomeSideBar
                    openSideBar={openSideBar}
                    openProfile={openProfile}
                  />
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const NavLogo = () => {
  return (
    <Link to="/home" className="homeNav_logo">
      <img src="/images/logo.svg" alt="no-logo" width={100} height={100} />
    </Link>
  );
};

const NavSearch = () => {
  return (
    <div className="homeNav_search_container">
      <input type="text" placeholder="Search ... " />
      <BsSearch onClick={() => {}} className="homeNav_searchIcon" />
    </div>
  );
};
const NavTemplate = ({ openNavTemplate, homeNavTemplate }) => {
  return (
    <div className="homeNav_template">
      <p onClick={() => openNavTemplate()}>Templates</p>
      {homeNavTemplate && (
        <ul className="homeNav_template_box">
          <NavTemplates />
        </ul>
      )}
    </div>
  );
};
const NavProfile = ({ openProfile, homeProfile }) => {
  return (
    <div className="homeNav_profile_box">
      <img
        src="/images/user-1.png"
        alt="Profile"
        width={40}
        height={40}
        onClick={() => openProfile()}
      />
      {homeProfile && <HomeProfile />}
    </div>
  );
};
const NavContact = () => {
  return (
    <div className="homeNav_contact">
      <button className="homeNav_contact_button">Contact</button>
    </div>
  );
};

export { NavContact, NavProfile, NavTemplate, NavLogo, NavSearch };
export default Navbar;
