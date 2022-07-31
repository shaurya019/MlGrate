import React from 'react'
import './Item.css';
import Linkitem from './linkitem';

const Item1 = () => {
  return (
    <div className="I-product">
     <div className="I-img">
     <img src="https://www.freecodecamp.org/news/content/images/2020/09/wall-5.jpeg" alt="logo" />
     </div>
     <div className="II-product">
     <div className="I-head">
     <div class="profile">
     <div className="I-line1">
     <a>
    <span id="it-1">Sentimental Analysis</span>
     </a>
     </div>
     <div class="content">
     <div className="I-line2">
<p>Sentiment analysis is a machine learning tool that analyzes texts for polarity, from positive to negative. By training machine learning tools with examples of emotions in text, machines automatically learn how to detect sentiment without human input. </p>
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

export default Item1;


