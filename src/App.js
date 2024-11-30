import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChampionsPage from "./pages/ChampionsPage";
import RunesPage from "./pages/RunesPage";
import MyCustomPage from "./pages/MyCustomPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <h1 className="text-center mb-4">LOL Champions & Runes</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/champions" element={<ChampionsPage />} />
          <Route path="/runes" element={<RunesPage />} />
          <Route path="/custom" element={<MyCustomPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
