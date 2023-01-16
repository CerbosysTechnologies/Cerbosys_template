import React from 'react';
import Button from '../Button/Button';
import Heading from '../heading/Heading';
import dshoos from '../../assets/images/dshoos.png';
import blueshoos from '../../assets/images/blueshoos.png';
import girl from '../../assets/images/girl.png';
import './Dealoftheweek.scss';

const Dealoftheweek = () => {
  return (
    <>
      <div className="mt-5 px-4 pt-4">
        <Heading title="Deal of the week" />
        <div className="row mt-3">
          <div className="col-lg-6 col-md-12 col-12 pt-3">
            <p>Hot Deal Week</p>
            <h4 className="head2">Crazy Byw Lvl X Pw</h4>
            <p className="head2">
              <span style={{ color: 'red' }}>$200</span>
              $250
            </p>
            <div className="d-flex justify-content-between abc mt-4">
              <label htmlFor="customRange3" className="form-label fs_s13">
                Allready solded
              </label>
              <label htmlFor="customRange3" className="form-label fs_s13">
                Avaiable: 23
              </label>
            </div>
            <div className="progress">
              <div
                className="progress_bar"
                style={{ width: '85%', backgoundColor: 'red' }}
              >
                <div className="progress_bar_value"></div>
              </div>
            </div>

            <p className="mt-d">Expired</p>
            <div className="btn_m">
              <Button titel="Order Now" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 pt-3">
            <img src={dshoos} alt="img" className="w-100" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-12 p-0">
            <div style={{ position: 'relative' }}>
              <img src={blueshoos} alt="imgalt" className=" img" />
              <div className="absotut">
                <div>
                  <p>Men's Originals</p>
                  <p className="para ">
                    EQT Cushion<br></br> ADV Shoes
                    <span style={{ color: '#FFC900' }}> $65</span>
                  </p>
                  <div className="btn_m">
                    <Button titel="Show More" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 p-0">
            <div style={{ position: 'relative' }}>
              <img src={girl} alt="imgalt" className="img" />
              <div className="absotut">
                <div>
                  <p>Women's Tank</p>
                  <p className="para fs_s50 fs_w pt-2">
                    Nike Pro <br></br> HyperCool
                  </p>
                  <div className="btn_m">
                    <Button titel=" More Info" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="back_images">
          <div className="abc_position mt-5">
            <div className="w-100">
              <h4 className="text-center fs_w fs_s30">NewsLetters</h4>
              <p className="fs_s13 text-center mt-4">
                Enter your email address for our mailing list to keep your self
                update.
              </p>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dealoftheweek;
