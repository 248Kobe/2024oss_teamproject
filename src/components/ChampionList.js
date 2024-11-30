import React from "react";
import { addChampion } from "../services/api"; // Mock API에 저장하기 위한 함수

const ChampionList = ({ champions }) => {
  const saveToMockApi = async (champion) => {
    try {
      await addChampion(champion); // Mock API에 저장
      alert(`${champion.name} saved to the database!`);
    } catch (error) {
      console.error("Error saving champion:", error);
      alert("Failed to save champion.");
    }
  };

  return (
    <div className="row">
      {champions.map((champ) => (
        <div className="col-md-4 mb-4" key={champ.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{champ.name}</h5>
              <p className="card-text">{champ.title}</p>
              <p>
                <strong>Role:</strong> {champ.role || "N/A"}
              </p>
              <button
                className="btn btn-success"
                onClick={() => saveToMockApi(champ)}
              >
                Save to Database
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChampionList;
