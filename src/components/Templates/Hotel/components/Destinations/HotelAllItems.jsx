import React from "react";
import { HotelDCard } from "./HotelDCard";
import { HotelSData } from "./HotelSData";

export const HotelAllItems = () => {
  const items = HotelSData;
  return (
    <>
      <section className="hotelGallery desi mtop">
        <div className="container">
          {items.map((item) => {
            return <HotelDCard key={item.id} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};
