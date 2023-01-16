import React from 'react';

import './Ourproduct.scss';
const Productpic = () => {
  const items = [
    {
      para: 'sale',
      img: './mens.png',
      title: 'Floral Dress',
      price: '$300.00',
      del: ' $300.00',
    },
    {
      para: 'sale',
      img: './redgirl.png',
      title: 'Floral Dress',
      price: '$300.00',
      del: ' $300.00',
    },
    {
      para: 'sale',
      img: './witgirl.png',
      title: 'Floral Dress',
      price: '$300.00',
      del: ' $300.00',
    },
    {
      para: 'sale',
      img: './jingirl.png',
      title: 'Floral Dress',
      price: '$300.00',
      del: ' $300.00',
    },
    {
      para: 'sale',
      img: './gogirl.png',
      title: 'Floral Dress',
      price: '$300.00',
      del: ' $300.00',
    },
    {
      para: 'sale',
      img: './borsgirl.png',
      title: 'Floral Dress',
      price: '$300.00',
      del: ' $300.00',
    },
    {
      para: 'sale',
      img: './bluegirlss.png',
      title: 'Floral Dress',
      price: '$300.00',
      del: ' $300.00',
    },
    {
      para: 'sale',
      img: './sorgirl.png',
      title: 'Floral Dress',
      price: '$300.00',
      del: ' $300.00',
    },
  ];
  return (
    <>
      {items &&
        items.map((curent, ind) => {
          return (
            <>
              <div className="col-lg-3 col-md-6 col-12 mt-3 pt-4">
                <div className="sale_uper_div" key={ind}>
                  <div className="sale_div">
                    <p className="salepara">{curent.para}</p>
                  </div>
                  <img src={curent.img} alt="img" className="w-100" />
                  <div>
                    <p className="titel text-center">{curent.title}</p>
                    <p className="col_yelo text-center">
                      {curent.price}
                      {/* <del style={{ color: '#808080' }}> {curent.del}</del> */}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Productpic;
