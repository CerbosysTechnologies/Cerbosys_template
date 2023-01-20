import React from 'react';
import map from "../images/map.png";
import rotate from "../images/rotate.png";
import uber from "../images/uber.png";
import watt from "../images/watt.png"
export const Container8 = () => {
  return (
   <>
   


   <div class="container8">

    <div class="colortext2">
        <div class="simple">
            <h3>Our Bistro</h3>
            <h2 class="cate">Locations</h2></div>
        <h5 class="vbtn2">All contact details --</h5>
      </div>


      <div class="maptext">
      <div class="map">


          <iframe className='ifrm' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55154192758!2d75.79380968095644!3d22.724115838226357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1674046674196!5m2!1sen!2sin" width="450px" height="500" style={{border:0}}></iframe>
        
  
       
    
</div>
<div class="secondmain">
    <div class="maptexta">
        <h1>Bistro - Downtown</h1>
        <p class="pera">Etiam nibh neque, aliquam ut ornare in, porttitor eu quam. Maecenas
            magna dui, efficitur ut laoreet vel, euismod eget erat vestibulum.</p>
        <p class="pera2"> 1400 14th St NW, Washington, DC 20005</p>
    </div>
    <div class="maptexta"><h1>Bistro - Capitol</h1>
        <p class="pera">Nunc congue nibh lorem, viverra sodales sapien ullamcorper eu. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit maecenas.</p>
        <p class="pera2" > 501 E Capitol St SE, Washington, DC 20003</p></div>
    <div class="maptexta"><h1>Bistro Anacostia</h1>
        <p class="pera">Vivamus pharetra efficitur elit sed pulvinar. Praesent est risus, porta vel
            orci nec, vehicula suscipit tortor. Morbi et sapien nunc.</p>
        <p class="pera2"> 1400 Good Hope Rd SE, Washington, DC 20050</p></div>
</div>



      </div>

      <div class="textimg">

        <div class="firsttext">
  <h3>You can also find us

    on your favorite <span class="service">delivery service</span></h3>

        </div>
        <div class="imgs">
    <div class="uber"><img src={rotate}width="100%" height="100%" alt=""/></div>
    <div class="uber"> <img src={uber} width="100%" height="100%" alt=""/></div>
    <div class="uber"> <img src={watt} width="100%" height="100%" alt=""/></div>
      

        </div>
      </div>
   </div>
   


   
   
   
   </>
  )
}
