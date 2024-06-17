import React, {useState} from 'react'
import hotelData from './HotelData'
import './HotelHome.css'
export const HotelSlide = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)
    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)

    if (!Array.isArray(slides) || slides.length <=0) {
        return null
    }
  return (
    <div className='heroPage'>
      <section className='hotelSlider'>
        <div className='control-btn'>
            <button className='prev' onClick={prevSlide}>
                <i className='fas fa-caret-left'></i>
            </button>
            <button className='next' onClick={nextSlide}>
                <i className='fas fa-caret-right'></i>
            </button>
        </div>
     

      {hotelData.map((slide, index) => {
        return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              <div className={`carousel image${index+1}`}></div>
              {/* {index === current && <img src={slide.images} alt='Home Image'/>} */}
            </div>
        )
      })}

       </section>

       <section className='hotelSlide-form'>
          <div className='container'>
            <h2>
              Enjoy Your Holiday
            </h2>
            <span>Search and Book Hotel</span>
            <form action="">
              <input type="text" placeholder='Search City' name='' id=''/>
              <div className='flex_space'>
                <input type="date" placeholder='Check In'/>
                <input type="date" placeholder='Check Out'/>
              </div>
              <div className='flex_space'>
                <input type="number" placeholder='Adult(s)(+18)'/>
                <input type="number" placeholder='Children(0 - 17)'/>
              </div>
              <input type="number" placeholder="Rooms"/>
              <input type="submit" value="Search" className='submit'/>
            </form>
          </div>
       </section>
    </div>
  )
}
