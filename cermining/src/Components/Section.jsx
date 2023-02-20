import React from 'react';
import divImg from '../images/div.png'
import divImg1 from '../images/div (3).png'
import divImg2 from '../images/div (4).png'

const Section = () => {
    return (
        <div className="promo-section">
        <div className="promo-wrapper">
      
            <div className="promo-single-item">
                <div className="box">
                    <div className="icon">
                        <img src={divImg} alt=""/>
                    </div>
                    <div className="content">
                        <h4 className="title">Smart Solution</h4>
                        <p>Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
          
            <div className="promo-single-item">
                <div className="box">
                    <div className="icon">
                        <img src={divImg1} alt=""/>
                    </div>
                    <div className="content">
                        <h4 className="title">Award Winning</h4>
                        <p>Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
       
            <div className="promo-single-item">
                <div className="box">
                    <div className="icon">
                        <img src={divImg2} alt=""/>
                    </div>
                    <div className="content">
                        <h4 className="title">Great Support</h4>
                        <p>Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
    );
};

export default Section;