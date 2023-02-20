import React from 'react';
import testImg from '../images/ul.png'

const Test = () => {
    return (
        <div className="testimonial-display-section section-top-space section-inner-gap section-inner-bg section-fluid pos-relative">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5">
                      
                        <div className="section-content section-content-space text-center text-xxl-start">
                            <h4 className="title-tag text-gradient">happy customer</h4>
                            <h2 className="title title-dash">SAY ABOUT US.</h2>
                        </div>
                      

                        <div className="tab-content">
                            <div className="testimonial-single-item tab-pane fade show active" id="testimonial-1" role="tabpanel">
                                <div className="content">
                                    <p className="text">It is a long established fact that a reader will
                                        distracted by the reasdable and content page
                                        looking at it and ayout the point using is that
                                        normal distribution of letters.</p>

                                    <h2 className="name">Tonya Anderson</h2>
                                    <span className="designation">CEO OF INDUSTE, USA</span>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    <div className="col-xl-6 offset-lg-1 d-none d-xxl-block">
                        <div className="qu-icon">
                            <img src={testImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Test;