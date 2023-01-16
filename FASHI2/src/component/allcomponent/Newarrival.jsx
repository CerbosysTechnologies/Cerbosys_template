import React from 'react';
import Button from '../button/Button';

const Newarrival = () => {
  const item = [
    {
      para: 'sale',
      img: './backyellow.png',
      title: 'Floral Dress',
      price: '$199.00',
      del: ' $300.00',
    },
    {
      para: 'sale',
      img: './witsrt.png',
      title: 'Floral Dress',
      price: '$199.00',
      del: ' $300.00',
    },
    {
      para: 'sale',
      img: './handhair.png',
      title: 'Floral Dress',
      price: '$199.00',
      del: ' $300.00',
    },
    {
      para: 'sale',
      img: './yelodrs.png',
      title: 'Floral Dress',
      price: '$199.00',
      del: ' $300.00',
    },
  ];
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="">
          <div className="para3_relati">
            <p className="para6 text-center">NEW ARRIVAL</p>
          </div>
          <p className="para text-center mt-3">
            We love to tell our successful far far away, behind the word
            mountains, far from <br></br>the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="row mt-5 pt-3">
            {item &&
              item.map((element, ind) => {
                return (
                  <>
                    <div className="col-lg-3 col-md-6 col-12" key={ind}>
                      <div>
                        <img src={element.img} alt="img" className="w-100" />
                      </div>
                      <div className="mt-2">
                        <p className="titel text-center">{element.title}</p>
                        <p className="col_yelo text-center">{element.price}</p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="back_girl_img"></div>
          <div className="arrival_posi">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="d-flex flex-column pt-3">
                <div className="d-flex align-items-center abss">
                  <div>
                    <p className="percent_text">45</p>
                  </div>
                  <div>
                    <p className="off_percent">%</p>
                    <p className="off_text">off</p>
                  </div>
                </div>
                <div>
                  <p className="sale_text">SALE</p>
                </div>
              </div>

              <div className="ms-4 pt-3">
                <p className="titel">Just hurry up limited offer!</p>
                <p className="para mt-3">
                  Separated they live in Bookmarksgrove right at the<br></br>
                  coast of the Semantics, a large language ocean.
                </p>

                <div className="mt-4">
                  <Button title="Shop Now"></Button>
                  <button className="ms-3 btn_read">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newarrival;
