import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Helmet} from "react-helmet";
import Home from './components/home';
import Header from './components/shared/header';
import Footer from './components/shared/footer';

import './assets/css/bootstrap.min.css';
import './assets/css/custom-style.css';
import './assets/css/elements.css';
import './assets/css/extra.css';
import './assets/css/layout.css';
import './assets/css/live-settings.css';
import './assets/css/responsive.css';
import './assets/css/widget.css';
// import './assets/js/custom';

// for home-shop page
import './assets/vendors/slick/slick.min.css';
import './assets/vendors/slick/slick-theme.min.css';
import './assets/vendors/animate.min.css';
import './assets/vendors/pageloading/css/component.min.css';

function App() {
  return (
    <> 
    <Helmet>
        <script type="text/jsx" src="../../assets/vendors/pageloading/js/snap.svg-min.js"></script>
        <script type="text/jsx" src="../../assets/vendors/jquery-1.10.2.min.js"></script>
        <script type="text/jsx" src="../../assets/js/popper.min.js"></script>
        {/* <!-- Bootstrap JavaScript--> */}
        <script type="text/jsx" src="../../assets/js/bootstrap.min.js"></script>
        {/* <!-- Vendors--> */}
        <script type="text/jsx" src="../../assets/vendors/swipebox/js/jquery.swipebox.min.js"></script>
        <script type="text/jsx" src="../../assets/vendors/slick/slick.min.js"></script>
        <script type="text/jsx" src="../../assets/vendors/isotope/isotope.pkgd.min.js"></script>
        
        <script type="text/jsx" src="../../assets/vendors/pageloading/js/svgLoader.min.js"></script>
        <script type="text/jsx" src="../../assets/vendors/pageloading/js/classeie.min.js"></script>
        
        <script type="text/jsx" src="../../assets/vendors/wowjs/wow.min.js"></script>

        {/* <!-- Own script--> */}
        <script type="text/jsx" src="../../assets/js/layout.js"></script>
        <script type="text/jsx" src="../../assets/js/elements.js"></script>
        <script type="text/jsx" src="../../assets/js/widget.js"></script>
      </Helmet>
   <div id = "pagewrap"
    className = "pagewrap" >
    <
    div id = "html-content"
    className = "wrapper-content" >
    <
    Router >
    <
    Header / >
    <
    Switch >
    <
    Route exact path = "/home"
    component = { Home }
    /> <
    /Switch> <
    Footer / >
    <
    /Router> <
    /div> <
    /div>
    </>
  );
}

export default App;