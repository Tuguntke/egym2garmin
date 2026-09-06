[🇬🇧 English](README.md) · 🇩🇪 Deutsch · [🇳🇱 Nederlands](README.nl.md)

# eGym → Garmin

Verwandelt einen Screenshot deiner eGym-Trainingszusammenfassung in eine Garmin-Connect-Aktivität — keine manuelle Dateneingabe, kein Server, kein Konto nötig.

**Live-App:** https://tuguntke.github.io/egym2garmin/

## Was die App macht

1. Du machst Screenshots vom Bildschirm "Trainingsdetails" in der eGym-App (Kraftgeräte und/oder Cardiogeräte wie Laufband, Fahrrad, Crosstrainer).
2. Die App liest die Screenshots direkt in deinem Browser mit Texterkennung (OCR) — es wird nichts irgendwohin hochgeladen.
3. Daraus wird eine Standard-`.fit`-Aktivitätsdatei erstellt, mit den erkannten Sätzen, Wiederholungen, Gewicht, Kalorien, Dauer und Distanz.
4. Du importierst diese `.fit`-Datei in Garmin Connect. Ist dein Garmin-Konto mit Strava verknüpft, erscheint die Aktivität kurz danach automatisch dort.

Das Ganze läuft als eine einzige statische HTML-Seite. Es gibt kein Backend, kein Login, und es verlassen keine Daten dein Gerät — außer dem einmaligen Download der Texterkennungs-Engine (Tesseract.js, von einem öffentlichen CDN) beim ersten Gebrauch.

## Funktionen

- **Krafttraining**: erkennt Übungsname, Sätze, Wiederholungen, Gewicht (kg) und Kalorien aus eGym-Screenshots und ordnet jede Übung der passenden offiziellen Garmin-Übungskategorie zu (damit sie in Garmin/Strava namentlich erscheint statt als "Unbekannt").
- **Cardiogeräte**: Laufband, Fahrrad und Crosstrainer werden separat erkannt, jedes mit einer eigenen `.fit`-Datei inklusive Dauer und Distanz pro Intervall.
- **Vor dem Export bearbeitbar**: jeder erkannte Wert (und Datum/Zeit) lässt sich vor dem Erstellen der FIT-Datei von Hand korrigieren; fehlt ein Screenshot oder funktioniert die Texterkennung nicht, können Zeilen auch manuell hinzugefügt werden.
- **Installierbare PWA**: funktioniert nach dem ersten Gebrauch vollständig offline (zum Startbildschirm auf Android oder iPhone hinzufügen) und zeigt eine kleine Versionsnummer, damit du immer weißt, welcher Stand aktiv ist.
- **Mehrsprachig**: Englisch (Standard), Deutsch und Niederländisch, jederzeit oben rechts umschaltbar — auch nachdem Screenshots bereits verarbeitet wurden. Die Wahl wird auf dem Gerät gespeichert.
- **Teilen**: eine "App teilen"-Karte zeigt einen QR-Code und einen kopierbaren Link zur Live-App, damit du sie anderen eGym-Nutzern in Sekunden weitergeben kannst.
- **Eingebautes Feedback**: eine Sternebewertung und ein Kommentarfeld erlauben es Testern, Feedback oder Feature-Ideen direkt per E-Mail an den Betreuer zu senden — ohne separates Formular oder Konto. Ein "App-Infos kopieren"-Button fügt Versions-/Browserdetails für Fehlermeldungen hinzu.

## Installation auf dem Handy

Die App ist eine Progressive Web App (PWA) — sie wird direkt aus dem Browser installiert, kein App Store nötig.

**Android:** Live-App-Link in Chrome öffnen → Menü (⋮) → "Zum Startbildschirm hinzufügen".

**iPhone:** Live-App-Link in Safari öffnen → Teilen-Symbol → "Zum Home-Bildschirm".

