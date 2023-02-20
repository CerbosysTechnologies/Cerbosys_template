import React from 'react';
import testImg from '../images/a (3).jpg'
const Test = () => {
    return (
        <div className="section-full content-inner bg-gray">
        <div className="container">
            <div className="section-head text-black text-center">
                <h2 className="title">Testimonials</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
            </div>
            <div className="testimonial-box-carousel owl-carousel p-b15 owl-btn-center-lr owl-btn-2 radius-no owl-btn-md owl-theme primary owl-dots-none wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                
                <div className="item">
                    <div className="testimonial-11 testimonial-box">
                        <div className="testimonial-pic">
                            <img src={testImg} alt=""/>
                        </div>
                        <div className="testimonial-detail quote-left quote-right">
                            <div className="testimonial-text">
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
                            </div>
                            <h5 className="testimonial-name text-primary m-t0 m-b5">David Matin</h5> <span className="testimonial-position">Student</span> 
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default Test;