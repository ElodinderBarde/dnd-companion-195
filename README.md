# DnD Companion App

Eine einfache und benutzerfreundliche Webanwendung zur Verwaltung von Dungeons & Dragons-Charakteren. Erstelle Helden mit Klasse, Level und Zaubern, speichere sie lokal und greife im Spiel auf ihre Notizen und Zauberinformationen zu.

---

##  Features

-  **Charaktererstellung**  
  - Name, Klasse, Level  
  - Zauberauswahl (dynamisch je nach Klasse/Level)  
  - Zauberbeschreibung auf der Detailseite

-  **Notizen pro Charakter**  
  - Editierbar, lokal gespeichert  
  - Automatisch beim Tippen gespeichert

-  **Lokale Speicherung**  
  - Alle Daten werden im `localStorage` des Browsers gespeichert  
  - Kein Backend erforderlich

-  **D&D 5e API-Anbindung**  
  - Zauberdaten werden direkt von [dnd5eapi.co](https://www.dnd5eapi.co) geladen

---

## Technologiestack

| Ebene       | Technologie                   |
|-------------|-------------------------------|
| Frontend    | React (mit Vite)              |
| Routing     | React Router DOM              |
| Daten       | `localStorage` (browserbasiert) |
| API         | https://www.dnd5eapi.co       |
| Sprache     | JavaScript, HTML, CSS         |

---

##  Lokales Setup

1.  Abhängigkeiten installieren:

```bash
npm install
```



 Projekt starten:

```bash
npm run dev
```

App im Browser öffnen:
http://localhost:5173



### Projektstruktur

```Text
dnd-companion-app/
├── src/
│   ├── components/           # Wiederverwendbare UI-Komponenten
│   ├── pages/                # Hauptseiten (Builder, Companion etc.)
│   ├── services/             # API-Zugriffe (z.B. Zauber laden)
│   ├── App.jsx               # Routing und Hauptlayout
│   └── main.jsx              # Einstiegspunkt
├── public/
│   └── ...
├── package.json
└── README.md


```

Dieses Projekt wurde als Teil des Moduls 294 realisiert.


Lizenz
Dieses Projekt dient Lernzwecken.
Wenn du es weiterverwenden oder erweitern möchtest, verlinke bitte das Original-Repo oder nenne die Quelle.

