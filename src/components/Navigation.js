// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; 

function Navigation() {
  return (
    <nav className="main-nav">
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
