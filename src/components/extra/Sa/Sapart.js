import React from "react";
import "./Sa.css";

const Sapart = () => {
  return (
    <div className="SA-b-part">
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
        <hr />
        <div className="Sa-demo-work">
          <div className="Sa-text-part">
            <div className="Sa-text">
              <h4>Enter some text to analyze:</h4>
            </div>
            <div className="Sa-write">
              <textarea id="Sa-write-review" className="Sa-review" name="review" rows="6" cols="50"></textarea>
              <br />
            </div>
            <div className="Sa-button">
              
              <button type="submit" className="" onClick={()=>{
                let btn = document.getElementsByClassName('Sa-button')[0].children[0];
                btn.style.animation="button_pressed 0.2s";
                setTimeout(() => {
                  btn.style.animation="";
                }, 200);
              }}>Analyze</button>
              
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
        <div className="Sa-p">
          <div className="Sa-p-head">
            <h3>📍The Possibilities</h3>
          </div>
          <hr />
          <div className="Sa-p-text">
            <p className="">
              Our Sentiment Analysis API is a good place to find out the tone of a sentence or paragraph. This API can be useful if you have a large amount of user responses or reviews and you want to quickly find the negative comments to see what your customers don’t like and vice versa.
              <br />
              <br />
              However, our API gives you more power than that. Besides just reading the type response (“negative”, ”neutral”, or ”positive”), you can actually determine for yourself what you consider positive or negative. In our blog article titled "Interpreting the Score and Ratio of Sentiment Analysis", we explain two useful information, score and ratio, that our API returns for each text analyzed.
            </p>
          </div>
        </div>
      </div>
      <div class="footer-bar">
        <p className="footer-bar-para">© 2022 MlGrate. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
};

export default Sapart;
