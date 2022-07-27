import React from "react";
import "./section.css"

const Section = () => {
  return (
    <div className="section">
      <div className="section-head">
        <div className="section-logo">
          <img src="" alt="logo" />
        </div>
        <div className="section-line">
          <h4>Bidirectional and low-latency communication for every platform</h4>
        </div>
        <div className="section-btn">
          <div className="Btn">
            <div className="btn but1" id="btn-1">Get Started</div>
            <div className="btn but2" id="btn-2">Documentation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
