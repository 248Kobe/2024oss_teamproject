import React from "react";

const RuneCard = ({ rune }) => {
  const imagePath = `https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`;

  return (
    <div className="card">
      <img
        src={imagePath}
        alt={rune.name}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/40"; // 이미지 로드 실패 시 대체 이미지
        }}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{rune.name}</h5>
        <p>{rune.description}</p>
      </div>
    </div>
  );
};

export default RuneCard;
