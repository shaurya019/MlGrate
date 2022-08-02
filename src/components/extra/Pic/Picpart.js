import React from 'react'
import './pic.css'


const Picpart = () => {
  return (
    <div className="Pic-part">
     <div className="Pic-head">
        <h1>Pic 2 sketch</h1>
        <div className="Pic-para">
        <p>
        Return Pic 2 sketch results with score for the given text.
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
            <button type="submit" className="" onClick={()=>{
                let btn = document.getElementsByClassName('Pic-button')[0].children[0];
                btn.style.animation="button_pressed 0.2s";
                setTimeout(() => {
                  btn.style.animation="";
                }, 200);
              }}>Analyze</button>
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
        <div className="Pic-p">
          <div className="Pic-p-head">
            <h3>📍 The Possibilities</h3>
            </div>
            <hr/>
            <div className="Pic-p-text">
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
  );
};

export default Picpart;