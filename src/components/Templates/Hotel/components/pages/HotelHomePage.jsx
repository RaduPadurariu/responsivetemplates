import React from 'react'
import { HotelHero } from '../HomeSection/HotelHero'
import { HotelHomeAbout } from '../HomeSection/HotelHomeAbout'
import { HotelHomeDestinations } from '../HomeSection/HotelHomeDestinations'
import { HotelPopular } from '../HomeSection/HotelPopular/HotelPopular'
import { HotelDownload } from '../HomeSection/Download/HotelDownload'
import { HotelWorks } from '../HomeSection/Works/HotelWorks'
import { HotelHomeGallery } from '../HomeSection/HomeGallery/HotelHomeGallery'
import GoToTop from '../../common/GotToTop'



export const HotelHomePage = () => {
  return (
    <>
        <HotelHero/>
        <HotelHomeAbout/>
        <HotelPopular/>
        <HotelHomeDestinations/>
        <HotelDownload/>
        <HotelWorks/>
        <HotelHomeGallery/>
        <GoToTop/>
    </>
  )
}
