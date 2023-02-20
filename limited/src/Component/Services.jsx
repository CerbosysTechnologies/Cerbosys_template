import React from 'react';
import servicesImg from '../images/2.png'
import servicesImg1 from '../images/3.png'



const Services = () => {
    return (
      <section id="servicesCarousel" className="services services-layout2 services-carousel pt-0 mt-120 bg-img" style={{ backgroundImage: `url(${servicesImg})` , backgroundSize: "cover", backgroundPosition: "center center"}}>
        
      <div className="container">
        <div className="row heading mb-40">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <span className="heading__subtitle">Fast Growing Industrial &amp; Manufacturing Estates.</span>
            <h2 className="heading__title">Provides High Performance Services For Multiple Industries And Technologies!</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <p className="heading__desc">Yet those that embrace change are thriving, building bigger, better, faster, and
              stronger products than ever before. You are helping to lead the charge; we can help you build on your past
              successes and prepare for future.</p>
            <div className="d-flex">
              <a href="#" className="btn btn__primary mt-30 mr-30">Our Services</a>
              <div className="contact-chip mt-30">
                <div className="contact__chip-img">
                  <img src={servicesImg1} alt="avatar"/>
                </div>
                <div className="contact__chip-info">
                  <h6>(002) 01061245741</h6>
                  <span>Sales Representative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="carousel owl-carousel carousel-dots owl-loaded owl-drag" data-slide="3" data-slide-md="2" data-slide-sm="1" data-autoplay="true" data-nav="false" data-dots="true" data-space="30" data-loop="true" data-speed="800">
           
          <div className="owl-stage-outer">
          {/* style="transform: translate3d(-1380px, 0px, 0px); transition: all 0.25s ease 0s; width: 4140px;" */}
            <div className="owl-stage">
             
            
     <div className="owl-item cloned" style={{width: "315px", marginRight: "30px"}}><div className="service-item">
              <div className="service__content">
                <div className="service__icon">
                  {/* <i className="icon-tank-2"></i> */}
                </div>
                <h4 className="service__title">Petroleum &amp; Gas <br/> Energy</h4>
                <p className="service__desc">Petroleum and natural gas are nonrenewable sources of energy, a liquid found
                  underground that can be used.</p>
                <a href="#" className="btn btn__secondary btn__link">
                <i className="fa-solid fa-circle-arrow-right"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div></div><div className="owl-item cloned" style={{width: "315px", marginRight: "30px"}}><div className="service-item">
              <div className="service__content">
                <div className="service__icon">
                  {/* <i className="icon-factory-2"></i> */}
                </div>
                <h4 className="service__title">Construction &amp; <br/>Engineering</h4>
                <p className="service__desc">Professional discipline deals with designing, planning, construction and
                  infrastructures management such as roads, tunnels.</p>
                <a href="#" className="btn btn__secondary btn__link">
                <i className="fa-solid fa-circle-arrow-right"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div></div><div className="owl-item cloned" style={{width: "315px", marginRight: "30px"}}><div className="service-item">
              <div className="service__content">
                <div className="service__icon">
                  {/* <i className="icon-gears-2"></i> */}
                </div>
                <h4 className="service__title">Mechanical <br/> Engineering</h4>
                <p className="service__desc">Materials science principles to design, analyze, manufacture, and maintain
                  mechanical systems. It is one of the oldest .</p>
                <a href="#" className="btn btn__secondary btn__link">
                <i className="fa-solid fa-circle-arrow-right"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div></div></div></div>
           
           
        </div>
        </div>
      </div>
  </section>

    );
};

export default Services;