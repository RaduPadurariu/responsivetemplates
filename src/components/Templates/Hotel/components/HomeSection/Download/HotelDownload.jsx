import React from 'react'
import './HotelDownload.css'
export const HotelDownload = () => {
  return (
    <>
        <section className="hotelDownload">
          <div className="container">
            <div className="row">
              <h3>Download our app</h3>
              <h1>Wow! Get This Template App For Your Mobile</h1>
              <ul>
                <li>&#10003; Find nearby hotel in your network with template</li>
                <li>&#10003; Get paperless confirmation</li>
                <li>&#10003; Make changes whenever, wherever</li>
                <li>&#10003; 24/7 customer service in more than 40 languages</li>
                <li>&#10003; No booking or credit card fees</li>
                <li>&#10003; No booking or credit card fees</li>
                <li>&#10003; Add your own reviews and photos</li>
                
              </ul>
              <div className="img flex">
                <img src="/images/Hotel/appstore-button.png" alt="" />
                <img src="/images/Hotel/google-play-button.png" alt="" />
              </div>
            </div>
            <div className="row row2">
              <img src="/images/Hotel/app-image-1.png" alt="" />
            </div>
          </div>
        </section>
    </>
  )
}
