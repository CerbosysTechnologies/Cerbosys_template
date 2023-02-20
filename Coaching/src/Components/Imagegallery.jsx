import React from 'react'
import gallery1 from '../images/gallery1.png'
import gallery2 from '../images/gallery2.png'
import gallery3 from '../images/gallery3.png'
import gallery4 from '../images/gallery4.png'
function Imagegallery() {
  return (
    
   <div class="imagegallery">
   <div class="topimage">
    <div class="gallery_image">   
        <img src={gallery1} alt=""/>
    </div>
    <div class="gallery_image">   
        <img src={gallery2} alt=""/>
    </div>
   </div>
   <div class="bottom_image">
    <div class="gallery_image">   
        <img src={gallery3} alt=""/>
    </div>
    <div class="gallery_image">   
        <div><img src={gallery4} alt=""/></div>
    </div>
   </div>
   </div>
  )
}

export default Imagegallery