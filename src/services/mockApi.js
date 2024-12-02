const BASE_API = "https://6749b320868020296632377a.mockapi.io/api/v1";

// MockAPI에서 세트 가져오기
export const fetchSetsFromMockApi = async () => {
  try {
    const response = await fetch(`${BASE_API}/sets`);
    if (!response.ok) throw new Error("Failed to fetch rune sets");
    return await response.json();
  } catch (error) {
    console.error("Error fetching rune sets:", error);
    return [];
  }
};

// MockAPI에 세트 저장
export const saveSetToMockApi = async (set) => {
  try {
    const response = await fetch(`${BASE_API}/sets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(set),
    });
    if (!response.ok) throw new Error("Failed to save rune set");
    return await response.json();
  } catch (error) {
    console.error("Error saving rune set:", error);
  }
};

// MockAPI에서 세트 업데이트
export const updateSetInMockApi = async (id, updatedSet) => {
  try {
    const response = await fetch(`${BASE_API}/sets/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSet),
    });
    if (!response.ok) throw new Error("Failed to update rune set");
    return await response.json();
  } catch (error) {
    console.error("Error updating rune set:", error);
  }
};

// MockAPI에서 세트 삭제
export const deleteSetFromMockApi = async (id) => {
  try {
    const response = await fetch(`${BASE_API}/sets/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete rune set");
    return await response.json();
  } catch (error) {
    console.error("Error deleting rune set:", error);
  }
};
