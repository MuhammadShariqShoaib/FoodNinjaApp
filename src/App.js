import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './component/About';
import Menu from './component/Menu';
import Interface from './component/Interface';
import Contact from './component/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Interface />} />
          <Route exact path="/Home" element={<Interface />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} /> 
          <Route exact path="/Don't have an account?" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
