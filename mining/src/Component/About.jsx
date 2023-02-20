import React from 'react';
import aboutImg from '../images/about.png'

const About = () => {
    return (
      
            
        <div className="about">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-7">
                  <div className="titlepage">
                     <h2>About Our Company</h2>
                     <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</span>
                     <a className="read_more" href="Javascript:void(0)"> Read More</a>
                  </div>
               </div>
               <div className="col-md-5">
                  <div className="about_img">
                     <figure><img src={aboutImg} alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default About;