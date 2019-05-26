import React from 'react';
import Dessert from '../../Images/cheesecake.jpg';

const HomepageDessertSection = () => {
    return (
        <div className="homepage-dessert-section">
            <div className="info-section">
                <h3>There's always room for dessert</h3>
                <p>Get a taste of our new chocolate raspberry cheesecake</p>
            </div>
            <div className="photo-section">
                <img src={Dessert} alt="Chocolate raspberry chessecake dessert" />
            </div>
        </div>
    )
}

export default HomepageDessertSection;