import React from 'react'
import clientImg9 from '../images/9.png'
import clientImg10 from '../images/10.png'
import clientImg11 from '../images/11.png'
import clientImg12 from '../images/12.png'
import clientImg13 from '../images/13.png'

const Client = () => {
    return (
        <section id="clients" className="clients border-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="carousel owl-carousel owl-loaded owl-drag" data-slide="6" data-slide-md="4" data-slide-sm="2" data-autoplay="true" data-nav="false" data-dots="false" data-space="20" data-loop="true" data-speed="700">
               
              <div className="owl-stage-outer">
                <div className="owl-stage" style={{transform: 'translate3d(${-1460}px, ${0}px, ${0}px)', transition: "all 0.25s ease 0s", width: "4380px"}}>
                    {/* <div className="owl-item cloned" style={{width: "345px", marginRight: "20px"}}> */}
                <div className="client">
                  <a href="#"><img src={clientImg12} alt="client"/></a>
                </div>
                {/* </div> */}
                {/* <div className="owl-item cloned" style={{width: "345px", marginRight: "20px"}}> */}
                    <div className="client">
                  <a href="#"><img src={clientImg13} alt="client"/></a>
                </div>
                {/* </div> */}
                <div className="owl-item cloned" style={{width: "345px", marginRight: "20px"}}><div className="client">
                  <a href="#"><img src={clientImg11} alt="client"/></a>
                </div></div>
                {/* <div className="owl-item" style={{width: "345px", marginRight: "20px"}}> */}
                    <div className="client">
                  <a href="#"><img src={clientImg9} alt="client"/></a>
                </div>
                {/* </div> */}
                <div className="owl-item active" style={{width: "345px", marginRight: "20px"}}><div className="client">
                  <a href="#"><img src={clientImg10} alt="client"/></a>
                </div></div><div className="owl-item" style={{width: "345px", marginRight: "20px"}}><div className="client">
                  <a href="#"><img src={clientImg11} alt="client"/></a>
                </div></div><div className="owl-item" style={{width: "345px", marginRight: "20px"}}><div className="client">
                  <a href="#"><img src={clientImg12} alt="client"/></a>
                </div></div><div className="owl-item" style={{width: "345px", marginRight: "20px"}}><div className="client">
                  <a href="#"><img src={clientImg13} alt="client"/></a>
                </div></div><div className="owl-item" style={{width: "345px", marginRight: "20px"}}><div className="client">
                  <a href="#"><img src={clientImg11} alt="client"/></a>
                </div></div><div className="owl-item cloned" style="width: 345px; margin-right: 20px;"><div className="client">
                  <a href="#"><img src={clientImg11} alt="client"/></a>
                </div></div><div className="owl-item cloned" style={{width: "345px", marginRight: "20px"}}><div className="client">
                  <a href="#"><img src={clientImg10} alt="client"/></a>
                </div></div><div className="owl-item cloned" style={{width: "345px", marginRight: "20px"}}><div className="client">
                  <a href="#"><img src={clientImg11} alt="client"/></a>
                </div>
                </div>
                </div>
                </div>
                <div className="owl-nav disabled">
                    <button type="button" role="presentation" className="owl-prev">
                        <span aria-label="Previous">‹
                        </span>
                        </button>
                        <button type="button" role="presentation" className="owl-next">
                            <span aria-label="Next">›
                            </span></button>
                </div>
                <div className="owl-dots disabled">
                    </div>
                    <div className="owl-thumbs">
                        </div>
                        </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Client;