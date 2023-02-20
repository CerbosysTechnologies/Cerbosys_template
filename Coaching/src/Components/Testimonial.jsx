import React from 'react'
import testimonial from '../images/testimonialimage.png'
function Testimonial() {
  return (
    <div class="testimonial">
  

    <div class="heading">  <h1>Testimonial</h1></div>
    <div class="centerdiv">
        <div class="tesimonial_image">
            <img src={testimonial} alt=""/>
        </div>
        <div class="testimonial_text">
            <h1>Jony Deno</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        </div>
    </div>
    
      
       </div>
  )
}

export default Testimonial