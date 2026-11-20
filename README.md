# Kunal Jena — Portfolio

A static portfolio (plain HTML + CSS + JS, no build step) ready for Vercel.

```
kunal-portfolio/
├─ index.html        ← all page content
├─ styles.css        ← design
├─ script.js         ← CONFIG (game + playlist) at the top, then all interactions
├─ assets/
│  ├─ kunal.jpg               ← square portrait (grainy + magic eraser)
│  └─ Kunal_Jena_Resume.pdf
└─ music/            ← put the 4 song MP3s here (see music/README.md)
```

## Things to edit

All content lives in arrays at the top of `script.js`:

- `WORKS`: projects (UI/UX ones appear under Featured Projects; packaging, print and apparel under Graphics Design). Images: `assets/work/<id>.webp` and `<id>-thumb.webp`.
- `ACHIEVEMENTS`, `EXPERIENCE` (details, skills and deliverables tabs) and `INTERESTS`.
- `CONFIG.tracks`: the playlist in the About music card (add MP3s to `/music`).
- `CONFIG.game.embedUrl`: optional web build of the real Aranya game.

## Run locally

Any static server works, e.g.:

```bash
npx serve .
# or
python3 -m http.server 5173
```

## Deploy to Vercel

**Option A — GitHub (recommended)**
1. Push this folder to a new GitHub repo.
2. vercel.com → *Add New → Project* → import the repo.
3. Framework preset: **Other**. Build command: *(empty)*. Output directory: `.` (root).
4. Deploy.

**Option B — CLI**
```bash
npm i -g vercel
cd kunal-portfolio
vercel        # preview
vercel --prod # production
```

## Features
- Clean white layout with a faint dot grid, a centered pill nav (Home, UI/UX, Graphics, Game, Achievements), signature logo, a section rail on the left, a social dock on the right and up/down section buttons.
- Hero with a brush-script name and the grainy square portrait: erase the grain with a magic-eraser cursor and watch the clarity meter fill.
- My Skills cards with generated line art, a tools marquee, Featured Projects (large image + info card), a Graphics Design grid, and a full-size in-page viewer for every work.
- Game Story: a playable forest run inspired by The Last Light of Aranya, with the poster and credits.
- About Me bento (photo, rotating case-study card, location, music player, highlights, work strip), Achievements, Experience cards with Details / Skills / Deliverables tabs, Hobbies & Interests, and a dark starry footer with copy-to-clipboard email.
- Subtle UI sound effects (toggle in the music card), reduced-motion support and a responsive layout down to 360px.
