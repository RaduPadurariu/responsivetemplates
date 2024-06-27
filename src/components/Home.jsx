import React from "react";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <Navbar />
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};
