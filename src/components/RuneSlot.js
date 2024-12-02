import React from "react";

const RuneSlot = ({ slot }) => {
  return (
    <div className="rune-slot mb-4">
      <div className="slot-container">
        {slot.runes.map((rune, index) => (
          <div
            key={rune.id}
            className={`rune-card ${
              index < 4 ? "highlighted-rune" : "regular-rune"
            }`}
          >
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
              alt={rune.name}
              className="rune-icon"
            />
            <p className="rune-name">{rune.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RuneSlot;
