import React from "react";
import "./MoviesHeader.css";

const MoviesHeader = () => {
  return (
    <div>
      <div onClick={() => window.scroll(0, 0)} className="moviesHeader">
        🎬 My Favorite Movies 🎥
      </div>
    </div>
  );
};

export default MoviesHeader;
