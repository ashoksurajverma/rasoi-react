import React,{Component} from 'react'; 

class Footer extends Component{ 
    constructor(props){
        super(props);
        this.state={};
    }
    render(){ 
        return(
            <footer>
                <div className="subscribe-section">
                    <img src="assets/images/background/bg5.png" alt="" className="img-subscribe" />
                    <div className="container">
                        <div className="subscribe-wrapper">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="subscribe-heading">
                                        <h3 className="title">Subcribe Us Now</h3>
                                        <div className="des">Get more news and delicious dishes everyday from us</div>
                                    </div>
                                    <form className="widget-newsletter">
                                        <input placeholder="Email" className="form-control" />
                                        <span className="submit">
                                            <i className="fa fa-paper-plane"></i>
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="container">
                        <div className="ft-widget-area">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="ft-area1">
                                        <div className="swin-widget swin-widget-about">
                                            <div className="clearfix">
                                                <a className="wget-logo">
                                                    <img src="assets/images/logo-ft.png" alt="" className="img img-fluid" />
                                                </a>
                                            </div>
                                            <div className="wget-about-content">
                                                <p>Eiusmod consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                                                <p>Lorem ipsum dolor sit amet, eiusmod consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <ul className="socials socials-about list-unstyled list-inline pull-left mtm">
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="ft-area1">
                                        <div className="swin-widget widget-about">
                                            <div className="title-widget">Contact Us</div>
                                            <div className="widget-body widget-content clearfix">
                                                <div className="about-contact-info clearfix">
                                                    <div className="info-content address-content">
                                                        <div className="info-icon"><i className="fa fa-map-marker"></i></div>
                                                        <div className="info-text">
                                                            <p>157 White Oak Drive Kansas City </p>
                                                            <p>689 Lynn Street South Boston</p>
                                                        </div>
                                                    </div>
                                                    <div className="info-content phone-content">
                                                        <div className="info-icon"><i className="fa fa-phone"></i></div>
                                                        <div className="info-text">
                                                            <p>(617)-276-8031</p>
                                                            <p>(617)-276-8031</p>
                                                        </div>
                                                    </div>
                                                    <div className="info-content email-content">
                                                        <div className="info-icon"><i className="fa fa-envelope"></i></div>
                                                        <div className="info-text">
                                                            <p>admin@fooday.com</p>
                                                            <p>support@fooday.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="ft-area1">
                                        <div className="swin-widget widget-pages">
                                            <div className="title-widget">Useful Link</div>
                                            <div className="widget-body widget-content">
                                                <ul className="list-unstyled">
                                                    <li><a href="#" className="link"><span className="text">About Us</span></a></li>
                                                    <li><a href="#" className="link"><span className="text">Customer Service</span></a></li>
                                                    <li><a href="#" className="link"><span className="text">Contact Us</span></a></li>
                                                    <li><a href="#" className="link"><span className="text">Latest News</span></a></li>
                                                    <li><a href="#" className="link"><span className="text">FAQs</span></a></li>
                                                    <li><a href="#" className="link"><span className="text">Product Support</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="ft-area1">
                                        <div className="swin-widget widget-open-hour">
                                            <div className="title-widget">Open Hour</div>
                                            <div className="widget-body widget-content">
                                                <div className="open-date-time">
                                                    <div className="open-date-time-item">
                                                        <div className="open-date">
                                                            <div className="open-date-item">
                                                                <div className="open-date-text">
                                                                    <p>Tuesday:</p>
                                                                </div>
                                                                <div className="open-date-dot">.......................................
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="open-time">
                                                            <div className="open-time-item">
                                                                <p>7AM - 9PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="open-date-time-item">
                                                        <div className="open-date">
                                                            <div className="open-date-item">
                                                                <div className="open-date-text">
                                                                    <p>Wednesday:</p>
                                                                </div>
                                                                <div className="open-date-dot">.......................................
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="open-time">
                                                            <div className="open-time-item">
                                                                <p>7AM - 9PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="open-date-time-item">
                                                        <div className="open-date">
                                                            <div className="open-date-item">
                                                                <div className="open-date-text">
                                                                    <p>Thursday:</p>
                                                                </div>
                                                                <div className="open-date-dot">.......................................
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="open-time">
                                                            <div className="open-time-item">
                                                                <p>7AM - 9PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="open-date-time-item">
                                                        <div className="open-date">
                                                            <div className="open-date-item">
                                                                <div className="open-date-text">
                                                                    <p>Friday:</p>
                                                                </div>
                                                                <div className="open-date-dot">.......................................
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="open-time">
                                                            <div className="open-time-item">
                                                                <p>7AM - 9PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="open-date-time-item">
                                                        <div className="open-date">
                                                            <div className="open-date-item">
                                                                <div className="open-date-text">
                                                                    <p>Saturday:</p>
                                                                </div>
                                                                <div className="open-date-dot">.......................................
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="open-time">
                                                            <div className="open-time-item">
                                                                <p>7AM - 9PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="open-date-time-item">
                                                        <div className="open-date">
                                                            <div className="open-date-item">
                                                                <div className="open-date-text">
                                                                    <p>Sunday:</p>
                                                                </div>
                                                                <div className="open-date-dot">.......................................
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="open-time">
                                                            <div className="open-time-item">
                                                                <p>7AM - 9PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="open-date-time-item">
                                                        <div className="open-date">
                                                            <div className="open-date-item">
                                                                <div className="open-date-text">
                                                                    <p>Monday:</p>
                                                                </div>
                                                                <div className="open-date-dot">.......................................
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="open-time">
                                                            <div className="open-time-item">
                                                                <p>Close</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        ) 
    } 
}
export default Footer;

