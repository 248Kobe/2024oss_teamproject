import React, { useState, useEffect } from "react";
import ChampionList from "../components/ChampionList";
import { fetchRiotChampions } from "../services/riotApi";

const ChampionsPage = () => {
  const [champions, setChampions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadChampions = async () => {
      const data = await fetchRiotChampions(); // Riot API에서 데이터 가져오기
      setChampions(data);
    };
    loadChampions();
  }, []);

  const filteredChampions = champions.filter((champ) =>
    champ.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search Champions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ChampionList champions={filteredChampions} />
    </div>
  );
};

export default ChampionsPage;
