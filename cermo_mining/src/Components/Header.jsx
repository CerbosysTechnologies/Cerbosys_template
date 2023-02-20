import React from 'react';
import headerImg from '../images/Group 8346 (1).png'

const Header = () => {
    return (
        <header className="site-header mo-left header navstyle1">
		
        <div className="sticky-header main-bar-wraper header-curve navbar-expand-lg">
            <div className="main-bar clearfix bg-primary">
                <div className="container clearfix">
                   
                    <div className="logo-header mostion logo-dark">
						<a href="#"><img src={headerImg} alt=""/></a>
					</div>
                    <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
						<span></span>
						<span></span>
					</button>
                 
                 
                     
                    
                    <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
						<div className="logo-header d-md-block d-lg-none">
							<a href="#l"><img src={headerImg} alt=""/></a>
						</div>
                        <ul className="nav navbar-nav">	
							<li className="active has-mega-menu homedemo"> <a href="#">Home</a>
								
							</li>
							<li>
								<a href="#">Features</a>
							
							</li>
							<li className="has-mega-menu"> <a href="#">Pages</a>
								
							</li>
							<li>
								<a href="#">Shop</a>
								
							</li>
							<li className="has-mega-menu"> <a href="#">Blog</a>
								
							</li>
							
									<li><a href="#">Element</a>
										
									</li>
								
									
								
							<li>
								<a href="#">Contact Us</a>
								
							</li>
						</ul>	
								
                    </div>
                </div>
            </div>
        </div>
      
    </header>
    );
};

export default Header;