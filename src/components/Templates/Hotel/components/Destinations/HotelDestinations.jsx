import React from "react";
import { HotelHeadTitle } from "../../common/HeadTitle/HotelHeadTitle";
import { HotelAllItems } from "./HotelAllItems";
import "./HotelDestinations.css";
import GoToTop from "../../common/GotToTop";
export const HotelDestinations = () => {
  return (
    <>
      <HotelHeadTitle />
      <HotelAllItems />
    </>
  );
};
