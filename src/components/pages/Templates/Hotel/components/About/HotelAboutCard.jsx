import React from 'react'
import { Link } from 'react-router-dom'


export const HotelAboutCard = () => {
  return (
    <>
        <div className="hotelAboutCard mtop">
            <div className="row row1">
                <h4>About Us</h4>
                <h1>We <span>provide solution</span> to grow your business</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ea fugiat ipsam veniam exercitationem, minus quis vel qui porro asperiores iste, enim molestias optio quisquam dolores sit ullam repellat saepe. Corrupti amet</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ea fugiat ipsam veniam exercitationem, minus quis vel qui porro asperiores iste, enim molestias optio quisquam dolores sit ullam repellat saepe. Corrupti amet</p>
                <Link to={`/hotel/about`}>
                    <button className='secondary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </Link>
            </div>
            <div className="row image">
                <div className='image-container'>
                    <img src="/images/Hotel/about-img-1.jpg" alt=""/>
                    <div className="control-btn">
                        <button className="prev"><i className="fas fa-play"></i>
                        </button>
                    </div>
                </div>  
            </div>
            
        </div>
    </>
  )
}
