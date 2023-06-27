import React from 'react';
import logo from './logo.svg';
import './nav.css';
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';

function Nav() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default Nav;
