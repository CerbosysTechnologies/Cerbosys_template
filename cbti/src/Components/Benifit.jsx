import React from 'react';
import benImg1 from  '../image/benefit-1-1.png'
import benImg2 from '../image/2400225 1.png'
import benImg4 from '../image/image 121.png'
import benImg3 from '../image/image 122.png'
import background from '../image/benefit-bg-1-1.jpg'

const Benifit = () => {
    return (
        <section class="benefit-one pt-120">
        <div class="benefit-one__shape-1 wow fadeInLeft animated" data-wow-delay="000ms" data-wow-duration="1500ms" style={{ backgroundImage: `url(${background})`, visibility: "visible",  animationDuration : "1500ms", animationDelay: "0ms" , animationName : "fadeInLeft " }}>
        </div>
        <div class="benefit-one__shape-2"></div>
        <div class="container">
            <div class="row row-gutter-y-60">
                <div class="col-lg-6">
                    <div class="benefit-one__image " >
                        <img src={benImg1} alt=""/>
                        <div class="benefit-one__image__caption">
                            <h3 class="benefit-one__image__title">99.9%</h3>
                            <p class="benefit-one__image__text">Success Rates Guarantee</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="benefit-one__content">
                        <div class="block-title text-left">
                            <p class="block-title__tagline">our benefits</p> 
                            <h2 class="block-title__title">Why you should choose our company</h2>
                        </div>
                        <p class="benefit-one__text">Nullam vel nibh facilisis lectus fermentum ultrices quis non risus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Duis
                            porta, quam ut finibus ultrices, lorem lacus congue lorem et rutrum sapien magna tincidunt
                            magna.</p>
                        <div class="benefit-one__box">
                            <div class="benefit-one__box__icon">
                                <i >
                                    <img class="icon-bank" src={benImg4} alt=""/>
                                </i>
                            </div>
                            <div class="benefit-one__box__content">
                                <h3 class="benefit-one__box__title">Lowest bank fees</h3>
                                <p class="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                    Aucibus sed sem non, mattis commodo nisi.</p>
                            </div>
                        </div>
                        <div class="benefit-one__box">
                            <div class="benefit-one__box__icon">
                                <i >
                                    <img  class="icon-payment"src={benImg3} alt=""/>
                                </i>
                            </div>
                            <div class="benefit-one__box__content">
                                <h3 class="benefit-one__box__title">Up to 20.000$ limit</h3>
                                
                                <p class="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                    Aucibus sed sem non, mattis commodo nisi.</p>
                            </div>
                        </div>
                        <div class="benefit-one__box">
                            <div class="benefit-one__box__icon">
                                <i >
                                    <img class="icon-smartphone-1" src={benImg2} alt=""/>
                                </i>
                            </div>
                            <div class="benefit-one__box__content">
                                <h3 class="benefit-one__box__title">Easy in 3 steps</h3>
                                <p class="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                    Aucibus sed sem non, mattis commodo nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Benifit;