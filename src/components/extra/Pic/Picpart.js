import React from 'react'
import './pic.css'


const Picpart = () => {
  return (
    <div className="Pic-part">
     <div className="Pic-head">
        <h1>Pic 2 sketch</h1>
        <div className="Pic-para">
        <p>
        A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of three or more sentences.
        </p>
        </div>
        </div>
        <div className="Pic-demo-part">
        <div className="Pic-demo-head">
          <h3>🖇️ Free Tool & API Demo</h3>
        </div>
        <hr/>
        <div className="Pic-demo-work">
          <div className="Pic-text-part">
          <div className="Pic-text">
            <h4>Enter some text to analyze:</h4>
            </div>
            <div className="Pic-write">
            <textarea id="Pic-write-review" className="Pic-review" name="review" rows="6" cols="50"></textarea>
  <br/>
            </div>
            <div className="Pic-button">
            <button type="submit" className="">Analyze</button>
            </div>
          </div>
          <div className="Pic-api">
          <div className="Pic-api-head">
          <h5>Result:</h5>
            </div>
            <div className="Pic-api-write">
            
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

export default Picpart;