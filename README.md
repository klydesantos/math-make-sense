# Kashmira Tutor Site — Vite + React + TS

Entry: `index.html` -> `src/main.tsx` -> `src/App.tsx`
Styles: `src/index.css`
Config: `vite.config.ts` (base './', outDir 'dist'), `tsconfig.json`, `netlify.toml`

## Run
npm install
npm run dev
npm run build

## Netlify
Build command: `npm run build`
Publish directory: `dist`

## QR image — OMITTED initially
Confirmed: QR can be omitted initially. The Payment section shows a placeholder box with:
GoTyme — KRISTIAN KLYDE SANTOS — 09478230647 — ....4687 — InstaPay

To add the real QR later:
1. Save it as `public/qr.png`
2. In `src/App.tsx`, replace the placeholder div in the QR section with:
   <img src="/qr.png" alt="GoTyme QR — KRISTIAN KLYDE SANTOS, 09478230647, ....4687" />

No external image links are used. All other assets are local.

## Rates (public, total only)
Standard: Online / F2F = ₱650/hr total. Group = ₱450/student/hr. 10-hr = ₱6,500 total.
Manager fee (₱150) is never shown to clients — Manager-only view only.
Sheet: https://docs.google.com/spreadsheets/d/17pbKkPcKSNq66kVzbrPtkEHcV--kkyqAlExUcybiGuU/edit?gid=0#gid=0
