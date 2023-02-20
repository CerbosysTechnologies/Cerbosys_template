import React from 'react'
import hotel_logo from '../images/hotel_logo.png'
function Navbar() {
  return (
    <div class="navbar">
    <div class="logo">
    <img src={hotel_logo} alt=""/>
    </div>
    <div class="navlist">
        <li>HOME</li>
        <li>ACCOMODATION</li>
        <li>PAGES</li>
        <li>NEWS & DEALS</li>
        <li>WORLD OF FLAWLES</li>
        <li>CONTACT</li>
    </div>
</div>
  )
}

export default Navbar