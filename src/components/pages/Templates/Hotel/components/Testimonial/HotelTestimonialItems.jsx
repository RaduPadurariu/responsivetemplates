import React from 'react'
import { HotelTCard } from './HotelTCard'
import { HotelTData } from './HotelTData'
import './HotelTestimonial.css'


export const HotelTestimonialItems = () => {
  return (
    <>
        <section className="hotelTestimonial mtop">
            <div className="container grid1">
                {HotelTData.map((value, index) => {
                    return (<HotelTCard key={index} {...value}/>)
                })}
            </div>
        </section>
    </>
  )
}
