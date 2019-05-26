import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../Images/homepage-header.jpg';

const HomepageHeader = () => {
    return (
        <div>
           <div className="homepage-header-container">
                <img className="homepage-header" src={Header} alt="Appetizing Cheeseburger"/>
                <h2 className="header-text">Food Shack</h2>
                <h4 className="header-subtext">The taste you can't shake.</h4>
            </div>
            <NavLink to="/menu">
                <button className="see-menu-btn btn" >View Our Menu</button> 
            </NavLink>
        </div>
    )
}

export default HomepageHeader;