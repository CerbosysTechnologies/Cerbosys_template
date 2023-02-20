import React from 'react'
import deluxe from '../images/Deluxe_room.png'
import luxury from '../images/luxury_room.png'
import elegant from '../images/elegant_room.png'
function Imagegallery() {
  return (

    <div class="image_gallery">
        <div class="review">
            <p>Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor magna.</p>
            <br/>
            <span class="color">Lire plus, CEO & Founder</span>
        </div>
        <div class="image_section">

            <div class="first">
                <div class="firstimage">
                    <img src={deluxe}alt=""/>
                </div>
                <div class="firsttext">
                   <div class="room"> DELEUXE <br/>ROOM</div>
                    <p>Mauris egestas, tellus sed venenatis tincidunt, odio diam iaculis augue, nec tincidunt enim odio id arcu. Ut pellentesque, quam ut sagittis adipiscing, lectus metus mollis magna...see more</p>
                </div>
            </div>
            <div class="second">
                <div class="firsttext">
                    <div class="room">
                        ELEGANT <br/> ROOM
                    </div>
                    <p>Nunc at nunc in elit pellentesque dignissim at viverra nisl. Nam ac molestie sapien. Quisque posuere nisi non nisi feugiat mattis. Aenean vitae nisl a risus pellentesque pellentesque vel vulputate sem... see more</p>
                </div>
                <div class="firstimage">
                    <img src={elegant} alt=""/>
                </div>
            </div>
            <div class="third">
                <div class="firstimage"><img src={luxury} alt=""/></div>
                <div class="firsttext">
                    <div class="room">
                        LUXURY <br/> ROOM
                    </div>
                    <p>Mauris egestas, tellus sed venenatis tincidunt, odio diam iaculis augue, nec tincidunt enim odio id arcu. Ut pellentesque, quam ut sagittis adipiscing, lectus metus mollis magna...see more</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Imagegallery