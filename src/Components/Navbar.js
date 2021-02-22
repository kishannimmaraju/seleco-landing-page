import React from "react";

function Navbar() {
  return (
    <React.Fragment>
      <div className="nav">
        <div className="nav_inner">
          <div className="logo">
            <a href="">Seleco</a>
          </div>
          <div className="nav-items">
            <a className="nav-link homelinkactive" href="">
              Home
            </a>
            <a className="nav-link" href="">
              About
            </a>
            <a className="nav-link" href="">
              Services
            </a>
            <a className="nav-link" href="">
              Portfolio
            </a>
            <a className="nav-link" href="">
              Pricing
            </a>
            <a className="nav-link" href="">
              Team
            </a>
            <a className="nav-link" href="">
              Drop Down
            </a>
            <a className="nav-link" href="">
              Contact
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
