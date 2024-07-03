import React from "react";

import { Outlet } from "react-router-dom";
import MusicNavbar from "./common/Navbar/MusicNavbar";
import MusicFooter from "./common/Footer/MusicFooter";

function MusicApp() {
  return (
    <>
      <MusicNavbar />
      <Outlet />
      <MusicFooter />
    </>
  );
}

export default MusicApp;
