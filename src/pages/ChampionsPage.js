import React, { useState, useEffect } from "react";
import ChampionList from "../components/ChampionList";
import SearchFilter from "../components/SearchFilter";
import { fetchRiotChampions } from "../services/riotApi";

const ChampionsPage = () => {
  const [champions, setChampions] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const loadChampions = async () => {
      const data = await fetchRiotChampions(); // Riot API에서 데이터 가져오기
      setChampions(data);
    };
    loadChampions();
  }, []);

  const filterOptions = ["Tank", "Mage", "Assassin", "Support"]; // 예시

  const filteredChampions = champions.filter((champ) => {
    return (
      champ.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "" || champ.tags.includes(filter))
    );
  });

  return (
    <div>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        filterOptions={filterOptions}
      />
      <ChampionList champions={filteredChampions} />
    </div>
  );
};

export default ChampionsPage;
