import React from 'react';
import yellowimg from '../../assets/images/yellowimg.png';
import Button from '../Button/Button';
import shoosimg from '../../assets/images/shoosimg.png';

import './Adidascom.scss';

const Adidascom = () => {
  return (
    <>
      <div className="px-4">
        <div className="row">
          <div className="col-lg-9 col-md-7 col-12 p-0">
            <div className="img_div_uper">
              <img src={yellowimg} alt="img" className="w-100 img" />
              <div className="right_div">
                <div>
                  <p>New Arrivals</p>
                  <p className="para">
                    Women Hoodies & <br></br>Sweatshirts
                  </p>
                  <div className="pt_div">
                    <Button titel="More Info" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-12 p-0">
            <div style={{ position: 'relative', height: '100%' }}>
              <img src={shoosimg} alt="imgshoos" className="w-100 h-100" />
              <div className="position_rel">
                <p>Best Sellers</p>
                <h4>Adidas Shoes</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adidascom;
