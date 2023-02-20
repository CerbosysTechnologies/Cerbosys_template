import React from 'react';
import chImg from '../images/ch1.png'
import chImg1 from '../images/ch2.png'
import chImg2 from '../images/ch3.png'
const Choice = () => {
    return (
        <div className="choose">
        <div className="container">
           <div className="row">
              <div className="col-lg-6 col-md-7 ">
                 <div className="titlepage">
                    <h2>Why Choose Us</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                    <div className="award">
                       <div id="awa_ho" className="award_icon text_align_center">
                          <i><img src={chImg} alt="#"/>
                          </i>
                          <strong>client satisfaction</strong>
                       </div>
                       <div id="awa_ho" className="award_icon text_align_center">
                          <i><img src={chImg1} alt="#"/></i>
                          <strong>award</strong>
                       </div>
                       <div id="awa_ho" className="award_icon text_align_center">
                          <i><img src={chImg2} alt="#"/></i>
                          <strong>Trustable</strong>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
    );
};

export default Choice;