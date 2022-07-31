import React from 'react'
import Linkitem from './linkitem';
const Item3 = () => {
  return (
    <div className="I-product">
     <div className="I-img">
     <img  src="https://production-media.paperswithcode.com/thumbnails/task/task-0000000540-6974248d.jpg" alt="logo" />
     </div>
     <div className="II-product">
     <div className="I-head">
     <div class="profile">
     <div className="I-line1">
     <a>
    <span id="it-1">Image Captioning</span>
     </a>
     </div>
     <div class="content">
     <div className="I-line2">
<p>Image Captioning is the process of generating textual description of an image. It uses both Natural Language Processing and Computer Vision to generate the captions. </p>
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
