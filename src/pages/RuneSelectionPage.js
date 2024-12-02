import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRiotRunes } from "../services/riotApi";
import "./RuneSelectionPage.css";

const RuneSelectionPage = () => {
  const [runes, setRunes] = useState([]);
  const [primaryCategory, setPrimaryCategory] = useState(null);
  const [secondaryCategory, setSecondaryCategory] = useState(null);
  const [selectedRunes, setSelectedRunes] = useState({
    primary: null,
    secondary: null,
  });

  const navigate = useNavigate();

  // Riot API에서 룬 데이터 가져오기
  useEffect(() => {
    const loadRunes = async () => {
      const data = await fetchRiotRunes();
      setRunes(data);
    };
    loadRunes();
  }, []);

  const handleSelectRune = (type, rune) => {
    setSelectedRunes((prev) => ({
      ...prev,
      [type]: rune,
    }));
  };

  const handleSaveRunes = () => {
    console.log("Selected Runes:", selectedRunes);
    navigate("/custom");
  };

  return (
    <div className="rune-selection-page">
      <h2>Select Your Runes</h2>

      {/* Primary Runes */}
      <div className="rune-column">
        <h3>Main Runes</h3>
        <div className="category-bar">
          {runes.map((category) => (
            <div
              key={category.id}
              className={`category-icon ${
                primaryCategory?.id === category.id ? "selected" : ""
              }`}
              onClick={() => setPrimaryCategory(category)}
            >
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/${category.icon}`}
                alt={category.key}
              />
              <p>{category.key}</p>
            </div>
          ))}
        </div>
        {primaryCategory && (
          <div className="rune-slots">
            {primaryCategory.slots.map((slot, index) => (
              <div key={index} className="slot">
                {slot.runes.map((rune) => (
                  <img
                    key={rune.id}
                    src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
                    alt={rune.name}
                    className={`rune-icon ${
                      selectedRunes.primary?.id === rune.id ? "selected" : ""
                    }`}
                    onClick={() => handleSelectRune("primary", rune)}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Secondary Runes */}
      <div className="rune-column">
        <h3>Secondary Runes</h3>
        <div className="category-bar">
          {runes.map((category) => (
            <div
              key={category.id}
              className={`category-icon ${
                secondaryCategory?.id === category.id ? "selected" : ""
              }`}
              onClick={() => setSecondaryCategory(category)}
            >
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/${category.icon}`}
                alt={category.key}
              />
              <p>{category.key}</p>
            </div>
          ))}
        </div>
        {secondaryCategory && (
          <div className="rune-slots">
            {secondaryCategory.slots.map((slot, index) => (
              <div key={index} className="slot">
                {/* 핵심 룬 제외 (slot.runes의 첫 번째 요소 제외) */}
                {slot.runes.slice(1).map((rune) => (
                  <img
                    key={rune.id}
                    src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
                    alt={rune.name}
                    className={`rune-icon ${
                      selectedRunes.secondary?.id === rune.id ? "selected" : ""
                    }`}
                    onClick={() => handleSelectRune("secondary", rune)}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="text-center mt-4">
        <button className="btn btn-success" onClick={handleSaveRunes}>
          Save Selected Runes
        </button>
      </div>
    </div>
  );
};

export default RuneSelectionPage;
