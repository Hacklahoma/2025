import React from 'react';
import '../../styles/header.scss';

/**
 * Contains all the header needs
 */
const Header = () => (
  <div className="header">
      <div className="header-logo"></div>
    <div className="content">
      <div className="header-text">

        <h1>HACKLAHOMA 23</h1>
        <div className="subcontent">
          <p align="center">Feb. 11th-12th | University of Oklahoma</p>
        </div>
        <div className="registration" align="center">
          Registration will open soon!
          {/*<a href="https://register.hacklahoma.org/">Register Now!</a>*/}
        </div>
      </div>

      {/* <a href="/" className="register"><p>Register</p></a> */}

    </div>
  </div>
);

export default Header;
