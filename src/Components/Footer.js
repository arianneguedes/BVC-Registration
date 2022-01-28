import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Footer.css";


export class Footer extends Component {
    render() {
        return (
          <div class="footer"> {/* No idea how to open the social media links yet... */}
            <div class="footer-text">Copyright © 2021 Bow Valley College</div>
            <div class="footer-text">Connect with us through</div>
            {/*<div class="twitter icons"><Link to={{pathname: "https://twitter.com/bowvalley"}} target="_blank"/></div>*/}
            <div class="twitter icons"><a href="https://twitter.com/bowvalley" target="_blank"></a></div>
            <div class="facebook icons"><a href="https://www.facebook.com/bowvalleycollege/" target="_blank"></a></div>
            <div class="instagram icons"><a href="https://www.instagram.com/bowvalley/" target="_blank"></a></div>
            <div class="footer-text"><Link className="contact" to="Contact">Contact Us</Link></div>
          </div>
        );
    }
}

export default Footer;
