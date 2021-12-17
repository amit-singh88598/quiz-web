import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../Pages/about";
import Home from "../Pages/home";

function Navigation(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Navigation;
