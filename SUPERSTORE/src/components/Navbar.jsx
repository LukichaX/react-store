import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">SUPERSTORE</div>
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <input
                    type="text"
                    className="navbar-search"
                    placeholder="Search..."
                />
                <button className="navbar-search-btn">Search</button>
            </div>
        </nav>
    );
};

export default Navbar;