# Portfolio icon assets

Canonical source: `public/main_icon.webp` (unchanged).
Favicon master: `output/imagegen/favicon-master.png`, edited with built-in ImageGen from that source.
Prompt: `output/imagegen/favicon-prompt.txt`.

The opaque white favicon master makes the black monogram legible on light and dark browser chrome. `prepare_favicons.py` creates PNG, multi-size ICO, Apple touch and maskable PWA assets from the master. Requires Pillow only when regenerating these files, not for running/building the website.

Updated assets:
- `public/favicon.ico`: 16, 32, 48, 64, 128 and 256 pixel entries.
- `public/favicon-16x16.png`, `public/favicon-32x32.png`.
- `public/apple-touch-icon.png`: 180px.
- `public/web-app-manifest-192x192.png`, `public/web-app-manifest-512x512.png`: padded for the maskable safe zone.

Removed automatic icon files `app/icon0.svg`, `app/icon1.png`, `app/favicon.ico`, and `app/apple-icon.png` so file-based metadata cannot override the intended metadata. All current icon assets live under public/. Layout metadata includes the canonical WebP and PNG/ICO fallbacks; Open Graph and Twitter now use dedicated landscape sharing cards at /opengraph-image and /twitter-image. Manifest/shortcut/fallback URLs are versioned to refresh old cached icons.
