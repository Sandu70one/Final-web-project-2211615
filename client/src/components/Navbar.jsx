import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import logo from "../assets/images/logo.jpg";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-container">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top logoImage"
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/models"
                  className="nav-link  customText"
                  aria-current="page"
                  href="#"
                >
                  Models
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/apparels" className="nav-link customText" href="#">
                  Apparels
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link customText" href="#">
                About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactdealer" className="nav-link customText" href="#">
                Contact 
                </Link>
              </li>
              
            </ul>
            <ul className="navbar-nav  mb-2 mb-lg-0 customText-left">
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-link customText profile-button "
                  href="#"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/account"
                  className="nav-link customText profile-button "
                  href="#"
                >
                  After login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
