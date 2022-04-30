import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav-image">
        <Link to="/">
          <img style={{ height: 45 }} src="" alt="logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="nav-link">
          <li className="nav-li">
            <Link to="/" id="link-1">
              Home
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/Docs" id="">
              Docs
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/Login" id="">
              Login
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/" id="">
              Page1
            </Link>
          </li>
          <li className="nav-li" id="li-4">
            <Link to="/" id="">
              Page2
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
