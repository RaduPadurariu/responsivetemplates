import React from "react";
import "./Home.css";
import { Navbar } from "./Navbar/Navbar";
import { Template } from "./Template";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="renderTemplate" id="reactHome">
        {/* <Template name="FINANCIAL TEMPLATE" link="/financial" title="FINANCIAL TEMPLATE" path="https://responsivetemplatetemporarly-de1bcce22749.herokuapp.com/financial"/>
        <Template name="HOTEL TEMPLATE" link="/hotel/home" title="HOTEL TEMPLATE" path="https://responsivetemplatetemporarly-de1bcce22749.herokuapp.com/hotel/home"/> */}
        <Template
          cl="financialBackground"
          name="FINANCIAL TEMPLATE"
          link="/financial"
          title="FINANCIAL TEMPLATE"
          path="/images/Financial.png"
        />
        <Template
          cl="hotelBackground"
          name="HOTEL TEMPLATE"
          link="/hotel/home"
          title="HOTEL TEMPLATE"
          path="/images/hotel.png"
        />
      </div>

      <div className="contact" id="contact">
        <Link
          to={"https://radupadurariu.netlify.app"}
          title="Radu Padurariu Portfolio"
          target="_blank"
        >
          &copy; copyright - Radu Padurariu 2023
        </Link>
      </div>
    </div>
  );
};
