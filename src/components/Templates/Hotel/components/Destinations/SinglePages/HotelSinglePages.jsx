import React, { useEffect, useState } from "react";
import "./HotelSinglePages.css";

import { Link, useParams } from "react-router-dom";
import { HotelSData } from "../HotelSData";

import { HotelEmptyFile } from "../../../common/EmptyFile/HotelEmptyFile";
import { HotelHeadTitle } from "../../../common/HeadTitle/HotelHeadTitle";

export const HotelSinglePages = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = HotelSData.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      <HotelHeadTitle />
      {item ? (
        <section className="hotelSingle-page top">
          <div className="container">
            <Link to="/hotel/destinations" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go back
            </Link>

            <article className="content flex">
              <div className="main-content">
                <img src={item.image} alt="" />
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <div className="para flex_space">
                  <p>{item.sidePara}</p>
                  <p>{item.sidePara}</p>
                </div>
                <h1>What is the {item.title} City?</h1>
                <p>{item.desc}</p>
                <div className="image grid1">
                  <img src={item.paraImage_one} alt="" />
                  <img src={item.paraImage_two} alt="" />
                </div>
                <p>{item.sidePara}</p>
              </div>

              <div className="side-content">
                <div className="box">
                  <h2>How can we help you?</h2>
                  <p>{item.sidePara}</p>
                  <button className="outline-btn">
                    <i className="fa fa-phone-alt"></i>
                    Contact Us
                  </button>
                </div>
                <div className="box2">
                  <p>{item.sidePara}</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <HotelEmptyFile />
      )}
    </>
  );
};
