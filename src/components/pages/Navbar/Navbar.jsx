import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link as ScrollLink} from 'react-scroll'
import {Link} from 'react-router-dom'
import { Dropdown } from './Dropdown/Dropdown'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => setMenuOpen(!menuOpen);
    const [dropdown, setDropdown] = useState(false);


  const onMouseEnter = () => {
      setDropdown(true);
  };

  const onMouseLeave = () => {
      setDropdown(false);
  };


  return (
    <>
    <nav className="homeNav">

      {/* Logo */}
        <ScrollLink to='reactHome' className='logo' spy={true} smooth={true} offset={-90} duration={500}>logo</ScrollLink>

        {/* Burger button */}
        <div className='menu' onClick={handleClick}>
          {menuOpen ? (<FaTimes size={30} style={{ color: '#ffffff' }} />) : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
        </div>

        {/* Navbar */}
        <ul className={menuOpen ? "ul open" : "ul"}>
            <li className='li'>
              <ScrollLink to='reactHome' spy={true} smooth={true} offset={-90} duration={500} onClick={handleClick} >Home</ScrollLink>
            </li>
            <li className='li templateLinks' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link>Templates<i className='fas fa-caret-down' /></Link>
              { dropdown && <Dropdown/>}
            </li>
            {/* <li className='li'>
              <ScrollLink to='notes' spy={true} smooth={true} offset={-90} duration={500}>W3 Notes<i className='fas fa-caret-down' /></ScrollLink>
            </li> */}
            <li className='li'>
              <ScrollLink to='contact' spy={true} smooth={true} offset={-90} duration={500} onClick={handleClick} >Contact</ScrollLink>
            </li>
            {/* <li className='li'>
              <Button></Button>
            </li> */}
        </ul>
    </nav>
    </>
    
  )
}
