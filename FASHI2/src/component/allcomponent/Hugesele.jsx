import React from 'react';
import Button from '../button/Button';
import boyss from '../../assets/images/boyss.png';
import whitedrss from '../../assets/images/whitedrss.png';
import bggirl from '../../assets/images/bggirl.png';
import shoosss from '../../assets/images/shoosss.png';

import './allcomponent.scss';

const Hugesele = () => {
  return (
    <>
      <div className="container">
        <div className="mt-3" style={{ position: 'relative' }}>
          <div className="backimg_div"></div>
          <div className="position_absos">
            <div className="rounded_div  text-center ">
              <div>
                <h6 className="m-0 huge_head">HUGE</h6>
                <p className="fs_13_col">SALE</p>
                <p className="fs_persent">45% OFF</p>
                <p className="fs_11_new mt-2">
                  New stylish shirts, pants & Accessories
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Button title="Shop Collection" />
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="img_boyss_uper">
              <img src={boyss} alt="img_src" className="w-100" />
              <div className="img_boyss_inner">
                <p className="titel2">
                  FAHSION FOR<br></br> MEN
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="img_boyss_uper">
                  <img src={whitedrss} alt="img_src" className="w-100" />
                  <div className="img_boyss_inner">
                    <p className="titel2">
                      New Arrival <br></br> Dress
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="img_boyss_uper">
                  <img src={bggirl} alt="img_src" className="w-100" />
                  <div className="img_boyss_inner">
                    <p className="titel2">
                      Sale<br></br> 20%<br></br> off
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_boyss_uper">
              <img src={shoosss} alt="img" className="w-100" />
              <div className="img_boyss_inner">
                <p className="titel2">
                  Shoes<br></br> for<br></br> men
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hugesele;
