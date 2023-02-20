import React from 'react'
import rightbook from '../images/rightbook.png'
function Book_section() {
  return (
    <div class="book_section">
    <div class="left">

        <p>01 Jan 2045</p>
        <h1>Make It Simple</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
    </div>
    <div class="right">
        <img src={rightbook} alt=""/>
    </div>
   </div>
  )
}

export default Book_section