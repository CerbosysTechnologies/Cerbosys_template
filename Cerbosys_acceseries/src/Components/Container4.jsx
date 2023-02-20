import React from 'react'
import gallery1 from '../images/gallery1.png'
import gallery2 from '../images/gallery2.png'
import gallery3 from '../images/gallery3.png'
import gallery4 from '../images/gallery4.png'
function Container4() {
  return (
    <div class="container4">
    <div class="imggallery"><img src={gallery1} alt=""/></div>
    <div class="imggallery"><img src={gallery2} alt=""/></div>
    <div class="imggallery"><img src={gallery3} alt=""/></div>
    <div class="imggallery"><img src={gallery4} alt=""/></div>
    
        </div>
  )
}

export default Container4