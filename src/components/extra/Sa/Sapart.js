import React from "react";
import "./Sa.css";

const Sapart = () => {
  return (
    <div className="Sa-part">
      <div className="Sa-head">
        <h1>Sentimental Analysis</h1>
        <div className="Sa-para">
          <p>
            Return sentiment analysis results with score for the given text.
          </p>
        </div>
      </div>
      <div className="Sa-demo-part">
        <div className="Sa-demo-head">
          <h3>🖇️ Free Tool & API Demo</h3>
        </div>
        <hr/>
        <div className="Sa-demo-work">
          <div className="Sa-text-part">
          <div className="Sa-text">
            <h4>Enter some text to analyze:</h4>
            </div>
            <div className="Sa-write">
            <textarea id="Sa-write-review" className="Sa-review" name="review" rows="6" cols="50"></textarea>
  <br/>
            </div>
            <div className="Sa-button">
            <button type="submit" className="">Analyze</button>
            </div>
          </div>
          <div className="Sa-api">
          <div className="Sa-api-head">
          <h5>Result:</h5>
            </div>
            <div className="Sa-api-write">
            
          </div>
          </div>
        </div>
      </div>
      <div class="footer-bar">
        <p className="footer-bar-para">© 2022 MlGrate. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sapart;
