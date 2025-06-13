### ** Projekttitel und Kurzbeschreibung**

> DnD Companion App_  
> **Kurzbeschreibung**:  
> Eine Webanwendung zur Erstellung, Verwaltung und Darstellung von Charakteren aus „Dungeons & Dragons“. Spieler können Charaktere inklusive Klasse, Level und Zaubern erstellen. Zudem können Notizen verwaltet werden, und eine Detailansicht bietet Zauberbeschreibungen.

---

### ** Ziel des Projekts**

> Das Ziel dieser Anwendung ist es, DnD-Spielerinnen und -Spielern ein praktisches Werkzeug an die Hand zu geben, mit dem sie ihre Charaktere verwalten und im Spielverlauf schnell auf Zauber und individuelle Notizen zugreifen können.
> Zudem legt dies den ersten Baustein dafür, die Spielerseitige Kommunikation zwischen ihm und dem Spielleiter zu ermöglichen. 


---

### ** Technologiestack**

- **Frontend:** React (Vite + React Router)
    
- **Speicherung:** `localStorage` des Browsers
    
- **Backend/API:** externe API für Zauberdaten (`https://www.dnd5eapi.co`)
    
- **Sprachen:** JavaScript, HTML, CSS (optional am Ende)
    
- **Bibliotheken:** ggf. `@3d-dice/dice-box` für Würfelfunktion (experimentell)
    

---

### **Funktionsübersicht**

- **Charakter erstellen:**
    
    - Eingabe von Name, Klasse, Level
        
    - Auswahl bis zu 5 Zaubern (nur bei Magiefähigen Klassen)
	
	- Zauber sind nach Level sortiert

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

### **Benutzeroberfläche (UI-Konzept)**

> Die Oberfläche ist in mehrere Seiten unterteilt:

- **Startseite:** Charakterauswahl
    
- **Charaktererstellung:** Eingabe und Zauberauswahl
    
- **Charakteransicht:** Übersicht mit Zaubern und Notizfeld
    

Ein einfaches, auf Klarheit ausgelegtes Layout. CSS wird bei Bedarf am Ende ergänzt.

---

### ** Besonderheiten / Herausforderungen**

- **Doppelte Namen verhindern:** eigenes Namensregister mit Prüfung
    
- **Zauberlogik nach Klasse und Level:** dynamisch durch API-Daten
    
- **Offlinefähig:** Alles funktioniert ohne Backend durch `localStorage`
    
- **Fehlermeldungen und Zustandsprüfung:** einfache Alerts
    

---

### ** Tests / Validierung**

- Manuelle Tests der wichtigsten Anwendungsfälle:
    
    - Erstellen und Speichern eines Charakters
        
    - Laden eines bestehenden Charakters
        
    - Anzeigen und Ausblenden von Zauberbeschreibungen
        
    - Speicherung und Laden der Notizen
        

---

### ** Reflexion & Ausblick**

> **Was gut lief:**

- Dynamisches Zusammenspiel von Klasse & Zaubern
    
- Lokale Datenspeicherung ohne Backend
    
- Intuitive Komponententrennung
    

> **Was verbessert werden könnte:**

- Styling (CSS fehlt teils noch)
    
- Zauber nachträglich bearbeiten / löschen
    
- Würfelkomponente final integrieren
    

> **Mögliche Erweiterungen:**

- Export/Import von Charakteren
    
- Cloudspeicherung (Firebase etc.)
    
- Mehrsprachigkeit
    
- Kampagnenverwaltung / Party-Modus
    

