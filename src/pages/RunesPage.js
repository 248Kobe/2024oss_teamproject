import React, { useState, useEffect } from "react";
import RuneList from "../components/RuneList";
import SearchFilter from "../components/SearchFilter";
import { fetchRiotRunes } from "../services/riotApi";

const RunesPage = () => {
  const [runes, setRunes] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const loadRunes = async () => {
      const data = await fetchRiotRunes(); // Riot API에서 데이터 가져오기
      setRunes(data);
    };
    loadRunes();
  }, []);

  const filterOptions = ["Precision", "Domination", "Sorcery"]; // 예시

  const filteredRunes = runes.filter((rune) => {
    return (
      rune.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "" || rune.category === filter)
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
      <RuneList runes={filteredRunes} />
    </div>
  );
};

export default RunesPage;
