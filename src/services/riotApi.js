// Riot API에서 챔피언 데이터를 가져오는 함수
export const fetchRiotChampions = async () => {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/champion.json"
    );
    if (!response.ok) throw new Error("Failed to fetch champions");
    const data = await response.json();
    return Object.values(data.data); // 챔피언 리스트 반환
  } catch (error) {
    console.error("Error fetching champions:", error);
    return [];
  }
};

// Riot API에서 룬 데이터를 가져오는 함수
export const fetchRiotRunes = async () => {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/runesReforged.json"
    );
    if (!response.ok) throw new Error("Failed to fetch runes");
    const data = await response.json();
    return data; // 룬 리스트 반환
  } catch (error) {
    console.error("Error fetching runes:", error);
    return [];
  }
};
