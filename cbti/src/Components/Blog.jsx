import React from 'react';
import blogImg1 from '../image/blog-1-1.png'
import blogImg2 from '../image/blog-1-2.png'
import blogImg3 from '../image/blog-1-3.png'

const Blog = () => {
    return (
        <section class="blog-one pt-120 pb-120">
            <div class="container">
                <div class="block-title text-center">
                    <p class="block-title__tagline">What We’re Offering</p>
                    <h2 class="block-title__title">Our latest news updates <br/> &amp; articles</h2>
                </div>
                <div class="row row-gutter-y-30">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="blog-card">
                            <div class="blog-card__image">
                                <div class="blog-card__date"><span>05</span> Mar</div>
                                <img src={blogImg1} alt="Which growth strategies you should adopt"/>
                                <a href="#"></a>
                            </div>
                            <div class="blog-card__content">
                                <div class="blog-card__meta">
                                    <a href="#"><i class="far fa-user-circle"></i> by Admin</a>
                                    <a href="#"><i class="far fa-comments"></i> 2 Comments</a>
                                </div>
                                <h3 class="blog-card__title"><a href="#">Which growth strategies you should adopt</a></h3>
                                <p class="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <a href="#" class="blog-card__link">Read More</a> 
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="blog-card">
                            <div class="blog-card__image">
                                <div class="blog-card__date"><span>05</span> Mar</div>
                                <img src={blogImg2} alt="Which growth strategies you should adopt"/>
                                <a href="#"></a>
                            </div>
                            <div class="blog-card__content">
                                <div class="blog-card__meta">
                                    <a href="#"><i class="far fa-user-circle"></i> by Admin</a>
                                    <a href="#"><i class="far fa-comments"></i> 2 Comments</a>
                                </div>
                                <h3 class="blog-card__title"><a href="#">Which growth strategies you should adopt</a></h3>
                                <p class="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <a href="#" class="blog-card__link">Read More</a> 
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="blog-card">
                            <div class="blog-card__image">
                                <div class="blog-card__date"><span>05</span> Mar</div>
                                <img src={blogImg3} alt="Which growth strategies you should adopt"/>
                                <a href="#"></a>
                            </div>
                            <div class="blog-card__content">
                                <div class="blog-card__meta">
                                    <a href="#"><i class="far fa-user-circle"></i> by Admin</a>
                                    <a href="#"><i class="far fa-comments"></i> 2 Comments</a>
                                </div>
                                <h3 class="blog-card__title"><a href="#">Which growth strategies you should adopt</a></h3>
                                <p class="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <a href="#" class="blog-card__link">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Blog;