import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRiotChampions } from "../services/riotApi";

const ChampionDetailPage = () => {
  const { id } = useParams();
  const [champion, setChampion] = useState(null);

  useEffect(() => {
    const loadChampion = async () => {
      const champions = await fetchRiotChampions();
      const selectedChampion = champions.find((champ) => champ.id === id);
      setChampion(selectedChampion);
    };
    loadChampion();
  }, [id]);

  return (
    <div className="container mt-4">
      {champion ? (
        <>
          <h2>{champion.name}</h2>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
            alt={champion.name}
            className="img-fluid"
          />
          <p>{champion.title}</p>
          <p>{champion.blurb}</p>
        </>
      ) : (
        <p>Loading champion details...</p>
      )}
    </div>
  );
};

export default ChampionDetailPage;
