import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Docs from './pages/Docs';
import Login from './pages/Login'
import Navigation from "./components/Navigation/Navigation";


function App() {
  return (
    <>
    <Router>
    < Navigation />
    <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/Docs" element={<Docs/>} /> 
        <Route path="/Login" element={<Login/>} />   
      </Routes>
    </Router>
  </>
  );
}

export default App;
