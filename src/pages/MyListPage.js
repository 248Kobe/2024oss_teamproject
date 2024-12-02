import React, { useEffect, useState } from "react";
import {
  fetchSetsFromMockApi,
  deleteSetFromMockApi,
} from "../services/mockApi";
import MyListCard from "../components/MyListCard";

const MyListPage = () => {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    const loadSets = async () => {
      const data = await fetchSetsFromMockApi();
      setSets(data);
    };
    loadSets();
  }, []);

  const handleDelete = async (id) => {
    await deleteSetFromMockApi(id);
    setSets(sets.filter((set) => set.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>My Rune Sets</h2>
      <div className="row">
        {sets.map((set) => (
          <MyListCard key={set.id} set={set} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default MyListPage;
