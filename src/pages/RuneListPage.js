import React, { useEffect, useState } from "react";
import { fetchRiotRunes } from "../services/riotApi";
import RuneCategory from "../components/RuneCategory";

const RuneListPage = () => {
  const [runes, setRunes] = useState([]);

  useEffect(() => {
    const loadRunes = async () => {
      const data = await fetchRiotRunes();
      setRunes(data);
    };
    loadRunes();
  }, []);

  return (
    <div className="container mt-4">
      <h2>View Runes</h2>
      {runes.map((runeCategory) => (
        <RuneCategory key={runeCategory.id} category={runeCategory} />
      ))}
    </div>
  );
};

export default RuneListPage;
