import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Nav from "./nav";
import Portfolio from "./portfolio";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
