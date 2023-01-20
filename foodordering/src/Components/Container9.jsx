import React from 'react'
import sale1 from "../images/sale1.png";
import sale2 from "../images/sale2.png";
import sale3 from "../images/sale3.png";

export const Container9 = () => {
  return (
    <>
    
    
    <div className="container9">
<div className="centerdiv">

<div className="headtext">
<h2>Special Offers on</h2>
<h1 className="color">Fresh Additions</h1>

</div>


<div className="saleimages">

<div className="sale"><img src={sale1} width="100%" height="100%" alt=""/></div>
<div className="sale"> <img src={sale2} width="100%" height="100%" alt=""/></div>
<div className="sale"><img src={sale3} width="100%" height="100%" alt=""/></div>


</div>
</div>

<div className="textinsert">

<div className="linea">
<p className="color">ORDER BY PHONE</p>
<p>DON T MISS OUT</p>

</div>
<div className="lineb"> <p className="color">BACK TO TOP</p> </div>

</div>
   </div>
    
    
    
    </>
  )
}
