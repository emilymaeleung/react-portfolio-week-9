// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="flex-nav">
          <Link to="/" className="site-title">
            Emily Mae
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;