import React from 'react';
import teamimg1 from '../images/a (1).jpg'
import teamimg2 from '../images/a (2).jpg'
import teamimg3 from '../images/a (3).jpg'
import teamimg4 from '../images/a (4).jpg'

const Team = () => {
    return (
        <div className="section-full bg-gray content-inner">
        <div className="container">
            <div className="section-head text-black text-center">
                <h2 className="title">Our Team</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
            </div>
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 col-sm-6 wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="dlab-box m-b30 dlab-team9">
                        <div className="dlab-media dlab-media-right">
                            <a href="#">
                                <img alt="" src={teamimg4}/>
                            </a>
                            <div className="dlab-info-has">
                                <ul className="dlab-social-icon">
                                    <li><a className="site-button fab fa-facebook-f" href="#"></a></li>
                                    <li><a className="site-button fab fa-twitter" href="#"></a></li>
                                    <li><a className="site-button fab fa-linkedin-in" href="#"></a></li>
                                    <li><a className="site-button fab fa-pinterest-p" href="#"></a></li>
                                </ul>
                            </div>
                            <div className="clearfix">
                                <h4 className="dlab-title"><a href="#">Nashid Martines</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 wow bounceInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="dlab-box m-b30 dlab-team9">
                        <div className="dlab-media dlab-media-right">
                            <a href="#">
                            <img alt="" src={teamimg3}/>
                            </a>
                            <div className="dlab-info-has">
                                <ul className="dlab-social-icon">
                                    <li><a className="site-button fab fa-facebook-f" href="#"></a></li>
                                    <li><a className="site-button fab fa-twitter" href="#"></a></li>
                                    <li><a className="site-button fab fa-linkedin-in" href="#"></a></li>
                                    <li><a className="site-button fab fa-pinterest-p" href="#"></a></li>
                                </ul>
                            </div>
                            <div className="clearfix">
                                <h4 className="dlab-title"><a href="#">Konne Backfield</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="dlab-box m-b30 dlab-team9">
                        <div className="dlab-media dlab-media-right">
                            <a href="#">
                            <img alt="" src={teamimg2}/>
                            </a>
                            <div className="dlab-info-has">
                                <ul className="dlab-social-icon">
                                    <li><a className="site-button fab fa-facebook-f" href="#"></a></li>
                                    <li><a className="site-button fab fa-twitter" href="#"></a></li>
                                    <li><a className="site-button fab fa-linkedin-in" href="#"></a></li>
                                    <li><a className="site-button fab fa-pinterest-p" href="#"></a></li>
                                </ul>
                            </div>
                            <div className="clearfix">
                                <h4 className="dlab-title"><a href="#">Hackson Willingham</a></h4>									
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="dlab-box m-b30 dlab-team9">
                        <div className="dlab-media dlab-media-right">
                            <a href="#">
                            <img alt="" src={teamimg1}/>
                            </a>
                            <div className="dlab-info-has">
                                <ul className="dlab-social-icon">
                                    <li><a className="site-button fab fa-facebook-f" href="#"></a></li>
                                    <li><a className="site-button fab fa-twitter" href="#"></a></li>
                                    <li><a className="site-button fab fa-linkedin-in" href="#"></a></li>
                                    <li><a className="site-button fab fa-pinterest-p" href="#"></a></li>
                                </ul>
                            </div>
                            <div className="clearfix">
                                <h4 className="dlab-title"><a href="#">Konne Backfield</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Team;