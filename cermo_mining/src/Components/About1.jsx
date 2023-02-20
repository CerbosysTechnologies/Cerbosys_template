import React from 'react';
import aboutImg1 from '../images/pic1.jpg'
import aboutImg2 from '../images/pic2.jpg'
import aboutImg3 from '../images/pic3.jpg'
import aboutImg4 from '../images/pic4.jpg'
import aboutImg5 from '../images/pic5.jpg'

import aboutImg6 from '../images/pic6.jpg'

const About1 = () => {
    return (
        <div className="section-full content-inner bg-gray">
        <div className="container">
            <div className="section-head text-black text-center">
                <h2 className="title">Quality With Dedication</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="dlab-box service-box-3">
                        <div className="dlab-media radius-sm dlab-img-overlay1"> 
                            <a href="#"><img src={aboutImg1} alt=""/></a> 
                        </div>
                        <div className="dlab-info">
                            <h4 className="title"><a href="#">Mining Engineering</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="dlab-box service-box-3">
                        <div className="dlab-media radius-sm dlab-img-overlay1"> 
                            <a href="#"><img src={aboutImg6} alt=""/></a> 
                        </div>
                        <div className="dlab-info">
                            <h4 className="title"><a href="#">Exploration Management</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="dlab-box service-box-3">
                        <div className="dlab-media radius-sm dlab-img-overlay1"> 
                            <a href="#"><img src={aboutImg3} alt=""/></a> 
                        </div>
                        <div className="dlab-info">
                            <h4 className="title"><a href="#">Engineering Services</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="dlab-box service-box-3">
                        <div className="dlab-media radius-sm dlab-img-overlay1"> 
                            <a href="#"><img src={aboutImg4} alt=""/></a> 
                        </div>
                        <div className="dlab-info">
                            <h4 className="title"><a href="#">Maintenance & Repair</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="dlab-box service-box-3">
                        <div className="dlab-media radius-sm dlab-img-overlay1"> 
                            <a href="#"><img src={aboutImg5} alt=""/></a> 
                        </div>
                        <div className="dlab-info">
                            <h4 className="title"><a href="#">Engineering Services</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="dlab-box service-box-3">
                        <div className="dlab-media radius-sm dlab-img-overlay1"> 
                            <a href="#"><img src={aboutImg2} alt=""/></a> 
                        </div>
                        <div className="dlab-info">
                            <h4 className="title"><a href="#">Maintenance & Repair</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About1;