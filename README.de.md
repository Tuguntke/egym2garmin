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
- **Weniger Taps**: Übungen, die die App sicher erkennt, werden kompakt mit einem Häkchen angezeigt statt als volle Bearbeitungszeile — antippen, um sie bei Bedarf wieder zu öffnen. Beim Herunterladen einer FIT-Datei öffnet sich außerdem automatisch die Garmin-Connect-Importseite, und bei mehreren Cardio-Geräten gibt es einen einzigen "Alle Cardio-FIT-Dateien herunterladen"-Button statt einem pro Gerät.
- **Optionales Auto-Download**: "Automatisch herunterladen, wenn alles sicher erkannt wurde" unter Einstellungen aktivieren, und die App lädt die FIT-Datei(en) — inklusive Öffnen des Garmin-Connect-Imports — von selbst herunter, sobald jede Zeile sicher ist und Datum/Zeit eingetragen sind. Standardmäßig aus; ist etwas unsicher, muss weiterhin erst manuell geprüft werden.
- **Installierbare PWA**: funktioniert nach dem ersten Gebrauch vollständig offline (zum Startbildschirm auf Android oder iPhone hinzufügen) und zeigt eine kleine Versionsnummer, damit du immer weißt, welcher Stand aktiv ist.
- **Mehrsprachig**: Englisch (Standard), Deutsch und Niederländisch, jederzeit oben rechts umschaltbar — auch nachdem Screenshots bereits verarbeitet wurden. Die Wahl wird auf dem Gerät gespeichert.
- **Teilen**: Sobald du eine FIT-Datei heruntergeladen hast, erscheinen auf diesem Erfolgsbildschirm ein QR-Code und ein kopierbarer Link zur Live-App, damit du sie anderen eGym-Nutzern in Sekunden weitergeben kannst.
- **Eingebautes Feedback**: nach einem erfolgreichen Download erlauben eine Sternebewertung und ein Kommentarfeld es Testern, Feedback oder Feature-Ideen direkt per E-Mail an den Betreuer zu senden — ohne separates Formular oder Konto. Ein "App-Infos kopieren"-Button fügt Versions-/Browserdetails für Fehlermeldungen hinzu.

## Installation auf dem Handy

Die App ist eine Progressive Web App (PWA) — sie wird direkt aus dem Browser installiert, kein App Store nötig.

**Android:** Live-App-Link in Chrome öffnen → Menü (⋮) → "Zum Startbildschirm hinzufügen".

**iPhone:** Live-App-Link in Safari öffnen → Teilen-Symbol → "Zum Home-Bildschirm".

Nach der Installation öffnet sie sich vollbildschirm wie eine normale App und funktioniert weiter ohne Internetverbindung (die Texterkennungs-Engine wird nach dem ersten Gebrauch zwischengespeichert).

## Nutzung nach einem Training

1. Öffne in der eGym-App dein abgeschlossenes Training und mache Screenshots der Übungsliste (bei Bedarf scrollen und mehrere Screenshots machen — Überlappungen sind kein Problem, Duplikate werden automatisch entfernt). Achte darauf, dass die Kopfzeile mit "X Übungen" und Datum/Zeit auf mindestens einem Screenshot zu sehen sind.
2. Öffne die eGym → Garmin App und tippe auf das Upload-Feld (oder ziehe deine Screenshots hinein), um alle Screenshots dieser Session auszuwählen. Das "?"-Symbol oben rechts zeigt jederzeit eine kurze 3-Schritte-Erinnerung, wie die App funktioniert.
3. Überprüfe die erkannte Tabelle. Datum und Startzeit werden aus dem Screenshot gelesen, lassen sich aber bearbeiten. Zeilen, bei denen sich die App sicher ist, werden kompakt mit einem Häkchen angezeigt — antippen, wenn die zugeordnete Garmin-Übung nicht stimmt. Unsichere Zeilen bleiben offen mit Dropdown zur Auswahl. Wurde nichts erkannt, erscheint automatisch ein Hinweis "Texterkennung funktioniert nicht?".
4. Tippe auf **FIT-Datei erstellen & herunterladen** (einmal für Krafttraining; bei Cardio nutze **Alle Cardio-FIT-Dateien herunterladen**, wenn mehrere Geräte gefunden wurden, sonst den Button je Gerät). Die Garmin-Connect-Importseite öffnet sich dabei automatisch in einem neuen Tab. Ist Auto-Download in den Einstellungen aktiviert, passiert dieser Schritt von selbst, sobald alles sicher erkannt wurde.
5. Wähle dort "Daten importieren" und die gerade heruntergeladene `.fit`-Datei aus. Kein neuer Tab erschienen? Nutze den Button **Garmin Connect Import öffnen**.
6. Fertig — sind Garmin und Strava verknüpft, synchronisiert sich die Aktivität automatisch mit Strava.

## Mit anderen teilen

Sobald du eine FIT-Datei heruntergeladen hast, erscheint unter dem Import-Schritt eine Karte **App teilen** mit einem QR-Code, der auf den Live-App-Link zeigt, sowie dem Link selbst mit einem "Link kopieren"-Button. Zeige den QR-Code einem eGym-Nutzer, oder schicke ihm den Link direkt.

## Feedback

Auf demselben Erfolgsbildschirm gibt es außerdem eine **Feedback**-Karte: bewerte die App mit 1–5 Sternen und/oder schreibe einen Kommentar oder eine Feature-Idee, dann tippe auf **Feedback senden** — es öffnet sich eine vorausgefüllte E-Mail an den Betreuer, es wird nichts automatisch gesammelt. Meldest du einen Fehler, tippe zuerst auf **App-Infos kopieren** und füge das in die E-Mail ein, damit Version, Browser und Sprache enthalten sind.

## Hinweise und Einschränkungen

- Die Satzdauer beim Krafttraining wird geschätzt (Standard 60 Sek. aktiv / 50 Sek. Pause pro Satz, anpassbar unter "Einstellungen") — die eGym-App zeigt keine Zeiten pro Satz an.
- Garmin unterstützt keinen eigenen Aktivitätstitel über das FIT-Dateiformat, Aktivitätsnamen werden von Garmin selbst vergeben (aus Standort oder Tageszeit). Benenne die Aktivität bei Bedarf manuell in Garmin Connect um, wenn "eGym" im Titel stehen soll — das überträgt sich automatisch auf Strava.
- Ändert eGym sein Bildschirmlayout, muss die Erkennung eventuell angepasst werden.
- Getestet gegen echte Garmin-Connect- und Strava-Synchronisationen, sowohl für Kraft- als auch für Cardioaktivitäten.

## Technik

Eine einzige, in sich geschlossene `index.html` (Styles, Logik und ein selbst geschriebener FIT-Binärencoder, verifiziert gegen das offizielle Garmin-FIT-SDK-Profil). Kein Build-Schritt, keine Abhängigkeiten außer Tesseract.js (nur bei Bedarf von einem CDN für die Texterkennung geladen). `manifest.json` und `sw.js` sorgen für das installierbare, offlinefähige PWA-Verhalten. Der QR-Code auf der "Teilen"-Karte ist ein statisches, in die Seite eingebettetes Bild — Teilen funktioniert also auch offline.

Siehe `CHANGELOG.md` für die Versionshistorie (auf Niederländisch geführt).
