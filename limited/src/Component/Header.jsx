import React from 'react';
import headerImg from '../images/Group 8344.png'

const Header = () => {
    return (
        <header id="header" className='header header-layout1'>
            <nav className='navbar navbar-expand-lg sticky-navbar'>
                <div  className='container-fluid px-0'>
                  <a className='navbar-brand" href="#"' href="">
                    <img src={headerImg} alt="" />
                  </a>
                  <button class="navbar-toggler" type="button">
              <span class="menu-lines"><span></span></span>
            </button>
                  <div class="collapse navbar-collapse" id="mainNavigation">
        <ul class="navbar-nav mx-auto">
          <li class="nav__item with-dropdown">
            <a href="#" class=" nav__item-link active">Home</a> 
            
          
          </li>
          <li class="nav__item with-dropdown">
            <a href="#" class=" nav__item-link">Company</a>
           
          </li>
          <li class="nav__item with-dropdown">
            <a href="#" class=" nav__item-link">Industries</a>
           
          
          </li>
          <li class="nav__item with-dropdown">
            <a href="#" class=" nav__item-link">Case Studies</a>
          
           
          </li>
          <li class="nav__item with-dropdown">
            <a href="#" class=" nav__item-link">News</a>
          
          
          </li>
          <li class="nav__item">
            <a href="#" class="nav__item-link">Contact Us</a>
          </li>
          </ul>
      </div>
      <div class="navbar-modules">
              <ul class="list-unstyled d-flex align-items-center modules__btns-list">
                <li>
                 
                </li>
               
                
              </ul>
            </div>
                </div>
            </nav>

        </header>

     
    );
};

export default Header;