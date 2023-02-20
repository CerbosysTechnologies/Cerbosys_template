import React from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';
import "../css/responsive.css"

function Navbar() {
    
    return (
        <>
         <div id="mySidepanel" className="sidepanel">
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
        <a class="active" href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Searvices</a>
        <a href="#">Testimonial</a>
        <a href="#">Works</a>
        <a href="#">Contact</a>
    </div>
        </>
    );
};

export default Navbar;