import React from "react";
import "./Feauter.css";
import rectangle26 from "../../assets/Rectangle 26.png";
import group129 from "../../assets/Group 129.png";
import group102 from "../../assets/Group 102.png";
import group from "../../assets/Group.png";
import group105 from "../../assets/Group 105.png";
import group106 from "../../assets/Group 106.png";
import group103 from "../../assets/Group 103.png";

const Feauter = () => {
  const cards = [
    { 
      id: 1, 
      icon: group102,
      iconWidth: 44.78, 
      iconHeight: 45.96,
      iconBg: rectangle26
    },
    { 
      id: 2, 
      icon: group,
      iconWidth: 44, 
      iconHeight: 44.66,
      iconBg: rectangle26
    },
    { 
      id: 3, 
      icon: null,
      iconWidth: 44, 
      iconHeight: 44,
      iconBg: group129,
      isGradient: true
    },
    { 
      id: 4, 
      icon: group103,
      iconWidth: 45, 
      iconHeight: 46,
      iconBg: rectangle26
    },
    { 
      id: 5, 
      icon: group105,
      iconWidth: 44, 
      iconHeight: 43.48,
      iconBg: rectangle26
    },
    { 
      id: 6, 
      icon: group106,
      iconWidth: 44, 
      iconHeight: 45,
      iconBg: rectangle26
    }
  ];

  return (
    <section className="feature-section">
      <div className="feature-container">
        <div className="feature-header">
          <h2 className="feature-main-title">Feature Boxes</h2>
          <p className="feature-main-desc">
            A good design is not only aesthetically pleasing, but also <br />
            functional. It should be able to solve the problem
          </p>
        </div>

        <div className="feature-grid">
          {cards.map((card) => (
            <div className="feature-card" key={card.id}>
              <div className="icon-wrapper">
                <img 
                  src={card.iconBg} 
                  alt="" 
                  className="feature-icon-bg"
                />
                {card.icon && (
                  <img 
                    src={card.icon} 
                    alt="" 
                    className="feature-icon"
                    style={{ 
                      width: card.iconWidth, 
                      height: card.iconHeight 
                    }}
                  />
                )}
              </div>
              <h3 className="feature-card-title">Fully Customizable</h3>
              <p className="feature-card-desc">
                A good design is not only aesthetically pleasing, but also functional. 
                It should be able to solve the problem
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feauter;