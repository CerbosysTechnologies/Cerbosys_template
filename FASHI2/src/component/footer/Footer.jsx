import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="container mt-5 pt-4">
        <div className="d-flex justify-content-between flex-wrap py-5">
          <div className="w-div px-2">
            <h6>About Store</h6>

            <div className="py-3">
              <p className="pad_footer">
                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
              </p>
            </div>
          </div>
          <div className="px-2">
            <h6>Customer Care</h6>

            <div className="py-3">
              <p className="pad_footer">Contact</p>
              <p className="pad_footer">Returns/Exchange</p>
              <p className="pad_footer">Gift Voucher</p>
              <p className="pad_footer">Wishlist</p>
              <p className="pad_footer">Special</p>
              <p className="pad_footer">Customer Services</p>
              <p className="pad_footer">Site maps</p>
            </div>
          </div>
          <div className="px-2">
            <h6>Information</h6>

            <div className="py-3">
              <p className="pad_footer">About</p>
              <p className="pad_footer">Delivery Information</p>
              <p className="pad_footer">Privacy Policy</p>
              <p className="pad_footer">Support</p>
              <p className="pad_footer">Order Tracking</p>
            </div>
          </div>
          <div className="px-2">
            <h6>News</h6>

            <div className="py-3">
              <p className="pad_footer">Blog</p>
              <p className="pad_footer">Press</p>
              <p className="pad_footer">Exhibitions</p>
            </div>
          </div>
          <div className="px-2">
            <h6>Contact Information</h6>

            <div className="py-3">
              <p className="pad_footer">
                291 South 21th Street, Suite 721 New York NY 10016
              </p>
              <p className="pad_footer">+ 1235 2355 98</p>
              <p className="pad_footer">My Account</p>
              <p className="pad_footer">info@yoursite.com</p>
              <p className="pad_footer">yoursite.com</p>
            </div>
          </div>
        </div>
        <div className="py-3 text-center">
          <p className="pad_footer">Copyright ©2022 All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
