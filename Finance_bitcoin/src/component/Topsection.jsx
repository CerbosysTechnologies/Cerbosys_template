import React from 'react';
import sectionImg from "../images/top_img.png"
import '../css/bootstrap.min.css'
import '../css/style.css'
import "../css/responsive.css"


function Topsection(){
    return (
        <div id="top_section" className=" banner_main">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container-fluid">
                                    <div className="carousel-caption relative">
                                        <div className="row d_flex">
                                            <div className="col-md-6">
                                                <div className="con_img">
                                                    <figure>
                                                        <img src={sectionImg} alt="" />
                                                        </figure>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="bluid">
                                                    <h1>Progress <br/> Your Bitcoin Money Success</h1>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                                    </p>
                                                    <a className="read_more" href="Javascript:void(0)">Read More </a><a className="read_more" href="Javascript:void(0)">Get A Quote </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           </div>
                           
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Topsection;