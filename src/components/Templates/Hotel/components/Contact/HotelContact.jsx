import React from 'react'
import { HotelHeadTitle } from '../../common/HeadTitle/HotelHeadTitle'
import { HotelContactForm } from './HotelContactForm'
import GoToTop from '../../common/GotToTop'


export const HotelContact = () => {
  return (
    <>
        <HotelHeadTitle/>
        <HotelContactForm/>
        <GoToTop/>
    </>
  )
}
