import React from 'react'

const Item2 = () => {
  return (
    <div className="I-product">
    <div className="I-head">
    <div className="min-line">
       <h6 id="it2">About 1</h6>
       </div>
    <div className="I-line1">
     {/* Bold line */}
     <h3 id="it-2">About 2</h3>
    </div>
    <div className="mllink">
    <div className="I-line2">
     {/* para line */}
     <p>GitHub is essentially a version control and code hosting platform for developers.
GitHub has over 40 million users and more than 190 million repositories from around the world which makes it the largest storehouse of collaborative work for developers. </p>
    </div>
    <div className="ml-btn">
          <div className="Mtn">
            <div className="mtn" id="mtn-1">TRY NOW</div>
          </div>
        </div>
    </div>
   </div>
   <div className="I-img">
   <img  src="https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png" alt="logo" />
    </div>
   </div>
  )
}

export default Item2
