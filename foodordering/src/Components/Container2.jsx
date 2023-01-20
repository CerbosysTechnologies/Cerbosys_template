import React from 'react'
import noodles from "../images/noodles-300x225.jpg.png"
import waffles from "../images/waffles-300x225.jpg.png"
import donuts from "../images/donuts-300x225.jpg.png"
import soup from "../images/soup-hokkaido-300x225.jpg.png"
export const Container2 = () => {
  return (
    <>
    <div className="container2">
   
<div className="foodbox">

    <div className="forimg"><img src={noodles} height="100%" width="100%" alt=""/></div>
    <h3>Maze-Men</h3>
    <p>$13.50</p>
</div>
<div className="foodbox">
    <div className="forimg"><img src={waffles} height="100%" width="100%" alt=""/></div>
    <h3>Belgian Waffles</h3>
    <p>$12.00</p>
</div>
<div className="foodbox">
    <div className="forimg"><img src={donuts} height="100%" width="100%" alt=""/></div>
    <h3>Doughnuts</h3>
    <p>$3.00</p>
</div>
<div className="foodbox">
    <div className="forimg"><img src={soup}height="100%" width="100%" alt=""/></div>
    <h3>Hokkaido</h3>
    <p>$10.00</p>
</div>


</div>
<h2 className="head">Order your favorites</h2>
    
    
    
    </>
  )
}
