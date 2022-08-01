import React from 'react'
import Linkitem from './linkitem/linkitem3';
const Item3 = () => {
  return (
    <div className="I-product">
     <div className="I-img">
     <img  src="https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-030-74478-6_7/MediaObjects/494205_1_En_7_Fig1_HTML.png" alt="logo" />
     </div>
     <div className="II-product">
     <div className="I-head">
     <div class="profile">
     <div className="I-line1">
     <a>
    <span id="it-1">🚀Image Captioning</span>
     </a>
     </div>
     <div class="content">
     <div className="I-line2">
<p>Image Captioning is the process of generating textual description of an image. It uses both Natural Language Processing and Computer Vision to generate the captions. The dataset will be in the form [image → captions]. The dataset consists of input images and their corresponding output captions.</p>
</div>
     </div>
    </div>
    </div>
    <div>
         <Linkitem />
    </div>
    </div>
    </div>
  )
}

export default Item3
