import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Section = () => {
  return (
    <div className="Footer">
    <div className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <Link to="/">
            <img style={{ height: "130px" }} src={logo} alt="logo" />
          </Link>
        </div>
        <div className="footer-Links">
            <h2>Links</h2>
            <ul className="footer-link">
                <li className="flinks">
                <Link to="/Docs" >
                <h5>🚀 Documentation</h5>
						</Link>
                </li>
                <li className="flinks">
                <Link to="/SA">
                <h5>🚀 Sentimental Analysis</h5>
          </Link>
                </li>
                <li className="flinks">
                <Link to="/Pic">
            <h5>🚀 Pic 2 Sketch</h5>
          </Link>
                </li>
                <li className="flinks">
                <Link to="/Caption">
            <h5>🚀 Image Captioning</h5>
          </Link>
                </li>
            </ul>
        </div>
        <div className=" footer-profile"></div>
      </div>
    </div>
    </div>
  );
};

export default Section;

