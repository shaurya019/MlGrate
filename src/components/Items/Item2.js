import React from 'react'
import Linkitem from './linkitem/linkitem2';

const Item2 = () => {
  return (
    <div className="I-product">
       <div className="II-product">
      <div className="I-head">
     <div class="profile">
     <div className="I-line1">
     <a>
    <span id="it-1">🚀Pic 2 sketch</span>
     </a>
     </div>
     <div class="content">
     <div className="I-line2">
<p>We will try to convert a normal photo into a pencil sketch using computer vision in a python programming language.  In order to convert the normal image to a sketch, we will change its original RGB values and assign its RGB values similar to grey, in this way a sketch of the input image will be generated.  </p>
</div>
     </div>
    </div>
    </div>
    <div>
         <Linkitem />
    </div>
   </div>
   <div className="I-img imgflex">
   <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20200910185931/input2-300x295.jpg" alt="logo" />
   <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20200910185936/output2-300x295.jpg" alt="logo" />
    </div>
   </div>
  )
}

export default Item2
