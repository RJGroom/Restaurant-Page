import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Icons/food-logo.svg';

const NavBar = () => {
    return (
        <div className="nav-bar-container">
            <img src={Logo} className="nav-logo" />
            <div className="nav-links">
                <NavLink to="/" className="nav-link" activeStyle={{opacity: '1'}} exact>Home</NavLink>
                <NavLink to="/about" className="nav-link" activeStyle={{opacity: '1'}}>About</NavLink>
                <NavLink to="/menu" className="nav-link" activeStyle={{opacity: '1'}}>Menu</NavLink>
                <NavLink to="/reservations" className="nav-link" activeStyle={{opacity: '1'}}>Reservations</NavLink>
                <NavLink to="/contact" className="nav-link" activeStyle={{opacity: '1'}}>Contact</NavLink>
            </div>
        </div>
    )
}

export default NavBar;