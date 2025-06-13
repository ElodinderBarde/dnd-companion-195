import { useState, useEffect } from "react";
import { getClasses } from "../../services/characterAPI";
import SpellPicker from "../../components/SpellPicker";
import { useNavigate } from "react-router-dom";

export default function CharacterBuilder() {
  const [name, setName] = useState("Hero");
  const [charClass, setCharClass] = useState("");
  const [characterLevel, setCharacterLevel] = useState(1);
  const [classes, setClasses] = useState([]);
  const [selectedSpells, setSelectedSpells] = useState([]);



  
  useEffect(() => {
    getClasses().then(setClasses);
  }, []);

// Spells hinzufügen
  const handleAddSpell = (spell) => {
    if (selectedSpells.length >= 5) {
      alert("Du kannst maximal 5 Zauber auswählen.");
      return;
    }
  
    if (!selectedSpells.some(s => s.index === spell.index)) {
      setSelectedSpells([...selectedSpells, spell]);
    }
  };
  
  
  
  

 const handleChoose =() => {
  navigate("/charChooe");
  return; 
 }
  
  
  //Charakter speichern (local)
 const handleSubmit = (e) => {
  e.preventDefault();
  const noSpellClasses = ["Fighter", "Monk", "Barbarian", "Rogue"];

  if (
    !charClass ||
    !characterLevel ||
    (!noSpellClasses.includes(charClass) && selectedSpells.length === 0)
  ) {
    alert("Bitte wähle Klasse, Level und mindestens einen Zauber.");
    return;
  }
  const newCharacter = {
    name,
    class: charClass,
    characterLevel,
    spells: selectedSpells.map(spell => ({
      index: spell.index,
      name: spell.name,
      level: spell.level
    }))
  };



const saved = JSON.parse(localStorage.getItem("dndCharacters")) || [];
const existing = saved.find(c => c.name.toLowerCase() === name.toLowerCase());

if (existing) {
  alert("Ein Charakter mit diesem Namen existiert bereits.");
  return;
}
saved.push(newCharacter);
localStorage.setItem("dndCharacters", JSON.stringify(saved));
alert("Charakter erfolgreich gespeichert!");


};

  
  //Spells Array zurücksetzen
  const handleResetSpells = () => {
    setSelectedSpells([]);
  };


  const navigate = useNavigate();

  //UI Page
  return (



    
    <form onSubmit={handleSubmit}>



              <button type="button" onClick={() => navigate("/")}>
          Play
        </button>

      <h2>Charakter erstellen</h2>


      <label>Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label>Klasse:
        <select value={charClass} onChange={(e) => {setCharClass(e.target.value);handleResetSpells();}} required>
          <option value="">-- Wähle eine Klasse --</option>
          {classes.map((c) => (
            <option key={c.index} value={c.name}>{c.name}</option>
          ))}
        </select>
      </label>


      <label>Level:
        <input type="number" min="1" max="20" value={characterLevel} onChange={(e) => {setCharacterLevel(Number(e.target.value));handleResetSpells();}} required />
      </label>

      <button type="submit">save character </button>
      <h4>Gewählte Zauber ({selectedSpells.length}/5):</h4>
      
      <button type="button" onClick={handleResetSpells}> reset spells</button>

      {charClass && (
        <SpellPicker
  classIndex={charClass.toLowerCase()}
  characterLevel={characterLevel}
  onSelect={handleAddSpell}
/>
)}

    </form>
  
);

{selectedSpells.length > 0 && (
    <div>
      <h3>Gewählte Zauber:</h3>
      <ul>
        {selectedSpells.map(spell => (
          <li key={spell.index}>{spell.name} (Stufe {spell.level})</li>
        ))}
      </ul>
    </div>
  )}
  
}
