import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Docs from './pages/Docs';
import Login from './pages/Login';
import AP from './pages/AP';
// import extra from './pages/Extra';
import Navigation from "./components/Navigation/Navigation";
import React, { useEffect, useState } from "react";
import Lottie from 'lottie-react';
import welcome from './assets/welcome.json';

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    console.log("Loading Done");
    setTimeout(() => {
      setloading(false);
    }, 1000);
    setTimeout(() => {
      document.getElementById('Loading').style.animation='animate_loading 0.4s'
    }, 700);
  }, []);
  return (
    <>
      {loading ? <div id="Loading" style={{display:"flex",justifyContent:"center"}}><Lottie animationData={welcome} style={{height:'100vh'}}/></div> :
        <Router>
          < Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Docs" element={<Docs />} />
            <Route path="/AP" element={<AP />} />
            <Route path="/Extra" element={<extra />} />
            <Route path="/Login" element={<Login />} />

          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
