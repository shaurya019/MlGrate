
import React from 'react';
import Section from "../components/Homesection/section"
import PartSection from "../components/Homesection/partsection"
import Item1 from "../components/Items/Item1"
import Item2 from "../components/Items/Item2"
import Item3 from "../components/Items/Item3"
// import Footer from "../components/footer/Footer"
// import Item4 from "../components/Items/Item4"
import "./pages.css"


const Home = () => {
  return (
    <div>
      <div className="main-items">
        <div className='section' >
        <Section />
        </div>
        </div>
        <div className='section'>
        <PartSection />
        </div>
        <div className="items-Head">
       <h2>One Click</h2>
        </div>
      <div className="H-items">
      <div className="packets">
      <Item1 />
      </div>
      <div className="packets">
      <Item2 />
      </div>
      <div className="packets">
      <Item3 />
      </div>
      </div>
      <div class="footer-bar"><p class="footer-bar-para">© 2022 MlGrate. All rights reserved.</p></div>
      <br/>
      <br/>
      {/* <div className="home-footer">
       <Footer />
      </div> */}
      </div>
  )
}

export default Home
