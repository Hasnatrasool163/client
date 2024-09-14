import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; 

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <button className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/assignments" onClick={handleLinkClick}>Explore Assignments</Link></li>
            <li><Link to="/post-assignment" onClick={handleLinkClick}>Post Assignment</Link></li>
            <li><Link to="/login" onClick={handleLinkClick}>Login</Link></li>
            <li><Link to="/signup" onClick={handleLinkClick}>Signup</Link></li>
          </ul>
        </div>
        <div className="logo">unihelp</div>
      </div>
    </nav>
  );
}

export default Navigation;
