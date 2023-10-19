import React, { useState } from 'react'
import { HotelHeadTitle } from '../../common/HeadTitle/HotelHeadTitle'
import './HotelDesign.css'
import { Link } from 'react-router-dom';
import GoToTop from '../../common/GotToTop';


export const HotelLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) => {
        e.preventDefault()
        const newValue = {email, password}
        setAllValue([newValue])
        setEmail("")
        setPassword("")
      
    }



  return (
    <>  
        <HotelHeadTitle/>
        <section className="hotelLogin top">
            <div className="container">
                <div className="sign-box">
                    <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>

                    <form onSubmit={formSubmit}>
                        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
                        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
                        
                        <div className="flex_space">
                            <div className="flex">
                                <input type="checkbox" />
                                <label >Remember Me</label>
                            </div>
                            <div className="flex">
                                <span>I forgot my password</span>
                            </div>

                            
                        </div>
                        <button type='submit' className='primary-btn'>
                                Sign In
                            </button>
                            <p>Don't HAVE ACCOUNT? <Link to="/hotel/register">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </section>

        <section className="login-show-data">
            {allValue.map((currentValue, index) => {
                const {email} = currentValue;
                return (
                    <div className="sign-box" key={index}>
                        <h1>
                            Log In Successfully
                        </h1>
                        <h3>
                            Email : <p>{email}</p>
                        </h3>
                        <h3>
                            Password : <p>******</p>
                        </h3>
                    </div>
                )
            })}
          
        </section>
        <GoToTop/>
    </>
  )
}
