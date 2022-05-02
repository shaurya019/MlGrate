import React from 'react'
import Sec1 from '../sectionitem/sec1';
import Sec2 from '../sectionitem/sec2';
import Sec3 from '../sectionitem/sec3';


const Partsection = () => {
  return (
    <div className="partsection">
    <div className="partsection-head">
    <Sec1 />
         <Sec2 />
         <Sec3 />
    </div>
  </div>
  )
}

export default Partsection;
