import React from 'react';
import testImg1 from '../image/testi-1-1.png'
import testImg2 from '../image/testi-1-2.png'
import testImg3 from '../image/testi-1-3.png'

const Test = () => {
    return (
        <section className="testimonials-one pt-120 mb--40">
            <div className="container">
                <div className="block-title text-center">
                    <p className="block-title__tagline">our testimonials</p>
                    <h2 className="block-title__title">What they’re talking about <br/> our company</h2>
                </div>
                <div className="row row-gutter-y-30">
                    <div className="col-lg-4 col-md-12 " >
                        <div className="testimonial-card">
                            <div className="testimonial-card__info">
                                <div className="testimonial-card__image">
                                    <img src={testImg1} alt="Delia Riley"/>
                                </div>
                                <div className="testimonial-card__meta">
                                    <div className="testimonial-card__stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <h3 className="testimonial-card__name">Delia Riley</h3>
                                    <p className="testimonial-card__designation">Finance Manager</p>
                                </div>
                            </div>
                            <span className="testimonial-card__line"></span>
                            <div className="testimonial-card__text">
                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                    would really like definitely come back here. Thank you for yours service.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 " >
                        <div className="testimonial-card">
                            <div className="testimonial-card__info">
                                <div className="testimonial-card__image">
                                    <img src={testImg2} alt="Essie Perez"/>
                                </div>
                                <div className="testimonial-card__meta">
                                    <div className="testimonial-card__stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <h3 className="testimonial-card__name">Essie Perez</h3>
                                    <p className="testimonial-card__designation">Finance Manager</p>
                                </div>
                            </div>
                            <span className="testimonial-card__line"></span>
                            <div className="testimonial-card__text">
                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                    would really like definitely come back here. Thank you for yours service.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 " >
                        <div className="testimonial-card">
                            <div className="testimonial-card__info">
                                <div className="testimonial-card__image">
                                    <img src={testImg3} alt="Dustin Dunn"/>
                                </div>
                                <div className="testimonial-card__meta">
                                    <div className="testimonial-card__stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <h3 className="testimonial-card__name">Dustin Dunn</h3>
                                    <p className="testimonial-card__designation">Finance Manager</p>
                                </div>
                            </div>
                            <span className="testimonial-card__line"></span>
                            <div className="testimonial-card__text">
                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                    would really like definitely come back here. Thank you for yours service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Test;