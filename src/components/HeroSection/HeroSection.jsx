import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="home_heroSection">
      <div className="home_heroSection_box">
        <div className="home_heroSection_box_left">
          <h1>Hero page, explore multiple templates 🖼️</h1>
          <p>
            Lorem ipsum dolor sit amet consecteturadipisicing elit. Perferendis
            veniam vero debitis impedit
          </p>
          <button className="home_heroSection_button">Start your search</button>
        </div>
        <div className="home_heroSection_box_right">
          <img
            src="/images/hero-image.png"
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
