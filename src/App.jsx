import React from "react";

import { Routes, Route } from "react-router-dom";
import Chart from "./pages/Chart";
import Collection from "./pages/Collection";

import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default App;
