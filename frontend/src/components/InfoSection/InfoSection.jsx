import React from 'react';
import "./InfoSection.css";
import frame9 from "../../assets/Frame 9.png";
import group123 from "../../assets/Group 123.png";
import Vector from "../../assets/Vector.png";
import group124 from "../../assets/Group 124.png";
import group125 from "../../assets/Group 125.png";
import group126 from "../../assets/Group 126.png";
import ellipse9 from "../../assets/Ellipse 9.png";
import ellipse10 from "../../assets/Ellipse 10.png";
import ellipse11 from "../../assets/Ellipse 11.png";

import { useNavigate } from "react-router-dom";

const InfoSection = () => {
  const navigate = useNavigate();
  return (
    <section className="info-section">
      <div className="info-container">
        {/* Visual Side (Orbital) */}
        <div className="info-visual">
          <img src={group123} alt="" className="orbit-bg" />
          <img src={Vector} alt="" className="central-logo" />

          {/* Floating Items */}
          <img src={ellipse11} alt="" className="float e11" />
          <img src={ellipse9} alt="" className="float e09" />
          <img src={ellipse10} alt="" className="float e10" />
          <img src={group124} alt="" className="float g124" />
          <img src={group125} alt="" className="float g125" />
          <img src={group126} alt="" className="float g126" />
        </div>

        {/* Text Side */}
        <div className="info-text">
          <h2 className="info-title">
            We're here to guide and help you at all times
          </h2>


          <p className="info-subtitle">
            A good design is not only aesthetically <br />
            pleasing, but also functional. It should <br />
            be able to solve the problem
          </p>


          <button
            className="info-btn"
            onClick={() => navigate("/login")}
          >
            <img src={frame9} alt="Download" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;