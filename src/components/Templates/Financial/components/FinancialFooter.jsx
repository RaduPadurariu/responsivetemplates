import React from 'react'
import './FinancialFooter.css'
import { Link } from 'react-scroll'
const FinancialFooter = () => {
    return (
        <div className='financialFooter'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <Link to='hero' spy={true} smooth={true} offset={-90} duration={500} >Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='about' spy={true} smooth={true} offset={-90} duration={500}>About</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='testimonials' spy={true} smooth={true} offset={-90} duration={500}>Testimonials</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='demo' spy={true} smooth={true} offset={-140} duration={500}>Demo</Link>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2023 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default FinancialFooter