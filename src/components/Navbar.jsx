import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Smart Med<span>AR</span>
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><a href="#systems">Body Systems</a></li>
          <li><Link to="/learning">AR Learning</Link></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
