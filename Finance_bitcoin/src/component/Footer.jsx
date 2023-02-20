import React from 'react';
import footerImg from "../images/Group 3844.png"

function Footer  ()  {
    return (
        <div class="footer bottom_cross1">
           <div class="container">
              <div class="row">
                 <div class="col-md-4">
                    <div class="map">
               <h1>About</h1>
               <p>CERBOSYS is a software development company that provides customized and creative services for online businesses. The services we provide have been instrumental in helping shape several start-up companies by meeting their changing needs.
              </p>
           </div>
                 </div>
                 <div class="col-md-4">
                    <div class="map">
                       <h1>Address</h1>
                       <p>Address: 15-16 Lakshya Vihar Indore</p>
                       <p>Tel: 0731 499 3444</p>
                       <p>website: www.cerbosys.com</p>
                    </div>
                 </div>
                 <div class="col-md-4">
                    <div>
                   <img src={footerImg} alt="" />
                    
                 </div>
<div class="icons">
  <div class="icon" >
                    <i class="fa-brands fa-facebook-f"></i>
                 </div> 
                 <div class="icon">
                    <i class="fa-brands fa-twitter"></i>
                 </div>
                    <div class="icon">
                    <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div class="icon">
                    <i class="fa-brands fa-youtube"></i>
                    </div>

                 </div>    

                     
                 </div>
              </div>
           </div>
           <div class="copyright">
              <div class="container">
                 <div class="row">
                    <div class="col-md-12">
                       <p>© 2019 All Rights Reserved. Design by Cerbosys</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default Footer;