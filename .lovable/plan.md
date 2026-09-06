# Make the experience logos look the same size

## What's wrong now

Every logo is squeezed into the same short box and also limited to 90% of the
column width. Because the marks have very different shapes, that produces uneven
results:

- Wide wordmarks (Clarendon Parker, Honeywell, Cushman & Wakefield) hit the width
  limit first, so they end up much shorter than the box allows and read as small.
- Compact marks (UPS, HP, Trowers & Hamlins) fill the full height and read as big.
- MACRO has extra empty space baked into its image file, so it renders smaller
  than everything else even at the same box size.

## What will change

Logos will be balanced **optically** — each one sized so it looks the same visual
weight as its neighbours, rather than all forced through one identical box.

1. Give each logo a taller, full-width frame and drop the 90% width cap, so wide
   wordmarks are sized by width and compact marks by height.
2. Add a per-logo size setting (a simple percentage) so individual marks can be
   nudged until the row looks even. Compact square marks get a smaller share,
   wide wordmarks a larger one.
3. Trim the empty space out of the MACRO image so it matches the other twelve.
4. Keep everything else exactly as-is: label, heading, supporting text, captions,
   full colour, hover lift, 2/3/6 column grid, spacing, closing line.

## Technical details

- `public/experience/macro.png`: re-trim to the same 160px-tall, edge-to-edge
  format as the other files (currently ~68px of content inside a 160px canvas).
- `src/data/experience-orgs.ts`: add optional `widthPercent?: number` per org
  (default 100) used as the rendered width share of the tile.
- `src/components/sections/ExperienceLogos.tsx`: frame becomes a fixed-height
  band (about `h-12 sm:h-14`) with `w-full`; image uses
  `max-h-full object-contain` plus an inline `width: <widthPercent>%`. Remove the
  blanket `max-w-[90%]`.
- Starting values: wide wordmarks 100%, mid-width marks ~80%, compact/square
  marks (UPS, HP, TH, Manpower, Key) ~34-45% — tuned from measured aspect ratios
  so every mark lands at roughly equal optical area.
- UPS specifically: its shield sits in a 156x160 canvas but the artwork reads
  smaller than HP's 160x160 circle, so UPS gets a slightly larger share than HP
  and both are re-checked side by side in the screenshots.

## Verification

- TypeScript compile.
- Playwright screenshots at desktop, tablet and mobile widths, plus measuring
  each rendered logo's box so heights/areas are consistent and nothing overflows.

## Note

pakbuilt.com only shows this after publishing.
