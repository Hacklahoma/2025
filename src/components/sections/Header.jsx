import React from 'react';
import '../../styles/header.scss';

/**
 * Contains all the header needs
 */
const Header = () => (
  <div className="header">
    <div className="content">
      <div className="header-text">
        <h1>Hacklahoma 2023</h1>
        <div className="subcontent">
          <p>Feb. 11th-12th</p>
          <p className="subtitle">University Of Oklahoma</p>
        </div>
        <div className="registration">
          Registration will open soon!
          {/*<a href="https://register.hacklahoma.org/">Register Now!</a>*/}
        </div>
      </div>

      {/* <a href="/" className="register"><p>Register</p></a> */}
      <div className="header-logo">{ }</div>
    </div>
  </div>
);

export default Header;
