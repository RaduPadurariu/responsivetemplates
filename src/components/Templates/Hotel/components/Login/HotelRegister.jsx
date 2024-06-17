import React, { useState } from 'react'
import { HotelHeadTitle } from '../../common/HeadTitle/HotelHeadTitle'
import './HotelDesign.css'
import GoToTop from '../../common/GotToTop'


export const HotelRegister = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const [recValue, setRecValue] = useState([])
    const submitForm = (e) => {
        e.preventDefault()
        const newValue = { name: name, email: email, password: password, cPassword: cPassword }

        setRecValue([...recValue, newValue])

        setName("")
        setEmail("")
        setPassword("")
        setCPassword("")
    }
    
  return (
    <>
        <HotelHeadTitle/>
        <section className='hotelLogin top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            <form onSubmit={submitForm}>
              <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
              <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
              <input type='password' name='cPassword' value={cPassword} onChange={(e) => setCPassword(e.target.value)} placeholder='Confirm Password' required />

              <button type='submit' className='primary-btn'>
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className='login-show-data'>
        {recValue.map((currentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Create an Account Successfully</h1>
                <h3>
                  Name : <p>{currentValue.name}</p>
                </h3>
                <h3>
                  Email : <p>{currentValue.email}</p>
                </h3>
                <h3>
                  Password : <p>******</p>
                </h3>
                <h3>
                  Confirm Password : <p>******</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
      <GoToTop/>
    </>
  )
}
