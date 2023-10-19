import React from 'react'
import { HotelAllItems } from '../Destinations/HotelAllItems'
import  './../HomeSection/HotelPopular/HotelPopular.css'
export const HotelHomeDestinations = () => {
  return (
    <>
        <section className="popular top">
            <div className="full_container">
                <div className="heading">
                    <h1>
                        Most Popular Destinations
                    </h1>
                    <div className="line">

                    </div>
                    <div className="content">
                        <HotelAllItems/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
