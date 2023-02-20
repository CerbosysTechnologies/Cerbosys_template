import React from 'react';
import news1 from '../images/t (1).jpg'
import news2 from '../images/t (2).jpg'
import news3 from '../images/t (3).jpg'
const News = () => {
    return (
        <div className="section-full content-inner bg-white">
        <div className="container">
            <div className="section-head text-black text-center">
                <h2 className="title">Latest News</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
            </div>
            <div className="blog-carousel  owl-btn-3 owl-btn-center-lr">
                <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                        <div className="dlab-post-media dlab-img-effect "> <a href="#"><img src={news1} alt=""/></a> </div>
                        <div className="dlab-info p-a20 border-1">
                            <div className="dlab-post-meta">
                                <ul>
                                    <li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                    <li className="post-author"> By <a href="#">Jack</a> </li>
                                </ul>
                            </div>
                            <div className="dlab-post-title">
                                <h4 className="post-title"><a href="#">Seven Doubts You Should</a></h4>
                            </div>
                            <div className="dlab-post-text">
                               <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                            </div>
                            <div className="dlab-post-readmore"> 
                                <a href="#" title="READ MORE" rel="bookmark" className="site-button btnhover13">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                        <div className="dlab-post-media dlab-img-effect "> <a href="#"><img src={news2} alt=""/></a> </div>
                        <div className="dlab-info p-a20 border-1">
                            <div className="dlab-post-meta ">
                                <ul>
                                    <li className="post-date"> <strong>11 Aug</strong> <span> 2016</span> </li>
                                    <li className="post-author"> By <a href="#">Zachary</a> </li>
                                </ul>
                            </div>
                            <div className="dlab-post-title">
                                <h4 className="post-title"><a href="#">The Shocking Revelation</a></h4>
                            </div>
                            <div className="dlab-post-text">
                               <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                            </div>
                            <div className="dlab-post-readmore"> 
                                <a href="#" title="READ MORE" rel="bookmark" className="site-button btnhover13">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                        <div className="dlab-post-media dlab-img-effect "> <a href="#"><img src={news3} alt=""/></a> </div>
                        <div className="dlab-info p-a20 border-1">
                            <div className="dlab-post-meta">
                                <ul>
                                    <li className="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
                                    <li className="post-author"> By <a href="#">Charlotte</a> </li>
                                </ul>
                            </div>
                            <div className="dlab-post-title">
                                <h4 className="post-title"><a href="#">The Story Of Industry</a></h4>
                            </div>
                            <div className="dlab-post-text">
                               <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                            </div>
                            <div className="dlab-post-readmore"> 
                                <a href="#" title="READ MORE" rel="bookmark" className="site-button btnhover13">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default News;