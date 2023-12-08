import React from 'react'
import Nav from './Components/Nav'
import LandingPage from './Components/LandingPage'
import { Routes,Route } from "react-router-dom";
import Resources from "./Components/Resources";
import Clients from "./Components/Clients";
import Gallery from "./Components/Gallery";
import Company from "./Components/Gallery";

const App = () => {
  return (
    <div className="">
      <Nav />
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/products" element={<LandingPage />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </div>
  );
}

export default App