import React from 'react';

import projectImg from "../Component/images/img-6.png"
import projectImg1 from "../Component/images/img-2.png"
import projectImg3 from "../Component/images/search-icon.png"
import projectImg2 from "../Component/images/img-3.png"
import projectImg4 from "../Component/images/img-4.png"
import projectImg5 from "../Component/images/img-5.png"
import iconImg from "../Component/images/icon-3.png"
import iconImg1 from "../Component/images/icon-4.png"

import iconImg2 from "../Component/images/icon-2.png"
import iconImg3 from "../Component/images/icon-1.png"

function Project ()  {
    return (
        <div>
        <div className="project_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="project_main">
                <h1 className="services_taital">Our projects</h1>
                <p className="services_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
                <div className="moremore_bt"><a href="#">Read More </a></div>
                <div className="image_6">
                    <img src={projectImg} alt="" />

                    </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="images_main">
                <div className="images_left">
                  <div className="container_1">
                   <img src={projectImg1}  alt="Avatar" className="image" style={{width:"100%"}} />
                    <div className="middle">
                      <div className="text">
                       <img src={projectImg3} alt="" />

                        </div>
                      <h2 className="fact_text">Established Fact</h2>
                    </div>
                  </div>
                  <div className="container_1">
                   <img src={projectImg2} alt="Avatar" className="image" style={{width:"100%"}} />
                    <div className="middle">
                      <div className="text">
                      <img src={projectImg3} alt="" />

                        </div>
                      <h2 className="fact_text">Established Fact</h2>
                    </div>
                  </div>
                </div>
                <div className="images_right">
                  <div className="container_1">
                  <img src={projectImg4} alt="Avatar" className="image" style={{width:"100%"}} />
                    <div className="middle">
                      <div className="text">
                      <img src={projectImg3} alt="" />

                        </div>
                      <h2 className="fact_text">Established Fact</h2>
                    </div>
                  </div>
                  <div className="container_1">
                  <img src={projectImg5} alt="Avatar" className="image" style={{width:"100%"}} />
                    <div className="middle">
                      <div className="text">
                      <img src={projectImg3} alt="" />

                        </div>
                      <h2 className="fact_text">Established Fact</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project_section_2 layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1">
               <img src={iconImg} alt="" />

                </div>
            <h3 className="accounting_text_1">1000+</h3>
            <p className="yers_text">Years of Business</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1">
            <img src={iconImg1} alt="" />

                </div>
            <h3 className="accounting_text_1">20000+</h3>
            <p className="yers_text">Projects Delivered</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1">
                <img src={iconImg2} alt="" />

                </div>
            <h3 className="accounting_text_1">10000+</h3>
            <p className="yers_text">Satisfied Customers</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1">
               <img src={iconImg3} alt="" />

                </div>
            <h3 className="accounting_text_1">1500+</h3>
            <p className="yers_text">Services</p>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
};

export default Project