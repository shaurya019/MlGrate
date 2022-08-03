import React, { useState } from 'react'
import './caption.css'


const Captionpart = () => {
  const [imageURL, setimageURL] = useState();

  return (
    <div className="Caption-part">
      <div className="Caption-head">
        <h1>Image Captioning</h1>
        <div className="Caption-para">
          <p>
            Return Image Captioning results with score for the given text.
          </p>
        </div>
      </div>
      <div className="Caption-demo-part">
        <div className="Caption-demo-head">
          <h3>🖇️ Free Tool & API Demo</h3>
        </div>
        <hr />
        <div className="Caption-demo-work">
          <div className="Caption-text-part">
            <div className="Caption-text">
              <h4>Enter some text to analyze:</h4>
            </div>
            <div className="Caption-write">
              <input type="file" accept='image/*' onChange={(e) => {
                setimageURL(e.target.files[0])
                // console.log(e.target.files[0].name)
              }} />
              <br />
              <br />
              {imageURL && <img src={URL.createObjectURL(imageURL)} alt="Not Found" style={{ maxHeight: '500px', maxWidth: "500px" }} />}
            </div>
            <div className="Caption-button">
              <button type="submit" className="" onClick={() => {
                let btn = document.getElementsByClassName('Caption-button')[0].children[0];
                btn.style.animation = "button_pressed 0.2s";
                setTimeout(() => {
                  btn.style.animation = "";
                }, 200);
              }}>Analyze</button>
            </div>
          </div>
          <div className="Caption-api">
            <div className="Caption-api-head">
              <h5>Result:</h5>
            </div>
            <div className="Caption-api-write">
              <img src="https://thumbs.dreamstime.com/b/blue-hole-white-paper-coming-soon-144390612.jpg" alt="coming soon" style={{ maxWidth: '400px' }} />
            </div>
          </div>
        </div>
        <div className="Caption-p">
          <div className="Caption-p-head">
            <h3>📍 The Possibilities</h3>
          </div>
          <hr />
          <div className="Caption-p-text">
            <p className="">
              Image Captioning is the process of generating textual description of an image. It uses both Natural Language Processing and Computer Vision to generate the captions. The dataset will be in the form [image → captions]. The dataset consists of input images and their corresponding output captions.
              <br />
              <br />

              Encoder
              The Convolutional Neural Network(CNN) can be thought of as an encoder. The input image is given to CNN to extract the features. The last hidden state of the CNN is connected to the Decoder.
              Decoder
              The Decoder is a Recurrent Neural Network(RNN) which does language modelling up to the word level. The first time step receives the encoded output from the encoder and also the START vector.
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


export default Captionpart;