import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-page" className="nav-link">
            Contact Page
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/covid-page" className="nav-link">
            Covid Page
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
