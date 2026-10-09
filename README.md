# دليل معان — Dalil Maan

Interactive student guide to Ma'an and Al-Hussein Bin Talal University (React + Vite).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Structure
- `src/data/places.js` — the places & categories (unchanged from the original project)
- `src/data/content.js` — page copy (moved verbatim from the old App.jsx) + a few new UI strings
- `src/data/categoryMeta.js` — icon/colour per category (visual only)
- `src/styles/tokens.css` — the design system: colours, type scale, spacing, radii, shadows, motion
- `src/components/` — Hero, Toolbar (search + filters), Places (card, grid, dialog, empty state), Layout, ui primitives
- `src/legacy/` — the earlier, unused component set, kept untouched for reference (not imported)
