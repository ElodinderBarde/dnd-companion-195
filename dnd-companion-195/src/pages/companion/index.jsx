import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CompanionPage() {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const allChars = JSON.parse(localStorage.getItem("dndCharacters")) || [];
    const found = allChars.find((c) => c.name === name);
    setCharacter(found);
  }, [name]);

  if (!character) return <p>Charakter nicht gefunden...</p>;

  return (
    <div>
      <h2>Charakter: {character.name}</h2>
      <p>Klasse: {character.class}</p>
      <p>Level: {character.characterLevel}</p>
      <h4>Zauber:</h4>
      <ul>
        {character.spells?.map(spell => (
          <li key={spell.index}>{spell.name} (Level {spell.level})</li>
        ))}
      </ul>
    </div>
  );
}
