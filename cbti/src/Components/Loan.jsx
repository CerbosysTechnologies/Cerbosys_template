import React from 'react';
import loanImg from '../image/loan-calculator-1-1.png'

const Loan = () => {
    return (
        <section className="loan-calculator loan-calculator--has-bg pt-120">
        <div className="container">
            <div className="loan-calculator__top">
                <div className="row">
                    <div className="col-md-6">
                        <div className="block-title text-left">
                            <p className="block-title__tagline">calculate your rate</p>
                            <h2 className="block-title__title">How much do you need loan for you?</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="loan-calculator__top__text">Nullam vel nibh facilisis lectus fermentum ultrices quis non
                            risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea
                            dictumst.</p>
                    </div>
                </div>
            </div>

            <div className="loan-calculator__box">  
                <div className="row row-gutter-x-0">
                    <div className="col-lg-6">
                        <form className="loan-calculator__form" action="contact.html" id="loan-calculator" data-interest-rate="15">
                            <div className="input-box__top">
                                <span>$1000</span>
                                <span>$40000</span>
                            </div>
                            <div className="input-box">
                                <div className="range-slider-count noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr" id="range-slider-count">
                                    <div className="noUi-base">
                                        <div className="noUi-connects">
                                            <div className="noUi-connect" style={{transform: "translate(0%, 0px) scale(0.384615, 1)"}}>
                                            </div>
                                        </div>
                                        <div className="noUi-origin" style={{transform: "translate(-615.385%, 0px)" , zIndex: "4"}}>
                                            <div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1000.0" aria-valuemax="40000.0" aria-valuenow="16000.0" aria-valuetext="16000.00">
                                                <div className="noUi-touch-area">

                                                </div>
                                                <div className="noUi-tooltip">$16000</div>
                                            </div>
                                        </div>
                                    </div>
                                            </div>
                                <input type="hidden" value="16000.00" id="min-value-rangeslider-count"/>
                                <input type="hidden" value="" id="max-value-rangeslider-count"/>
                            </div>
                            <div className="input-box__top">
                                <span>1 Month</span>
                                <span>12 Months</span>
                            </div>
                            <div className="input-box">
                                <div className="range-slider-month noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr" id="range-slider-month"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: "translate(0%, 0px) scale(0.636364, 1)"}}></div></div><div className="noUi-origin" style={{transform: "translate(-363.636%, 0px)",zIndex :"4"}}><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1.0" aria-valuemax="12.0" aria-valuenow="8.0" aria-valuetext="8.00"><div className="noUi-touch-area"></div><div className="noUi-tooltip">8</div></div></div></div></div>
                                <input type="hidden" value="8.00" id="min-value-rangeslider-month"/>
                                <input type="hidden" value="" id="max-value-rangeslider-month"/>
                            </div>
                            <p>
                                <span>Pay Monthly</span>
                                <b>$<i id="loan-monthly-pay">2300</i></b>
                            </p>
                            <p>
                                <span>Term of Use</span>
                                <b><i id="loan-month">8</i> Months</b>
                            </p>
                            <p>
                                <span>Total Pay Back</span>
                                <b>$<i id="loan-total">18400</i></b>
                            </p>
                            <a href="#" className="thm-btn thm-btn--dark-hover">Apply For Loan</a>

                            <div className="loan-calculator__form__terms">*These calculators are provided only as general
                                self-help
                                Planning
                                Tools. Results depend on other factors.</div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="loan-calculator__image">
                            <img src={loanImg} alt=""/>
                            <div className="loan-calculator__image__caption wow fadeInUp animated" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration : "1500ms" , animationName : "fadeInUp"}}>
                                <div className="loan-calculator__image__caption__inner">
                                    <h3 className="loan-calculator__image__title">98<span>%</span></h3>
                                  
                                    <p className="loan-calculator__image__text">Satisfied Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Loan;