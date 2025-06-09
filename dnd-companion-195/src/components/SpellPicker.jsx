import { useEffect, useState } from "react";
import { getSpellsByClass, getSpellDetail } from "../services/characterAPI";



export default function SpellPicker({ classIndex, characterLevel, onSelect }) {
  const [spells, setSpells] = useState([]);
  const [selectedSpell, setSelectedSpell] = useState(null);

  useEffect(() => {
    if (!classIndex || !characterLevel) return;

    getSpellsByClass(classIndex).then((allSpells) => {
      const filtered = allSpells.filter(spell => spell.level <= characterLevel);
      setSpells(filtered);
    });
  }, [classIndex, characterLevel]);

  const handleSpellClick = async (spell) => {
    const details = await getSpellDetail(spell.index);
    setSelectedSpell(details);
  };
  const handleAddSpell = () => {
    if (selectedSpell) {
      onSelect(selectedSpell);
    }
  };
  

  return (
    <div>
      {selectedSpell && (
        <div style={{ border: "1px solid gray", padding: "1rem", marginTop: "1rem" }}>
          <h4>{selectedSpell.name}</h4>
          <p><strong>Level:</strong> {selectedSpell.level}</p>
          <p><strong>Reichweite:</strong> {selectedSpell.range}</p>
          <p><strong>Dauer:</strong> {selectedSpell.duration}</p>
          <p><strong>Beschreibung:</strong> {selectedSpell.desc?.join(" ")}</p>
          <button type="button" onClick={handleAddSpell}>Zauber übernehmen</button>
          
          </div>
          
      )}


      <h3>Wähle Zauber für {classIndex}</h3>
      <ul>
        {spells.map((spell) => (
          <li key={spell.index}>
            <button type="button" onClick={() => handleSpellClick(spell)}>{spell.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
