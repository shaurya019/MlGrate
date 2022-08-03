import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Docs from './pages/Docs';
import Login from './pages/Login';
import AP from './pages/AP';
import SA from './pages/Extra/SA.js';
import Pic from './pages/Extra/Pic';
import Caption from './pages/Extra/Caption';
import Navigation from "./components/Navigation/Navigation";
import React, { useEffect, useState } from "react";
import Lottie from 'lottie-react';
import welcome from './assets/welcome.json';
import Axios from "axios";
import Cookies from "universal-cookie";
import Protected from "./components/protected";

const baseURL = process.env.REACT_APP_API_KEY

function App() {
  const [loading, setloading] = useState(true);
  const [isloaggedin,setisloaggedin] = useState(null);
  // const [cookie_data,setcookie_data] = useState(null);
  const cookies = new Cookies();
  
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
    setTimeout(() => {
      document.getElementById('Loading').style.animation='animate_loading 0.4s';
    }, 700);


    cookies.set('id','1',{path:'/'})
    
    // console.log(isloaggedin);

  }, []);

  const handlelogin = (value)=>{
    setisloaggedin(value);
  }

  return (
    <>
      {loading ? <div id="Loading" style={{display:"flex",justifyContent:"center"}}><Lottie animationData={welcome} style={{height:'100vh'}}/></div> :
        <Router>
          < Navigation isloaggedin={isloaggedin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Docs" element={<Docs />} />
            <Route path="/SA" element={<SA />} />
            <Route path="/Pic" element={<Pic />} />
            <Route path="/Caption" element={<Caption />} />
            <Route path="/Profile" element={
              <Protected isLoggedIn={isloaggedin}>
                <AP />
              </Protected>
            } />
          <Route path="/Login" element={<Login isloaggedin={isloaggedin} handlelogin={handlelogin}/>} />
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
