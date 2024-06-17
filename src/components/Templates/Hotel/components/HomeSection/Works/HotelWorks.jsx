import React from 'react'
import { HotelWData } from './HotelWData'
import { HotelWCard } from './HotelWCard'
import './HotelWorks.css'
export const HotelWorks = () => {
  return (
    <>
        <section className="hotelPopular hotelWorks">
            <div className="container">
                <div className="heading">
                    <h1>How it Works</h1>
                    <div className='line'></div>
                </div>
                <div className='content grid'>
                    {HotelWData.map((value, index) => {
                        return (<HotelWCard key={index} cover={value.cover} title={value.title} desc={value.desc}/>)
                    })}
                </div>
            </div>
        </section>
    </>
  )
}
