import React, { useState } from 'react'
import Axios from 'axios'
import './pic.css'

const baseURL = process.env.REACT_APP_API_KEY

const Picpart = () => {

  const [imageURL, setimageURL] = useState();
  const [result, setresult] = useState();

  const handleupload = () => {
    let data = new FormData();
    data.append("image_url", imageURL, imageURL.name);
    Axios.post(baseURL + "/sketch/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
      .then(response => setresult('http://127.0.0.1:8000/media/images/' + response.data + '.png'))
      .catch(error => console.error(error))
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
              <input type="file" accept='image/*' onChange={(e) => {
                setimageURL(e.target.files[0])
                // console.log(e.target.files[0].name)
              }} />
              <br />
              <br />
              {imageURL && <img src={URL.createObjectURL(imageURL)} alt="Not Found" style={{ maxHeight: '500px', maxWidth: "500px" }} />}
            </div>
            <div className="Pic-button" style={{ marginTop: "10px" }}>
              <button type="submit" className="" onClick={() => {
                let btn = document.getElementsByClassName('Pic-button')[0].children[0];
                btn.style.animation = "button_pressed 0.2s";
                setTimeout(() => {
                  btn.style.animation = "";
                }, 200);
                setresult('');
                handleupload();
              }}>Analyze</button>
            </div>
          </div>
          <div className="Pic-api">
            <div className="Pic-api-head">
              <h5>Result:</h5>
            </div>
            <div className="Pic-api-write">
              {result && <img src={result} alt='result' />}
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
              Turn Portrait Photo into Sketch/Pencil Portrait Sketch
              Everyone loves getting a pencil portrait sketch drawn by a professional, but it takes time and effort. A better solution here is using Fotor's picture to drawing converter. Convert your picture into a sketch portrait drawing in a few simple steps. It’s not only fast but provides high-definition images as well.
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