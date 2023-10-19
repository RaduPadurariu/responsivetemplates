import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PopularData } from './HotelPopularData';
import Slider from 'react-slick';
import './HotelPopular.css'

const SamplePrevArrow = (props) => {
  const {onClick} = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}


const SampleNextArrow = (props) => {
  const {onClick} = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}



export const HotelPopularCards = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,
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
      <Slider {...settings}>
        {
          PopularData.map((value, index) => {
            return (
              <div className="cards" key={index}>
                <div className="item">
                  <div className="image">
                    <img src={value.image} alt="" />
                    <i className='fas fa-map-marker-alt'>
                      <label htmlFor="">{value.country}</label>
                    </i>
                  
                  </div>
      
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
    
                  <div className="details">
                    <h2>{value.name}</h2>
                    <div className="boarder"></div>
                    <h3>{value.price} / <span>Per Night</span>
                    </h3>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </>
  )
}
