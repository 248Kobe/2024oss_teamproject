import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRiotRunes } from "../services/riotApi";

const RuneDetailPage = () => {
  const { id } = useParams();
  const [rune, setRune] = useState(null);

  useEffect(() => {
    const loadRune = async () => {
      const runes = await fetchRiotRunes();
      const selectedRune = runes.find((r) => r.id === parseInt(id));
      setRune(selectedRune);
    };
    loadRune();
  }, [id]);

  return (
    <div className="container mt-4">
      {rune ? (
        <>
          <h2>{rune.name}</h2>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
            alt={rune.name}
            className="img-fluid"
          />
          <p>{rune.description}</p>
        </>
      ) : (
        <p>Loading rune details...</p>
      )}
    </div>
  );
};

export default RuneDetailPage;
