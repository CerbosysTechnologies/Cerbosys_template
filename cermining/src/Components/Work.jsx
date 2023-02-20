import React from 'react';
import workImg from '../images/work.png'
import workImg1 from '../images/work1.png'
import workImg2 from '../images/work3.png'
import arrowImg from '../images/working-process-arrow-1.png.png'
import arrowImg2 from '../images/working-process-arrow-2.png.png'


const Work = () => {
    return (
        <div className="working-process-display-section section-top-space section-inner-gap section-inner-bg pos-relative overflow-hidden">
        <div className="working-process-shape"></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                
                    <div className="section-content mb-0 mb-md-6">
                        <h4 className="title-tag text-gradient">WORKING PROCESS</h4>
                        <h2 className="title">HOW IT WORKS?</h2>
                    </div>
                 
                </div>
                <div className="working-process-display-wrapper">
                    <div className="row">
                        <div className="col-12">
                          
                            <div className="working-process-single-item pos-absolute">
                                <div className="box">
                                    <div className="icon">
                                        <img className="img-fluid" src={workImg} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3 className="title">Planing</h3>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="working-process-single-item pos-absolute">
                                <div className="box">
                                    <div className="icon">
                                        <img className="img-fluid" src={workImg1} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3 className="title">Development</h3>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="working-process-single-item pos-absolute">
                                <div className="box">
                                    <div className="icon">
                                        <img className="img-fluid" src={workImg2} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h3 className="title">Launch</h3>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="working-process-display-arrow arrow-1">
                                <img src={arrowImg}alt=""/>
                            </div>
                            <div className="working-process-display-arrow arrow-2">
                                <img src={arrowImg2} alt=""/>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="video-wrapper">
                    <div className="row">
                        <div className="col-12 text-end">
                            <div className="video-btn">
                               
                                <div className="text">
                                    Watch 2 min <br/> Intro Video.
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    );
};

export default Work;