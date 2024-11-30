import React, { useState } from "react";

const CustomForm = ({ champions, runes, onAdd }) => {
  const [selectedChampion, setSelectedChampion] = useState("");
  const [selectedRune, setSelectedRune] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedChampion || !selectedRune) {
      alert("Please select both a champion and a rune.");
      return;
    }

    // 사용자 정의 조합 추가
    onAdd({ champion: selectedChampion, rune: selectedRune });
    setSelectedChampion(""); // 선택 초기화
    setSelectedRune("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Select Champion</label>
        <select
          className="form-select"
          value={selectedChampion}
          onChange={(e) => setSelectedChampion(e.target.value)}
        >
          <option value="">-- Select a Champion --</option>
          {champions.map((champion) => (
            <option key={champion.id} value={champion.name}>
              {champion.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Select Rune</label>
        <select
          className="form-select"
          value={selectedRune}
          onChange={(e) => setSelectedRune(e.target.value)}
        >
          <option value="">-- Select a Rune --</option>
          {runes.map((rune) => (
            <option key={rune.id} value={rune.name}>
              {rune.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Combination
      </button>
    </form>
  );
};

export default CustomForm;
