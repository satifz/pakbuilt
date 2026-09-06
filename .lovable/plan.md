# Make the logo always show, including in Firefox

## What I checked

The logo image itself is fine: it downloads correctly (a valid 662x373 transparent PNG) from both the preview and the live site, and it renders normally when the site is opened in Firefox here. So this is not a broken file or a broken page.

What you are seeing is the text that a browser shows when it decides not to load a picture. The most likely reasons on your Firefox: a privacy/ad-blocking extension or Firefox's tracking protection blocking the address the logo is served from, or a stale cached failure.

## What to change

1. Serve the logo from the site's own address instead of the separate media address, so blockers and privacy settings treat it as part of the page. Both versions (dark lettering for the white header, light lettering for dark backgrounds) get the same treatment.
2. Add a safety net: if the picture still fails for any reason, the header shows the "PAK BUILT" wordmark as styled text instead of the raw words "PakBuilt logo", so the top-left never looks broken.
3. Do the same for the browser-tab icon so it stays visible too.
4. Re-check the header in Firefox and Chrome, on desktop and mobile widths.

## Also worth trying on your side

Open the site in a Firefox private window, or turn the shield icon (protection) off for this site once. If the logo appears there, an extension or the privacy setting was the cause — the change above is still the right fix so it never happens to visitors.

## Technical notes

- Move the two logo PNGs to same-origin static files under `public/` and reference them from `src/components/site/Logo.tsx` instead of the `/__l5e/assets-v1/...` pointer URLs.
- Add an `onError` state in `Logo.tsx` that swaps the `<img>` for a styled text wordmark (`company.wordmark`) using the existing display font and tokens.
- Keep the existing sizing, hover motion, link behaviour and `alt` text unchanged.
- Verify with Playwright in both Firefox and Chromium that `naturalWidth > 0` for the header logo and no request failures occur.
