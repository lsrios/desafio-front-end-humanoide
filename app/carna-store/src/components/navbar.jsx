import React from "react";
import { Link } from "react-router-dom";
import logo from "../mock-server/images/logo.svg";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-title">Venha ser felix no carnaval!</div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
