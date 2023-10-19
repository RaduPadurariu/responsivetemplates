import React from 'react'
import { Link } from 'react-router-dom'

export const HotelBlogCard = ({item : {id, date, category, title, cover, para, desc} }) => {

  return (
    <>
        <div className="items">
            <div className="img">
                <img src={cover} alt="no pic" />
            </div>
            <div className="category">
                <span>{date}</span>
                <label>{category}</label>
            </div>

            <div className="details">
                <h3>{title}</h3>
                <p>{para}</p>
            </div>

            <Link to={`/hotel/blogPage/${id}`} className="blogItem-link">
                READ MORE <i className='fa fa-long-arrow-alt-right'></i>
            </Link>
        </div>
    </>
  )
}
