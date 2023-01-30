import React from 'react';
import sectionImg from "../Component/images/icon-1.png"
import sectionImg1 from "../Component/images/icon-2.png"
import sectionImg2 from "../Component/images/icon-3.png"
import sectionImg3 from "../Component/images/icon-4.png"

function Service()  {
    return (
        <div className="what_we_do_section layout_padding">
      <div className="container">
        <h1 className="what_taital">WHAT WE DO</h1>
        <p className="what_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
        <div className="what_we_do_section_2">
          <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1">
               <img src={sectionImg} alt="" />

                </div>
              <h3 className="accounting_text">Accounting</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main active">
              <div className="icon_1">
                <img src={sectionImg1} alt="" />

                </div>
              <h3 className="accounting_text">Advisor</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1">
                <img src={sectionImg2} alt="" />

                </div>
              <h3 className="accounting_text">Investment</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1">
                <img src={sectionImg3} alt="" />

                </div>
              <h3 className="accounting_text">Financial</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    );
};

export default Service;