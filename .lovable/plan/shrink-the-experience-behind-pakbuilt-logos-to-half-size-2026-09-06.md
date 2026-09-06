# Shrink the "Experience behind PakBuilt" logos to half size

## What will change

Every logo in the experience wall renders about half as tall as it does now, so the
row reads as a quiet, understated strip instead of large banners. UPS-sized marks
(the compact ones) become the reference point, and the wide wordmarks scale down
with them.

Nothing else moves: the label, heading, supporting text, captions, full colour
treatment, hover lift, grid layout (2 columns on phones, 3 on tablet, 6 on desktop),
spacing and the closing line all stay exactly as they are.

## Technical details

One file: `src/components/sections/ExperienceLogos.tsx`

1. Logo frame height (line 28) — halve the box every logo is fitted into:
   `h-16 ... sm:h-20` becomes `h-8 ... sm:h-10`.
2. Image constraint (line 35) — widen the allowed width slightly so the narrower
   marks (UPS, HP, Trowers & Hamlins, Manpower) still sit at the full reduced
   height instead of shrinking further: `max-w-[80%]` becomes `max-w-[90%]`.
3. Vertical rhythm — with shorter tiles, tighten the gap between rows from
   `gap-y-10` to `gap-y-8` so the section does not look sparse.

All twelve logo files are already trimmed to a uniform 160px source height, so a
single height cap scales every mark consistently; no image files are touched.

## Verification

- TypeScript compile passes.
- Playwright screenshots at desktop (1280px), tablet and mobile widths to confirm
  the wall is roughly half as tall, UPS/HP/TH marks remain crisp, and there is no
  horizontal overflow.
- Confirm the caption text under each logo is still readable and the section
  heading/spacing look balanced.

## Note

The published site at pakbuilt.com only receives this change after publishing.
