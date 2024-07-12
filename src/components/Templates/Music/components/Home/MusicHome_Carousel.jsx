import React, { useState } from "react";
import "./MusicHome.css";
const MusicHome_Carousel = ({
  title,
  headerTitle,
  backgroundImage,
  transition,
  isVisible,
}) => {
  return (
    <div
      className={`musicHome_carousel_item ${
        !transition
          ? ""
          : isVisible
          ? "musicHome_slide_effect_in"
          : "musicHome_slide_effect_out"
      }`}
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="musicHome_carousel_data_container">
        <div className="musicHome_home_title">{title}</div>
        <div className="musicHome_home_headerTitle">
          <h1>{headerTitle}</h1>
        </div>
        <div className="musicHome_home_titleLink">
          <a href="#">Listen on Soundcloud</a>
        </div>
      </div>
    </div>
  );
};

export default MusicHome_Carousel;
