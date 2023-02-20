import React from 'react';
import heroImg from '../images/hero-slider-1.jpg'

const Hero = () => {
    return (
        <div className="hero-section ">
        <div className="hero-wrapper">
          
            <div className="hero-slider-active swiper-container">
              
                <div className="swiper-wrapper">
                   
                    <div className="hero-slider-single-item swiper-slide">
                       
                        <div className="hero-bg">
                            <img src={heroImg} alt=""/>
                        </div>
                     
                        <div className="hero-content">
                            <div className="container">
                                <div className="col-xl-8 col-lg-10 offset-lg-1 col-12">
                                    <div className="content-box">
                                        <h2 className="title">Best industrial</h2>
                                        <h3 className="sub-title">SOLUTION FOR YOUR COMPANY</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                   
                  
                   
                </div>
               

            </div>
        </div>
    </div>
    );
};

export default Hero;