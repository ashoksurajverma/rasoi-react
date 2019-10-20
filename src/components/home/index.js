import React, { Component } from "react";
import ShopSlider from '../../assets/images/slider/shop-slider.jpg';
import ShopSlider2 from '../../assets/images/slider/shop-slider2.jpg';
import Logo from '../../assets/images/logo.png';
import Banner1 from '../../assets/images/banner1.jpg';
import Banner2 from '../../assets/images/banner-img-2.jpg';
import product2e from "../../assets/images/product/product-2e.jpg";
import partner1 from  "../../assets/images/partner/partner-01.png"
import partner2 from  "../../assets/images/partner/partner-02.png"
import partner3 from  "../../assets/images/partner/partner-03.png"
import partner4 from  "../../assets/images/partner/partner-02.png"
import partner5 from  "../../assets/images/partner/partner-01.png"
import partner6 from  "../../assets/images/partner/partner-03.png"
import partner7 from  "../../assets/images/partner/partner-02.png"
import backgroundbg5 from '../../assets/images/background/bg5.png';

export default class Home extends Component {
  render() {
    return (
      <>
    
      <div id="pagewrap" className="pagewrap">
      <div id="html-content" className="wrapper-content">
        <header>
          <div className="header-main header-customize">
            <div className="container d-flex align-items-center">
              <div className="open-offcanvas">&#9776;</div>
              <div className="header-logo"><a href="index.html" className="logo"><img src={Logo} alt="fooday" className="logo-img" /></a></div>
              <nav id="main-nav-offcanvas" className="main-nav-wrapper ml-auto">
                <div className="close-offcanvas-wrapper"><span className="close-offcanvas">x</span></div>
                <div className="main-nav">
                  <ul id="main-nav" className="nav nav-pills">
                    <li className="current-menu-item"><a href="index.html" className="active">Home</a>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="reservation.html">Reservation</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div className="page-container">
          <div className="top-header top-slider layout-shop">
            <div className="slides">
              <div className="slide-content slide-layout-01">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <div className="swin-sc swin-sc-title text-left">
                        <h3 data-ani-in="fadeInUp" data-ani-out="fadeOutDown" data-ani-delay="500" className="title animated fadeInUp">Deliciousness jumping into the mouth</h3>
                        <h4 data-ani-in="fadeInUp" data-ani-out="fadeOutDown" data-ani-delay="1000" className="subtitle animated fadeInUp">Let Enjoy The Rhym Of Fooday Dishes</h4>
                      </div>
                      <div data-ani-in="fadeInUp" data-ani-out="fadeOutDown" data-ani-delay="1200" className="btn-wrap text-left animated fadeInUp"><a href="#" className="btn swin-btn btn-transparent"> <span>Read More</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="slide-bg"><img src="../../assets/images/slider/shop-slider.jpg" alt="" className="img img-fluid" /></div> */}
              <div className="slide-bg"><img src={ShopSlider} alt="" className="img img-fluid" /></div>
            </div>
            <div className="slides">
              <div className="slide-content slide-layout-01">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-6">
                      <div className="swin-sc swin-sc-title text-left">
                        <h3 data-ani-in="fadeInUp" data-ani-out="fadeOutDown" data-ani-delay="500" className="title animated fadeInUp">Where food speaks with your palate</h3>
                        <h4 data-ani-in="fadeInUp" data-ani-out="fadeOutDown" data-ani-delay="1000" className="subtitle animated fadeInUp">We speak the good food language</h4>
                      </div>
                      <div data-ani-in="fadeInUp" data-ani-out="fadeOutDown" data-ani-delay="1200" className="btn-wrap text-left animated fadeInUp"><a href="#" className="btn swin-btn btn-transparent"> <span>Read More</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-bg"><img src={ShopSlider2} alt="" className="img img-fluid" /></div>
            </div>
          </div>
          <div className="page-content-wrapper">
            <div className="page-content no-padding">
              <section className="service-section-02 padding-top-100">
                <div className="container">
                  <div className="swin-sc swin-sc-iconbox">
                    <div className="row">
                      <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="item icon-box-02">
                          <div className="wrapper-icon"><i className="icons fa fa-shopping-basket"></i><span className="number">1</span></div>
                          <h4 className="title">Online Order</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="item icon-box-02">
                          <div className="wrapper-icon"><i className="icons fa fa-truck"></i><span className="number">2</span></div>
                          <h4 className="title">Fast Delivery</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="item icon-box-02">
                          <div className="wrapper-icon"><i className="icons fa fa-gift"></i><span className="number">3</span></div>
                          <h4 className="title">Special Gift</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="item icon-box-02">
                          <div className="wrapper-icon"><i className="icons fa fa-users"></i><span className="number">4</span></div>
                          <h4 className="title">Friendly Support</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="product-sesction-02 padding-top-120 padding-bottom-100">
                <div className="container">
                  <div className="swin-sc swin-sc-title">
                    <p className="top-title"><span>Popular Product</span></p>
                    <h3 className="title">Tasty And Good Price</h3>
                  </div>
                  <div className="swin-sc swin-sc-product products-02">
                    <div className="products nav-slider">
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2a.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>25.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Mexico Beafsteak</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2b.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>5.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Mexico Beafsteak</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2c.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>20.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Madagasca Lopster</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2e.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>45.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Jambon Salad</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2f.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>15.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Mexico Beafsteak</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2d.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>30.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Madagasca Lopster</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2a.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>25.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Mexico Beafsteak</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2b.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>5.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Mexico Potato</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <div className="swin-sc swin-sc-banner item">
                        <div className="banner-featured-img"><img src={Banner1} alt="fooday" className="img img-fluid" />
                          <div className="banner-content">
                            <div className="banner-title">HONEY CAKE</div>
                            <div className="banner-subtitle">NEW DISHES THIS WEEK</div><a href="#" className="swin-btn"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="swin-sc swin-sc-banner right item">
                        <div className="banner-featured-img"><img src={Banner2} alt="fooday" className="img img-fluid" />
                          <div className="banner-content">
                            <div className="banner-title">HAM STORY</div>
                            <div className="banner-subtitle">OUR HANDMADE PRODUCTS</div><a href="#" className="swin-btn"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="padding-top-120 padding-bottom-100">
                <div className="container">
                  <div className="swin-sc swin-sc-title">
                    <p className="top-title"><span>New Product</span></p>
                    <h3 className="title">Lunch And Dinner</h3>
                  </div>
                  <div className="swin-sc swin-sc-product products-02 carousel-02">
                    <div className="products nav-slider">
                      <div className="row slick-padding">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src={product2e} alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>45.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Jambon Salad Hot Bread</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2f.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>15.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Mexico Beafsteak Potato</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2d.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>30.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Madagasca Lopster Tasty</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2f.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>15.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Mexico Beafsteak Potato</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2a.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>25.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Mexico Beafsteak Potato fly</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <div className="blog-item item swin-transition">
                            <div className="block-img"><img src="../../assets/images/product/product-2b.jpg" alt="" className="img img-fluid" />
                              <div className="block-circle price-wrapper"><span className="price woocommerce-Price-amount amount"><span className="price-symbol">$</span>5.0</span></div>
                              <div className="group-btn"><a href="#" className="swin-btn btn-link"><i className="icons fa fa-link"></i></a><a href="#" className="swin-btn btn-add-to-card"><i className="fa fa-shopping-basket"></i></a></div>
                            </div>
                            <div className="block-content">
                              <h5 className="title"><a href="#">Mexico Beafsteak Potato</a></h5>
                              <div className="product-info">
                                <ul className="list-inline">
                                  <li className="author"><span>Chef</span><span className="text">Don Joe</span></li>
                                  <li className="rating"><a href="#"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="container">
                  <div className="shop-banner banner-section">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2">
                        <div className="content-wrapper">
                          <h2 className="heading-title">BIGGEST EVENT - SALE<span className="text-large">50% OFF</span>IN THIS WEEK</h2>
                          <p className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                        <div className="swin-btn-wrap center mtxxl"><a href="#" className="swin-btn center btn-transparent btn-white"> <span>READ MORE</span></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="padding-bottom-100 padding-top-100">
                <div className="container">
                  <div data-item="5" className="swin-sc swin-sc-partner">
                    <div className="main-slider">
                      <div className="slides">
                        <div className="item"><img src={partner1} alt="fooday" className="img img-fluid" /></div>
                        <div className="item"><img src={partner2} alt="fooday" className="img img-fluid" /></div>
                        <div className="item"><img src={partner3} alt="fooday" className="img img-fluid" /></div>
                        <div className="item"><img src={partner4} alt="fooday" className="img img-fluid" /></div>
                        <div className="item"><img src={partner5} alt="fooday" className="img img-fluid" /></div>
                        <div className="item"><img src={partner6} alt="fooday" className="img img-fluid" /></div>
                        <div className="item"><img src={partner7} alt="fooday" className="img img-fluid" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <a id="totop" href="#" className="animated"><i className="fa fa-angle-double-up"></i></a>
      </div>
      <div id="loader" data-opening="m -5,-5 0,70 90,0 0,-70 z m 5,35 c 0,0 15,20 40,0 25,-20 40,0 40,0 l 0,0 C 80,30 65,10 40,30 15,50 0,30 0,30 z" className="pageload-overlay">
        <div className="loader-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none">
            <path d="m -5,-5 0,70 90,0 0,-70 z m 5,5 c 0,0 7.9843788,0 40,0 35,0 40,0 40,0 l 0,60 c 0,0 -3.944487,0 -40,0 -30,0 -40,0 -40,0 z"></path>
          </svg>
          <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
          </div>
          <div className="sk-circle sk-circle-out">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
          </div>
        </div>
      </div>
      <div id="live-setting" className="hidden-sm hidden-xs"><a id="open-popup"><i className="fa fa-paint-brush"></i></a>
        <form id="popup">
          <h5 className="live-title">Site Color</h5>
          <div className="popup-inner">
            <div className="box-setting">
              <div className="pattern-color">
                <p>Pattern Color Variable:</p>
                <p className="text-small">( You can change any color as you want in source code. )</p>
                <div className="color-setting">
                  <ul className="list-unstyled">
                    <li className="colordefault"><span>Default</span><a></a></li>
                    <li className="color01"><span>Pizza + Bread</span><a></a></li>
                    <li className="color02"><span>Wine</span><a></a></li>
                    <li className="color03"><span>Coffee</span><a></a></li>
                    <li className="color04"><span>Vegetable</span><a></a></li>
                    <li className="color05"><span>Cream</span><a></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h5 className="live-title">Layout Options</h5>
          <div className="popup-inner">
            <div className="layout-setting"><a className="wide"> <span>Wide</span></a><a className="boxed"> <span>Boxed</span></a></div>
          </div>
          <div className="boxed-setting">
            <h5 className="live-title">Boxed layout images</h5>
            <div className="popup-inner">
              <div className="layout-boxed-bg"><a data-img="../../assets/images/layout-option/bg-01.jpg" className="bx-layout-img" /><img src="../../assets/images/layout-option/bg-01.jpg" className="img img-fluid" /><a data-img="../../assets/images/layout-option/bg-02.jpg" className="bx-layout-img"><img src="../../assets/images/layout-option/bg-02.jpg" className="img img-fluid" /></a><a data-img="../../assets/images/layout-option/bg-03.jpg" className="bx-layout-img"><img src="../../assets/images/layout-option/bg-03.jpg" className="img img-fluid" /></a></div>
            </div>
          </div>
        </form>
      </div>
    </div>
      </>
    )
  }
}