Nach der Installation öffnet sie sich vollbildschirm wie eine normale App und funktioniert weiter ohne Internetverbindung (die Texterkennungs-Engine wird nach dem ersten Gebrauch zwischengespeichert).

## Nutzung nach einem Training

1. Öffne in der eGym-App dein abgeschlossenes Training und mache Screenshots der Übungsliste (bei Bedarf scrollen und mehrere Screenshots machen — Überlappungen sind kein Problem, Duplikate werden automatisch entfernt). Achte darauf, dass die Kopfzeile mit "X Übungen" und Datum/Zeit auf mindestens einem Screenshot zu sehen sind.
2. Öffne die eGym → Garmin App und tippe auf **Screenshots auswählen**, um alle Screenshots dieser Session auszuwählen.
3. Überprüfe die erkannte Tabelle. Datum und Startzeit werden aus dem Screenshot gelesen, lassen sich aber bearbeiten. Jede Zeile zeigt zudem die zugeordnete Garmin-Übung — stimmt sie nicht, wähle im Dropdown eine andere.
4. Tippe auf **FIT-Datei erstellen & herunterladen** (einmal für Krafttraining, und separat je Cardiogerät, falls zutreffend).
5. Tippe auf **Garmin Connect Import öffnen**, wähle "Daten importieren" und die gerade heruntergeladene `.fit`-Datei aus.
6. Fertig — sind Garmin und Strava verknüpft, synchronisiert sich die Aktivität automatisch mit Strava.

## Mit anderen teilen

Scrolle in der App ganz nach unten zur Karte **App teilen**: Sie zeigt einen QR-Code, der auf den Live-App-Link zeigt, sowie den Link selbst mit einem "Link kopieren"-Button. Zeige den QR-Code einem eGym-Nutzer, oder schicke ihm den Link direkt.

## Feedback

Ganz unten in der App gibt es eine **Feedback**-Karte: bewerte die App mit 1–5 Sternen und/oder schreibe einen Kommentar oder eine Feature-Idee, dann tippe auf **Feedback senden** — es öffnet sich eine vorausgefüllte E-Mail an den Betreuer, es wird nichts automatisch gesammelt. Meldest du einen Fehler, tippe zuerst auf **App-Infos kopieren** und füge das in die E-Mail ein, damit Version, Browser und Sprache enthalten sind.

## Hinweise und Einschränkungen

- Die Satzdauer beim Krafttraining wird geschätzt (Standard 60 Sek. aktiv / 50 Sek. Pause pro Satz, anpassbar unter "Einstellungen") — die eGym-App zeigt keine Zeiten pro Satz an.
- Garmin unterstützt keinen eigenen Aktivitätstitel über das FIT-Dateiformat, Aktivitätsnamen werden von Garmin selbst vergeben (aus Standort oder Tageszeit). Benenne die Aktivität bei Bedarf manuell in Garmin Connect um, wenn "eGym" im Titel stehen soll — das überträgt sich automatisch auf Strava.
- Ändert eGym sein Bildschirmlayout, muss die Erkennung eventuell angepasst werden.
- Getestet gegen echte Garmin-Connect- und Strava-Synchronisationen, sowohl für Kraft- als auch für Cardioaktivitäten.

## Technik

Eine einzige, in sich geschlossene `index.html` (Styles, Logik und ein selbst geschriebener FIT-Binärencoder, verifiziert gegen das offizielle Garmin-FIT-SDK-Profil). Kein Build-Schritt, keine Abhängigkeiten außer Tesseract.js (nur bei Bedarf von einem CDN für die Texterkennung geladen). `manifest.json` und `sw.js` sorgen für das installierbare, offlinefähige PWA-Verhalten. Der QR-Code auf der "Teilen"-Karte ist ein statisches, in die Seite eingebettetes Bild — Teilen funktioniert also auch offline.

Siehe `CHANGELOG.md` für die Versionshistorie (auf Niederländisch geführt).
