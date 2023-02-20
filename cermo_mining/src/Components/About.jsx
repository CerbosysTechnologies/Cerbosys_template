import React from 'react';
import aboutImg from '../images/div (15).png'

const About = () => {
    return (
        <div className="container">
        <div className="section-head text-black text-center">
            <h2 className="title">Simple Cost-Efficient Mining Solutions</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
    
            <div>
                <img src={aboutImg} alt=""/>
            </div>
            
                    
        <div className="text-center">
            <a href="services-1.html" className="site-button btnhover13 button-md">See all Services</a> 
        </div>
    
</div>
    );
};

export default About;