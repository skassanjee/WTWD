import React from 'react'
import {GoThreeBars} from "react-icons/go"
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [slider, setSlider] = useState(false)

    const toggleSlider = () => {
        console.log('clicked')
        setSlider(
            !slider
        )
    }

  return (
    <div>
        <div className='nav-main'>
            <div className='logo'>
                logo
            </div>
            <div className='nav-links-list'>
                <ul>
                <li><a href='#'>Home</a> </li>
                <li><a href='#'>About</a> </li>
                <li><a href='#'>Services</a> </li>
                <li><a href='#'>Contact</a> </li>
                </ul>
            </div>




          
           
        </div>

        <div className={`ham-list ${slider ? 'ham-open' : 'ham-closed'}`}>

        <div onClick={toggleSlider} className='ham-icon'>
                {slider ? <AiOutlineClose  /> :<GoThreeBars /> }
            </div>


            <ul>
                <li><a href='#'>Home</a> </li>
                <li><a href='#'>About</a> </li>
                <li><a href='#'>Services</a> </li>
                <li><a href='#'>Contact</a> </li>
                </ul>
            </div> 
    </div>
  )
}

export default Navbar