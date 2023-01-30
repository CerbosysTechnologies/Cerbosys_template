import React from 'react';
import productImg1 from '../images/product1.jpg'
import productImg2 from '../images/product2.jpg'
import productImg3 from '../images/product3.jpg'
import productImg4 from '../images/product4.jpg'
import productImg5 from '../images/product5.jpg'

const Product = () => {
    return (
        <div class="product">
        <div class="container">
           <div class="row">
              <div class="col-md-6">
                 <div class="titlepage">
                    <h2>Our Product</h2>
                 </div>
              </div>
           </div>
        </div>
        <div class="container-fluid">
           <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_left0">
                 <div class="product_box">
                    <figure><img src={productImg1} alt="#"/></figure>
                    <h3 class="black">vegetable</h3>
                 </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                 <div class="product_box">
                    <figure><img src={productImg2} alt="#"/></figure>
                    <h3 >weat</h3>
                 </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 padding_right0">
                 <div class="product_box">
                    <figure><img src={productImg3} alt="#"/></figure>
                    <h3>fruit</h3>
                 </div>
              </div>
              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 padding_left0">
                 <div class="product_box">
                    <figure><img src={productImg4} alt="#"/></figure>
                    <h3>sunflowere</h3>
                 </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 padding_right0">
                 <div class="product_box">
                    <figure><img src={productImg5} alt="#"/></figure>
                    <h3>Livestock</h3>
                 </div>
              </div>
           </div>
        </div>
     </div>
    );
};

export default Product;