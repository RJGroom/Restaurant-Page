import React from 'react';
import Dinner from '../../Images/barbecue.jpg';

const HomepageMealSection = () => {
    return (
        <div className="homepage-meal-section">
            <div className="photo-section">
                <img src={Dinner} alt="Barbecue dinner with asparagus" />
            </div>
            <div className="info-section">
                <h3>Got an appetite?</h3>
                <p>Try our barbecue blah blah blah with asparagus blah blah blah.</p>
            </div>
        </div>
    )
}

export default HomepageMealSection;