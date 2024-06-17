import React from 'react'
import './HotelHomeGallery.css'
import { HotelHomeGalleryData } from './HotelHomeGalleryData'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const HotelHomeGallery = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

    return (
        <>
            <section className="hotelCollection">
                <div className="container top">
                    <Slider {...settings}>
                        {HotelHomeGalleryData.map((value, index) => {
                            return (
                                <div key={index} className="box">
                                    <img src={value.cover} alt="" />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </section>
        </>
  )
}
