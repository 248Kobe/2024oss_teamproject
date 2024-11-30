import React, { useState, useEffect } from "react";
import { fetchChampions, fetchRunes, addChampion } from "../services/api";
import CustomForm from "../components/CustomForm";
import MyCustomList from "../components/MyCustomList";

const MyCustomPage = () => {
  const [champions, setChampions] = useState([]);
  const [runes, setRunes] = useState([]);
  const [customList, setCustomList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const championsData = await fetchChampions();
      const runesData = await fetchRunes();
      setChampions(championsData);
      setRunes(runesData);
    };
    loadData();
  }, []);

  const addCustomCombination = (customItem) => {
    setCustomList([...customList, customItem]);
  };

  const removeCustomCombination = (index) => {
    const updatedList = customList.filter((_, i) => i !== index);
    setCustomList(updatedList);
  };

  return (
    <div>
      <h3>Create Your Own Champion + Rune Combination</h3>
      <CustomForm
        champions={champions}
        runes={runes}
        onAdd={addCustomCombination}
      />
      <MyCustomList
        customList={customList}
        onRemove={removeCustomCombination}
      />
    </div>
  );
};

export default MyCustomPage;
