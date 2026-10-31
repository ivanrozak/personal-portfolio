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

The Playwright suite uses the preview build and tests desktop/mobile navigation, search + category filtering, empty-result recovery, keyboard accordion controls, per-frame marquee direction/continuity, rapid hover, loop seams, hover/focus/manual pause, native touch swipe, reduced motion, and content without JavaScript. Install a browser once if needed: `npx playwright install chromium`.

## Update projects

Add projects to `lib/data.ts`, and put optimized thumbnails in `public/static/projects/`. `subtitle`, `previewDescription`, `year`, and `role` are optional. Use `previewDescription` for concise homepage copy; the archive shows the full description. Do not add unverified dates or responsibilities.

The homepage selection is ordered by `featuredNames` in `app/page.tsx`. The archive automatically derives category counts and includes all entries.

## Motion behavior

- Desktop: two looping tracks, 20px/s and 16px/s, driven by persistent Motion values. Hover or keyboard focus on a project card smoothly decelerates both over 180ms; resume ramps up over 300ms. Track position is retained, with no spring or thumbnail zoom. Headings, empty space, and archive controls keep motion running; the explicit pause button persists until resumed.
- Mobile/touch: native horizontal swipe with scroll snapping, arrow controls, and visible descriptions.
- Reduced motion: manual exploration with no autoplay, blur reveal, parallax, or Lenis smoothing.
- Headings: staggered blur + vertical reveal. Content remains readable before JavaScript loads.
- Project enquiry: shared native dialog from the hero, navigation, services, and contact CTA. Collects name, email, project type, description, optional budget and timeline. Continue in email prepares a mailto draft for the visitor to review and send; a copy-brief fallback is included. No website submission or mail-sending backend is configured.

Implementation references: [Lenis](https://github.com/darkroomengineering/lenis), [Motion useAnimate](https://motion.dev/docs/react-use-animate).

See `PRODUCT.md` and `DESIGN.md` for approved scope and design decisions. Original asset metadata and source notes are in `output/project-assets/`.

## Technology strip

`component/portfolio/TechStack.tsx` owns the eight featured technologies and the complete grouped list. The native details disclosure works with keyboard navigation and without JavaScript. Logos are monochrome and rendered statically.

Icon sources: [React Icons](https://react-icons.github.io/react-icons/), [Simple Icons](https://simpleicons.org/), and the AWS icon from [Font Awesome Free](https://fontawesome.com/license/free), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) and rendered in monochrome.

## Social previews

Sharing metadata uses versioned public PNGs: `/social/portfolio-og-v2.png` (1200×630) and `/social/portfolio-twitter-v2.png` (1200×600), with `https://ivanrozak.com` as the canonical origin. The composition mirrors the homepage hero with its headline, portrait, supporting copy, and CTA. Direct static images avoid runtime font/portrait dependencies for social crawlers.

The shared source in `lib/social-image.tsx` renders through the compatibility endpoints `/opengraph-image` and `/twitter-image`. After changing it, run `npm run build:preview` then `node scripts/export-social-images.mjs .next-preview` and commit the resulting public PNGs. Use a new filename when replacing artwork already cached by social platforms. Metadata defaults live in `lib/social-metadata.ts`; Projects overrides its title, description and URL while retaining the sharing images. Existing WhatsApp previews can remain cached after deployment; test with a newly shared URL (for example `https://ivanrozak.com/?preview=hero-v2`).

Local exported previews are in `output/implementation/opengraph-image.png` and `twitter-image.png`.
