import React from 'react'
import {HotelSlide} from './HotelSlide'
import hotelData from './HotelData'
export const HotelHero = () => {
  return (
    <>
        <HotelSlide slides={hotelData}/>
    </>
  )
}
