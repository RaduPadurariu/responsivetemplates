import React from 'react'
import {HotelNavbar} from './common/Navbar/HotelNavbar'
import { Outlet } from 'react-router-dom';
import { HotelFooter } from './common/Footer/HotelFooter';

function HotelApp() {
  return (
    <>
        <HotelNavbar/>
        <Outlet/>
        <HotelFooter/>
    </>
  );
}

export default HotelApp;