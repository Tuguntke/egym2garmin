[🇬🇧 English](README.md) · [🇩🇪 Deutsch](README.de.md) · 🇳🇱 Nederlands

# eGym → Garmin

Zet een screenshot van je eGym-trainingssamenvatting om in een Garmin Connect-activiteit — geen handmatige invoer, geen server, geen account nodig.

**Live app:** https://tuguntke.github.io/egym2garmin/

## Wat de app doet

1. Je maakt screenshots van het scherm "Details van de training" in de eGym-app (krachtapparaten en/of cardio-apparaten zoals loopband, fiets, crosstrainer).
2. De app leest de screenshots in je eigen browser met tekstherkenning (OCR) — er wordt niets ergens naartoe geüpload.
3. Daaruit wordt een standaard `.fit`-activiteitenbestand gemaakt, met de herkende sets, herhalingen, gewicht, calorieën, duur en afstand.
4. Je importeert dat `.fit`-bestand in Garmin Connect. Is je Garmin-account gekoppeld aan Strava, dan verschijnt de activiteit daarna automatisch ook daar.

Het geheel draait als één statische HTML-pagina. Er is geen backend, geen inlog, en er verlaat geen data je toestel — behalve de eenmalige download van de OCR-engine (Tesseract.js, van een publieke CDN) bij het eerste gebruik.

## Functies

- **Krachttraining**: herkent oefeningnaam, sets, herhalingen, gewicht (kg) en calorieën uit eGym-screenshots, en koppelt elke oefening aan de bijpassende officiële Garmin-oefeningcategorie (zodat hij bij naam in Garmin/Strava verschijnt in plaats van "Onbekend").
- **Cardio-apparaten**: loopband, fiets en crosstrainer worden apart herkend, elk met een eigen `.fit`-bestand inclusief duur en afstand per interval.
- **Bewerkbaar vóór export**: elke herkende waarde (en datum/tijd) kan handmatig worden gecorrigeerd voordat het FIT-bestand wordt gemaakt, en regels kunnen ook handmatig worden toegevoegd als een screenshot niet herkend werd of OCR niet beschikbaar is.
- **Installeerbare PWA**: werkt na eerste gebruik volledig offline (zet 'm op je beginscherm op Android of iPhone) en toont een klein versienummer zodat je altijd weet welke build actief is.
- **Meertalig**: Engels (standaard), Duits en Nederlands, op elk moment te wisselen rechtsboven — ook nadat screenshots al verwerkt zijn. De keuze wordt onthouden op het toestel.
- **Delen**: een "Deel deze app"-kaart toont een QR-code en een kopieerbare link naar de live app, zodat je 'm in een paar seconden aan een andere eGym-gebruiker kunt doorgeven.
- **Ingebouwde feedback**: een sterrenbeoordeling en een opmerkingenveld laten testers feedback of featuretips rechtstreeks per e-mail naar de beheerder sturen — zonder apart formulier of account. Een knop "App-info kopiëren" voegt versie-/browserdetails toe voor bugmeldingen.

## Installeren op je telefoon

De app is een Progressive Web App (PWA) — je installeert 'm rechtstreeks vanuit de browser, geen appstore nodig.

**Android:** open de live app-link in Chrome → menu (⋮) → "Toevoegen aan startscherm".

**iPhone:** open de live app-link in Safari → deel-icoon → "Zet op beginscherm".

Eenmaal geïnstalleerd opent hij volledig scherm zoals een gewone app en blijft werken zonder internetverbinding (de OCR-engine wordt na het eerste gebruik gecached).

## Gebruik na een training

1. Open in de eGym-app je afgeronde training en maak screenshots van de oefeningenlijst (scroll en maak meerdere screenshots indien nodig — overlap is geen probleem, duplicaten worden automatisch verwijderd). Zorg dat de kop met "X Oefeningen" en de datum/tijd op minstens één screenshot te zien zijn.
2. Open de eGym → Garmin app en tik op **Screenshots kiezen**, en selecteer alle screenshots van die sessie.
3. Controleer de herkende tabel. Datum en aanvangstijd zijn uit de screenshot gelezen, maar aanpasbaar. Elke regel toont ook de Garmin-oefening waaraan hij gekoppeld wordt — klopt die niet, kies dan een andere in het keuzemenu.
4. Tik op **Maak & download FIT-bestand** (eenmaal voor krachttraining, en apart per cardio-apparaat indien van toepassing).
5. Tik op **Open Garmin Connect Import**, kies "Gegevens importeren" en selecteer het zojuist gedownloade `.fit`-bestand.
6. Klaar — zijn Garmin en Strava gekoppeld, dan synchroniseert de activiteit automatisch met Strava.

## Delen met anderen

Scroll in de app helemaal naar beneden naar de kaart **Deel deze app**: die toont een QR-code die naar de live app-link wijst, plus de link zelf met een "Link kopiëren"-knop. Laat de QR-code zien aan een andere eGym-gebruiker, of stuur de link rechtstreeks door.

## Feedback

Onderaan de app staat een **Feedback**-kaart: beoordeel de app met 1–5 sterren en/of schrijf een opmerking of featuretip, tik daarna op **Feedback versturen** — dat opent een vooringevulde e-mail naar de beheerder, er wordt niets automatisch verzameld. Meld je een bug, tik dan eerst op **App-info kopiëren** en plak dat in de e-mail, zodat versie, browser en taal meegestuurd worden.

## Aandachtspunten en beperkingen

- De setduur bij krachttraining wordt geschat (standaard 60 sec actief / 50 sec rust per set, aan te passen onder "Instellingen") — de eGym-app toont geen tijden per set.
- Garmin ondersteunt geen eigen activiteitstitel via het FIT-bestandsformaat; activiteitnamen worden door Garmin zelf bepaald (uit locatie of dagdeel). Hernoem de activiteit handmatig in Garmin Connect als je "eGym" in de titel wilt — dat gaat automatisch mee naar Strava.
- Verandert eGym de schermindeling, dan moet de herkenning mogelijk worden bijgewerkt.
- Getest tegen echte Garmin Connect- en Strava-syncs, voor zowel kracht- als cardio-activiteiten.

## Techniek

Eén op zichzelf staand `index.html`-bestand (styling, logica en een zelfgeschreven FIT-binaire encoder, geverifieerd tegen het officiële Garmin FIT SDK-profiel). Geen build-stap, geen afhankelijkheden buiten Tesseract.js (alleen bij gebruik geladen van een CDN, uitsluitend voor OCR). `manifest.json` en `sw.js` zorgen voor het installeerbare, offline werkende PWA-gedrag. De QR-code op de deel-kaart is een statische, in de pagina ingebakken afbeelding — delen werkt dus ook offline.

Zie `CHANGELOG.md` voor de volledige versiegeschiedenis.
