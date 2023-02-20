import React from 'react';
import fb from '../images/fb-icon.png.png';
import twitter from '../images/twitter-icon.png.png';
import instagram from '../images/instagram-icon.png.png';
import linkedin from '../images/linkedin-icon.png.png';
import brain from '../images/brain.png';
function Navbar() {
  return (
    <div class="navbar">
      <div class="logo">
        <img src={brain} alt="" />
      </div>
      <div class="navlist">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>BLOG</li>
        <li>CONTACT US</li>
      </div>
      <div class="icons">
        <a href="https://www.facebook.com/cerbosystech" target="_blank">
          {' '}
          <div>
            <img src={fb} alt="" />
          </div>
        </a>
        <div>
          <img src={twitter} alt="" />
        </div>
        <a
          href="https://www.linkedin.com/company/cerbosys/mycompany/"
          target="_blank"
        >
          {' '}
          <div>
            <img src={linkedin} alt="" />
          </div>
        </a>
        <a href="https://www.instagram.com/cerbosys/" target="_blank">
          {' '}
          <div>
            <img src={instagram} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
