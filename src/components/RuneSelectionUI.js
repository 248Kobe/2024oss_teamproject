import React, { useState } from "react";
import "./css/RuneSelectionUI.css";

const RuneSelectionUI = ({ runes, selectedRunes, setSelectedRunes }) => {
  const [selectedCategory, setSelectedCategory] = useState(null); // 메인 룬 카테고리 선택

  const handleSelectRune = (type, rune) => {
    if (type === "primary")
      setSelectedRunes({ ...selectedRunes, primary: rune });
    if (type === "secondary")
      setSelectedRunes({ ...selectedRunes, secondary: rune });
  };

  return (
    <div className="rune-selection-container">
      {/* 룬 카테고리 선택 */}
      <div className="rune-category-bar">
        {runes.map((category) => (
          <div
            key={category.id}
            className={`category-icon ${
              selectedCategory && selectedCategory.id === category.id
                ? "selected"
                : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            <img src={category.icon} alt={category.key} />
            <p>{category.key}</p>
          </div>
        ))}
      </div>

      {/* 룬 슬롯 */}
      {selectedCategory && (
        <div className="rune-slots">
          <h5>{selectedCategory.key} Runes</h5>
          <div className="slot-container">
            {selectedCategory.slots.map((rune) => (
              <img
                key={rune.id}
                src={rune.icon}
                alt={rune.name}
                className={`rune-icon ${
                  (selectedRunes.primary &&
                    selectedRunes.primary.id === rune.id) ||
                  (selectedRunes.secondary &&
                    selectedRunes.secondary.id === rune.id)
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  handleSelectRune(
                    selectedRunes.primary ? "secondary" : "primary",
                    rune
                  )
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RuneSelectionUI;
