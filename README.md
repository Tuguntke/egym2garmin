🇬🇧 English · [🇩🇪 Deutsch](README.de.md) · [🇳🇱 Nederlands](README.nl.md)

# eGym → Garmin

Turn a screenshot of your eGym workout summary into a Garmin Connect activity — no manual data entry, no server, no account needed.

**Live app:** https://tuguntke.github.io/egym2garmin/

## What it does

1. You take screenshots of the "Training details" screen in the eGym app (strength machines and/or cardio equipment like treadmill, bike, elliptical).
2. The app reads the screenshots in your browser using on-device text recognition (OCR) — nothing is uploaded anywhere.
3. It builds a standard `.fit` activity file from the recognized sets, reps, weight, calories, duration and distance.
4. You import that `.fit` file into Garmin Connect. If your Garmin account is linked to Strava, the activity appears there automatically a moment later.

The whole thing runs as a single static HTML page. There is no backend, no login, and no data ever leaves your device except the one-time download of the OCR engine (Tesseract.js, from a public CDN) the first time you use it.

## Features

- **Strength training**: recognizes exercise name, sets, reps, weight (kg) and calories from eGym screenshots, and maps each exercise to the matching official Garmin exercise category (so it shows up by name in Garmin/Strava instead of "Unknown").
- **Cardio machines**: treadmill, bike, and elliptical are recognized separately, each producing its own `.fit` file with per-interval duration and distance.
- **Editable before export**: every recognized value (and the date/time) can be corrected by hand before generating the FIT file, and rows can be added manually if a screenshot wasn't recognized or OCR is unavailable.
- **Fewer taps**: exercises the app recognizes with confidence are shown compact with a checkmark instead of a full editable row — tap one to open it back up if it's wrong. Downloading a FIT file also opens the Garmin Connect import page automatically, and when several cardio machines are found there's a single "Download all cardio FIT files" button instead of one per machine.
- **Optional auto-download**: turn on "Auto-download when everything is recognized with confidence" under Settings and the app downloads the FIT file(s) — and opens Garmin Connect import — on its own as soon as every row is confident and the date/time are filled in. Off by default; anything uncertain still needs a manual check first.
- **Installable PWA**: works fully offline after first use (add it to your home screen on Android or iPhone) and shows a small version tag so you always know which build you're on.
- **Multilingual**: English (default), German and Dutch, switchable from the top-right corner at any time — even after screenshots have already been processed. Your choice is remembered on the device.
- **Share it**: once you've downloaded a FIT file, a QR code and a copyable link to the live app appear on that success screen, so you can hand it to another eGym user in seconds.
- **Feedback built in**: after a successful download, a star rating and a comment box let testers send feedback or feature ideas straight to the maintainer by email — no separate form or account needed. A "copy app info" button adds version/browser details for bug reports.

## Installing on your phone

The app is a Progressive Web App (PWA) — you install it straight from the browser, no app store needed.

**Android:** open the live app link in Chrome → menu (⋮) → "Add to Home screen".

**iPhone:** open the live app link in Safari → Share icon → "Add to Home Screen".

Once installed it opens full-screen like a regular app and keeps working without an internet connection (the OCR engine is cached after its first use).

## Using it after a workout

1. In the eGym app, open your finished training and screenshot the exercise list (scroll and take multiple screenshots if needed — overlapping shots are fine, duplicates are removed automatically). Make sure the exercise count header and the date/time appear on at least one screenshot.
2. Open the eGym → Garmin app and tap the upload area (or drag your screenshots onto it) to select all screenshots from that session. Tap the "?" icon top-right any time for a quick 3-step reminder of how the app works.
3. Check the recognized table. Date and start time are read from the screenshot but can be edited. Rows the app is confident about are shown compact with a checkmark — tap one if the matched Garmin exercise is wrong. Anything uncertain is shown open with a dropdown to pick from. If nothing was recognized, a "text recognition not working?" tip appears automatically.
4. Tap **Create & download FIT file** (once for strength training; for cardio, use **Download all cardio FIT files** if more than one machine was found, or the per-machine button otherwise). The Garmin Connect import page opens automatically in a new tab. Turned on auto-download in Settings? Then this step happens by itself once everything looks confident.
5. In that tab, choose "Import Data" and select the `.fit` file you just downloaded. Didn't get a new tab? Use the **Open Garmin Connect Import** button.
6. Done — if Garmin and Strava are linked, the activity syncs to Strava automatically.

## Sharing it with others

Once you've downloaded a FIT file, a **Share this app** card appears below the import step with a QR code pointing at the live app link, plus the link itself with a "Copy link" button. Show the QR code to a fellow eGym user, or send them the link directly.

## Feedback

That same success screen also shows a **Feedback** card: rate the app 1–5 stars and/or write a comment or feature idea, then tap **Send feedback** — it opens a pre-filled email to the maintainer, nothing is collected automatically. If you're reporting a bug, tap **Copy app info** first and paste it into the email so the version, browser and language are included.

## Notes and limitations

- Set duration for strength training is estimated (default 60s active / 50s rest per set, adjustable under "Settings") — the eGym app doesn't expose per-set timing.
- Garmin does not support a custom activity title via the FIT file format, so activity names are generated by Garmin itself (from location or time of day). Rename the activity manually in Garmin Connect if you want "eGym" in the title — this carries over to Strava automatically.
- If eGym changes its screen layout, recognition may need updating.
- Tested against real Garmin Connect and Strava syncs for both strength and cardio activities.

## Tech

Single self-contained `index.html` (styles, logic and a hand-written FIT binary encoder, verified against the official Garmin FIT SDK profile). No build step, no dependencies beyond Tesseract.js (loaded on demand from a CDN for OCR only). `manifest.json` and `sw.js` provide the installable, offline-capable PWA behavior. The QR code on the Share card is a static image baked into the page, so sharing works offline too.

See `CHANGELOG.md` for the version history.
