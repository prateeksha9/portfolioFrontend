import React from 'react';
import { Link } from 'react-router-dom';
const logo = require('../assets/logo.png');

function Header(props) {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav">
        <div className="navTo">
          <Link to="/project" className="linkit">
            Project
          </Link>
        </div>

        <div className="navTo">
          <Link to="/poem" className="linkit">
            Writings
          </Link>
        </div>
        <div className="navTo">
          <Link to="/sketch" className="linkit">
            Artwork
          </Link>
        </div>

        {/* <div className="navTo">Contact</div> */}
      </div>
    </div>
  );
}

export default Header;
