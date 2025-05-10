# Firo – Kollaboratives Whiteboard

## Beschreibung  
**Firo** ist eine Echtzeit-Collaboration-Anwendung, die es mehreren Nutzern ermöglicht, gemeinsam an einem interaktiven Whiteboard zu arbeiten. Alle Änderungen – wie Zeichnungen, Farben oder Löschungen – werden sofort mit allen Teilnehmern im Raum synchronisiert. Damit eignet sich Firo ideal für Brainstormings, Workshops oder gemeinsames Skizzieren in Remote-Teams.


## Funktionen & Anforderungen

- Benutzer können neue Boards (Räume) erstellen, inklusive eindeutiger ID und optionalem Passwort.
- Andere Nutzer können bestehenden Boards beitreten – mit korrekter ID und ggf. Passwort.
- Jeder Nutzer kann auf dem Whiteboard zeichnen.
- Alle Zeichenaktionen werden in **Echtzeit** an alle Teilnehmer übertragen.
- Werkzeuge zur Anpassung von **Farbe** und **Strichstärke** stehen zur Verfügung.
- Es besteht die Möglichkeit, das gesamte Whiteboard mit einem Klick zu leeren.
- Nutzer können Räume jederzeit verlassen und später wieder beitreten.
- Ein Raum wird automatisch gelöscht, sobald alle Teilnehmer ihn verlassen haben.


## Verwendung

1. Ein Nutzer klickt auf „Create“, vergibt eine Raum-ID (und optional ein Passwort), um einen neuen Raum zu erstellen.
2. Weitere Nutzer können über „Join“ einem bestehenden Raum beitreten, indem sie die ID (und ggf. das Passwort) eingeben.
3. Auf dem Whiteboard können alle Teilnehmer zeichnen, die Farbe und Pinselgröße anpassen sowie das gesamte Canvas löschen.
4. Alle Änderungen werden in Echtzeit an alle Nutzer im Raum übertragen.


## Technischer Aufbau

Firo besteht aus zwei Hauptkomponenten:

### Backend
Das Backend basiert auf **Node.js** und verwendet **WebSockets**, um eine schnelle, bidirektionale Kommunikation zwischen Client und Server zu ermöglichen. Die zentrale Datei ist:

- `server.js` – verwaltet Verbindungen, Raum-IDs und das Weiterleiten von Events zwischen Clients.

### Frontend
Das Frontend ist mit **Angular** entwickelt und befindet sich unter `src/app/pages/canvas`.

Wichtige Komponenten:

- `canvas.component.ts` – Hauptkomponente für Zeichenaktionen und Benutzerinteraktionen.
- `socket.service.ts` – verwaltet alle WebSocket-Kommunikationen mit dem Backend.


## Projekt starten

### Frontend starten
   ```bash
   cd frontend
   npm install
   ng serve
   ```

### Backend starten 
  ```bash
  cd backedn
  npm install
  node server.js
  ```
