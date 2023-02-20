import React from 'react';
import aboutImg from '../images/about-display-bg.jpg'

const About = () => {
    return (
        <div className="about-display-section section-top-space">
            <div className="about-display-wrapper">
                <div className="container">
                    <div className="box">
                     
                            <div className="image">
                                <img src={aboutImg} alt=""/>
                            </div>
                     
                        <div className="content">
                            <div className="left">
                                <h4 className="sup-title text-gradient">ABOUT COMPANY</h4>
                                <h2 className="title">CONNECT WITH <span className="orange-text-marker-dark">INDUSTE.</span>
                                </h2>
                                <h3 className="sub-title">WE HAVE <span className="orange-text-marker-light">28 YEARS</span> OF
                                    EXPERIENCE
                                    with 100% job success.</h3>
                            </div>
                            <div className="right">
                                <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard printer.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard printer.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.</p>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;