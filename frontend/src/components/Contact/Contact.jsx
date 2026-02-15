import React from 'react';
import "./Contact.css";
import fr3 from "../../assets/Frame 3.png"; // Download template button image
import fr1 from "../../assets/Frame 1.png"; // Map overlay
import group133 from "../../assets/Group 133.png"; // Wireframe Sphere
import ellipse16 from "../../assets/Ellipse 16.png";
import ellipse15 from "../../assets/Ellipse 15.png";
import fr7 from "../../assets/Frame 7.png"; // Get in touch button image
import fr6 from "../../assets/Frame 6.png"; // Message input
import fr5 from "../../assets/Frame 5.png"; // Name input
import fr4 from "../../assets/Frame 4.png"; // Email input

const Contact = () => {
  return (
    <section className="contact-wrapper">
      {/* --- Banner Section --- */}
      <div className="banner-container">
        <div className="banner-inner">
          <img src={fr1} alt="" className="banner-map-overlay" />

          <div className="banner-content">
            <p className="banner-pre">Love our Our Tool?</p>
            <h2 className="banner-title">Fell Free to Join our <br /> 15 Days Free Trial</h2>
            <button className="banner-btn">
              <img src={fr3} alt="Download Template" />
            </button>
          </div>
        </div>
      </div>

      {/* --- Get In Touch Section --- */}
      <div className="get-in-touch-section">
        {/* Background Visuals */}
        <div className="wireframe-container">
          <img src={group133} alt="" className="wireframe-sphere" />
          <div className="blur-ellipse-top" />
          <div className="blur-ellipse-bottom" />
        </div>

        {/* Form Content */}
        <div className="contact-form-container">
          <h2 className="contact-header">Get In Touch</h2>
          <p className="contact-desc">
            A good design is not only aesthetically pleasing, but also <br />
            functional. It should be able to solve the problem
          </p>

          <form className="contact-inputs" onSubmit={(e) => e.preventDefault()}>
            <div className="input-box email-input">
              <img src={fr4} alt="Email" />
              <input type="email" placeholder="Your Email" className="hidden-input" />
            </div>

            <div className="input-box name-input">
              <img src={fr5} alt="Name" />
              <input type="text" placeholder="Name" className="hidden-input" />
            </div>

            <div className="input-box message-input">
              <img src={fr6} alt="Message" />
              <textarea placeholder="Name" className="hidden-textarea"></textarea>
            </div>

            <button className="submit-btn" type="submit">
              <img src={fr7} alt="Get in Touch" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;