# Fix mismatched category photos on Products

## The problem

Several categories share the same photo, so the picture doesn't match the title:

- Plumbing, Electrical and MEP Supplies all use the same MEP photo
- Construction Materials and Hardware & Tools share one photo
- Finishing Materials, Waterproofing & Sealants and Paints & Coatings share one photo
- Ceilings & Partitions and Fit-Out Materials share one photo

The same shared photos also appear on the sample product cards.

## What I'll do

Create a distinct, realistic photo for each of the 12 categories, matched to its title:

1. Construction Materials — cement bags, blocks, rebar bundles on site
2. Finishing Materials — tile adhesive, plaster, boards stacked
3. Flooring — large-format porcelain / vinyl plank flooring (keep existing if it fits)
4. Ceilings & Partitions — suspended grid ceiling and stud partitions
5. Hardware & Tools — fixings, ironmongery and power tools
6. Plumbing — PPR/UPVC pipes, valves and fittings
7. Electrical — cable drums, conduit, distribution board
8. HVAC — split/VRF units and ducting (keep existing if it fits)
9. MEP Supplies — brackets, supports, fire-stopping, controls
10. Waterproofing & Sealants — membrane rolls, liquid coating, sealant cartridges
11. Paints & Coatings — paint tins, rollers, tinted shades
12. Fit-Out Materials — laminates, MDF boards, wall cladding, doors

Then point each category and each sample product at the photo that actually matches its title, and check the Products page plus the homepage rail so no two neighbouring items show the same picture.

## Notes

- No layout, wording, filter or navigation changes — only the photos behind existing items.
- Alt text stays descriptive and tied to each title.
- Images will be generated in a consistent, restrained architectural style so the page still looks like one set.

## Technical detail

New JPGs under `src/assets/` (e.g. `cat-electrical.jpg`, `cat-plumbing.jpg`), imports and `image` fields updated in `src/data/catalog.ts` for both `categories` and `products`. Unused old assets removed. Lazy loading and existing card markup unchanged.
