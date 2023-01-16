import React from 'react';

import Productpic from './Productpic';
import capimg from '../../../assets/images/capimg.png';

const Oueproduct = () => {
  return (
    <>
      <div className="container mt-5">
        <div>
          <div className="para3_relati">
            <p className="para6 text-center">OUR PRODUCTS </p>
          </div>
          <p className="para text-center mt-4">
            We love to tell our successful far far away, behind the word
            mountains, far from <br></br>the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="row mt-5 pt-5">
          <Productpic />
        </div>
        <div className=" text-center back_ground ">
          <p className="para3 text-center">OUR SATISFIED CUSTOMER SAYS</p>
          <div className="mt-5">
            <img src={capimg} alt="img" className="img_wid" />
          </div>
          <p className="fisher_text mt-3">James Fisher</p>
          <small className="use_text mt-2">New York, USA</small>
          <p className="para mt-3">
            One day however a small line of blind text by the name of Lorem
            Ipsum decided to leave for the far World<br></br> of Grammar.
          </p>
        </div>
      </div>
    </>
  );
};

export default Oueproduct;
