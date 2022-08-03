import React, { useState } from 'react'
import Axios from 'axios'
import './pic.css'

const baseURL = process.env.REACT_APP_API_KEY

const Picpart = () => {

  const [imageURL,setimageURL] = useState();

  const handleupload = ()=>{
    Axios({
        method: "post",
        url: "/api/upload/file",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then()
     .catch(error)
  }
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
        <hr />
        <div className="Pic-demo-work">
          <div className="Pic-text-part">
            <div className="Pic-text">
              <h4>Upload Image :</h4>
            </div>
            <div className="Pic-write">
              <br />
              <input type="file" accept='image/*' onChange={(e)=>{
                setimageURL(e.target.files)
                console.log(e.target.files)
              }}/>
              <br />
              <br />
              {imageURL && <img src={imageURL} /> }
            </div>
            <div className="Pic-button">
              <button type="submit" className="" onClick={() => {
                let btn = document.getElementsByClassName('Pic-button')[0].children[0];
                btn.style.animation = "button_pressed 0.2s";
                setTimeout(() => {
                  btn.style.animation = "";
                }, 200);
                handleupload();
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
          <hr />
          <div className="Pic-p-text">
            <p className="">
            Photo2Sketch is an online image converting service that allows you to make your own sketch photos like charcoal drawings in seconds.
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