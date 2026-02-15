import React from "react";
import "./Hero.css";

// Background decorations
import subtract from "../../assets/Subtract.png";
import ellipse5 from "../../assets/Ellipse 5.png";
import ellipse13 from "../../assets/Ellipse 13.png";
import ellipse3 from "../../assets/Ellipse 3.png";
import ellipse14 from "../../assets/Ellipse 14.png";

// Dashboard UI components
import group109 from "../../assets/Group 109.png";
import group110 from "../../assets/Group 110.png";
import group111 from "../../assets/Group 111.png";
import group108 from "../../assets/Group 108.png";
import group112 from "../../assets/Group 112.png";
import group113 from "../../assets/Group 113.png";
import group115 from "../../assets/Group 115.png";
import group116 from "../../assets/Group 116.png";
import group117 from "../../assets/Group 117.png";
import group118 from "../../assets/Group 118.png";
import group119 from "../../assets/Group 119.png";
import group120 from "../../assets/Group 120.png";
import group121 from "../../assets/Group 121.png";
import group132 from "../../assets/Group 132.png";
import rect from "../../assets/Rectangle 54.png";
import rect2 from "../../assets/Rectangle 46.png";
import vector from "../../assets/Vector.png";
import line15 from "../../assets/Line 15.png";
import line16 from "../../assets/Line 16.png";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Decorations */}
      <img src={subtract} alt="" className="bg subtract" aria-hidden="true" />
      <img src={ellipse5} alt="" className="bg e5" aria-hidden="true" />
      <img src={ellipse13} alt="" className="bg e13" aria-hidden="true" />
      <img src={ellipse3} alt="" className="bg e3" aria-hidden="true" />
      <img src={ellipse14} alt="" className="bg e14" aria-hidden="true" />

      {/* Hero Content */}
      <div className="container">
        <div className="hero-inner">
          <h1 className="hero-title">
            Beautiful Landing Page <br />
            Design for You
          </h1>

          <p className="hero-subtitle">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>

          <button className="btn-primary">Download Template</button>

          {/* Dashboard Panel */}
          <div className="dashboard-panel">
            {/* Left Column */}
            <div className="col left">
              <img src={group108} alt="" />
              <img src={group109} alt="" />
              <img src={group110} alt="" />
              <img src={group111} alt="" />
              <img src={group112} alt="" />
            </div>

            {/* Middle Column */}
            <div className="col middle">
              <img src={group113} alt="" />
              <img src={group115} alt="" />
              <img src={group116} alt="" />
              <img src={group117} alt="" />
              <img src={group118} alt="" />
              <img src={group119} alt="" />
              <img src={group120} alt="" />
              <img src={group121} alt="" />
            </div>

            {/* Right Column */}
            <div className="col right">
              <img src={vector} alt="" />
              <img src={rect} alt="" />
              <img src={rect2} alt="" />
              <img src={line15} alt="" />
              <img src={line16} alt="" />
              <img src={group132} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;