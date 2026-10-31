# Marquee First implementation checkpoint

Goal: implement the approved Wonder alternative on `feature/redesign` using Lenis and Motion. No deployment, push, or commit requested.

## Accepted scope
- Complete homepage layout, enhanced hero portrait, services accordion, process, experience, contact.
- Accessible slow desktop marquee with hover/focus pause and explicit pause control.
- Native manual mobile swipe; persistent names and touch descriptions.
- /projects archive with all 12 projects, search, category filters, empty state.
- Blur reveal typography combined with restrained motion; reduced-motion support.

## Existing changes to preserve
Project copy and WebP assets from earlier work, `output/` asset catalog, and pre-existing package-lock changes.

## Progress
- Complete on `feature/redesign`, based on Wonder `yus` / `cel` / `tal` / `was`.
- Homepage, hero asset, services, process, experience, contact, and shared navigation implemented.
- Lenis 1.3.27 and Motion 14.9.0 installed; removed the old framer-motion dependency. Geist is self-hosted through the Geist package.
- Desktop project tracks move at 20px/s and 16px/s; hover, focus, and explicit pause work. Keyboard focus minimally pans offscreen original cards into view without resetting the track; position is retained on resume.
- Mobile uses native swipe + snap, arrow controls, persistent titles and concise descriptions.
- Archive includes all 12 projects, combined search/category filtering, counts, clear search/filters, and empty state. Full descriptions and verified responsibilities preserved.
- Reduced motion disables autoplay, Lenis, blur, and parallax. Content remains readable without JavaScript.

## Verification
- `npm run build:preview`: passed, including existing Contentful blog generation with network access.
- `npm run typecheck`: passed.
- `npm run lint`: passed with the pre-existing `no-img-element` warning in `app/blog/[slug]/page.tsx`.
- Browser verification: 17 applicable checks passed across the suite and targeted long-simulation rerun; 7 device-specific duplicates are intentionally skipped. The 60s/90s virtual-time tests use a 120s timeout after the original 30s limit proved too short.
- Coverage: navigation, filters/search and empty recovery, keyboard accordion, motion/pause, late-loop keyboard visibility, real touch swipe through Chromium CDP, reduced motion, no-JS content, and responsive widths 320/390/768/820/1024/1440.
- Impeccable mechanical scan: no findings.
- `git diff --check`: passed.
- Desktop/mobile screenshots inspected; final captures are in `output/implementation/`.

## Local preview
`npm run preview` serves the verified isolated `.next-preview` production build at http://127.0.0.1:3100. Standard `npm run dev` remains available at port 3000.

## Delivery state
User authorized committing all work on feature/redesign. No push or deployment requested. Previous project assets/catalog and existing changes were preserved. No required implementation work remains for this scope.

## Follow-up: card hover and enquiry dialog
- Pause now applies only while a card is hovered/focused, plus explicit manual pause. Section heading and empty space keep the tracks running.
- Added shared native project enquiry dialog to hero, navigation, services, and contact CTAs. It collects a brief and opens an email draft, with a copy fallback; no backend sending is claimed.
- Dialog supports keyboard containment/Escape, backdrop dismiss, preserved form values, restored opener focus (mobile menu fallback), internal touch scrolling, Lenis/background scroll lock, reduced-motion transitions, and native field validation.
- Desktop/mobile dialog screenshots inspected in `output/implementation/inquiry-*.png`. Browser tests cover validation, generated email content, closing, scroll lock, and focus restoration.

For future changes, read PRODUCT.md and DESIGN.md first, then edit project data or components. Rebuild the preview before running the Playwright suite.

## Follow-up: smooth marquee transport
- Replaced CSS keyframes and focus resets with persistent Motion position/speed values and a frame integrator.
- Hover/manual pause eases speed to zero over 180ms; resume eases to 20px/s or 16px/s over 300ms. Tween easing is bounded, without spring overshoot. Position is never recreated by a pause-state render.
- Wrapped translation is measured from the repeat group. Equivalent copies preserve visible content at seams; long inactive-frame deltas are capped to avoid a catch-up jump.
- Removed thumbnail zoom. Hover now changes only the overlay/description and arrow feedback.
- Focus only pans when its card is outside the viewport, and retains the resulting phase on blur. Mobile manual swipe and reduced motion remain intact.
- Added frame-by-frame direction, displacement-bound, settled-pause, rapid-interruption, full-loop seam, and late-loop focus checks. Preview captures/recording are in output/implementation/.
- Verification complete: repeated hover and pause/resume samples show no reversed movement or displacement spike; both loop seams passed a 90s simulation; offscreen keyboard focus passed a 60s simulation. Existing swipe, reduced-motion, archive, and dialog checks passed. Production build, TypeScript, lint (existing blog warning only), and diff checks passed.

## Follow-up: editorial process / experience and dark footer
- Implemented approved Wonder `rog` / `nat` sections in app/page.tsx and globals.scss on feature/redesign.
- Added EditorialRow: stationary row rules with short cell staggers; mobile uses less travel and delay, and reduced motion disables movement.
- Homepage contact/footer is ink black with inverse text, quiet dividers, white CTA, and visible keyboard focus.
- First verification: production build and TypeScript passed; 10 targeted desktop/mobile checks passed, including responsive widths, heading reveal, reduced motion, enquiry flow, editorial alignment, footer contrast and CTA focus. Desktop rows measure 136px and mobile rows 204px at 1440/390 widths; no horizontal overflow.
- Screenshot inspection matched the selected composition. Fixed a missing space at the responsive paragraph break. Mobile tall-element captures showed a fixed-element screenshot artifact; live geometry confirmed the skip link remains outside the viewport and unfocused.
- Final verification: corrected mobile paragraph spacing confirmed in viewport capture. Desktop/mobile row animations show opacity and vertical movement settling to opacity 1 / y=0, with zero row-height change throughout. Final production build and TypeScript passed; preview remains on port 3100.
