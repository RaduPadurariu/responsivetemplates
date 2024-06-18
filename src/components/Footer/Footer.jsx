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
            Explore a diverse collection of React templates, all conveniently
            built and available on a single website. Whether you need e-commerce
            sites, landing pages or personal portfolios, our templates are
            designed to meet your needs with modern UI/UX and responsive design.
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
              For more projects, you can visit my personal portfolio at&nbsp;
              <span>
                <Link
                  to={"https://radupadurariu.netlify.app"}
                  title="Radu Padurariu Portfolio"
                  target="_blank"
                >
                  radupadurariu.netlify.app
                </Link>
              </span>
              , where you'll find a comprehensive collection of my work,
              including detailed case studies, client testimonials, and a blog
              featuring industry insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
