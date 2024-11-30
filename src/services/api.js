const BASE_API = "https://6749b320868020296632377a.mockapi.io/api/v1";

// 챔피언 데이터 가져오기
export const fetchChampions = async () => {
  const response = await fetch(`${BASE_API}/champions`);
  return response.json();
};

// 룬 데이터 가져오기
export const fetchRunes = async () => {
  const response = await fetch(`${BASE_API}/runes`);
  return response.json();
};

// 챔피언 추가
export const addChampion = async (champion) => {
  const response = await fetch(`${BASE_API}/champions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(champion),
  });
  return response.json();
};

// 룬 추가
export const addRune = async (rune) => {
  const response = await fetch(`${BASE_API}/runes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rune),
  });
  return response.json();
};

// 데이터 삭제
export const deleteItem = async (type, id) => {
  const response = await fetch(`${BASE_API}/${type}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
