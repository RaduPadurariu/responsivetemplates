import React from "react";

import { Outlet } from "react-router-dom";
import MoviesHeader from "./components/Header/MoviesHeader";
import MoviesNavbar from "./common/Navbar/MoviesNavbar";

function MoviesApp() {
  return (
    <>
      <MoviesHeader />
      <Outlet />
      <MoviesNavbar />
    </>
  );
}

export default MoviesApp;
