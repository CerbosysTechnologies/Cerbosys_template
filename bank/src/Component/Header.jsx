import React from 'react';

import hedImg from "../Component/images/Group 8295.png"
import headImg from "../Component/images/banner-img.png"

function Header () {
    return (
       
            
       <div className="header_section">
      <div className="header_left">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo"><a href="#">
            <img src={hedImg} alt="" />
                
            </a>
            </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="team.html">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="banner_main">
          <h1 className="banner_taital">financial <br/>Service</h1>
          <p className="banner_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
          <div className="btn_main">
            <div className="more_bt"><a href="#">Read More </a></div>
            <div className="contact_bt"><a href="#">Contact Us</a></div>
          </div>
        </div>
      </div>
      <div className="header_right">
        <img src={headImg} alt="" className="banner_img" />
      </div>
    </div>
    );
};

export default Header;