import React, { Component } from "react";
import { Link } from "react-router-dom";

import kodflixLogo from "../images/kodflixLogo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar" data-aos="fade-in">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img
                src={kodflixLogo}
                className="nav-logo"
                alt="Kodflix Main Logo"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
