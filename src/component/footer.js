import React from 'react';
import logo from '../logo/afrilearn.png';
import facebook from '../logo/facebook.svg';
import twitter from '../logo/twitter.svg';
import instagram from '../logo/instagram.svg';

function Footer() {
    return (
        <footer className="flex align-center">
            <div className="footer-content flex align-center">
                <a href="#" className="header-logo block">
                    <img src={logo} className="footer-logo"/>
                </a>
            </div>
            <div className="footer-social flex">
                <div className="footer-social--circle">
                    <img src={facebook} className="social-svg" />
                </div>
                <div className="footer-social--circle">
                    <img src={twitter} className="social-svg" />
                </div>
                <div className="footer-social--circle">
                    <img src={instagram} className="social-svg" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;