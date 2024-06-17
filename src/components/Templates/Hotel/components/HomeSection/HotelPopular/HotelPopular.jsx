import React from 'react'
import { HotelPopularCards } from './HotelPopularCards'
import './HotelPopular.css'

export const HotelPopular = () => {
  return (
    <>
        <section className="hotelPopular top">
            <div className="full_container">
                <div className="heading">
                    <h1>Most Popular Hotel</h1>
                    <div className='line'></div>
                </div>
                <div className="content">
                    <HotelPopularCards/>
                </div>
            </div>
        </section>
    </>
  )
}
