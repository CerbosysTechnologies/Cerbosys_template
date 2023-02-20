import React from 'react'

function Inputfolder() {
  return (
    <div class="input_buttons">
    <div class="first_button">CHECK <br/>AVAILABILITY</div>

    <div class="inputs">
        <label for="">Arrival Date :</label>
      <input class="date" type="date" name="" id=""/>
      <label for="">Departure Date :</label>
      <input  class="date" type="date"/>
      <label for="cars">Adults:</label>

<select class="check">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
</select>

<label for="cars">Children:</label>

<select class="check">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
</select>
<button class="checkbutton">
        CHECK
</button>
    </div>

   
</div>
  )
}

export default Inputfolder