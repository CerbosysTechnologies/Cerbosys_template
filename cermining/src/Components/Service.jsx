import React from 'react';
import serviceImg from '../images/service-icon-1.png (1).png'
import serviceImg1 from '../images/service-icon-2.png (1).png'
import serviceImg2 from '../images/service-icon-3.png (1).png'
import serviceImg3 from '../images/service-icon-4.png (1).png'


const Service = () => {
    return (
        <div className="service-display-section section-top-space">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    
                    <div className="section-content section-content-space text-center">
                        <h4 className="title-tag text-gradient">OUR SERVICES</h4>
                        <h2 className="title">WHAT WE DO?</h2>
                    </div>
                    
                </div>
            </div>

            <div className="service-display-wrapper">
                <div className="row">
                    <div className="col-12 service-plus-icon-seperator">
                       
                        <div className="service-single-item">
                            <div className="icon">
                                <img className="img-fluid" src={serviceImg} alt=""/>
                            </div>
                            <div className="content">
                                <h4 className="title">Industrial Manufacturing</h4>
                                <a href="#" className="btn btn-sm btn-outline-primary text-uppercase">
                                    <span>details </span> </a>
                            </div>
                        </div>
                     
                        <div className="service-single-item">
                            <div className="icon">
                                <img className="img-fluid" src={serviceImg1} alt=""/>
                            </div>
                            <div className="content">
                                <h4 className="title">Automotive Manufacturing</h4>
                                <a href="#" className="btn btn-sm btn-outline-primary text-uppercase">
                                    <span>details </span> </a>
                            </div>
                        </div>
                      
                        <div className="service-single-item">
                            <div className="icon">
                                <img className="img-fluid" src={serviceImg2} alt=""/>
                            </div>
                            <div className="content">
                                <h4 className="title">Mechanical Engineering</h4>
                                <a href="#" className="btn btn-sm btn-outline-primary text-uppercase">
                                    <span>details </span> </a>
                            </div>
                        </div>
                      
                        <div className="service-single-item">
                            <div className="icon">
                                <img className="img-fluid" src={serviceImg3} alt=""/>
                            </div>
                            <div className="content">
                                <h4 className="title">Building Management</h4>
                                <a href="#" className="btn btn-sm btn-outline-primary text-uppercase">
                                    <span>details </span> </a>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center p-t-100">
                        <a href="service-list.html" className="btn btn-lg btn-primary">Others Service </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default Service;