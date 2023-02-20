import React from 'react';
import testImg from '../images/1.png.png'
import testImg1 from '../images/3 (1).png'

const Content = () => {
    return (
        <section id="banner2" className="banner banner-2 bg-overlay bg-overlay-theme-2 bg-parallax pt-120 pb-0 bg-img" style={{ backgroundImage: `url(${testImg1})` , backgroundSize: "cover", backgroundPosition: "center center"}}>
      
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <form className="contact__form-panel mr-50">
                <div className="row">
                  <div className="col-sm-12 contact__form-panel-header">
                    <h4>Get In Touch</h4>
                    <p>Complete control over products allows us to ensure our customers receive the best quality prices
                      and service.</p>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group"><input type="text" className="form-control" placeholder="Name"/></div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group"><input type="email" className="form-control" placeholder="Email"/></div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group"><input type="text" className="form-control" placeholder="Phone"/></div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group form-group-select">
                      <select className="form-control">
                        <option>Select Your Industry</option>
                        <option>Industry 1</option>
                        <option>Industry 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Additional Details!"></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <button type="submit" className="btn btn__primary btn__block">Submit Request</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="testimonials testimonials-white">
                <h6 className="testimonials__heading color-white">testimonials</h6>
                <div className="carousel owl-carousel carousel-arrows owl-loaded owl-drag" data-slide="1" data-slide-md="1" data-slide-sm="1" data-autoplay="true" data-nav="true" data-dots="false" data-space="0" data-loop="true" data-speed="800">
                
                <div className="owl-stage-outer">
                    <div className="owl-stage" >
                        <div className="owl-item cloned"style = {{width : "345px"}}>
                        <div className=" testimonial-item">
                    <div className="testimonial__content">
                      <p className="testimonial__desc">I’ve seen great companies serving industry solutions in my career. But
                        not to the point where you feel that comfort and trust that we get with Industic Company.</p>
                    </div>
                    <div className="testimonial__meta">
                      <div className="testimonial__thumb">
                        <img src={testImg} alt="author thumb" className="img-fluid"/>
                      </div>
                      <h5 className="testimonial__meta-title">Martin Hope</h5>
                      <p className="testimonial__meta-desc">Pro Dust</p>
                    </div>
                  </div></div>
                  
                  </div></div>
                  {/* <div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div><div className="owl-thumbs"></div> */}
                  </div>
              </div>     </div>   
            </div>
        </div>
      </section>
    );
};

export default Content;