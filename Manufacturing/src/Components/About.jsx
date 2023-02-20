import React from 'react';
import aboutImg from '../Images/about.png'

const About = () => {
    return (
        <div className="about">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-7">
                  <div className="titlepage">
                     <h2>Area of Work</h2>
                     <span>Industro has 50+ years’ experience in providing companies with a wide array of specialty works. Listed below are just some of the services we offer to our clients.</span>
                  
                     {/* <a className="read_more" href="Javascript:void(0)"> Read More</a> */}
                  </div>

               </div>
              
               <div className="col-md-4">
                     <div className="about_img">
                     <figure><img src={aboutImg} alt="#"/></figure>
                  </div>
               </div>
              
               <div className='"col-md-4'>
                        <div className='titlepage' >
                           <h3>Chemicals and Plastics</h3>
                     <p>Industro provides chemicals and plastics through several operations including production of olefins, polyolefins, aromatics, styrenics, and specialty products

                     </p>
                     </div>
                     </div>
                     <div className='"col-md-4'>
                        <div className='titlepage' >
                           <h3>Steel and Oil Refining</h3>
                     <p>Oil and steel refinery are the most important spheres of our company operation. They play a crucial role in development of modern technologies and industries.

                     </p>
                     </div>
                     </div>
                     <div className='"col-md-4'>
                        <div className='titlepage' >
                           <h3>Mining</h3>
                     <p>Modern mining processes, supported by our company, involve prospecting for ore bodies, analysis of the profit potential of a mine, and other activities.

                     </p>
                     </div>
                     </div>
                     <div className='"col-md-4'>
                        <div className='titlepage' >
                           <h3>Industrial Machinery</h3>
                     <p>As a vast sphere of Industro’s activity, industrial machinery covers different subareas of our work including heavy equipment and hardware production.

                     </p>
                   
                     </div>
                     </div>
              
               
            </div>
         </div>

      </div>
    );
};

export default About;