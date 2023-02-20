import React from 'react';
import boxImg from '../images/ser1.png'
import boxImg1 from '../images/ser2.png'
import boxImg2 from '../images/ser3.png'

const Box = () => {
    return (
        <div className="three_box">
        <div className="container">
           <div className="row">
              <div className="col-md-3">
                 <div id="text_hover" className="const text_align_center">
                    <i><img src={boxImg} alt="#"/></i>
                    <span>construction services</span>
                 </div>
              </div>
              <div className="col-md-3">
                 <div id="text_hover" className="const text_align_center">
                    <i><img src={boxImg1} alt="#"/></i>
                    <span>RECONSTRUCTION</span>
                 </div>
              </div>
              <div className="col-md-3">
                 <div id="text_hover" className="const text_align_center">
                    <i><img src={boxImg2} alt="#"/></i>
                    <span>ELECTRICAL services</span>
                 </div>
              </div>
           </div>
        </div>
     </div> 
    
    );
};

export default Box;