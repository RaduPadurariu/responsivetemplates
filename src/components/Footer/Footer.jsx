import React from "react";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import "./Footer.css";
import { NavLogo, NavTemplate } from "../Navbar/Navbar";
import NavTemplates from "../Navbar/NavTemplates/NavTemplates";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="homeFooter">
      <div className="homeFooter_box">
        <div className="homeFooter_box_social">
          <NavLogo />
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className="homeFooter_social">
            <Link href="#">
              <TiSocialFacebook />
            </Link>
            <Link href="#">
              <TiSocialLinkedin />
            </Link>
            <Link href="#">
              <TiSocialTwitter />
            </Link>
            <Link href="#">
              <TiSocialYoutube />
            </Link>
            <Link href="#">
              <TiSocialInstagram />
            </Link>
          </div>
        </div>

        <div className="homeFooter_box_help">
          <h3>Templates</h3>
          <NavTemplates />
        </div>

        <div className="homeFooter_subscribe">
          <h3>Subscribe</h3>

          <div className="homeFooter_subscribe_box">
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className="homeFooter_subscribe_box_send" />
          </div>
          <div className="homeFooter_subscribe_box_info">
            <p>
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              world first and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
