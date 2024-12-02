import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChampionListPage from "./pages/ChampionListPage";
import ChampionDetailPage from "./pages/ChampionDetailPage";
import RuneListPage from "./pages/RuneListPage";
import RuneDetailPage from "./pages/RuneDetailPage";
import CustomPage from "./pages/CustomPage";
import RuneSelectionPage from "./pages/RuneSelectionPage"; // 새로운 페이지
import MyListPage from "./pages/MyListPage";
import UpdatePage from "./pages/UpdatePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChampionListPage />} />
        <Route path="/championlist" element={<ChampionListPage />} />
        <Route path="/championlist/:id" element={<ChampionDetailPage />} />
        <Route path="/runelist" element={<RuneListPage />} />
        <Route path="/runelist/:id" element={<RuneDetailPage />} />
        <Route path="/custom" element={<CustomPage />} />
        <Route
          path="/custom/rune-selection"
          element={<RuneSelectionPage />}
        />{" "}
        {/* 새로운 경로 */}
        <Route path="/mylist" element={<MyListPage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </Router>
  );
};

export default App;
