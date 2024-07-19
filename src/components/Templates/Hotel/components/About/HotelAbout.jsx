import React from "react";
import { HotelAboutCard } from "./HotelAboutCard";
import { HotelHeadTitle } from "../../common/HeadTitle/HotelHeadTitle";
import "./HotelAbout.css";
import { Link } from "react-router-dom";

export const HotelAbout = () => {
  return (
    <>
      <HotelHeadTitle />
      <section className="hotelAbout top">
        <div className="container">
          <HotelAboutCard />
        </div>
      </section>

      <section className="hotelFeatures top">
        <div className="container aboutCard">
          <div className="hotelAboutFeatures">
            <div className="row row1">
              <h1>
                Our <span>Features</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                ea fugiat ipsam veniam exercitationem, minus quis vel qui porro
                asperiores iste, enim molestias optio quisquam dolores sit ullam
                repellat saepe. Corrupti amet
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                ea fugiat ipsam veniam exercitationem, minus quis vel qui porro
                asperiores iste, enim molestias optio quisquam dolores sit ullam
                repellat saepe. Corrupti amet
              </p>
              <Link to={`/hotel/about`}>
                <button className="secondary-btn">
                  Explore More <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </Link>
            </div>

            <div className="row image">
              <img src="/images/Hotel/feature-img-1.jpg" alt="" />
              <div className="control-btn">
                <button className="prev"></button>
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
