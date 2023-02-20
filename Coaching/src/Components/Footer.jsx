import React from 'react'
import Cerbosys from '../images/cerbosys.png'
function Footer() {
  return (
    <div class="footer">
    <div class="input_button">
        <button class="last_button">SUBSCRIBE</button>
        <input class="last_input" placeholder="Enter Your Email" type="text"/>
    </div>


    <div class="footerdiv">

        <div class="firstlist">
            <p>Call Now +01 9876543210</p>
            <p>mail@domain.com</p>
        </div>
        <div>
            <h4>Information</h4>
            <li>there are many</li>
            <li>varitaions of</li>
            <li>Passages of lorem</li>
            <li>ipsem availbale but</li>
            <li>majority have sufferd</li>
            <li>sufferd allternation</li>
            
            <li></li>
        </div>
        <div>
            <h4>Helpful Links</h4>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>News</li>
        </div>
        <div class="firstlist">
            <img src={Cerbosys} alt=""/>
        </div>
    </div>
  </div>
  )
}

export default Footer