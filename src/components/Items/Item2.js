import React from 'react'
import Linkitem from './linkitem';

const Item2 = () => {
  return (
    <div className="I-product">
       <div className="II-product">
      <div className="I-head">
     <div class="profile">
     <div className="I-line1">
     <a>
    <span id="it-1">Pic2sketch</span>
     </a>
     </div>
     <div class="content">
     <div className="I-line2">
<p>An image is just a two-dimensional array of integers. So one can do a couple of matrix manipulations using various python modules in order to get some very interesting effects. In order to convert the normal image to a sketch, in this way a sketch of the input image will be generated. </p>
</div>
     </div>
    </div>
    </div>
    <div>
         <Linkitem />
    </div>
   </div>
   <div className="I-img img-flex">
   <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20200910185931/input2-300x295.jpg" alt="logo" />
   <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20200910185936/output2-300x295.jpg" alt="logo" />
    </div>
   </div>
  )
}

export default Item2
