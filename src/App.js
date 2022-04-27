import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Docs from './pages/Docs';
import Navigation from "./components/Navigation";


function App() {
  return (
    <>
    <Router>
    < Navigation />
    <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/Docs" element={<Docs/>} />  
      </Routes>
    </Router>
  </>
  );
}

export default App;
