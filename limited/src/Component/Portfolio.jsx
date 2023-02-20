import React from 'react';
import portrImg from '../images/1 (3).jpg'
import portrImg1 from  '../images/c3.jpg'
import portrImg2 from  '../images/c.jpg'
import portrImg3 from  '../images/c.jpg'
import portrImg4 from  '../images/c.jpg'
import portrImg5 from  '../images/1 (4).jpg'
import portrImg7 from  '../images/c.jpg'

import portrImg6 from  '../images/c3.jpg'


const Portfolio = () => {
    return (
        <section id="portfolioCarousel" className="portfolio-carousel portfolio-classNameic pt-90 pb-70">
        <div className="container">
          <div className="row mb-50">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="heading">
                <span className="heading__subtitle">We Work With Global Industries!</span>
                <h3 className="heading__title mb-0">Featured portfolio</h3>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="cta__banner bg-img"style={{ backgroundImage: `url(${portrImg})` , backgroundSize: "cover", backgroundPosition: "center center"}}>
                
                <h5 className="cta__title">Dedicated Customer <br/> Teams &amp; An Agile Services</h5>
                <p className="cta__desc">Building relationships and portfolio that last. Serving an impressive list of
                  long-term clients with
                  experience and expertise in industries.</p>
                <a href="#" className="btn btn__white btn__link">
                <i className="fa-solid fa-circle-arrow-right"></i>
                  <span>View Our Works</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="carousel owl-carousel carousel-arrows owl-loaded owl-drag" data-slide="3" data-slide-md="2" data-slide-sm="1" data-autoplay="true" data-nav="true" data-dots="false" data-space="30" data-loop="true" data-speed="800"> 
             {/* style={{transform: "translate3d(-1500px, 0px, 0px)", transition: "all 0.25s ease 0s", width: "4125px"}} */}
              <div className="owl-stage-outer" >
                <div className="owl-stage" >
                    
                
                <div className="owl-item cloned" style={{width: "325px", marginRight: "30px" , marginLeft : "15px"}}><div className="portfolio-item">
                  <div className="portfolio__img">
                  <img src={portrImg5} alt="portfolio img"/>
                    <a href="#" className="view__icon">View</a>
                  </div>
                  <div className="portfolio__content">
                    <h4 className="portfolio__title"><a href="#">Floride Chemicals Factory</a></h4>
                    <div className="portfolio__cat">
                      <a href="#">Chemicals</a><a href="#">oil &amp; Gas</a>
                    </div>
                  </div>
                </div></div>
                <div className="owl-item cloned" style={{width: "325px", marginRight: "30px", marginLeft : "15px"}}><div className="portfolio-item">
                  <div className="portfolio__img">
                  <img src={portrImg6} alt="portfolio img"/>
                    <a href="#" className="view__icon">View</a>
                  </div>
                  <div className="portfolio__content">
                    <h4 className="portfolio__title"><a href="#">Highway Energy Station</a></h4>
                    <div className="portfolio__cat">
                      <a href="#">Construction </a><a href="#">Energy</a>
                    </div>
                  </div>
                </div>
                </div>
                <div className="owl-item cloned" style={{width: "325px", marginRight: "30px", marginLeft : "15px"}}><div className="portfolio-item">
                  <div className="portfolio__img">
                  <img src={portrImg7} alt="portfolio img"/>
                    <a href="#" className="view__icon">View</a>
                  </div>
                  <div className="portfolio__content">
                    <h4 className="portfolio__title"><a href="#">Villy Manufacturing Inc</a></h4>
                    <div className="portfolio__cat">
                      <a href="#">Engineering</a><a href="#">Auto</a>
                    </div>
                  </div>
                </div></div>
                </div></div>
               {/* <div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div><div className="owl-thumbs"></div></div>*/}
            </div>  
          </div>
          </div>
        </div>
      </section>
    );
};

export default Portfolio;