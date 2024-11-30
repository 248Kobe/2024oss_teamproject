import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChampionsPage from "./pages/ChampionsPage";
import RunesPage from "./pages/RunesPage";
import MyCustomPage from "./pages/MyCustomPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/champions" element={<ChampionsPage />} />
        <Route path="/runes" element={<RunesPage />} />
        <Route path="/custom" element={<MyCustomPage />} />
      </Routes>
    </Router>
  );
};

export default App;
