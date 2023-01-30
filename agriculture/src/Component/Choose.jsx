import React from 'react';
import chooseImg1 from '../images/icon1.png'
import chooseImg2 from '../images/icon2.png'
import chooseImg3 from '../images/icon3.png'
import chooseImg4 from '../images/icon4.png'
import foodImg from '../images/food.jpg'
const Choose = () => {
    return (
        <div class="choose ">
        <div class="container">
           <div class="row">
              <div class="col-md-8">
                 <div class="titlepage">
                    <h2>Why Choose Us? </h2>
                    <p>there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined  </p>
                 </div>
              </div>
           </div>
        </div>
        <div class="container-fluid">
           <div class="row d_flex">
              <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                 <div class="padding_with">
                    <div class="row">
                       <div class="col-md-6 padding_bottom">
                          <div class="choose_box">
                             <i><img src={chooseImg1} alt="#"/></i>
                             <div class="choose_text">
                                <h3>Excellent Service</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a</p>
                             </div>
                          </div>
                       </div>
                       <div class="col-md-6 padding_bottom">
                          <div class="choose_box">
                             <i><img src={chooseImg2} alt="#"/></i>
                             <div class="choose_text">
                                <h3>Clean Working</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a</p>
                             </div>
                          </div>
                       </div>
                       <div class="col-md-6 padding_bottom2">
                          <div class="choose_box">
                             <i><img src={chooseImg3} alt="#"/></i>
                             <div class="choose_text">
                                <h3>Quality And Reliability</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a</p>
                             </div>
                          </div>
                       </div>
                       <div class="col-md-6">
                          <div class="choose_box">
                             <i><img src={chooseImg4} alt="#"/></i>
                             <div class="choose_text">
                                <h3>Expert Farmer</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a</p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                 <div class="choose_img">
                    <figure><img src={foodImg} alt="#"/></figure>
                 </div>
              </div>
           </div>
        </div>
        <div class="container">
           <div class="row">
              <div class="col-md-5">
                 <a class="read_more" href="#">Read More</a>
              </div>
           </div>
        </div>
     </div>
    );
};

export default Choose;