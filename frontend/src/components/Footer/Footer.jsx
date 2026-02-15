import React from 'react';
import "./Footer.css";
// Importing assets as defined in your request
import X_icon from "../../assets/ELEMENTS.png";
import linkdin from "../../assets/Vector (2).png";
import Discord from "../../assets/Vector (3).png";
import group126 from "../../assets/Group 128.png";
import group131 from "../../assets/Rectangle 57.png";
import rect58 from "../../assets/Rectangle 58.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Top Section */}
      <div
        className="footer-top"
        style={{
          backgroundImage: `url(${group131})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="footer-content-container">
          {/* Brand */}
          <div className="footer-brand">
            <img src={group126} alt="Squid Logo" className="footer-logo" />
            <p className="footer-description">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
            </p>

          </div>

          {/* Navigation (Only Sections) */}
          {/* Navigation */}
          <div className="footer-nav">
            <div className="nav-column">
              <h4>Sections</h4>
              <a href="#home">Home</a>
              <a href="#section-one">Section One</a>
              <a href="#section-two">Section Two</a>
              <a href="#section-three">Section Three</a>
            </div>
            <div className="nav-column">

              <a href="#home">Home</a>
              <a href="#section-one">Section One</a>
              <a href="#section-two">Section Two</a>
              <a href="#section-three">Section Three</a>
            </div>
            <div className="nav-column">

              <a href="#home">Home</a>
              <a href="#section-one">Section One</a>
              <a href="#section-two">Section Two</a>
              <a href="#section-three">Section Three</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="footer-bottom"
        style={{
          backgroundImage: `url(${rect58})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="footer-content-container footer-bottom-inner">
          <span className="copyright">All Rights Reserved inkyy.com 2022</span>

          <div className="social-links">
            <div className="social-box">
              <img src={X_icon} alt="X" className="social-icon x-icon" />
            </div>
            <div className="social-box">
              <img src={linkdin} alt="LinkedIn" className="social-icon linkedin-icon" />
            </div>
            <div className="social-box">
              <img src={Discord} alt="Discord" className="social-icon discord-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;