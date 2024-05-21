import React from 'react';
import { Link } from 'react-router-dom/';

export default function Navbar() {
    return (
        <nav>
            <li><Link to="/">Home Page</Link></li> 
            <li><Link to="/buy">Buy</Link></li> 
            <li><Link to="/sell">Sell</Link></li> 
        </nav>
    );
}
