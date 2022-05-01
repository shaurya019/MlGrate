import React from 'react'

const Item3 = () => {
  return (
    <div className="I-product">
     <div className="I-img">
     <img style={{ height: 300 }} src="https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png" alt="logo" />
     </div>
     <div className="I-head">
     <div className="min-line">
       <h6 id="it1">About 1</h6>
       </div>
     <div className="I-line1">
     {/* Bold line */}
     <h3 id="it-1">About 3</h3>
    </div>
    <div className="I-line2">
     {/* para line */}
     <p>GitHub is essentially a version control and code hosting platform for developers.
GitHub has over 40 million users and more than 190 million repositories from around the world which makes it the largest storehouse of collaborative work for developers. Besides contributing to a specific project, GitHub allows users to associate with like-minded people. You can follow people and watch what they do or who they are connecting with.</p>
    </div>
    </div>
    </div>
  )
}

export default Item3
