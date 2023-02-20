import React from 'react';
import clientImg from "../Component/images/round-1.png"
import clientImg1 from "../Component/images/img-11.png"
import clientImg2 from "../Component/images/round-2.png"

function Client  () {
    return (
        <div className="client_section layout_padding">
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h1 className="what_taital">what is syas our clients</h1>
              <div className="client_section_2 layout_padding">
                <ul>
                  <li><img className="round_1" src={clientImg} alt="" /></li>
                  <li><img className="image_11" src={clientImg1} alt="" /></li>
                  <li><img className="round_2" src={clientImg2} alt="" /></li>
                </ul>
                <p className="dummy_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    );
};

export default Client;