import React from 'react';
import footerImg from '../Component/images/Group 3845.png';

function Footer() {
  return (
    <footer>
      <div className="footer bottom_cross1">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="map">
                <h1>About</h1>
                <p>
                  CERBOSYS is a software development company that provides
                  customized and creative services for online businesses. The
                  services we provide have been instrumental in helping shape
                  several start-up companies by meeting their changing needs.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="map">
                <h1>Address</h1>
                <p>Address: 15-16 Lakshya Vihar Indore</p>
                <p>Tel: 0731 499 3444</p>
                <p>website: www.cerbosys.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src={footerImg} alt="" />
              </div>
              <div className="icons">
                <div className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="icon">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="icon">
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>© 2022 All Rights Reserved. Design by Cerbosys</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </footer>
  );
}

export default Footer;
