import React from 'react';
import logo from '../logo/afrilearn.png';
import banner from '../logo/iphone-12-mockup-estaro-app.png';
import search from '../logo/search.svg';
import arrow from '../logo/right.svg';

function Header() {
  return (
    <div className="header relative header-container">
        <div className="header-nav flex align-center">
            <a href="#" className="header-logo block">
                <img src={logo} className=""/>
            </a>
            <div className="flex header-nav--link">
                <ul className="flex nav-ul">
                    <li className="nav-links relative">
                        <a href="#" className="relative nav-links--link">
                            Teachers
                        </a>
                    </li>
                    <li className="nav-links relative">
                        <a href="#" className="relative nav-links--link">
                            My account
                        </a>
                    </li>
                    <li className="nav-links relative">
                        <a href="#" className="relative nav-links--link">
                            Business
                        </a>
                    </li>
                </ul>
            </div>
            <div className="nav-search">
                <div className="nav-top__search flex align-center">
                    <span className="nav-top__search-text"> Search </span>
                    <img className="search-svg" src={search}/>
                </div>
            </div>
            <div className="nav-account--button relative">
                <a href="#" className="button register-button">
                    Create account
                </a>
            </div>
        </div>
        <div className="header-banner relative">
            <div className="banner-image relative">
                <img src={banner} className="bannerImage"/>
            </div>
            <div className="banner-text absolute block">
                <h1>
                    Welcome to the future <br/> of fun learning.
                </h1>
                <div className="header-button">
                    <a href="#" className="button join-button relative">
                        Get started
                    </a>
                    <a href="#" className="button sec-button relative">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;