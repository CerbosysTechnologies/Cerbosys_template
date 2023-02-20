import React from 'react'
import leftsideimg from '../images/left.png'
import sunglassnew from '../images/sunglassnew.png'
function Container5() {
  return (
    <div class="container5">
    <div class="left">
        <img src={leftsideimg} alt=""/>
    </div>
    <div class="right">
        <img src={sunglassnew} width="400px" alt=""/>
        
      <div class="position">
        <div><p>Gafas sol Hawkers one</p>
        <div class="flex"> <p class="amount"> $29.50 </p> <span class="rate">$15.90</span></div>   
        </div>
        <div class="fourdiv">
            <div>68 <br/> days</div>
            <div>12 <br/> hrs</div>
            <div>59 <br/> mins</div>
            <div>56 <br/>  secs</div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Container5