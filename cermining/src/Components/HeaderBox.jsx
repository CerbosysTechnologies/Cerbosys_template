import React from 'react';
import headerImg1 from '../images/Group 8343.png'

const HeaderBox = () => {
    return (
        <div className="mobile-header d-block d-lg-none">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col">
                    <div className="mobile-logo">
                    <a href=""><img src={headerImg1} alt=""/></a>
                    </div>
                </div>
               <div className='col'>
                <div class="mobile-action-link text-end">
                    <a href="" class="offcanvas-toggle offside-menu">
                    <i class="fa-solid fa-bars"></i>
                    </a>

                </div>
                </div> 
            </div>
        </div>
    </div>
    );
};

export default HeaderBox;