# Marquee First

Approved source: Wonder file `01a190af-3374-75a0-a437-dee48a691d37`, desktop `yus`, mobile `cel`, archives `tal` / `was`.

- Geist, medium-weight display typography, tight tracking, generous whitespace.
- Ink #121212, white, secondary #646464, soft #f4f4f4, surface #ededed, thin #e4e4e7 rules. Full-color artwork.
- Wide desktop composition with 72px gutters at 1440px; 24px mobile gutters.
- Hero with circular enhanced portrait, subtle neutral gradient, primary email/contact action.
- Black primary Projects section immediately after hero, two slow opposing tracks on desktop, one manual swipe row on mobile.
- Project titles remain visible; desktop hover/focus reveals descriptions. Mobile descriptions remain visible. View all projects navigates to /projects.
- Archive: three-column desktop grid, one-column mobile, search and category filters with result count and empty recovery.
- Motion: staggered word blur reveals for major headings, restrained content entrances, portrait reveal, interruptible accordions, directional arrow feedback.
- Respect reduced motion: no autoplay, parallax, blur reveals, or smooth scrolling. Keyboard focus pauses the marquee; explicit pause remains paused.
- Desktop tracks use persistent Motion values. Hover/focus changes speed with a 180ms deceleration and 300ms acceleration, without resetting position. Focus only pans the track if its original card is outside the viewport; looping resumes from the retained visual phase.
- Hover/focus pause is scoped to project cards, not the entire Projects section. Hover reveals only the overlay/description; thumbnails do not zoom.
- Project enquiry CTAs open one monochrome native dialog with a structured brief, accessible focus handling, scroll lock, responsive internal scrolling, and an email-draft handoff.

Existing /about and /blog content remains available within the new shared shell.

## Approved process / experience refinement

Wonder artboards `rog` (1440px) and `nat` (390px), Process Experience Editorial, replace the earlier process columns and about layout.

- Desktop process rows share fixed stage/description/outcome columns and a 136px minimum row height; supporting copy stays below the heading.
- Mobile keeps stage numbers in a narrow rail with description and outcome aligned beneath each title.
- Experience uses a #f4f4f4 surface, a 400px desktop introduction rail, and aligned company/role/description/date rows.
- Row rules and layout stay stationary; cell content enters with small staggered opacity/translate reveals (14px desktop, 9px mobile). Existing heading blur reveals and reduced-motion support remain.
- Homepage contact and footer now use #121212, white headings/links, #bdbdbd supporting text, #3a3a3a dividers, and a white primary enquiry button.

## Approved technology strip
- Replaced the hero's client-name strip with a static monochrome technology row, labelled “Tools behind the work”.
- Feature Next.js, Nuxt, NestJS, Hono, React Native, PostgreSQL, Docker, and AWS; use two columns on mobile.
- Native “View full stack” disclosure exposes all 24 user-confirmed tools and technologies across web/mobile, backend/real-time, CMS, data/cloud, infrastructure/deployment, version control, and project management (Jira / ClickUp). No additional autoplay marquee.

Removed the duplicate technical-foundation list from the About introduction; the hero technology strip is the stack reference.
