import React from "react";
import { Routes, Route } from "react-router-dom";  // ❌ Removed extra Router
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import EstateDetails from "./Pages/EstateDetails/EstateDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estate/:id" element={<EstateDetails />} />
      </Routes>
    </>
  );
};

export default App;
