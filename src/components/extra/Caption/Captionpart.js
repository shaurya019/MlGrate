import React from 'react'
import './caption.css'


const Captionpart = () => {
  return (
    <div className="Caption-part">
    <div className="Caption-head">
        <h1>Image Captioning</h1>
        <div className="Caption-para">
        <p>
        A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of three or more sentences.
        </p>
        </div>
        </div>
        <div className="Caption-demo-part">
        <div className="Caption-demo-head">
          <h3>🖇️ Free Tool & API Demo</h3>
        </div>
        <hr/>
        <div className="Caption-demo-work">
          <div className="Caption-text-part">
          <div className="Caption-text">
            <h4>Enter some text to analyze:</h4>
            </div>
            <div className="Caption-write">
            <textarea id="Caption-write-review" className="Caption-review" name="review" rows="6" cols="50"></textarea>
  <br/>
            </div>
            <div className="Caption-button">
            <button type="submit" className="">Analyze</button>
            </div>
          </div>
          <div className="Caption-api">
          <div className="Caption-api-head">
          <h5>Result:</h5>
            </div>
            <div className="Caption-api-write">
            
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


export default Captionpart;