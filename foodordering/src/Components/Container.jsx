import React from "react";
import logo from "../images/logo.png"



const Container = ()=>{
  
       
    
    return (

        <>







      
      <div className="container">

<div className="textbox">
    <div className="icon">
     <div className="logo"><img src={logo} width="100%" alt=""/></div>
        <h1>FOOD-E</h1>
    </div>
    <h1 className="heading">

        Fresh <span className="color">food delivery</span>
        <br />
       from your favorite bistro


<span className="color">?</span>
    </h1>
        


        <div className="btns">
            <button className="btn1">Order Now</button>
            <button className="btn2">How it works</button>
        </div>
        <div className="serachbar">


<div className="inputbutton">
<input className="inputsearchbar" placeholder="Search Products..." type="text" name="" id="" />
<button className="serachbutton"></button>
</div>

<div className="secondserch">
    
<label>Select a Category:</label>

<select name="cars" className="cars">
  <option value="volvo"></option>
</select>
<button className="tag"></button>




</div>
</div>
       
</div>

<div className="background">

</div>


    </div>





   
        
        
        
        
        </>
    )
}
export default Container