import React from 'react';
import '../css/bootstrap.min.css'
import '../css/style.css'
import "../css/responsive.css"
import aboutImg from "../images/Group 8297.png"
import aboutImga from "../images/menu_btn.png"

function Header()
{
    return (
        <div className="head-top">
            <div className="container-fluid">
                <div className="row d_flex">
                    <div className="col-sm-3">
                        <div className="logo">
                            
                            <a href="#">
                           
                                <img src={aboutImg} alt="" />
                                </a>
                        </div>
                    </div>
                   
                    <div className="col-sm-9">
                        <ul className="email text_align_right">
                           
                            <li>
                                <button class="openbtn" onclick="openNav()">
                                    <img src={aboutImga} alt="" />
   </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;