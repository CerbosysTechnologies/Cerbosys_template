import React from 'react';

const Fact = () => {
    return (
        <section class="fact-one pt-140 pb-100">
        <div class="container">
            <div class="row row-gutter-y-30">
                <div class="col-lg-3 col-md-6">
                    <div class="fact-one__item">
                        <div class="fact-one__count">
                            <span class="count-box">
                                <span class="count-text" data-stop="90" data-speed="1500"></span>
                            </span>%
                        </div>
                        <h3 class="fact-one__title">Loans Approve</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="fact-one__item">
                        <div class="fact-one__count">$<span class="count-box">
                                <span class="count-text" data-stop="90" data-speed="1500"></span>
                            </span>k</div>
                        <h3 class="fact-one__title">Daily Payments</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="fact-one__item">
                        <div class="fact-one__count"><span class="count-box">
                                <span class="count-text" data-stop="90" data-speed="1500"></span>
                            </span>k</div>
                        <h3 class="fact-one__title">Happy Customers</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="fact-one__item">
                        <div class="fact-one__count"><span class="count-box">
                                <span class="count-text" data-stop="290" data-speed="1500"></span>
                            </span> 290
                        </div>
                        <h3 class="fact-one__title">Expert People</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Fact;