import React from "react";
import { HotelHeadTitle } from "../../common/HeadTitle/HotelHeadTitle";
import { HotelCard } from "./HotelCard";
import HotelGalleryData from "./HotelGalleryData";
import "./HotelGallery.css";

export const HotelGallery = () => {
  return (
    <>
      <HotelHeadTitle />

      <section className="hotelGallery top">
        <div className="container">
          {HotelGalleryData.map((value, index) => {
            return (
              <HotelCard images={value.img} title={value.title} key={index} />
            );
          })}
        </div>
      </section>
    </>
  );
};
