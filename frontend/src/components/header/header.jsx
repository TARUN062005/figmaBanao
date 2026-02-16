import React from "react";
import "./Header.css";
import logo from "../../assets/Group 127.png";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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
          <button
            className="btn-primary"
            onClick={() => navigate("/login")}
          >
            Download Template
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
