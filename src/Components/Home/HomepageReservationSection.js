import React from 'react';
import { NavLink } from 'react-router-dom';

const HomepageReservationSection = () => {
    return (
        <div className="homepage-reservation-section">
            <h3>Hot Date?</h3>
            <p>Make a reservation with us.</p>
            <NavLink to="/reservations">
                <button className="reserve-table-btn btn">Reserve a table</button>
            </NavLink>
        </div>
    )
}

export default HomepageReservationSection;