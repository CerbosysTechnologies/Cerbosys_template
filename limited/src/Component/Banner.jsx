import React from 'react';
import bannerImg from '../images/3.jpg'
import bannerImg1 from '../images/1 (3).jpg'

const Banner = () => {
    return (
        <section id="banner1" className="banner banner-1 fancybox-white p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 background-banner bg-overlay bg-overlay-2 bg-img" style={{ backgroundImage: `url(${bannerImg})` , backgroundSize: "cover", backgroundPosition: "center center", marginTop: "100px"}}>
              
              <div className="cta__banner bg-img"  style={{ backgroundImage: `url(${bannerImg1})` , backgroundSize: "cover", backgroundPosition: "center center"}}>
                
                <h5 className="cta__title">We Are Open For Opportunities!</h5>
                <p className="cta__desc">Building relationships and portfolio that last. Serving an impressive list of
                  long-term clients with
                  experience and expertise in industries.</p>
                <a href="#" className="btn btn__white btn__link">
                <i class="fa-solid fa-circle-arrow-right"></i>
                  <span>View Our Works</span>
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 inner-padding bg-overlay bg-overlay-theme bg-parallax bg-img" style={{ backgroundImage: `url(${bannerImg1})` , backgroundSize: "cover", backgroundPosition: "center center"}}>
              
              <div className="heading heading-white mb-40">
                <h3 className="heading__title">Providing Full Range Of High Services &amp; Soultions Worldwide.</h3>
                <p className="heading__desc">As a diversified construction management, design-build, and general
                  contracting firm, Axima Group is recognized as one of the World's leading Industry and Manufacturing
                  Corporation!</p>
              </div>
              <div className="row">
               
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="fancybox-item">
                    <div className="fancybox__icon">
                    <i class="fa-solid fa-dumpster-fire"></i>
                    </div>
                    <div className="fancybox__content">
                      <h4 className="fancybox__title">Environmental Sensitivity</h4>
                      <p className="fancybox__desc">The world of international supply chains involves a myriad of unknown
                        risks and challenging regulations.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="fancybox-item">
                    <div className="fancybox__icon">
                    <i class="fa-solid fa-file-lines"></i>
                    </div>
                    <div className="fancybox__content">
                      <h4 className="fancybox__title">Personalised Solutions</h4>
                      <p className="fancybox__desc">Our facilities meet high security requirements and are certified to the
                        highest local standards.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <a href="#" className="btn btn__white btn__bordered btn__lg">Schedule An Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;