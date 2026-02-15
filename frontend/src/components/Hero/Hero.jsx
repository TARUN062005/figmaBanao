import React from "react";
import "./Hero.css";

/* Background decorations */
import subtract from "../../assets/Subtract.png";
import ellipse5 from "../../assets/Ellipse 5.png";
import ellipse13 from "../../assets/Ellipse 13.png";
import ellipse3 from "../../assets/Ellipse 3.png";
import ellipse14 from "../../assets/Ellipse 14.png";

/* Dashboard backgrounds */
import group258 from "../../assets/Group 258.png";
import group241 from "../../assets/Group 241.png";

/* LEFT PANEL */
import vector from "../../assets/Vector.png";
import line15 from "../../assets/Line 15.png";
import group116 from "../../assets/Group 116.png";
import group117 from "../../assets/Group 117.png";
import group118 from "../../assets/Group 118.png";
import group119 from "../../assets/Group 119.png";
import group120 from "../../assets/Group 120.png";
import group121 from "../../assets/Group 121.png";

/* MIDDLE */
import group115 from "../../assets/Group 115.png";
import group113 from "../../assets/Group 113.png";
import line16 from "../../assets/Line 16.png";
import group132 from "../../assets/Group 132.png";

/* RIGHT */
import group112 from "../../assets/Group 112.png";
import group108 from "../../assets/Group 108.png";
import group109 from "../../assets/Group 109.png";
import group110 from "../../assets/Group 110.png";
import group111 from "../../assets/Group 111.png";
import rect2 from "../../assets/Rectangle 46.png";

const Hero = () => {
  return (
    <section className="hero">

      {/* Background */}
      <img src={subtract} alt="" className="bg subtract" />
      <img src={ellipse5} alt="" className="bg e5" />
      <img src={ellipse13} alt="" className="bg e13" />
      <img src={ellipse3} alt="" className="bg e3" />
      <img src={ellipse14} alt="" className="bg e14" />

      <div className="container">

        <h1 className="hero-title">
          Beautiful Landing Page <br /> Design for You
        </h1>

        <p className="hero-subtitle">
          A good design is not only aesthetically pleasing, but also functional.
        </p>

        <button className="btn-primary">Download Template</button>

        {/* ===== DASHBOARD ===== */}

        <div className="dashboard">

          <img src={group258} alt="" className="dashboard-main-bg" />

          <div className="dashboard-grid">

            {/* LEFT TALL PANEL */}
            <div className="panel left">
              <img src={group241} alt="" className="panel-bg" />

              <img src={vector} className="p-vector" alt="" />
              <img src={line15} className="p-line15" alt="" />

              <img src={group116} className="p-g116" alt="" />
              <img src={group117} className="p-g117" alt="" />
              <img src={group118} className="p-g118" alt="" />
              <img src={group119} className="p-g119" alt="" />
              <img src={group120} className="p-g120" alt="" />
              <img src={group121} className="p-g121" alt="" />
            </div>

            {/* MIDDLE TOP */}
            <div className="panel middle-top">
              <img src={group241} alt="" className="panel-bg" />
              <img src={group115} className="p-mt-115" alt="" />
            </div>

            {/* MIDDLE BOTTOM */}
            <div className="panel middle-bottom">
              <img src={group241} alt="" className="panel-bg" />
              <img src={group113} className="p-mb-113" alt="" />
              <img src={line16} className="p-mb-line" alt="" />
              <img src={group132} className="p-mb-132" alt="" />
            </div>

            {/* RIGHT TOP */}
            <div className="panel right-top">
              <img src={group241} alt="" className="panel-bg" />

              <img src={group112} className="p-rt-112" alt="" />
              <img src={group108} className="p-rt-108" alt="" />
              <img src={group109} className="p-rt-109" alt="" />
              <img src={group110} className="p-rt-110" alt="" />
              <img src={group111} className="p-rt-111" alt="" />
            </div>

            {/* RIGHT BOTTOM */}
            <div className="panel right-bottom">
              <img src={rect2} className="p-rb-rect" alt="" />
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
