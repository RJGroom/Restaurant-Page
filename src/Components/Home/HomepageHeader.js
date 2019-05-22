import React from 'react';
import Header from '../../Images/homepage-header.jpg';

const HomepageHeader = () => {
    return (
        <div>
           <div className="homepage-header-container">
                <img className="homepage-header" src={Header} alt="Appetizing Cheeseburger"/>
                <h3 className="header-text">Food Shack</h3>
                <h4 className="header-subtext">The taste you can't shake.</h4>
            </div>
            <button className="see-menu-btn btn">View Our Menu</button> 
        </div>
    )
}

export default HomepageHeader;