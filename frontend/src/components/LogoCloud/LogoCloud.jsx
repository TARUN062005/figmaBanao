import React from 'react';
import "./LogoCloud.css";
// Importing assets as defined in your request
import frame1 from "../../assets/Frame.png";
import frame2 from "../../assets/Group 96.png";
import frame3 from "../../assets/Group 97.png";
import frame4 from "../../assets/Group 98.png";
import frame5 from "../../assets/Group 99.png";
import frame6 from "../../assets/Group 100.png";
import rect49 from "../../assets/Rectangle 49.png"
const LogoCloud = () => {
  return (
    <section className="logocloud-section">
      <div
        className="logocloud-container"
        style={{
          backgroundImage: `url(${rect49})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '725px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingTop: '112px',
          boxSizing: 'border-box'
        }}
      >
        {/* Main Heading */}
        <h2 className="logocloud-title">
          Companies we Worked <br /> With in Since 2015
        </h2>

        {/* Logo Grid */}
        <div className="logo-grid">
          <div className="logo-box">
            <img src={frame1} alt="Smile" className="logo-img fr1-img" />
          </div>
          <div className="logo-box">
            <img src={frame2} alt="Urban" className="logo-img fr2-img" />
          </div>
          <div className="logo-box">
            <img src={frame3} alt="natural" className="logo-img fr3-img" />
          </div>
          <div className="logo-box">
            <img src={frame4} alt="WAVE" className="logo-img fr4-img" />
          </div>
          <div className="logo-box">
            <img src={frame5} alt="HAPPY" className="logo-img fr5-img" />
          </div>
          <div className="logo-box">
            <img src={frame6} alt="Alisa" className="logo-img fr6-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;