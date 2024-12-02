import React, { useEffect, useState } from "react";
import { fetchRiotChampions } from "../services/riotApi";
import ChampionCard from "../components/ChampionCard";

const ChampionListPage = () => {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    const loadChampions = async () => {
      const data = await fetchRiotChampions();
      setChampions(data);
    };
    loadChampions();
  }, []);

  return (
    <div className="container mt-4">
      <h2>View Champions</h2>
      <div className="row">
        {champions.map((champion) => (
          <div className="col-md-3 mb-4" key={champion.id}>
            <ChampionCard champion={champion} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionListPage;
