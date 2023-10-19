import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HotelBlogData } from '../HotelBlogData'
import { HotelHeadTitle } from '../../../common/HeadTitle/HotelHeadTitle'
import { HotelEmptyFile } from '../../../common/EmptyFile/HotelEmptyFile'
import '../HotelBlog.css'
import GoToTop from '../../../common/GotToTop'

export const HotelBlogSinglePage = () => {
  const {id} = useParams();
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = HotelBlogData.find((item) => item.id === parseInt(id))

    if(item) {
      setItem(item)
    }
  }, [id]) 
  
  return (
    <>
        <HotelHeadTitle/>
        {item ? (<section className="hotelBlog-page top">
          <div className="container">
            <Link to='/hotel/blog' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'>
              </i> Go back
            </Link>

            <article className='content flex'>
              <div className='main-content'>
                <img src={item.cover} alt="" />
        

                <div className="category flex_space">
                  <p>{item.date}</p>
                  <label>{item.category}</label>
                </div>

                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <h2>Two Column Text Sample</h2>
                <div className="para flex_space">
                    <p>{item.desc}</p>
                    <p>{item.desc}</p>
                </div>
              </div>

              <div className="side-content">
                <div className="category-list">
                  <h2>Categories</h2>
                  <hr />
                  <ul>
                    {
                        HotelBlogData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <i className='fa fa-play-circle'></i>
                                    {item.category}
                                </li>
                            )
                           
                        })
                    }
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>) : (
          <HotelEmptyFile/>
        )}
        <GoToTop/>
    </>
  )
}
