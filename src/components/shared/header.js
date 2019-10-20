import React,{Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
        <header>
          <div className="header-main header-customize">
            <div className="container d-flex align-items-center">
              <div className="open-offcanvas">&#9776;</div>
              <div className="header-logo"><a href="index.html" className="logo"><img src="assets/images/logo.png" alt="fooday" className="logo-img" /></a></div>
              <nav id="main-nav-offcanvas" className="main-nav-wrapper ml-auto">
                <div className="close-offcanvas-wrapper"><span className="close-offcanvas">x</span></div>
                <div className="main-nav">
                  <ul id="main-nav" className="nav nav-pills">
                    <li className="current-menu-item"><a href="index.html" className="active">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="reservation.html">Reservation</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        )
    }
}
export default Header;