import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="home-nav">
      <Link to="/" className="home-logo">
        AR<span className="logo-dot">·</span>Anatomy
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/body-system">Body System</Link></li>
        <li><Link to="/learning">AR Learning</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* <li><Link to="/learning" className="nav-cta">Launch AR →</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
