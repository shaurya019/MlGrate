import React from 'react'
import { Link } from "react-router-dom";
import '../Item.css';
const Linkitem = () => {
  return (
    <div className="ml-btn">
    <div className="Mtn">
      <div className="mtn" id="mtn-1">
      <Link to="/Pic">
            <h6>TRY NOW</h6>
          </Link></div>
    </div>
    </div>
    )
}

export default Linkitem;
