import React from "react"
import instagram from "../images/instagram.png"
import first from "../images/gallery2.png"
import second from "../images/gallery3.png"
import third from "../images/gallery4.png"
const Container16 = ()=>{
    return(
        <>
            <div class="container16">

<div class="gallery"><img src={instagram} width="100%" height="100%" alt=""/></div>
<div class="gallery"><img src={first}  width="100%" height="100%" alt=""/></div>
<div class="gallery"><img width="100%" height="100%" src={second} alt=""/></div>
<div class="gallery"><img src={third}
    width="100%" height="100%" alt=""/></div>

</div>
        </>
    )
}
export default Container16