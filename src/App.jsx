import './App.css'
import { Home } from './components/pages/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import { Financial } from './components/pages/Templates/Financial/Financial'
import {Hotel} from './components/pages/Templates/Hotel/Hotel'
import { HotelAboutPage } from './components/pages/Templates/Hotel/components/pages/HotelAboutPage'
import { HotelHomePage } from './components/pages/Templates/Hotel/components/pages/HotelHomePage'
import { HotelGalleryPage } from './components/pages/Templates/Hotel/components/pages/HotelGalleryPage'
import { HotelDestinationsPage } from './components/pages/Templates/Hotel/components/pages/HotelDestinationsPage'
import { HotelBlogPage } from './components/pages/Templates/Hotel/components/pages/HotelBlogPage'
import { HotelBlogSinglePage } from './components/pages/Templates/Hotel/components/Blog/Hotel-blog-single-page/HotelBlogSinglePage'
import { HotelTestimonialPage } from './components/pages/Templates/Hotel/components/pages/HotelTestimonialPage'
import { HotelContactPage } from './components/pages/Templates/Hotel/components/pages/HotelContactPage'
import { HotelLoginPage } from './components/pages/Templates/Hotel/components/pages/HotelLoginPage'
import { HotelRegisterPage } from './components/pages/Templates/Hotel/components/pages/HotelRegisterPage'
import { HotelSinglePages } from './components/pages/Templates/Hotel/components/Destinations/SinglePages/HotelSinglePages'


function App() {

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/financial' element={<Financial/>}></Route>
          <Route path='/hotel' element={<Hotel/>}>
            <Route path='/hotel/home' element={<HotelHomePage/>}></Route>
            <Route path='/hotel/about' element={<HotelAboutPage/>}></Route>
            <Route path='/hotel/gallery' element={<HotelGalleryPage/>}></Route>
            <Route path='/hotel/destinations' element={<HotelDestinationsPage/>}></Route>
            <Route path='/hotel/singlePages/:id' element={<HotelSinglePages/>}></Route>
            <Route path='/hotel/blog' element={<HotelBlogPage/>}></Route>
            <Route path='/hotel/blogPage/:id' element={<HotelBlogSinglePage/>}></Route>
            <Route path='/hotel/testimonial' element={<HotelTestimonialPage/>}></Route>
            <Route path='/hotel/contact' element={<HotelContactPage/>}></Route>
            <Route path='/hotel/sign-in' element={<HotelLoginPage/>}></Route>
            <Route path='/hotel/register' element={<HotelRegisterPage/>}></Route>
          </Route>
          

          <Route path='*' element={<Navigate to="/hotel/home"/>}/>
        </Routes> 
      </div>
    </>
  )
}

export default App
