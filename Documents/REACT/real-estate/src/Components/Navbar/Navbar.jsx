import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                {/*Name of the Website*/}
                <h2>ERNESTO AGENCY</h2>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="cta-btn">
                <button>Bookings</button>
            </div>

        </div>
    );
};

export default Navbar;
