import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scanner from "./Components/Pages/Scanner";
import Generator from "./Components/Pages/Generator";
import About from "./Components/Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Scanner />} />
        <Route exact path="/generator" element={<Generator />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
