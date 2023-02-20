import React from 'react';
import stImg from '../images/IMG1.png';
import stImg1 from '../images/IMG2.png';
import stImg2 from '../images/IMG3.png';
import stImg3 from '../images/IMG4.png';

const Staff = () => {
  return (
    <div className="staff_main">
      <div className="container_staff">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Our Expert Staff</h2>
              <span>
                There are many variations of passages of Lorem Ipsum available,
                but the{' '}
              </span>
            </div>
          </div>
          <div className="staff_flex">
            <div className="col-md-3 col-sm-6">
              <div className="staff">
                <div className="man">
                  <img className="imag" src={stImg} alt="#" />
                </div>
                <div className="social_icon_main">
                  <h4>Prasang</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="staff">
                <div className="man">
                  <img className="imag" src={stImg1} alt="#" />
                </div>
                <div className="social_icon_main">
                  <h4>Shubham</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="staff">
                <div className="man">
                  <img className="imag" src={stImg2} alt="#" />
                </div>
                <div className="social_icon_main">
                  <h4>Omprakash</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="staff">
                <div className="man">
                  <img className="imag" src={stImg3} alt="#" />
                </div>
                <div className="social_icon_main">
                  <h4>Rishabh</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <a className="read_more" href="#">
              {' '}
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
