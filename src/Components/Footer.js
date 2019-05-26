import React from 'react';
import Twitter from '../Icons/twitter-logo-blue.svg';
import Facebook from '../Icons/facebook-logo-blue.svg';
import Instagram from '../Icons/instagram-logo-blue.svg';


const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.facebook.com">
                <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com">
                <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.twitter.com">
                <img src={Twitter} alt="Twitter" />
            </a>
        </div>
    )
}

export default Footer;