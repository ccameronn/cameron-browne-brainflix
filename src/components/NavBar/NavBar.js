import React from "react";

import "./NavBar.scss";

import logo from "../../assets/images/logo/BrainFlix-logo.svg";

function Nav() {

  return (
    <nav className="nav">
      <a src="/">
        <img src={logo} alt="BrainFlix Logo" className="nav__logo" />
      </a>
      <div className="nav__container">
        <input
            type="search"
          placeholder="Search"
          className="nav__search"
          id="search-input"
        ></input>
        <a src="/" className="nav__upload-buttons button-tablet">
          UPLOAD
        </a>
        <div className="nav__avatar"></div>
      </div>
      <a src="/" className="nav__upload-buttons button-mobile">
        UPLOAD
      </a>
    </nav>
  );
}

export default Nav;