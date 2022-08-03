import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import "./section.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

const Section = () => {
  const container = useRef(null)
  const container2 = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/background.json')
    })
    lottie.loadAnimation({
      container: container2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/background2.json')
    })
  }, [])
  return (
    <div className="section">
      <div className="sec-lottie" ref={container}></div>
      <div className="sec-lottie2" ref={container2}></div>
      <div className="section-head" >
        <div className="section-logo">
          <img src={logo} alt="logo" style={{ height: 200 }} />
        </div>
        <div className="section-line">
          <h4>Bidirectional and low-latency communication for every platform</h4>
        </div>
        <div className="section-btn">
          <div className="Btn">
            <Link to='/Login'>
              <div className="btN but1" id="btn-1">
                Get Started
              </div>
            </Link>
            <Link to='/Docs'>
              <div className="btN but2" id="btn-2">Documentation</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
