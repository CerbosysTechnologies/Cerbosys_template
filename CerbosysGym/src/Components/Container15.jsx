import React from "react"
import cycle from "../images/cycle.png"
const Container15 = ()=>{
    return(
        <>
           <div class="container15">

<div class="cycleimage">
    <img src={cycle} width="100%" min-height="100%"  alt=""/>
</div>
<div class="form">
  <h1>Book a Appointment</h1>
 <div class="firstname">
    <input class="form_name" placeholder="First Name" type="text"/>
    <input class="form_name" placeholder="Last Name" type="text"/>
 </div>
<div class="form_dates">
<input class="form_time" placeholder="Date" type="text"/>
<input class="form_time" placeholder="Time" type="text"/>
<input class="form_time" placeholder="Phone" type="text"/>
</div>
<div class="inpt_btn">

    <input class="empty_input" type="text"/>
    <button class="abtn">Appointment</button>

</div>
</div>
</div>
        </>
    )
}
export default Container15