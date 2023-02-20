import React from 'react';
import aboutImg from '../images/2.jpg'

const About = () => {
    return (
        <section id="aboutLayout2" className="about about-layout2 pt-120 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9 offset-xl-1">
              <div className="heading heading-3 mb-50">
                <span className="heading__subtitle">Setting A Global Standard In Industrial Contracting.</span>
                <h2 className="heading__title">Provides High Performance Services For Multiple Industries And Technologies!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-6 col-xl-5">
              <div className="about__img mb-50">
                <img src={aboutImg} alt="about" className="img-fluid"/>
                <div className="cta__banner">
                  <div className="cta__icon">
                    {/* <i className="icon-gears"></i> */}
                  </div>
                  <h5 className="cta__title">Latest Solutions, And <br/> Decades Of Experience.</h5>
                  <a href="#" className="btn btn__white btn__link">
                  <i className="fa-solid fa-circle-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5">
              <div className="about__text mb-30">
                <p>Axima is a representative Industrial Construction operator providing full range of services and
                  soultions in the sphere of Mechanical Engineering worldwide.</p>
                <p>The world is changing faster than ever before, business is no exception. Axima industries are
                  threatened as technology disrupts and software “eats the world.” Yet those that embrace change are
                  thriving, building bigger, better, faster, and stronger products than ever before. You are helping to
                  lead the charge; we can help you build on your past successes and prepare for future.</p>
              </div>
              <ul className="list-items list-items-layout2 list-unstyled mb-30">
                <li>Quality Control System, 100% Satisfaction Guarantee</li>
                <li>Highly Professional Staff, Accurate Testing Processes</li>
                <li>Unrivalled workmanship, Professional and Qualified</li>
                <li>Environmental Sensitivity, Personalised solutions</li>
              </ul>
              <div className="about__signature mb-30">
                <a href="#" className="btn btn__primary btn__bordered mr-40">More About Us</a>
               
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-12">
                  <div className="counter-item">
                    <h4 className="counter">61</h4>
                    <p className="counter__desc">portfolio Completed In The Last 5 Years</p>
                  </div>
                  <div className="divider__line d-none d-xl-block mb-40"></div>
                </div> 
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-12">
                  <div className="counter-item">
                    <h4 className="counter">21</h4>
                    <p className="counter__desc">Happy Customers Who Trusted Us</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;