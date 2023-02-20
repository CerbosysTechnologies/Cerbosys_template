import React from 'react';
import logoImg from '../images/logo (1).png'
import logoImg1 from '../images/logo (2).png'
import logoImg2 from '../images/logo3.png'
import displayImg from '../images/project-display-1.png'
import displayImg1 from '../images/project-display-3.png.png'
import displayImg2 from '../images/project-display-2.png.png'
import displayImg3 from '../images/project-display-4.png.png'

const Counter = () => {
    return (
        <div classNameName='main' >
        <div className="counter-display-section section-top-space">
        <div className="container">
            <div className="counter-wrapper">
              
                <div className="counter-single-item">
                    <div className="icon">
                        <img src={logoImg} alt=""/>
                    </div>
                    <div className="content">
                        <h2 className="number"><span className="counter">2,589</span></h2>
                        <span className="text">Happy Clients</span>
                    </div>
                </div>
              
                <div className="counter-single-item">
                    <div className="icon">
                        <img src={logoImg1} alt=""/>
                    </div>
                    <div className="content">
                        <h2 className="number"><span className="counter">589</span>K</h2>
                        <span className="text">Projects Done</span>
                    </div>
                </div>
               
                <div className="counter-single-item">
                    <div className="icon">
                        <img src={logoImg2} alt=""/>
                    </div>
                    <div className="content">
                        <h2 className="number"><span className="counter">3,462</span></h2>
                        <span className="text">Cup of coffee</span>
                    </div>
                </div>
             
                <div className="separator"></div>
                <div className="separator"></div>
            </div>
        </div>
    </div>
    <div className="project-display-section section-top-space section-fluid">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    
                        <div className="section-content section-content-space text-center">
                            <h4 className="title-tag text-gradient">OUR PORTFOLIO</h4>
                            <h2 className="title">SOME PROJECT’S</h2>
                        </div>
                     
                    </div>
                </div>
                <div className="project-display-wrapper pos-relative">
                    <div className="row">
                        <div className="col-12">
                            <div className="default-slider default-arrow">
                               
                                <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                                   
                                    <div className="swiper-wrapper" id="swiper-wrapper-855ee821ccf22a53" aria-live="off" style={{transform: "translate3d(-2590px, 0px, 0px)", transition: "all 0ms ease 0s"}}>
                                    <div className="default-slider-item project-display-single-item swiper-slide swiper-slide-duplicate" role="group" aria-label="5 / 10" style={{width: "325px",marginRight: "45px"}} data-swiper-slide-index="1">
                                            <div className="image">
                                                <img src={displayImg} alt=""/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Power Systems</h3>
                                                <span className="catagory">factory / industry</span>
                                                {/* <a href="project-details.html"><img className="img-fluid" src="assets/images/icons/right-arrow.png" alt=""></a> */}
                                            </div>
                                        </div>
                                        <div className="default-slider-item project-display-single-item swiper-slide swiper-slide-duplicate" role="group" aria-label="6 / 10" style={{width: "325px",marginRight: "45px"}} data-swiper-slide-index="2">
                                            {/* <div className="image">
                                                <img src="images\project-display-2.png.png" alt="">
                                            </div> */}
                                            {/* <div className="content">
                                                <h3 className="title">Power Systems</h3>
                                                <span className="catagory">factory / industry</span>
                                                <a href="project-details.html"><img className="img-fluid" src="assets/images/icons/right-arrow.png" alt=""/></a>
                                            </div> */}
                                        </div><div className="default-slider-item project-display-single-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" role="group" aria-label="7 / 10" style={{width: "325px", marginRight: "45px"}} data-swiper-slide-index="3">
                                            <div className="image">
                                                <img src={displayImg1} alt=""/>
                                            </div>
                                            {/* <div className="content">
                                                <h3 className="title">Power Systems</h3>
                                                <span className="catagory">factory / industry</span>
                                                <a href="project-details.html"><img className="img-fluid" src="assets/images/icons/right-arrow.png" alt=""></a>
                                            </div> */}
                                        </div>
                                       
                                        <div className="default-slider-item project-display-single-item swiper-slide swiper-slide-duplicate-active" role="group" aria-label="4 / 10" style={{width: "325px", marginRight: "45px"}} data-swiper-slide-index="0">
                                            <div className="image">
                                                <img src={displayImg} alt=""/>
                                            </div>
                                            {/* <div className="content">
                                                <h3 className="title">Power Systems</h3>
                                                <span className="catagory">factory / industry</span>
                                                <a href="project-details.html"><img className="img-fluid" src="assets/images/icons/right-arrow.png" alt=""></a>
                                            </div> */}
                                        </div>
                                  
                                        <div className="default-slider-item project-display-single-item swiper-slide swiper-slide-duplicate-next" role="group" aria-label="5 / 10" style={{width: "325px", marginRight: "45px"}} data-swiper-slide-index="1">
                                            <div className="image">
                                                <img src={displayImg2} alt=""/>
                                            </div>
                                            {/* <div className="content">
                                                <h3 className="title">Power Systems</h3>
                                                <span className="catagory">factory / industry</span>
                                                <a href="project-details.html"><img className="img-fluid" src="assets/images/icons/right-arrow.png" alt=""></a>
                                            </div> */}
                                        </div>
                                      
                                        <div className="default-slider-item project-display-single-item swiper-slide" role="group" aria-label="6 / 10"style={{width: "325px", marginRight: "45px"}}data-swiper-slide-index="2">
                                            <div className="image">
                                                <img src={displayImg2} alt=""/>
                                            </div>
                                            {/* <div className="content">
                                                <h3 className="title">Power Systems</h3>
                                                <span className="catagory">factory / industry</span>
                                                <a href="project-details.html"><img className="img-fluid" src="assets/images/icons/right-arrow.png" alt=""></a>
                                            </div> */}
                                        </div>
                                    
                                        <div className="default-slider-item project-display-single-item swiper-slide swiper-slide-prev" role="group" aria-label="7 / 10" style={{width: "325px", marginRight: "45px"}} data-swiper-slide-index="3">
                                            <div className="image">
                                                <img src={displayImg2} alt=""/>
                                            </div>
                                            {/* <div className="content">
                                                <h3 className="title">Power Systems</h3>
                                                <span className="catagory">factory / industry</span>
                                                <a href="project-details.html"><img className="img-fluid" src="images\right-arrow.png" alt=""></a>
                                            </div> */}
                                        </div>
                                       
                                    <div className="default-slider-item project-display-single-item swiper-slide swiper-slide-duplicate swiper-slide-active" role="group" aria-label="4 / 10" style={{width: "325px", marginRight: "45px"}} data-swiper-slide-index="0">
                                            <div className="image">
                                                <img src={displayImg2} alt=""/>
                                            </div>
                                            {/* <div className="content">
                                                <h3 className="title">Power Systems</h3>
                                                <span className="catagory">factory / industry</span>
                                                <a href="project-details.html"><img className="img-fluid" src="images\right-arrow.png" alt=""></a>
                                            </div> */}
                                        </div><div className="default-slider-item project-display-single-item swiper-slide swiper-slide-duplicate swiper-slide-next" role="group" aria-label="5 / 10" style={{width: "325px", marginRight: "45px"}}data-swiper-slide-index="1">
                                            <div className="image">
                                                <img src={displayImg1} alt=""/>
                                            </div>
                                            {/* <div className="content">
                                                <h3 className="title">Power Systems</h3>
                                                <span className="catagory">factory / industry</span>
                                                <a href="project-details.html"><img className="img-fluid" src="images\right-arrow.png" alt=""></a>
                                            </div> */}
                                        </div><div className="default-slider-item project-display-single-item swiper-slide swiper-slide-duplicate" role="group" aria-label="6 / 10" style={{width: "325px", marginRight: "45px"}} data-swiper-slide-index="2">
                                            <div className="image">
                                                <img src={displayImg3} alt=""/>
                                            </div>
                                            {/* <div className="content">
                                                <h3 className="title">Power Systems</h3>
                                                <span className="catagory">factory / industry</span>
                                                <a href="project-details.html"><img className="img-fluid" src="images\right-arrow.png" alt=""></a>
                                            </div> */}
                                        </div></div>

                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                               
                                <div className="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-855ee821ccf22a53"></div>
                                <div className="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-855ee821ccf22a53"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col text-center p-t-100">
                    <a href="#" className="btn btn-lg btn-primary">All Projects</a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Counter;