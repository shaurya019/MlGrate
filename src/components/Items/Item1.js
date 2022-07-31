import React from 'react'
import './Item.css';
import Linkitem from './linkitem';

const Item1 = () => {
  return (
    <div className="I-product">
     <div className="I-img">
     <img src="https://www.teamsupport.com/hubfs/6.29.20_week%20of%20Blog_Sentiment%20vs.%20CDI_Part%201_iStock-1134027636.jpg" alt="logo" />
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
<p>Sentiment analysis, also referred to as opinion mining, is an approach to natural language processing (NLP) that identifies the emotional tone behind a body of text. This is a popular way for organizations to determine and categorize opinions about a product, service, or idea. </p>
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


