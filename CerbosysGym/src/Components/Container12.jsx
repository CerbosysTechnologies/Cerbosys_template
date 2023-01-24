import React from "react"
import circle1 from "../images/circle1.png"
import circle2 from "../images/circle2.png"
const Container12 = ()=>{
    return(
        <>
           <div class="container12">

<div class="story">
    <div class="storytext">
        <p>Far far away, behind the word mountains, far
            from the countries Vokalia and Consonantia,
            there live the blind texts.</p>
    </div>
    <div class="storyimage">
        <div class="circle"><img src={circle1} width="100%" height="100%" alt=""/></div>
        <div class="imagestory"><h3>Kenny Bufer</h3>
            <p>Customer</p></div>
     
    </div>
   
</div>
<div class="story">
    <div class="storytext">
        <p>Far far away, behind the word mountains, far
            from the countries Vokalia and Consonantia,
            there live the blind texts.</p>
    </div>
    <div class="storyimage">
        <div class="circle"><img src={circle2}width="100%" height="100%" alt=""/></div>
        <div class="imagestory"><h3>Gabby Smith</h3>
        <p>Customer</p></div>
     
    </div>
</div>
<div class="story">
    <div class="storytext">
        <p>Far far away, behind the word mountains, far
            from the countries Vokalia and Consonantia,
            there live the blind texts.</p>
    </div>
    <div class="storyimage">
        <div class="circle"><img src={circle1} width="100%" height="100%" alt=""/></div>
        <div class="imagestory"><h3>Floyd Weather</h3>
            <p>Customer</p></div>
     
    </div>
</div>
</div>
        </>
    )
}
export default Container12