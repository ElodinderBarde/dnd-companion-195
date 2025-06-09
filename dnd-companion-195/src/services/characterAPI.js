const API_URL = "https://www.dnd5eapi.co/api";

export async function getClasses() {
  const response = await fetch(`${API_URL}/classes`);
  const data = await response.json();
  return data.results; // Array von { index, name, url }
}
export async function getSpellsByClass(classIndex) {
  const response = await fetch(`${API_URL}/classes/${classIndex}/spells`);
  const data = await response.json();
  return data.results; // Array von { index, name, url }
}

export async function getSpellDetail(spellIndex) {
  const response = await fetch(`https://www.dnd5eapi.co/api/spells/${spellIndex}`);
  const data = await response.json();
  return data;
}
