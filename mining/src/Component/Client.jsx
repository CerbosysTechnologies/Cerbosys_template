import React from 'react';
import ClientImg from '../images/t.png'
import ClientImg1 from '../images/tes.png'

const Client = () => {
    return (
        <div className="clients">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Clients Words</h2>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-8 offset-md-2">
                  <div className="testimo_ban_bg">
                     <div id="testimo" className="carousel slide testimo_ban" data-ride="carousel">
                        <ol className="carousel-indicators">
                           <li data-target="#testimo" data-slide-to="0" className="active"></li>
                           <li data-target="#testimo" data-slide-to="1"></li>
                           <li data-target="#testimo" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                           <div className="carousel-item active">
                              <div className="container parile0">
                                 <div className=" rel">
                                    <div className="row d_flex">
                                       <div className="col-md-12">
                                          <i><img className="qusright" src={ClientImg} alt="#"/><img src={ClientImg1}alt="#"/><img className="qusleft" src={ClientImg} alt="#"/></i>
                                          <div className="consect">
                                             <span>consectetur</span>
                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                          
                          
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default Client;