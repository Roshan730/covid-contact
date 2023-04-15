import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import CovidTracker from "./components/CovidTracker";
import Contact from "./components/ContactForm";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/covid-page" element={<CovidTracker />} />
        <Route path="/contact-page" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
