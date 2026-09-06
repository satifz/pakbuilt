# Add Head Office address alongside the shop

PakBuilt now has two locations, and both should be shown clearly labelled:

- **Head Office** — Office # 2, Plot # 2/15, Sheet # K-28, Firdous Co-operative Housing Society, Nazimabad, Karachi, Pakistan
- **Shop** — Shop #1535-A, Phool Gali, New Golimar, Karachi, Pakistan

## What changes

1. **Contact page** — the "Office" box becomes two stacked blocks: "Head Office" first, then "Shop", each with its full address. Email lines stay as they are.
2. **Footer** — the single address line becomes two short labelled entries (Head Office, Shop), keeping the existing pin icon and spacing.
3. **Contact details list** (used on contact and other pages) — the "Location" item shows "Nazimabad & New Golimar, Karachi" so it stays a single short line.
4. **About page** — the sentence "Based in New Golimar, Karachi" becomes "Based in Karachi" so it isn't tied to one location.
5. **Search-engine business data** on the homepage uses the head office as the official street address.

Nothing else on the site changes — no layout, styling, navigation or content changes elsewhere.

## Technical notes

- `src/data/company.ts`: replace the single `address` object with `headOffice` and `shop` entries (each with `label`, `line1`, `line2`, `short`), plus a combined `locationShort` for the compact list item.
- Update consumers: `src/routes/contact.tsx`, `src/components/site/Footer.tsx`, `src/components/sections/Blocks.tsx` (`contactItems` Location value), `src/routes/about.tsx`, and the `LocalBusiness` JSON-LD in `src/routes/index.tsx`.
- Verify with a typecheck and a quick desktop/mobile render check of the contact page and footer for overflow.
