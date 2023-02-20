import React from 'react'
import g1 from '../images/g1.png'
import g2 from '../images/g2.png'
import g3 from '../images/g3.png'
import g4 from '../images/g4.png'
import g5 from '../images/g5.png'

function Container9() {
  return (
    <div class="container9">
    <div class="gallery"><img src={g1} width="250px" alt=""/></div>
    <div class="gallery"><img src={g2} alt="" width="250px"/></div>
    <div class="gallery"><img src={g3} alt="" width="250px"/></div>
    <div class="gallery"><img src={g4} alt="" width="250px"/></div>
    <div class="gallery"><img src={g5} alt="" width="250px"/></div>
</div>
  )
}

export default Container9