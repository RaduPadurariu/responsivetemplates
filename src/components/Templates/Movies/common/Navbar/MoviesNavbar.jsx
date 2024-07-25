import React, { useEffect, useState } from "react";
import "./MoviesNavbar.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import SeriesIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import BackIcon from "@mui/icons-material/KeyboardBackspace";

const MoviesNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const minWidth = windowWidth < 550 ? "40px" : "80px";
  useEffect(() => {
    if (value === 0) navigate("/movies/home");
    else if (value === 1) navigate("/movies/series");
    else if (value === 2) navigate("/movies/search");
    else if (value === 3) navigate("/movies/favorites");
    else if (value === 4) navigate("/");
  }, [value, navigate]);

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction
        style={{ color: "white", minWidth: minWidth }}
        label="Movies"
        icon={<MovieIcon />}
        className="movies_buttonNavigation"
      />
      <BottomNavigationAction
        style={{ color: "white", minWidth: minWidth }}
        label="TV Series"
        icon={<SeriesIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white", minWidth: minWidth }}
        label="Search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white", minWidth: minWidth }}
        label="Favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white", minWidth: minWidth }}
        label="Templates"
        icon={<BackIcon />}
      />
    </BottomNavigation>
  );
};

export default MoviesNavbar;
