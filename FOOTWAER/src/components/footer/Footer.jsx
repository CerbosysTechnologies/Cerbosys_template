import React from 'react';
import footer_img from '../../assets/images/footer_img.png';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer_main px-4">
        <div className="row pd_cl">
          <div className="col-lg-3 col-md-5 col-12 p-0 mt-2">
            <h4>Contact</h4>
            <div className="py-3">
              <p className="pd">Address: 15-16 Lakshya Vihar Indore</p>
              <p className="pd">Tel: 0731 499 3444</p>
              <p className="pd">My Account</p>
              <p className="pd">info@cerbosys.com</p>
              <p className="pd">website: www.cerbosys.com</p>
              <img src={footer_img} alt="img" className="pt-3" />
            </div>
            <div className="d-flex justify-content-between"></div>
          </div>
          <div className="col-lg-3 col-md-5 col-12 p-0 mt-2">
            <h4>My Contact</h4>
            <div className="py-3">
              <p className="pd">My Account</p>
              <p className="pd">Login</p>
              <p className="pd">My Cart</p>
              <p className="pd">Wishlist</p>
              <p className="pd">Checkout</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-12 p-0 mt-2">
            <h4>Information</h4>
            <div className="py-3">
              <p className="pd">About Us</p>
              <p className="pd">Careers</p>
              <p className="pd">Delivery Inforamtion</p>
              <p className="pd">Privacy Policy</p>
              <p className="pd">Terms & Conditions</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-12 p-0 mt-2">
            <h4>Customer service</h4>
            <div className="py-3">
              <p className="pd">Shoping Policy</p>
              <p className="pd">Compensation First</p>
              <p className="pd">My Account</p>
              <p className="pd">Return Policy</p>
              <p className="pd">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_inner">
        <p className="px-4 colr fs_s13 text-center">
          © 2022 All Rights Reserved. Design by Cerbosys
        </p>
      </div>
    </>
  );
};

export default Footer;
