import React from "react"
import logo from "../images/logo.png"
const Container = ()=>{
    return(
        <>
         <div class="container">

<div class="navbar">
<div class="logo">
<div class="square">

<img src={logo} width="50px" alt=""/>
<h3>MUSCLE</h3>
</div>
<div id=""></div>
<div id="triangle-down"></div>
</div>
<div class="nav_list">


<ul>
 <li id="color">HOME</li>
<li>PROGRAM</li>
<li>COACHES</li>
<li>SCHEDULE</li>
<li>ABOUT</li>
<li>BLOG </li>
<li>CONTACT</li>


</ul>
</div>
<div class="menu">
<i class="bi bi-list"></i>
</div>

</div>


<div class="center_text">
<div class="text">
<h1>CHALLENGE</h1> 
<h1>YOURSELF</h1>
<p>G e t Y o u r B o d y F i t</p>
</div>

</div>



</div>
        </>
    )
}
export default Container