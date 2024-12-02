import React from "react";
import RuneSlot from "./RuneSlot";

const RuneCategory = ({ category }) => {
  return (
    <div className="rune-category mb-4">
      <div className="d-flex align-items-center mb-3">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/${category.icon}`}
          alt={category.key}
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <h3>{category.key}</h3>
      </div>
      <div className="rune-slots">
        {category.slots.map((slot, index) => (
          <RuneSlot key={index} slot={slot} />
        ))}
      </div>
    </div>
  );
};

export default RuneCategory;
