import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";

// Import Navbar components
import Discover from "./src/components/Navbar/Discover/Discover";
import HelpCenter from "./src/components/Navbar/HelpCenter/HelpCenter";
import NavTemplates from "./src/components/Navbar/NavTemplates/NavTemplates";
import Notification from "./src/components/Navbar/Notification/Notification";
import Profile from "./src/components/Navbar/Profile/HomeProfile";
import SideBar from "./src/components/Navbar/SideBar/SideBar";
import Button from "./src/components/Button/Button";

// Import icons
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [navTemplates, setNavTemplates] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
      setNavTemplates(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
      setNavTemplates(false);
    } else if (btnText == "Templates") {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
      setNavTemplates(true);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
      setNavTemplates(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setNavTemplates(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setNavTemplates(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <>
      <nav className="homeNav">
        <div className="homeNav_container">
          <div className="homeNav_container_left">
            <div className="homeNav_logo">
              <img
                src="/images/logo.svg"
                alt="no-logo"
                width={100}
                height={100}
              />
            </div>
            <div className="homeNav_container_left_box_input">
              <div className="homeNav_container_left_box_input_box">
                <input type="text" placeholder="Search ... " />
                <BsSearch onClick={() => {}} className="search_icon" />
              </div>
            </div>
          </div>
          <div className="homeNav_container_right">
            <div className="homeNav_container_right_navTemplate">
              {/* NAV TEMPLATE MENU */}
              <p onClick={(e) => openMenu(e)}>Templates</p>
              {navTemplates && (
                <div className={"homeNav_container_right_navTemplate_box"}>
                  <NavTemplates />
                </div>
              )}
            </div>
            <div className="homeNav_container_right_discover">
              {/* DISCOVER MENU */}
              <p onClick={(e) => openMenu(e)}>Discover</p>
              {discover && (
                <div className={"homeNav_container_right_discover_box"}>
                  <Discover />
                </div>
              )}
            </div>

            {/* HELP CENTER MENU */}
            <div className={"homeNav_container_right_help"}>
              <p onClick={(e) => openMenu(e)}>Help Center</p>
              {help && (
                <div className={"homeNav_container_right_help_box"}>
                  <HelpCenter />
                </div>
              )}
            </div>

            {/* NOTIFICATION */}
            <div className={"homeNav_container_right_notify"}>
              <MdNotifications
                className={"notify"}
                onClick={() => openNotification()}
              />
              {notification && <Notification />}
            </div>

            {/* CREATE BUTTON SECTION */}
            <div className={"homeNav_container_right_button"}>
              <Button btnName="Create" handleClick={() => {}} />
            </div>

            {/* USER PROFILE */}

            <div className={"homeNav_container_right_profile_box"}>
              <div className={"homeNav_container_right_profile"}>
                <img
                  src="/images/user-1.png"
                  alt="Profile"
                  width={40}
                  height={40}
                  onClick={() => openProfile()}
                  className={"homeNav_container_right_profile"}
                />

                {profile && <Profile />}
              </div>
            </div>

            {/* MENU BUTTON */}

            <div className={"homeNav_container_right_menuBtn"}>
              <CgMenuRight className="menuIcon" onClick={() => openSideBar()} />
            </div>
          </div>
        </div>

        {/* SIDBAR CPMPONE/NT */}
        {/* {openSideMenu && (
        <div className="sideBar">
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )} */}
      </nav>
    </>
  );
};

export default Navbar;
