# Remove sample listings from the Products page

## What changes

Everything under the "Sample listings" block on `/products` disappears. The rest of the page — banner, search box, category filter chips, clear-filters control, category tiles, "no match" message, and the closing BOQ banner — stays exactly where it is, with the same spacing and styling.

Specifically removed from the Products page:
- The "Sample listings" heading with its "Example products in this selection" title and supporting line.
- The grid of twelve demo product cards (Ordinary Portland Cement, Deformed Steel Bar, Large Format Porcelain Tile, and the rest).
- The "· 12 sample listings" part of the small count line above the category tiles, so that line reads only "12 categories" (and updates correctly when filtering).

Nothing is added, renamed, or restyled. Category names, photos, blurbs, and subcategory tags are untouched.

## What stays in place

- Search still filters the category tiles by name, description, and subcategory.
- Category filter chips still work and still update the address bar.
- The Home page keeps its existing sections as they are today.
- All other pages, navigation, footer, forms, SEO metadata, sitemap, and structured data are unchanged.

## Technical details

- `src/routes/products.tsx`: delete the `visibleProducts` memo, the `products` import, the `ProductCard` import, the `SectionHeading` import, and the whole "Sample listings" block plus the listings portion of the count line. Keep the empty-state paragraph but change its condition to depend only on the visible category count, so a search with no matching categories still shows the helpful message.
- `src/components/sections/FeaturedProducts.tsx` and the demo entries in `src/data/catalog.ts` are left untouched. The card component and demo data remain available for when real SKUs exist, but nothing on the Products page renders them.

## Verification

- TypeScript check passes with no unused-import errors on the Products page.
- `/products` returns HTTP 200 and shows no product cards or "Sample listings" text, at desktop and mobile widths.
- Search and category filtering still behave correctly, including a no-match search.
- No new console errors or failed requests.
