import React, { useState, useEffect } from "react";
import RuneList from "../components/RuneList";
import { fetchRiotRunes } from "../services/riotApi";

const RunesPage = () => {
  const [runes, setRunes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadRunes = async () => {
      const data = await fetchRiotRunes(); // Riot API에서 데이터 가져오기
      setRunes(data);
    };
    loadRunes();
  }, []);

  const filteredRunes = runes.filter((rune) =>
    rune.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search Runes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <RuneList runes={filteredRunes} />
    </div>
  );
};

export default RunesPage;
