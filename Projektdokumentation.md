
### Projektidee:
   
> **Kurzbeschreibung**:  
> Eine Webanwendung zur Erstellung, Verwaltung und Darstellung von Charakteren aus „Dungeons & Dragons“. Spieler können Charaktere inklusive Klasse, Level und Zaubern erstellen. Zudem sollen Notizen verwaltet werden, und eine Detailansicht bietet Zauberbeschreibungen.

---

### Ziel des Projekts

> Das Ziel dieser Anwendung ist es, DnD-Spielerinnen und -Spielern ein praktisches Werkzeug an die Hand zu geben, mit dem sie ihre Charaktere verwalten und im Spielverlauf schnell auf Zauber und individuelle Notizen zugreifen können.
> Zudem legt dies den ersten Baustein dafür, die Spielerseitige Kommunikation zwischen ihm und dem Spielleiter zu ermöglichen. 


---
### Storyboard
#### Empfang

So könnte der Empfang aussehen. 
hier könnte der User seine erstellen Character sehen, hinzufügen und löschen
![CharChoose](https://github.com/user-attachments/assets/39a7338b-39a3-45b6-a929-1029475c8f98)


#### Charakter erstellen

Hier könnte der User seinen Charakter erstellen. 
es soll die erlernbaren Zauber darstellen und die Charaktererstellung so einfach wie möglich halten

![CBuild](https://github.com/user-attachments/assets/93115f21-8eca-494a-bf71-973e67a33c9c)

#### Companion

Hier soll der User die meiste Zeit verbringen. 
Es soll einen überblick über den gewählten Charakter schaffen und die niederschreibung von Notizen ermöglichen 

![Companion](https://github.com/user-attachments/assets/e7c30dcc-59ac-4417-8081-3e2eebce893c)

### Die Umsetzung
#### CharChoose
![image](https://github.com/user-attachments/assets/b7e1b015-b92b-4fc0-90e7-92930b66f341)

#### CBuild
![image](https://github.com/user-attachments/assets/5b367212-116a-4001-9d4d-3e0cdd3431fa)

#### Companion
![image](https://github.com/user-attachments/assets/2b42ed1b-b0c6-448f-87d8-5c8089b28ada)
![image](https://github.com/user-attachments/assets/7c739f9b-a999-4f4a-af43-3c657840310a)

---

### Technologiestack

- **Frontend:** React (Vite + React Router)
    
- **Speicherung:** `localStorage` des Browsers
    
- **Backend/API:** externe API für Zauberdaten (`https://www.dnd5eapi.co`)
    
- **Sprachen:** JavaScript, HTML, CSS 




---
### dnd5api


Im Mittelpunkt meiner Applikation stehen die exteren Daten der dnd5api. Diese umfasssende Sammlung von Daten ermöglicht mir, die Zauber und Klassen zu erhalten und bietet auch eine wunderbare Sammlung von Völker, Gegenstände und Monster. die erlauben diese in Zukunft weiter auszubauen. 

Der Datenstz erlaubt umfassende und Zielgerichtete Abfragen, durch die fülle. folgend ist ein Beispiel des Zaubers "Firebolt"

```bash
{
  "higher_level": [],
  "index": "fire-bolt",
  "name": "Fire Bolt",
  "desc": [
    "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.",
    "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
  ],
  "range": "120 feet",
  "components": [
    "V",
    "S"
  ],
  "ritual": false,
  "duration": "Instantaneous",
  "concentration": false,
  "casting_time": "1 action",
  "level": 0,
  "attack_type": "ranged",
  "damage": {
    "damage_type": {
      "index": "fire",
      "name": "Fire",
      "url": "/api/2014/damage-types/fire"
    },
    "damage_at_character_level": {
      "1": "1d10",
      "5": "2d10",
      "11": "3d10",
      "17": "4d10"
    }
  },
  "school": {
    "index": "evocation",
    "name": "Evocation",
    "url": "/api/2014/magic-schools/evocation"
  },
  "classes": [
    {
      "index": "sorcerer",
      "name": "Sorcerer",
      "url": "/api/2014/classes/sorcerer"
    },
    {
      "index": "wizard",
      "name": "Wizard",
      "url": "/api/2014/classes/wizard"
    }
  ],
  "subclasses": [],
  "url": "/api/2014/spells/fire-bolt",
  "updated_at": "2025-04-08T21:14:16.147Z"
```


---


### Komponenten- und Strukturdiagramm

```Text
dnd-companion-app/
├── src/
│   ├── components/         # Wiederverwendbare UI-Komponenten (z. B. SpellPicker)
│   ├── pages/              # Hauptseiten (Builder, Companion, Startseite)
│   ├── services/           # API-Zugriffe (z. B. Zauber laden)
│   ├── App.jsx             # Routing und Layout
│   └── main.jsx            # Einstiegspunkt
├── public/                 # Statische Ressourcen (evtl. Würfel-Assets)
├── package.json            # Projekt-Konfiguration
└── README.md               # Diese Dokumentation
```


---

### Storyboard der Anwendung

1. **Startseite (MainPage):**
   - Auswahl aus gespeicherten Charakteren aus dem LocalStorage

2. **Builder-Seite (CharacterBuilder):**
   - Eingabe von Name, Klasse, Level
   - Auswahl bis zu 5 Zauber
   - Validierung und Speichern

3. **Companion-Seite (Character Detail):**
   - Anzeige aller gewählten Zauber
   - Anzeige der Zauberbeschreibungen auf Klick
   - Notizfeld (Text wird pro Charakter im LocalStorage gespeichert)



---

### Funktionsübersicht

- **Charakter erstellen:**
    
    - Eingabe von Name, Klasse, Level
        
    - Auswahl bis zu 5 Zaubern (nur bei Magiefähigen Klassen)
	
	- Zauber sind nach Level gefiltert

- **Charakter speichern:**
    
    - Speicherung erfolgt lokal im `localStorage`
        
    - Überprüfung auf doppelte Namen
        
- **Charakter laden:**
    
    - Auswahl eines bestehenden Charakters auf der Startseite
        
- **Detailansicht (CompanionPage):**
    
    - Anzeige aller Basisdaten
        
    - Zauberliste mit einblendbaren Beschreibungen
        
    - Notizfeld (lokal gespeichert und an Namen gebunden)
    
    

---

### Benutzeroberfläche (UI-Konzept

> Die Oberfläche ist in mehrere Seiten unterteilt:

- **Startseite:** Charakterauswahl
    
- **Charaktererstellung:** Eingabe und Zauberauswahl
    
- **Charakteransicht:** Übersicht mit Zaubern und Notizfeld
    

Ein einfaches, auf Klarheit ausgelegtes Layout. CSS wird bei Bedarf am Ende ergänzt.

---

### Besonderheiten / Herausforderungen

- **Doppelte Namen verhindern:** eigenes Namensregister mit Prüfung
    
- **Zauberlogik nach Klasse und Level:** dynamisch durch API-Daten
	 
- **Fehlermeldungen und Zustandsprüfung:** einfache Alerts
    

---

### Anforderungsanalyse 
#### User Story 1
Als Spieler möchte ich neue Charaktere erstellen können, damit ich sie im Abenteuer benutzen kann.
**Akzeptanzkriterien:**
- Name, Klasse und Level müssen eingegeben werden können.
- Charakter wird im LocalStorage gespeichert.

#### User Story 2
Als Spieler möchte ich meine Zauber sehen und bei Bedarf ihre Beschreibung einblenden.
**Akzeptanzkriterien:**
- Liste mit Zaubern wird angezeigt.
- Bei Klick wird Beschreibung geladen und angezeigt.

#### User Story 3
Als Spieler möchte ich Notizen zu meinem Charakter speichern, um wichtige Informationen während des Spiels festzuhalten.
**Akzeptanzkriterien:**
- Eingabefeld für Notizen vorhanden
- Notizen bleiben erhalten beim Neuladen



--- 
### Testplan

| Testfall                     | Eingabe                | Erwartetes Ergebnis                 | Erhaltenes Ergebnis |
|-----------------------------|------------------------|-------------------------------------|--------------------| 
| 1. Charakter erstellen      | Name+Klasse+Level      | Wird gespeichert                    | Wurde gespeichert |
| 2. Zauber anzeigen          | Klick auf Zauber       | Beschreibung wird eingeblendet      | Feld erscheint und Beschreibung wird eingeblendet|
| 3. Notiz schreiben          | Text in Textarea       | Bleibt gespeichert bei Reload       | Auch beim wechseln zwiscchen Charakteren bleiben Notizen vorhanden|
| 4. Leerer Name              | Kein Name eingegeben   | Alert: "Bitte gib einen Namen an"   | Altert wird eingeblendet |
| 5. Doppelter Name           | Name existiert bereits | Alert: "Charakter existiert schon"  | Altert wird eingeblendet |


Alle Tests wurden manuell im Browser (Chrome & Edge) durchgeführt.  
Testdaten wurden im LocalStorage gespeichert, gelöscht und erneut geladen.  
Das Verhalten bei falschen Eingaben (z. B. doppelte Namen) wurde gezielt getestet.

- Charakter erstellen → funktioniert
- Zauberbeschreibung anzeigen → funktioniert
- Notizen speichern/laden → funktioniert
- Validierung bei leerem Namen → funktioniert
-  Validierung bei doppeltem Namen → funktioniert

--- 

### ViTest


| Testfall             | Erhaltenes Ergebnis|
| ----------------------|--------------------|
|1. Darstellung von Zaubern bei gültiger Klasse und Level: Beim Rendern der Komponente mit gültigen classIndex und characterLevel werden passende Zauber in einer Liste angezeigt. | Lädt und zeigt Zauber an|
|2. Anzeigen von Zauberdetails: Ein Klick auf einen in der Liste angezeigten Zauber öffnet dessen vollständige Beschreibung.| zeigt Details nach Klick auf Zauber|
|3. Kein Anzeigen bei zu niedrigem Level: Hat der Charakter ein zu niedriges Level für alle verfügbaren Zauber, bleibt die Zauberliste leer.| zeigt keine Zauber, wenn Level zu niedrig| 
|4. onSelect wird korrekt ausgelöst: Wird ein Zauber übernommen, wird die übergebene onSelect-Funktion mit dem korrekten Zauber aufgerufen.| ruft onSelect auf, wenn Zauber übernommen wird|
|5. Komponente bleibt leer bei fehlenden Props: Sind classIndex oder characterLevel nicht gesetzt, rendert die Komponente keine Zauberliste.| zeigt keine Liste, wenn classIndex oder Level fehlen|




 #### Im Detail aus der Konsole:

 DEV  v3.2.3 C:/Users/rmarc/Desktop/Projekte/js/dnd-companion/dnd-companion-195



```Text
 ✓ src/__tests__/SpellPicker.test.jsx (5 tests) 121ms
   ✓ SpellPicker Komponente > lädt und zeigt Zauber an 38ms
   ✓ SpellPicker Komponente > zeigt Details nach Klick auf Zauber 65ms
   ✓ SpellPicker Komponente > zeigt keine Zauber, wenn Level zu niedrig 2ms
   ✓ SpellPicker Komponente > ruft onSelect auf, wenn Zauber übernommen wird 13ms
   ✓ SpellPicker Komponente > zeigt keine Liste, wenn classIndex oder Level fehlen 2ms

````

### Unit-Test beispiel

```bahs
scribe("SpellPicker Komponente", () => {
  let dummyOnSelect;

  beforeEach(() => {
    dummyOnSelect = vi.fn();
  });

  it("lädt und zeigt Zauber an", async () => {
    render(<SpellPicker classIndex="wizard" characterLevel={1} onSelect={dummyOnSelect} />);
    expect(await screen.findByText("Fire Bolt")).toBeInTheDocument();
    expect(screen.getByText("Magic Missile")).toBeInTheDocument();
  });

  it("zeigt Details nach Klick auf Zauber", async () => {
    render(<SpellPicker classIndex="wizard" characterLevel={1} onSelect={dummyOnSelect} />);
    const spellButton = await screen.findByRole("button", { name: "Magic Missile" });
    fireEvent.click(spellButton);
    expect(await screen.findByText(/Reichweite:/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Magic Missile" })).toBeInTheDocument();
  });

```

---

#### Installationsanleitung

  1. Repository klonen 
  
  ```git clone https://github.com/ElodinDerBarde/dnd-companion-195.git cd dnd-companion-app```

 oder Zip unter "https://github.com/ElodinderBarde/dnd-companion-195" herunterladen



2. Abhängigkeiten installieren

`npm install`

3. Projekt starten

`npm run dev`

4. Aufruf im Browser unter: `http://localhost:5173`


--- 




### Reflexion & Ausblick

> **Was gut lief:**

- Dynamisches Zusammenspiel von Klasse & Zaubern
    
- Lokale Datenspeicherung ohne Backend
    
- Intuitive Komponententrennung
    

> **Was verbessert werden könnte:**

- Styling (CSS fehlt teils noch)
    
- Zauber nachträglich bearbeiten / löschen
    
- Würfelkomponente final integrieren
    

   

### Hilfestellungen

Leider muss ich zugeben,  dass ich nicht ohne die Hilfe von ChatGPT auskam, versuchte jedoch meine Prompts wie folgt zu formulieren: 

- Was mache ich hier falsch?
- Wie könnte ich das besser machen? 
- Wo ist hier der Syntaxfehler?
- Wie greife ich auf XYZ zu? 


Ganz direkt, wofür wurde GPT verwendet?

- Fehlersuche
- Alternative Vorgehensweisen 
- Ideensuche


Repositories zu M294 von JohnnyKrup
Als Code-Vorlagen und zur Inspiration für die Struktur des Projekts

SideQuests M294
Als Nachschlagewerk für Installationen und Umsetzungen

#### Was würde ich das nächste Mal anders machen? 

Das Projekt erscheint so wie es ist etwas mager. Ich habe mich jedoch bewusst dafür entschieden, nicht zu viele Komponenten und Funktionen hinzuzufügen, denn das Thema hat das Potenzial riesig zu werden. Ich habe bereits etwas JS-Erfahrungen und ich habe bei anderen Projekten sowie hier gemerkt, dass ich dazu neige zu viel  Funktionen und Gimmicks hinzuzufügen. 

ich würde mir das nächste Mal etwas mehr Zeit nehmen, besser zu planen, um nicht nur das Notwendigste zu machen. Zudem würde ich mir mehr Zeit nehmen um das Design auszuarbeiten.

#### Funktionen, die ich gerne hinzugefügt hätte:

Ohne eigenes Backend:
- Bei Level-Up, Zauber bearbeiten (ergänzen/löschen)
- Spellslot- Tracking: Wie viele Zauber wurden verwendet?
- Digitale Würfel (W4, W6, W8, W12, W20, W100)
- Charakterwerte hinzufügen

Mit eigenem Backend:
- Charakter Permanent speichern
- Login
- Chatfunktion unter Partymitglieder und Spielleiter (Private Kommunikation)
- Inventarverwaltung
- Kampagnensystem


