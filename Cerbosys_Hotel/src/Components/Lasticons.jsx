import React from 'react'
import fb from '../images/fb.png'
import twitter from '../images/twitter.png'
import circle from '../images/circle.png' 
function Lasticons() {
  return (
    <div class="last_icons"><h3>FOLLOW US</h3> <div class="social_icons">

    <div class="icon_flex">
        <div class="icon1">
            <img src={fb} alt=""/>
        </div>
        <div class="icon1"><img src={circle}alt=""/></div>
        <div class="icon1"> <img src={twitter} alt=""/></div>
    </div>

</div></div>

  )
}

export default Lasticons