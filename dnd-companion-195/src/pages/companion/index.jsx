import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSpellDetail } from "../../services/characterAPI"; 
import { useNavigate } from "react-router-dom";



export default function CompanionPage() {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);
  const [selectedSpell, setSelectedSpell] = useState(null);




  const navigate = useNavigate();

  const handleSpellClick = async (spell) => {
    if (selectedSpell?.index === spell.index) {
      setSelectedSpell(null); // ausblenden
    } else {
      const details = await getSpellDetail(spell.index);
      setSelectedSpell(details);
    }
  };

  const [notes, setNotes] = useState("");

useEffect(() => {
  const allChars = JSON.parse(localStorage.getItem("dndCharacters")) || [];
  const found = allChars.find((c) => c.name.toLowerCase() === name.toLowerCase());
  setCharacter(found);
}, [name]);



useEffect(() => {
  const storedNotes = localStorage.getItem(`notes${name}`) || "";
  setNotes(storedNotes);
}, [name]);




const handleNoteChange = (e) => {
  const newNote = e.target.value;
  setNotes(newNote);
  localStorage.setItem(`notes${name}`, newNote);
};


  if (!character) return <p>Charakter nicht gefunden...</p>;



  



  return (
    
    <div>

              <button type="button" onClick={() => navigate("/")}>
          Change Character
          </button>


      <h2>Charakter: {character.name}</h2>
      <p>Klasse: {character.class}</p>
      <p>Level: {character.characterLevel}</p>

      <h4>Zauber:</h4>
      <ul>
        {character.spells?.map(spell => (
          <li key={spell.index}>
            <button onClick={() => handleSpellClick(spell)}>
              {spell.name} (Level {spell.level})
            </button>
          </li>
        ))}
      </ul>

      {selectedSpell && (
        <div style={{ border: "1px solid gray", padding: "1rem", marginTop: "1rem" }}>
          <h4>{selectedSpell.name}</h4>
          <p><strong>Level:</strong> {selectedSpell.level}</p>
          <p><strong>Reichweite:</strong> {selectedSpell.range}</p>
          <p><strong>Dauer:</strong> {selectedSpell.duration}</p>
          <p><strong>Beschreibung:</strong> {selectedSpell.desc?.join(" ")}</p>
        </div>
      )}



      <h4>Notizen zu {character.name}:</h4>
<textarea
  value={notes}
  onChange={handleNoteChange}
  placeholder="Schreibe hier deine Notizen zum Charakter..."
  style={{ width: "100%", height: "120px", marginTop: "0.5rem", padding: "0.5rem" }}
/>





    </div>
  );  
}