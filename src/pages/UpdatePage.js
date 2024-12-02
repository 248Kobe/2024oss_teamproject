import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSetsFromMockApi, updateSetInMockApi } from "../services/mockApi";

const UpdatePage = () => {
  const { id } = useParams();
  const [set, setSet] = useState(null);

  useEffect(() => {
    const loadSet = async () => {
      const sets = await fetchSetsFromMockApi();
      const selectedSet = sets.find((s) => s.id === id);
      setSet(selectedSet);
    };
    loadSet();
  }, [id]);

  const handleUpdate = async () => {
    await updateSetInMockApi(id, set);
    alert("Rune set updated successfully!");
  };

  return (
    <div className="container mt-4">
      {set ? (
        <>
          <h2>Update Rune Set</h2>
          <p>Champion: {set.champion.name}</p>
          {/* 수정 가능한 UI 추가 */}
          <button className="btn btn-primary" onClick={handleUpdate}>
            Save Changes
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UpdatePage;
