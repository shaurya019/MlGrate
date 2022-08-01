import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./Navigation.css";

const Naviextra = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="basic">Extra</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="extra-c">
          <Link to="/SA">
            Sentimental Analysis
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="extra-c">
          <Link to="/Pic">
            Pic 2 sketch
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="extra-c">
          <Link to="/Caption">
            Image Captioning
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default Naviextra;
