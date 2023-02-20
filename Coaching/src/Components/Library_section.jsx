import React from 'react'
import Librarypicture from '../images/librarypicture.png'
function Library_section() {
  return (
    <div class="library_section">
    <div class="library_picture"><img src={Librarypicture} alt=""/></div>
    <div class="library_text">
        <h1>Best Classes and study</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
    </div>
   </div>
  )
}

export default Library_section