import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
export const Button = () => {
  return (
    <>
        <Link to='/contact'>
            <button className='contactBtn'>Sing Up</button>
        </Link>
    </>
  )
}
