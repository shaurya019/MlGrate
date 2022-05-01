import React from 'react'
import Item1 from "../components/Items/Item1.js"
import Item2 from "../components/Items/Item2"
import Item3 from "../components/Items/Item3"
import Item4 from "../components/Items/Item4"
import "./pages.css"

const Home = () => {
  return (
    <div>
      <div className="main-items">
        <div className="items-Head">
       <h2>One Click, Many Possibilities.</h2>
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
      <div className="packets">
      <Item4 />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
