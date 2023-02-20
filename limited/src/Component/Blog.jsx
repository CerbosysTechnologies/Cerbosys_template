import React from 'react';
import blogImg from '../images/a (1).jpg'
import blogImg1 from '../images/a (2).jpg'
import blogImg2 from '../images/a (3).jpg'

const Blog = () => {
    return (
        <section id="blogGrid" class="blog blog-grid pt-120 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div class="heading text-center mb-50">
                <span class="heading__subtitle">Latest Articles Updated Daily</span>
                <h2 class="heading__title">Insight And Trends</h2>
                <p class="heading__desc">Follow our latest news and thoughts which focuses exclusively on insight,
                  industry trends, top news headlines.</p>
              </div>
            </div>
          </div>
          <div class="row">
          
            <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="blog-item">
                <div class="blog__img">
                  <a href="#">
                    <img src={blogImg} alt="blog image"/>
                  </a>
                </div>
                <div class="blog__content">
                  <div class="blog__meta">
                    <div class="blog__meta-cat">
                      <a href="#">Oil &amp; Gas</a><a href="#">Insights</a>
                    </div>
                    <span class="blog__meta-date">Jan 20, 2019</span>
                  </div>
                  <h4 class="blog__title"><a href="#">Importers achieve cost savings through the First Sale rule!</a></h4>
                  <a href="#" class="btn btn__secondary btn__link">
                  <i class="fa-solid fa-circle-arrow-right"></i>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="blog-item">
                <div class="blog__img">
                  <a href="#">
                    <img src={blogImg1}alt="blog image"/>
                  </a>
                </div>
                <div class="blog__content">
                  <div class="blog__meta">
                    <div class="blog__meta-cat">
                      <a href="#">Industry</a><a href="#">Construction</a>
                    </div>
                    <span class="blog__meta-date">Oct 18, 2019</span>
                  </div>
                  <h4 class="blog__title"><a href="#">Cargo flow through better supply chain visibility, control.</a></h4>
                  <a href="#" class="btn btn__secondary btn__link">
                  <i class="fa-solid fa-circle-arrow-right"></i>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
           
            <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="blog-item">
                <div class="blog__img">
                  <a href="#">
                    <img src={blogImg2} alt="blog image"/>
                  </a>
                </div>
                <div class="blog__content">
                  <div class="blog__meta">
                    <div class="blog__meta-cat">
                      <a href="#">Engineering</a><a href="#">Distribution</a>
                    </div>
                    <span class="blog__meta-date">Jan 20, 2019</span>
                  </div>
                  <h4 class="blog__title"><a href="#">Importance of specialized focus in portfolio, Oil &amp; Gas
                      Logistics?</a></h4>
                  <a href="#" class="btn btn__secondary btn__link">
                  <i class="fa-solid fa-circle-arrow-right"></i>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blog;