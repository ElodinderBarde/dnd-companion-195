import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("dndCharacters");
    if (saved) {
      setCharacters(JSON.parse(saved));
    }
  }, []);

  const handleSelect = (name) => {
    navigate(`/companion/${name}`);
  };

  const handleDeleteAll = () => {
    if (confirm("Willst du wirklich alle Charaktere löschen?")) {
      localStorage.removeItem("dndCharacters");
      setCharacters([]);
    }
  };

  const handleCreateNew = () => {
    navigate("/characterBuild");
  };

  return (
    <div>
      <h2>Wähle deinen Charakter</h2>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={handleDeleteAll}>🗑️ Alle löschen</button>
        <button onClick={handleCreateNew}>➕ Neuer Charakter</button>
      </div>

      <div
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        {characters.length === 0 ? (
          <p>Keine Charaktere gefunden.</p>
        ) : (
          <ul>
            {characters.map((char, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                <button onClick={() => handleSelect(char.name)}>
                  <strong>{char.name}</strong> – {char.class} (Stufe {char.characterLevel})
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
