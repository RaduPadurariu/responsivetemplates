import React from "react";
import "./MusicHeadTitle.css";
const MusicHeadTitle = ({ subTitle, title, backImg }) => {
  const backgroundSettings = {
    "--background-img": `url(${backImg})`,
  };
  return (
    <div className="musicHeadTitle">
      <div className="musicHeadTitle_inner" style={backgroundSettings}>
        <div className="musicHeadTitle_head_container">
          <div className="musicHeadTitle_content text-center">
            <div className="musicHeadTitle_subtitle">{subTitle}</div>
            <div className="musicHeadTitle_title">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicHeadTitle;
