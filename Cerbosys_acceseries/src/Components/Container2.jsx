import React from 'react'
import girlimg from '../images/girl.png'
import sunglass from '../images/sunglass.png'
import watch from '../images/watch.png'
import shoes from '../images/shoes.png'
import bag from '../images/bag.png'
function Container2() {
  return (

    <div class="container2">

        <div class="main1">
            <div class="maintop">
                <img src={girlimg} alt=""/>
                <button class="btn">DRESSES</button>
            </div>
    
            <div class="mainbottom">
                <img src={sunglass} alt=""/>
            </div>
        </div>
        <div class="main1">
            <div class="maintop2"><img src={watch} alt=""/>
           </div>
            <div class="mainbottom2"><img src={shoes} alt=""/>
            <button class="btn">FOOTWEAR</button></div>
        </div>

        <div class="main1">
            <div class="maintop3"><img src={bag} alt=""/></div>
            <div class="mainbottom3">
                <h1>Sign up & get
                    20% off</h1>
                    <p>Be the frist to know about the
                        latest fashion news and get exclusive offers</p>
                        <button class="sbtn">SIGN UP</button>
            </div>
        </div>
    </div>
  )
}

export default Container2