// src/components/Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  // Set a default CSS class, then adjust based on the current path.
  let navClass = 'main-nav'; // Default for path="/"
  if (location.pathname === '/live') {
    navClass = 'live-nav';
  } else if (location.pathname === '/builtonethereum') {
    navClass = 'build-nav';
  }

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/live">Live</Link>
        </li>
        <li>
          <Link to="/builtonethereum">Build on Ethereum</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
