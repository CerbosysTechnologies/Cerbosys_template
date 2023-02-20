import React from 'react';
import background from '../images/bg17.jpg'

const Counter = () => {
    return (
        <div className="section-full content-inner overlay-black-dark bg-img-fix" style={{ backgroundImage: `url(${background})` }}>
				<div className="container">
                    <div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
							<div className="counter-style-1 text-center text-white">
								<div className="">
									<span className="counter">7652</span>
								</div>
								<span className="counter-text">Completed Projects</span>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
							<div className="counter-style-1 text-center text-white">
								<div className="">
									<span className="counter">4562</span>
								</div>
								<span className="counter-text">Happy Clients</span>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
							<div className="counter-style-1 text-center text-white">
								<div className="">
									<span className="counter">3569</span>
								</div>
								<span className="counter-text">Questions Answered</span>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
							<div className="counter-style-1 text-center text-white">
								<div className="">
									<span className="counter">2089</span>
								</div>
								<span className="counter-text">Ordered Coffee's</span>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
};

export default Counter;