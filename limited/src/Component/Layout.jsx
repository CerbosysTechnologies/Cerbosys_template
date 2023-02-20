import React from 'react';
import aboutImg from '../images/8.jpg'

const Layout = () => {
    return (
        <section id="aboutLayout1" class="about about-layout1 pt-0 pb-120">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-5">
              <div class="heading mt-40 mb-30">
                <span class="heading__subtitle">Innovation From The Ground To The Skies.</span>
                <h2 class="heading__title">Customized Solutions Fits Every Industry Needs!</h2>
                <p class="heading__desc">Yet those that embrace change are thriving, building bigger, better, faster, and
                  stronger products than ever before, We can help build on your past successes and prepare for future.
                  Axima Group is one of the leading Industry.</p>
              </div>
              <a href="#" class="btn btn__primary btn__bordered mb-40">More About Us</a>
            </div>
            <div class="col-sm-12 col-md-10 col-lg-7">
              <div class="about__img">
                <img src={aboutImg} alt="about" class="img-fluid w-100"/>
                <div class="cta__banner d-flex">
                  <div class="cta__icon">
                    {/* <i class="icon-worker"></i> */}
                  </div>
                  <h5 class="cta__title">Join Us And Be Part Of Our Team!</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Layout;