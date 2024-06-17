import React from 'react'
import "./HotelHeadTitle.css"
import { Link, useLocation } from 'react-router-dom'


export const HotelHeadTitle = () => {
    const location = useLocation()
  return (
    <>  
        <section className="hotelHeadTitle">
            <div className="container">
                <h1>
                    {location.pathname.split("/")[2]}
                </h1>
                <button>
                    <Link to="/hotel/home">Home / </Link>
                    <span>
                        {location.pathname.split("/")[2]}
                    </span>
                </button>
            </div>
        </section>
    </>
  )
}
