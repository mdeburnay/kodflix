import React, { Component } from "react";
import kodflixLogo from "../images/kodflixLogo.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-centre">
          <div className="nav-header">
            <Link to="/">
              <img
                src={kodflixLogo}
                className="main-logo"
                alt="Kodflix-Main-Logo"
              />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
