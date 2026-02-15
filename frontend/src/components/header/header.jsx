import React from "react";
import "./Header.css";
import logo from "../../assets/Group 127.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        {/* Navigation */}
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <button className="btn-primary">
            Download Template
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
