import React from 'react';
import bannerImg from '../images/4.jpg'

const Video = () => {
    return (
        <section id="videoBanner" className="video-banner video-banner-layout2 bg-overlay bg-img" style={{ backgroundImage: `url(${bannerImg})` , backgroundSize: "cover", backgroundPosition: "center center"}}>
      
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="video__btn text-center">
                <a className="popup-video" href="#">
                  <span className="video__player-animation"></span>
                  <span className="video__player-animation video__player-animation-2"></span>
                  <div className="video__player">
                  <i className="fa-solid fa-play"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Video;