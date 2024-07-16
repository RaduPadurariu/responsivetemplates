import React from "react";
import { Link } from "react-router-dom";

export const HotelDCard = ({ item: { id, image, title } }) => {
  return (
    <>
      <Link className="items" to={`/hotel/singlePages/${id}`}>
        <div className="img">
          <img src={image} alt="" />

          <div className="blogItem-link">
            <i className="fas fa-external-link-alt"></i>
          </div>
        </div>

        <div className="title">
          <h3>{title}</h3>
        </div>
      </Link>
    </>
  );
};
