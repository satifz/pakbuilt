# Point the sitemap and page addresses at www.pakbuilt.com

## What this changes

Today your site's own web address (used by the sitemap, by each page's "canonical" tag, and by the company data Google reads) is still written as the Lovable preview address `pakbuilt-build-pukka.lovable.app`. Google therefore sees two competing addresses for the same pages.

This plan sets one official address everywhere: **https://www.pakbuilt.com**

That choice is confirmed by how your domain already behaves:
- `https://www.pakbuilt.com/robots.txt` and `/sitemap.xml` both serve your site (HTTP 200)
- `https://pakbuilt.com` redirects to `https://www.pakbuilt.com` (HTTP 308), so `www` is the primary form

No visual design, layout, wording, navigation, or functionality changes.

## Steps

1. **One source of truth** — set the site address in `src/lib/seo.ts` to `https://www.pakbuilt.com`. Every helper that builds page links, canonicals and structured data reads from here, so future changes become a one-line edit.

2. **Sitemap** — update the base address in `src/routes/sitemap[.]xml.ts` so all 17 listed pages are published under `https://www.pakbuilt.com/...`.

3. **robots.txt** — update the `Sitemap:` line to `https://www.pakbuilt.com/sitemap.xml`, keeping all existing crawler rules untouched.

4. **Older pages** — seven pages (`/`, `/about`, `/contact`, `/products`, `/projects`, `/facilities-management`, `/why-pakbuilt`) still carry the preview address typed directly into their code. Replace those with the shared helper so their canonical and Open Graph URLs follow the new domain. Newer service pages already use the helper and update automatically.

5. **Company structured data** — in `src/routes/__root.tsx`, the Organization and WebSite entries handed to Google use the preview address for their `url` and logo. Switch both to the shared address (`https://www.pakbuilt.com/pakbuilt-logo.png`). Addresses, phone and email shown to visitors stay exactly as they are.

## What is deliberately left alone

- Head Office and Shop addresses, phone numbers, email
- All page content, images, sections, forms, quote wizard
- The sitemap page list itself (already covers every public page, including the new service pages)
- Any `lastmod` timestamps (none exist, and none will be invented)

## Verification

- Typecheck passes
- Local sitemap output shows only `https://www.pakbuilt.com/...` addresses
- A search across the project finds no remaining preview-domain references
- Sample pages (`/`, `/facilities-management`, `/why-pakbuilt`) show matching canonical and `og:url` on the new domain
- Preview loads with no new console errors

## After this is built

Publish once so the live site at `www.pakbuilt.com` serves the updated sitemap, robots file and canonical tags. Then, in Google Search Console (external, your account), submit `https://www.pakbuilt.com/sitemap.xml` — this step cannot be done from here.
