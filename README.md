# Ivan Rozak — Portfolio

A Next.js portfolio based on the approved **Marquee First** Wonder design. Monochrome interface, full-color project previews, Geist typography, Lenis smooth scrolling, and Motion interactions.

## Run locally

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). Existing blog routes use the Contentful environment variables in your local `.env`.

## Preview and verify

```bash
npm run build:preview
npm run preview
```

Open [127.0.0.1:3100](http://127.0.0.1:3100). This uses `.next-preview` to keep the preview build separate from the development server.

```bash
npm run typecheck
npm run lint
npm run test:e2e
```

The Playwright suite uses the preview build and tests desktop/mobile navigation, search + category filtering, empty-result recovery, scroll reveals, reduced motion, and content without JavaScript. Install a browser once if needed: `npx playwright install chromium`.

## Update projects

Add projects to `lib/data.ts`, and put optimized thumbnails in `public/static/projects/`. `subtitle`, `previewDescription`, `year`, and `role` are optional. Use `previewDescription` for concise homepage copy; the archive shows the full description. Do not add unverified dates or responsibilities.

The homepage selection is ordered by `featuredProjectTitles` in `lib/data.ts`. The archive automatically derives category counts and includes all entries.

## Motion behavior

- Scrolling is native (no smooth-scroll library).
- First section of each page: staggered fade, rise, and heading blur in pure CSS, so it plays before hydration and on client navigation.
- Below the fold: `data-reveal` elements fade and rise as they enter the viewport (`component/portfolio/RevealObserver.tsx`); `data-reveal="content"` animates an element's children so frame lines stay still.
- Content stays visible without JavaScript, and all motion is off for reduced-motion users.
- Project enquiry: shared native dialog from the contact CTA. Collects name, email, project type, description, optional budget and timeline. Continue in email prepares a mailto draft for the visitor to review and send; a copy-brief fallback is included. No website submission or mail-sending backend is configured.

See `PRODUCT.md` and `DESIGN.md` for approved scope and design decisions. Original asset metadata and source notes are in `output/project-assets/`.

## Technology strip

`component/portfolio/TechStack.tsx` owns the eight featured technologies and the complete grouped list. The native details disclosure works with keyboard navigation and without JavaScript. Logos are monochrome and rendered statically.

Icon sources: [React Icons](https://react-icons.github.io/react-icons/), [Simple Icons](https://simpleicons.org/), and the AWS icon from [Font Awesome Free](https://fontawesome.com/license/free), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) and rendered in monochrome.

## Social previews

Sharing metadata uses versioned public PNGs: `/social/portfolio-og-v4.png` (1200×630) and `/social/portfolio-twitter-v4.png` (1200×600), with `https://ivanrozak.com` as the canonical origin. The composition mirrors the homepage hero: the framed dark layout, headline, and availability line. Direct static images avoid runtime font/portrait dependencies for social crawlers.

The shared source in `lib/social-image.tsx` renders through the compatibility endpoints `/opengraph-image` and `/twitter-image`. After changing it, run `npm run build:preview` then `node scripts/export-social-images.mjs .next-preview` and commit the resulting public PNGs. Use a new filename when replacing artwork already cached by social platforms. Metadata defaults live in `lib/social-metadata.ts`; Projects overrides its title, description and URL while retaining the sharing images. Existing WhatsApp previews can remain cached after deployment; test with a newly shared URL (for example `https://ivanrozak.com/?preview=hero-v2`).

Local exported previews are in `output/implementation/opengraph-image.png` and `twitter-image.png`.

## Favicon

`public/favicon.svg` is the source (lowercase i on a dark disc). After changing it, run `node scripts/generate-favicons.mjs` to re-render the PNG, ICO, Apple touch, and manifest icons (needs the Playwright browser), then bump the `?v=` query in `app/layout.tsx` and `app/manifest.ts`.
