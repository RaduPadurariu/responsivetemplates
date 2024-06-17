import React from 'react'
import { HotelBlogCard } from './HotelBlogCard'
import { HotelBlogData } from './HotelBlogData'
import './HotelBlog.css'

export const HotelAllBlog = () => {
    const items= HotelBlogData
  return (
    <>
        <section className="hotelBlog top">

                <div className="content">
                    {items.map((item) => {
                        return <HotelBlogCard key={item.id} item={item}/>   
                    })}
                </div>

        </section>
    </>
  )
}
