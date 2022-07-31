import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Docspart.css"

const Docspart = () => {
    return (
        <div className="Docs-part">
        <div className="Docs-head">
        <h1>Read Docs</h1>
        <div className="Docs-para">
        <p>
        A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of three or more sentences.
        </p>

        </div>
        </div>
        <div className="Docs-box">
        <div className="Docsbox" id="back-1">
        <h3 className="Docs-point">Node</h3>
        <p className=""></p>
        </div>
        <hr/>
        <div className="Docsbox" id="back-2">
        <h3 className="Docs-point" >Flutter</h3>
        <p className=""></p>
        </div>
        <hr/>
        <div className="Docsbox" id="back-3">
        <h3 className="Docs-point">PHP</h3>
        <p className=""></p>
        </div>
        <hr/>
        </div>
        <div class="footer-bar"><p className="footer-bar-para">© 2022 MlGrate. All rights reserved.</p></div>
        </div>


    );
  };
  
  export default Docspart;
  