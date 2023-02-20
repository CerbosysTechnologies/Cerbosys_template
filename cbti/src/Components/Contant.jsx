import React from 'react';
import hImg1 from '../image/service-h-1.png'
import hImg2 from '../image/service-h-2.png'
import hImg3 from '../image/service-h-3.png'
import serviceImg1 from '../image/services-1-1.png'
import serviceImg2 from '../image/services-1-2.png'
import serviceImg3 from '../image/services-1-3.png'

const Contant = () => {
    return (
        <section className="service-one pt-120 pb-140">
            <img src={hImg1} className="service-one__icon-1" alt=""/>
            <img src={hImg2} className="service-one__icon-2" alt=""/>
            <img src={hImg3} className="service-one__icon-3" alt=""/>
            <div className="container">
                <div className="block-title text-center">
                    <p className="block-title__tagline">What We’re Offering</p>
                    <h2 className="block-title__title">We provide best services <br/> for your loans </h2>
                </div>
                <div className="row row-gutter-y-50">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src={serviceImg1}alt="Auto Car Loan"/>
                               
                            </div>
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="fa-solid fa-car"></i>
                                    </div>
                                    <h3 className="service-card__title">
                                        <a href="#">Auto Car Loan</a>
                                    </h3>
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                    <a href="#" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src={serviceImg2} alt="Wedding Loan"/>
                                {/* <!-- <a href="services-details.html"></a> --> */}
                            </div>
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="fa-solid fa-ring"></i>
                                    </div>
                                    <h3 className="service-card__title">
                                        <a href="#">Wedding Loan</a>
                                    </h3>
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                    <a href="#" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src={serviceImg3} alt="Property Loan"/>
                                <a href="#"></a>
                            </div>
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="fa-solid fa-house"></i>
                                    </div>
                                    <h3 className="service-card__title">
                                        <a href="#">Property Loan</a>
                                    </h3>
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                    <a href="#" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    );
};

export default Contant;