import React from "react"
import first from "../images/first.png"
import second from "../images/second.png"
import third from "../images/third.png"
import fourth from "../images/fourth.png"


const Container5 = ()=>{
    return(
        <>
         <div class="container5">
<div id="a" class="horizontal_div">
    <div class="top1"><img class="images" width="100%" height="100%" src={first} alt=""/></div>
    <div class="bottom1">
        <p>Owner / Head Coach</p>
        <h1>Mark Brook</h1>
        <p>A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth.</p>
    </div>
</div>
<div id="b" class="horizontal_div">
    <div class="bottom1">
        <p>Owner / Head Coach</p>
        <h1>Sarah Henderson</h1>
        <p>A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth.</p>
    </div>
    <div class="top1"><img width="100%" height="100%" class="images" src={second} alt=""/></div>
</div>
<div id="c" class="horizontal_div">
    <div class="top1"><img width="100%" height="100%" class="images" src={third} alt=""/></div>
    <div class="bottom1">
        <p>Owner / Head Coach</p>
        <h1>George Hump</h1>
        <p>A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth.</p>
    </div>
</div>
<div id="d" class="horizontal_div">
    <div class="bottom1">
        <p>Owner / Head Coach</p>
        <h1>Victor Hump</h1>
        <p>A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth.</p>
    </div>
    <div class="top1"><img class="images" width="100%" height="100%" src={fourth} alt=""/></div>
</div>





    </div>
        
        </>
    )
}
export default Container5