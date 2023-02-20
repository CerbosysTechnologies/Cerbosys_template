import React from 'react';
import headerImg from '../images/Group 8365.png'

const Header = () => {
    return (
        <div className="page-template page-template-template-homepage page-template-template-homepage-php page page-id-3712 wp-embed-responsive theme-induscity woocommerce-no-js full-content header-sticky hide-topbar-mobile header-v5 wpb-js-composer js-comp-ver-6.0.5 vc_responsive">
        <header id="masthead" className="site-header clearfix">
        <div className="header-main clearfix">
            <div className="site-contact">
                <div className="container">
                    <div className="row menu-row">
                        <div className="site-logo col-md-9 col-sm-9 col-xs-9">
                            <a href="#" className="logo">
                                <img src={headerImg} alt="Induscity" className="logo"/>
                            </a>
                            <p className="site-title">
                                <a href="#" rel="home">Induscity</a>
                            </p>
                            <h2 className="site-description">Just another Steel Themes Sites site</h2>
                        </div>
                        <div className="site-extra-text hidden-md hidden-sm hidden-xs">
                            <div className="widget induscity-social-links-widget">
                                <a href="#" className="share-facebook tooltip-enable social" rel="nofollow" title="Facebook" data-toggle="tooltip" data-placement="top" >
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#" className="share-twitter tooltip-enable social" rel="nofollow" title="Twitter" data-toggle="tooltip" data-placement="top" >
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#" className="share-skype tooltip-enable social" rel="nofollow" title="Skype" data-toggle="tooltip" data-placement="top" >
                                    <i className="fa fa-skype"></i>
                                </a>
                                <a href="#" className="share-linkedin tooltip-enable social" rel="nofollow" title="Linkedin" data-toggle="tooltip" data-placement="top" >
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                            <div className="widget_text widget widget_custom_html">
                                <div className="textwidget custom-html-widget">
                                    <div className="header-contact mail">
                                        <div>
                                            <h5>Certified Company</h5>
                                            ISO 9001:2005
                            
                                        </div>
                                        <i className="flaticon-check"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="widget_text widget widget_custom_html">
                                <div className="textwidget custom-html-widget">
                                    <div className="header-contact mail">
                                        <div>
                                            <h5>Leading Industrial</h5>
                                            Solution Provider
                            
                                        </div>
                                        <i className="flaticon-check"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="widget_text widget widget_custom_html">
                                <div className="textwidget custom-html-widget">
                                    <div className="header-contact mail">
                                        <div>
                                            <h5>Top Most Factory</h5>
                                            In United States
                            
                                        </div>
                                        <i className="flaticon-check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-toggle col-md-3 col-sm-3 col-xs-3">
                            <span id="mf-navbar-toggle" className="navbar-icon">
                                <span className="navbars-line"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-menu container">
                <nav id="site-navigation" className="main-nav primary-nav nav">
                    <ul id="menu-primary-menu" className="menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children menu-item-19 active dropdown hasmenu">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                          
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58">
                            <a href="#">About Us</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3733 dropdown is-mega-menu has-width">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                          
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3736 dropdown hasmenu">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Market Sectors</a>
                            
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-52 dropdown hasmenu">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
                            
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3556 dropdown hasmenu">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                           
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
                            <a href="#">Contact</a>
                        </li>
                        <li className="extra-menu-item menu-item-search">
                            <a href="#" className="toggle-search">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </a>
                            <form method="get" className="search-form" action="#">
                                <input type="search" className="search-field" placeholder="Search..." value="" name="s"/>
                                <input type="submit" className="search-submit" value="Search"/>
                            </form>
                        </li>
                    </ul>
                </nav>
                <div className="mf-header-item-button">
                    <a href="#" className="mf-btn">Get a Quote</a>
                </div>
            </div>
        </div>

    </header>
    </div>
    );
};

export default Header;