# Firo

## Beschreibung  
Firo ermöglicht es mehreren Benutzern, in Echtzeit gemeinsam an einem interaktiven Board zu arbeiten. Nutzer können ihre Ideen teilen und auf einem kollaborativen Whiteboard visualisieren. Alle Änderungen und Inhalte werden sofort unter allen Teilnehmern synchronisiert, sodass eine nahtlose und effiziente Zusammenarbeit gewährleistet ist.

## Anforderungen  
- Nutzer können Boards erstellen und diese mit einer ID sowie optional einem Passwort versehen.
- Andere Nutzer können dem Board beitreten, wenn sie die ID und das Passwort kennen.
- Nutzer können auf dem Whiteboard zeichnen.
- Alle Änderungen werden in Echtzeit an alle Nutzer übertragen und angezeigt.
- Nutzer haben die Möglichkeit, die Farbe und Strichstärke anzupassen sowie das Whiteboard zu leeren.
- Nutzer können den Raum jederzeit verlassen und später wieder beitreten.
- Wenn alle Nutzer das Board verlassen, wird es gelöscht und ist nicht mehr zugänglich.

## Verwendung  
1. Ein Nutzer erstellt einen Raum, vergibt eine ID und optional ein Passwort, und klickt auf „Create“.
2. Ein anderer Nutzer gibt die ID ein und klickt auf „Join“. Falls ein Passwort festgelegt wurde, muss dieses ebenfalls eingegeben werden.
3. Nun können die Nutzer direkt mit dem Zeichnen auf dem Whiteboard beginnen.

## Setup  

Wechsel in das Frontend-Verzeichnis und führe die folgenden Befehle aus:  
   ```bash  
   npm install  
   ng serve
   ```
 Die Webseite sollte nun unter http://localhost:4200 erreichbar sein.

Wechsel in das Backend-Verzeichnis und führe die folgenden Befehle aus:
```bash
npm install  
node server.js  
```
In der Konsole sollte nun die Meldung „Server läuft auf http://localhost:3000“ erscheinen.