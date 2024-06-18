import React from "react";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./HomeProfile.css";

const HomeProfile = () => {
  return (
    <div className={"homeNav_profile"}>
      <div className={"homeNav_profile_account"}>
        <img
          src={"/images/user-1.png"}
          alt="user profile"
          width={50}
          height={50}
          className={"homeNav_profile_account_img"}
        />

        <div className={"homeNav_profile_account_info"}>
          <p>Radu Padurariu</p>
          <small>X038499382920203...</small>
        </div>
      </div>

      <div className={"homeNav_profile_menu"}>
        <div className={"homeNav_profile_menu_one"}>
          <div className={"homeNav_profile_menu_one_item"}>
            <FaUserAlt />
            <p>
              <Link to="#">My Profile</Link>
            </p>
          </div>
          <div className={"homeNav_profile_menu_one_item"}>
            <FaRegImage />
            <p>
              <Link to="#">My Items</Link>
            </p>
          </div>
          <div className={"homeNav_profile_menu_one_item"}>
            <FaUserEdit />
            <p>
              <Link to="#">Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className="homeNav_profile_menu_two">
          <div className="homeNav_profile_menu_one_item">
            <MdHelpCenter />
            <p>
              <Link to="#">Help</Link>
            </p>
          </div>
          <div className="homeNav_profile_menu_one_item">
            <TbDownload />
            <p>
              <Link to="/home">Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
