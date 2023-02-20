import React from 'react';
import headerImg from '../images/Group 8343.png'

const Header = () => {
    return (
        <header className="header-section d-none d-lg-block">

           

         
        <div className="header-bottom sticky-header">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                   
                        <div className="logo"><a href="#"><img src={headerImg} alt=""/></a>
                        </div>
                       
                    </div>
                    <div className="col-auto">
                       
                        <ul className="header-nav">
                            <li><a href="#">Home</a></li>
                            <li className="has-dropdown">
                                <a href="#">Service</a>
                               
                            </li>
                            <li className="has-dropdown">
                                <a href="#">Project</a>
                                
                            </li>
                            <li className="has-dropdown">
                                <a href="#">Blog</a>
                                
                            </li>
                            <li className="has-dropdown">
                                <a href="#">Pages</a>
                               
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                       
                    </div>
                   
                </div>
            </div>
        </div>
        
    </header>
    );
};

export default Header;