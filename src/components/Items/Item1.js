import React from 'react'
import './Item.css';
import Linkitem from './linkitem';

const Item1 = () => {
  return (
    <div className="I-product">
     <div className="I-img">
     <img src="https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png" alt="logo" />
     </div>
     <div className="I-head">
     <div className="I-line1">
     <h3 id="it-1">Sentimental Analysis</h3>
    </div>
    <div className="mllink">
    <div className="I-line2">
     {/* para line */}
     <p>GitHub is essentially a version control and code hosting platform for developers.
GitHub has over 40 million users and more than 190 million repositories from around the world which makes it the largest storehouse of collaborative work for developers. </p>
    </div>
    <div>
         <Linkitem />
    </div>
    </div>
    </div>
    </div>
  )
}

export default Item1;
