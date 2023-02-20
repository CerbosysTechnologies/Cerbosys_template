import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../css/bootstrap.min.css'
import'../css/style.css'
import headerImg from '../images/Group 8327.png'


const Header = () => {
    return (
       
            
        <header className="full_bg">
        
        <div className="header">
           
           <div className="container">
              <div className="row">
                 <div className="col-md-12">
                    <div className="header_bottom">
                       <div className="row">
                          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                             <div className="full">
                                <div className="center-desk">
                                   <div className="logo">
                                      <a href="index.html"><img src={headerImg} alt="" /></a>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                             <nav className="navigation navbar navbar-expand-md navbar-dark ">
                            
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                   <ul className="navbar-nav mr-auto">
                                      <li className="nav-item active">
                                         <a className="nav-link" href="index.html">Home</a>
                                      </li>
                                      <li className="nav-item">
                                         <a className="nav-link" href="about.html">About</a>
                                      </li>
                                      <li className="nav-item">
                                         <a className="nav-link" href="project.html">project</a>
                                      </li>
                                      <li className="nav-item">
                                         <a className="nav-link" href="staff.html">staff</a>
                                      </li>
                                      <li className="nav-item">
                                         <a className="nav-link" href="contact.html">Contact Us</a>
                                      </li>
                                   </ul>
                                </div>
                                <ul className="search">
                                   <li><a href="Javascript:void(0)"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                                </ul>
                             </nav>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      
        <section className="banner_main">
           
           <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
              <ol className="carousel-indicators">
                 <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                 <li data-target="#" data-slide-to="1"></li>
                 <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                 <div className="carousel-item active">
                    <div className="container">
                       {/* <div className="carousel-caption  banner_po"> */}
                          <div className="row">
                             <div className="col-md-9">
                                <div className="build_box">
                                   <h1>We Are Mining Experts</h1>
                                   <p>There are many variations of passages of Lorem Ipsum available, but the majority<br/> There are many variations of passages of</p>
                                   <a className="read_more conatct_btn" href="#" role="button">Contact Us</a>
                                </div>
                             {/* </div> */}
                          </div>
                       </div>
                    </div>
                 </div>
                 
              </div>
              
           </div>
         
        </section>
     </header>
    );
};

export default Header;