import React from 'react';
import teamImg from "../Component/images/img-7.png"
import teamImg1 from "../Component/images/fb-icon.png"
import teamImg2 from "../Component/images/twitter-icon.png"
import teamImg3 from "../Component/images/linkedin-icon.png"
import teamImg4 from "../Component/images/img-8.png"
import teamImg5 from "../Component/images/img-9.png"
import teamImg6 from "../Component/images/img-10.png"

function Team  () {
    return (
        <div className="team_section layout_padding">
      <div className="container">
        <h1 className="what_taital">Our Team and experts</h1>
        <p className="what_text_1">It is a long established fact that a reader will be distracted by the readable content of a </p>
        <div className="team_section_2 layout_padding">
          <div className="row">
            <div className="col-sm-3">
             <img className="image_7" src={teamImg} alt="" />
              <p className="readable_text">Readable</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src={teamImg1} alt="" /></a></li>
                  <li><a href="#"><img src={teamImg2} alt="" /></a></li>
                  <li><a href="#"><img src={teamImg3} alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
            <img className="image_7" src={teamImg4} alt="" />
              <p className="readable_text">Content</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                <li><a href="#"><img src={teamImg1} alt="" /></a></li>
                  <li><a href="#"><img src={teamImg2} alt="" /></a></li>
                  <li><a href="#"><img src={teamImg3} alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
            <img className="image_7" src={teamImg5} alt="" />
              <p className="readable_text">Readable</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                <li><a href="#"><img src={teamImg1} alt="" /></a></li>
                  <li><a href="#"><img src={teamImg2} alt="" /></a></li>
                  <li><a href="#"><img src={teamImg3} alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
            <img className="image_7" src={teamImg6} alt="" />
              <p className="readable_text">Content</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                <li><a href="#"><img src={teamImg1} alt="" /></a></li>
                  <li><a href="#"><img src={teamImg2} alt="" /></a></li>
                  <li><a href="#"><img src={teamImg3} alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Team;