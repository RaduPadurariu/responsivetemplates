import React from "react";

import { Outlet } from "react-router-dom";
import GamesNavbar from "./common/Navbar/GamesNavbar";
import GamesFooter from "./common/Footer/GamesFooter";

function MoviesApp() {
  return (
    <>
      <GamesNavbar />
      <Outlet />
      <GamesFooter />
    </>
  );
}

export default MoviesApp;
