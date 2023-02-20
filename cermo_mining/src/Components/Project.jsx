import React from 'react';
import projectImg from '../images/pic10.jpg'

const Project = () => {
    return (
        <div className="section-full">
        <div className="row m-lr0">
            <div className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info bg-primary wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                <div className="text-white align-self-center ">
                    <h2>Talk to us about solving your mining problems</h2>
                    <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span className="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel. Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span className="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel.</p>
                    <a href="#" className="site-button btnhover13 white">View Project</a>
                </div>
            </div>
            <div className="col-xl-6 col-lg-12 p-lr0 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                <div className="dlab-box overlay-gallery-bx1 lightgallery">
                    <div className="dlab-thum dlab-img-overlay1 primary"> 
                        <a href="#"> <img className="img-cover" src={projectImg}  alt=""/> </a>
                        <div className="overlay-bx">
                            <div className="overlay-icon"> 
                               
                                <span data-exthumbimage={projectImg} data-src={projectImg} className="check-km" title="Solar Panels">		
                                  
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Project;