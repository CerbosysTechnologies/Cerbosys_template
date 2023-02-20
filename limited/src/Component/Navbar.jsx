import React from 'react';
import background from '../images/p.jpg'

const Navbar = () => {
    return (
        <section id="slider1" className="slider slider-1">
        
            
        
          <div className="owl-item cloned" style={{width: "375 px"}}><div className="slide-item align-v-h bg-overlay bg-overlay-3 bg-img" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center center"}}>
            
            
        
            
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                  <div className="slide__content">
                    <span className="slide__subtitle">Positive Results From A Fast Growing Industrial &amp; Manufacturing
                      Estates.</span>
                    <h2 className="slide__title">Industrial Solutions With Best Machinery!</h2>
                    <p className="slide__desc">We produce positive results from ever-growing Industrial &amp; manufacturing
                      estates, we have established a corporate mandate to maintain strong core values.</p>
                    <a href="#" className="btn btn__primary mr-30">More About Us</a>
                    <a href="#" className="btn btn__white">Our Services</a>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
          

      </section>
    );
};

export default Navbar;