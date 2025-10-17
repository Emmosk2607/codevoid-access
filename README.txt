CODEVOID // Minimal Ritual Site
=================================

Was ist das?
------------
Eine EINSEITIGE, SCHWARZE Landing Page für dein QR‑Ziel mit mystischer Wirkung.
Standard: "ENTRY CODE: CLASSIFIED". Ab einem *Revealdatum* schaltet die Seite automatisch auf
"ACCESS: GRANTED" und zeigt einen Button (z. B. zu Instagram, einem geheimen Post etc.).

Dateien
-------
- index.html  -> die Seite
- styles.css  -> Look (schwarz, Gold‑Akzent, "V"-Symbol)
- script.js   -> Logik für den Countdown / Reveal
- README.txt  -> diese Anleitung

Einstellungen ändern
--------------------
Öffne **index.html** und suche nach:

  window.CODEVOID_SETTINGS = {
    revealIso: "2025-10-20T20:00:00",
    revealUrl: "https://instagram.com/code.void",
    timezone: "Europe/Berlin"
  };

- **revealIso**: Zeitpunkt, ab dem "ACCESS: GRANTED" angezeigt wird (ISO‑Format).
  Beispiel: 2025-10-24T20:00:00
- **revealUrl**: Link, der nach der Freischaltung angezeigt wird (z. B. Instagram‑Post).
- **timezone**: belassen (Europe/Berlin).

QR‑Code nutzen
--------------
- Erzeuge zunächst einen QR‑Code auf den Link deiner **gehosteten Seite** (siehe unten).
- Wenn du flexibel bleiben willst, nutze einen **dynamischen QR‑Dienst** (z. B. bit.ly, short.io, qr-code-generator.com mit Weiterleitung).
  Dann kannst du den Ziel‑Link später ändern (z. B. von "CLASSIFIED" auf "ACCESS GRANTED").

Deployment (3 Wege)
-------------------
1) **GitHub Pages (kostenlos)**
   - GitHub‑Account anlegen
   - Neues Repo: z. B. `codevoid-access`
   - Dateien hochladen (index.html, styles.css, script.js)
   - In den Repo‑Settings → Pages → Branch: main, Root auswählen
   - URL wird angezeigt (z. B. https://deinname.github.io/codevoid-access)

2) **Netlify (super einfach)**
   - netlify.app → "New site from git" → GitHub Repo auswählen
   - Build = *keiner* (statische Seite), Publish dir = Repo‑Root
   - URL sofort nutzbar (z. B. https://codevoid-access.netlify.app)

3) **Vercel**
   - vercel.com → Import GitHub Repo
   - Framework = "Other"
   - Deploy → URL sofort aktiv

Recht & Praxis
--------------
- Kein Tracking, kein Cookiebanner nötig (nur statische Seite).
- QR‑Codes auf öffentlichem Grund: Bitte **nur temporäre Kreidespray‑Markierungen** und keine verbotenen Orte.
- Sound/Autoplay vermeiden (unnötig & nervig auf Mobilgeräten).

Design anpassen
---------------
- Farben: in **styles.css** (Gold = --accent).
- Symbolgröße: .v-symbol Breite/Höhe.
- Typo: System‑Fonts, auf Wunsch eigene Schrift einbinden.

Viel Spaß beim Öffnen des Tores.
— CODEVOID
