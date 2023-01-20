import React from 'react';
import burger from "../images/burger_a.png";
import fish from "../images/fish_b.png";
import meat from "../images/meat_c.png";
import nodels from "../images/nodels_d.png";
import pastried from "../images/pastried_e.png";
import salad from "../images/salad_f.png";
export const Container5 = () => {
  return (

    
    <div className="container5">
    <div className="flexfood"><img src={burger} width="100%" height="100%" alt=""/></div>
    <div className="flexfood"><img src={fish} width="100%" height="100%" alt=""/></div>
    <div className="flexfood"><img src={meat} width="100%" height="100%" alt=""/></div>
    <div className="flexfood"><img src={nodels} width="100%" height="100%" alt=""/></div>
    <div className="flexfood"><img src={pastried} width="100%" height="100%" alt=""/></div>
    <div className="flexfood"> <img src={salad} width="100%" height="100%" alt=""/></div>
    
</div>
    
    
    
    
    

  )
}

