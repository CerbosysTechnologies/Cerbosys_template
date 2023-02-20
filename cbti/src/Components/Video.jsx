import React from 'react';
import background from '../image/video-bg-1-1.jpg'

const Video = () => {
    return (
        <section className="video-one video-one--home pt-240 pb-120" style={{ backgroundImage: `url(${background})`}}>
        <div className="video-one__shape"></div>
        <div className="container">
            <div className="row row-gutter-y-50">
                <div className="col-lg-6">
                    <div className="video-one__content">
                        <a href="#" className="video-popup video-one__btn">
                            <i className="fa fa-play"></i>
                            <span className="ripple"></span>
                        </a>
                        <h3 className="video-one__title">Hundreds of customers <br/> trust our company</h3>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ul className="list-unstyled video-one__list">
                        <li>
                            {/* <!-- <i className="icon-tick"></i> --> */}
                            Expert &amp; Certified
                        </li>
                        <li>
                            {/* <!-- <i className="icon-tick"></i> --> */}
                            Quality Services
                        </li>
                        <li>
                            {/* <!-- <i className="icon-tick"></i> --> */}
                            Quick Loan Order
                        </li>
                        <li>
                            {/* <!-- <i className="icon-tick"></i> --> */}
                            Status Monitor
                        </li>
                        <li>
                            {/* <!-- <i className="icon-tick"></i> --> */}
                            Status Monitor
                        </li>
                        <li>
                            {/* <!-- <i className="icon-tick"></i> --> */}
                            Easy to Use
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Video;