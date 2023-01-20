import React from 'react'
import one from "../images/1.png"
import two from "../images/2.png"
import three from "../images/3.png"

import four from "../images/4.png"
import five from "../images/5.png"
import six from "../images/6.png"
import seven from "../images/7.png"

import eight from "../images/8.png"
import nine from "../images/9.png"
export const Container3 = () => {
  return (
   <>
   
   

   <div className="container3">
   
   <div className="main"> 
       
   <div className="backbox">
       <h4>CATEGRIOES</h4>
       <div className="buttons">
       <button className="btnn">Burgers</button>
       <button className="btnn">Fish</button>
       <button className="btnn">Meat</button>
       <button className="btnn">Noodles</button>
       <button className="btnn">Pastries</button>
       <button className="btnn">Salad</button>
       <button className="btnn">Soups</button>
       </div>
       <h5>DIET TYPE</h5>
       <div className="inputs">
<div className="checkbox"><input type="checkbox" name="" id=""/> <p>Gluten Free(9 )</p> </div>
<div className="checkbox"><input type="checkbox" name="" id=""/> <p>Vegan(8 )</p></div>
<div className="checkbox"><input type="checkbox" name="" id=""/> <p>Vegetarian(16 )</p> </div>
           
       </div>
       <p>price</p>
       <div className="design"></div>

       <div className="price">

           <div className="a">$0.00</div>
           <div className="a">$30.00</div>
       </div>
   </div>
   </div>
  
   <div className="foodboxes">
    
<div className="food1">
   <div className="forimg2"><img src={one} width="100%" height="100%" alt=""/> </div>
   <h3>Grilled Eggplant Salad</h3>
   <p>$14.00</p>
</div>
<div className="food1">
   <div className="forimg2"><img src={two} width="100%" height="100%" alt=""/> </div>
   <h3>Vegan Burger</h3>
   <p>$12.00</p>
</div>
<div className="food1">
   <div className="forimg2"><img src={three} width="100%" height="100%" alt=""/> </div>
   <h3>Fish & Chips</h3>
   <p>$13.00</p>
</div>
<div className="food1">
   <div className="forimg2"><img src={four} width="100%" height="100%" alt=""/> </div>
   <h3>Smoothie</h3>
   <p>$6.00 $4.00</p>
</div>
<div className="food1">
   <div className="forimg2"><img src={five} width="100%" height="100%" alt=""/> </div>
   <h3>Poke Salad</h3>
   <p>$11.00</p>
</div>
<div className="food1">
   <div className="forimg2"><img src={six} width="100%" height="100%" alt=""/> </div>
   <h3>Sandwiched Burger</h3>
   <p>$11.00</p>
</div>
<div className="food1">
   <div className="forimg2"><img src={seven} width="100%" height="100%" alt=""/> </div>
   <h3>Miso Ramen</h3>
   <p>$14.00</p>
</div>
<div className="food1">
   <div className="forimg2"><img src={eight} width="100%" height="100%" alt=""/> </div>
   <h3>Citrus Crepes</h3>
   <p>$12.00</p>
</div>
<div className="food1">
   <div className="forimg2"> <img src={nine} width="100%" height="100%" alt=""/></div>
   <h3>Roasted Pork Belly</h3>
   <p>$17.00</p>
</div>



   </div>
   <div className="next">
       <button className="btna">1</button>
       <button>2</button>
       <button>3</button>
   </div>
</div>




   
   
   
   </>
  )
}
