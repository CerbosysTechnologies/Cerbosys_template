import React from 'react'
import logo from '../images/logo.png'
import usericon from '../images/usericon.png'
import bagicon from '../images/bagicon.png'
function Navbar() {
  return (
    <>
     <div class="navbar">
        <div class="logo">
            <img src={logo} width="40px" height="30px" alt=""/>
            <h1>Fashi</h1>
        </div>
        <div class="list">
            <ul>
               <li>Home</li>
               <li>Shop</li>
               <li class="color">Sale</li>
               <li>Features</li>
               <li>Blog</li>
               <li>About</li>
               <li>Contact</li>

            </ul>
        </div>
        <div class="icons">
            <img src={usericon} alt=""/>
            <img src={bagicon} alt=""/>
        </div>
    </div>
    
    </>
  )
}

export default Navbar