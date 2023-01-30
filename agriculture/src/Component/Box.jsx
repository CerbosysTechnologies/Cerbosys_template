import React from 'react';
import boxImg from '../images/img1.jpg'
import boxImg1 from '../images/img2.jpg'
import boxImg2 from '../images/img3.jpg'
const Box = () => {
    return (
        <div className="three_box">
        <div className="container">
           <div className="row">
              <div className="col-md-4">
                 <div className="box_text">
                    <figure><img src={boxImg} alt="#"/></figure>
                 </div>
              </div>
              <div className="col-md-4">
                 <div className="box_text">
                    <figure><img src={boxImg1} alt="#"/></figure>
                 </div>
              </div>
              <div className="col-md-4">
                 <div className="box_text">
                    <figure><img src={boxImg2}alt="#"/></figure>
                 </div>
              </div>
           </div>
        </div>
     </div>
    );
};

export default Box;