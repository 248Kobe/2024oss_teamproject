import React from "react";
import { useNavigate } from "react-router-dom";

const ChampionCard = ({ champion }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/championlist/${champion.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
        alt={champion.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{champion.name}</h5>
        <p className="card-text">{champion.title}</p>
      </div>
    </div>
  );
};

export default ChampionCard;
