# Changelog

All notable changes to centralcomms.nz v2.

---

## [Unreleased]

### Content updates

- Replaced Support's interim hero with the owner's supplied workplace/desk-phone photograph, optimised as a local 2048-pixel-wide WebP. All other hero images and the Support form are unchanged.
- Replaced the Notifications, About and main Updates page hero placeholders with the owner's supplied photographs, optimised as local 2048-pixel-wide WebP images. Individual update-post heroes are unchanged; original uploads were preserved during conversion.
- Updated Support, Notifications, About, the Updates index and all update articles to share the service-page hero/header styling: full-bleed local photography, readable white headings, breadcrumbs and green accents. Main-page images are configured in `src/data/page-heroes.ts` and now all use the owner's dedicated photos.
- Update articles now use their featured image in the hero instead of a separate framed cover. CMS saves refresh the hero image and visible metadata, including image removal/addition; staff controls retain their existing workflows. Added responsive heading styles, narrow-screen licence-image/video fixes, documentation and a build-output regression check.
- The broadband customer Speedtest image now opens in a responsive native modal, with keyboard/backdrop dismissal, scroll locking, focus restoration and a direct-image fallback without JavaScript.
- Removed visible new-tab annotations from VoIP and CCTV links while preserving their new-tab behaviour and security attributes.
- Updated the shared CST Group testimonial and the Pharmacy 547 testimonial to refer to Paul individually, using the business owner's supplied wording. The CST Group change applies to both the home and VoIP pages.

### SEO and structured data

- Expanded `/websites-and-hosting.html` with six use cases, WordPress/custom-development experience, responsive websites and landing pages, NZ hosting options, domains, Microsoft 365/Google Workspace, HTTPS, maintenance, SEO basics, 24/7 emergency support and 22 FAQs.
- Added the owner-confirmed Waikato hosting platform and Western Bay of Plenty backup locations, four existing portfolio examples and Jason's unchanged testimonial. The supplied Proxmox screenshot is a local lossless WebP hero with an accessible image modal; project images and dedicated sharing artwork are also local.
- Added matching websites/hosting service, person, webpage, breadcrumb and FAQ JSON-LD, consistent search/social metadata, corrected phone links and content/source/asset maintenance guidance in `docs/websites-hosting-content.md`. No unsupported uptime, facility certification, developer-ranking or AI-recommendation guarantees were added.
- Expanded `/ultra-fast-broadband.html` with six business use cases, UFB/Hyperfibre guidance, managed routers, static IPs, phone/CCTV integration, connection planning, local Hamilton and 24/7 emergency support, resilience planning and 20 FAQs.
- Added Paul's ISP background and the owner-confirmed Net Enterprises backbone relationship, a clearly qualified customer Hyperfibre result (4,026.98 Mbps down, 3,895.66 Mbps up, 3 ms ping), and Aaron/Jason's unchanged shared testimonials. The supplied screenshot is preserved in a local lossless WebP, with a dedicated 1200 x 630 sharing image and reproducible source.
- Added matching broadband service/person/organisation/webpage/breadcrumb/FAQ JSON-LD, shared FAQ data, social metadata and related service/project links without a new client dependency. Corrected the broadband phone link and documented content provenance, service boundaries, asset generation and verification in `docs/broadband-content.md`.
- Expanded `/wireless.html` with six enterprise WiFi use cases, benefits, full site survey guidance, design/coverage diagnosis, point-to-point and remote building connectivity, monitoring, server/cloud services, RSM-based NZ compliance guidance and 20 FAQs.
- Added Paul's wireless profile and four qualifications shared with the IT support data, Aaron's unchanged managed WiFi testimonial, matching service/person/webpage/breadcrumb/FAQ JSON-LD, and local WebP hero/share imagery from the owner's rooftop installation photo. Preserved the existing URL and added no client-side dependency.
- Documented wireless content sources, certification and regulatory boundaries, local media provenance and maintenance checks in `docs/wireless-content.md`. Corrected the wireless page's phone link to `+648008480038`.
- Expanded `/it-support.html` with six business use cases, practical benefits, Paul Willard's technical/management background, eight owner-supplied qualifications and training records, support options, server/private-cloud guidance, three existing testimonials, two project links and 18 FAQs.
- Added matching IT support service, person/credentials, webpage, breadcrumb and FAQ JSON-LD, plus dedicated social metadata and locally optimised hero/portrait/share images. Credentials and FAQs share their visible and structured-data sources; personal PSPLA approval is distinct from the company licence and older vendor certifications are dated records.
- Shared Ian and Jason's existing testimonials with the home page without changing their wording. Documented IT support content provenance, credential boundaries, local image sources and maintenance checks in `docs/it-support-content.md`.
- Expanded `/networking--data.html` with six customer use cases, benefits, owner-confirmed Safety 'n Action height certification for all staff and Legrand cabling qualifications, copper/fibre/PoE/10GbE guidance, existing project examples, Aaron's unchanged testimonial and 18 FAQs.
- Added matching data-cabling service, webpage, breadcrumb, FAQ and descriptive video JSON-LD, dedicated social metadata and local WebP photography. The owner's short installation clip opens in a keyboard-accessible native modal, with a silent 1080p MP4, visible media description and direct-link fallback. Original uploads remain unchanged.
- Documented data-cabling claim boundaries, research, asset provenance, owner-confirmed original video publication date (14 September 2022) and maintenance checks in `docs/data-cabling-content.md`.
- Replaced the CCTV stock hero with a WebP montage based on the owner's school/work-vehicle and camera-installation photographs. Updated the matching sharing image, added an installation-focused mobile crop, and documented the AI-assisted composition and source photos. Original uploads remain unchanged.
- Expanded `/cctv.html` with six example use cases, Nx Witness feature analysis and qualified comparisons, SADPTools and NX Camera Info benefits, installation/maintenance guidance, an existing freezer project example and 16 FAQs.
- Added CCTV `Service`, `WebPage`, `BreadcrumbList` and matching `FAQPage` metadata, software mentions and credentials linked to the existing business entity. All new content is build-time HTML, with keyboard-accessible native FAQ disclosures and no new client-side dependency.
- Corrected the CCTV company licence to `26-136711` from the displayed certificate, keeping the separately listed individual licence on the About page unchanged. Corrected Nx Witness's description from a free/open-source NVR to a commercially licensed VMS with an open-source desktop client.
- Shared the existing TeTauru, Jordon and Peter testimonials between the home and CCTV pages without altering their wording or implying product endorsements.
- Added locally hosted CCTV photography, vendor/app illustrations, a readable company licence image and a dedicated 1200 x 630 sharing image. External references open in a new tab; competitor names remain unlinked. Added asset provenance, claim boundaries and maintenance guidance in `docs/cctv-content.md`.
- Expanded `/voip.html` with Hamilton/Waikato service content, six business use cases, Yeastar P-Series feature analysis, Linkus benefits, qualified competitor comparisons, deployment/migration guidance and 14 FAQs.
- Added matching `Service`, `WebPage`, `BreadcrumbList` and `FAQPage` JSON-LD, with visible FAQ answers and schema generated from one data source. Added crawl-friendly `robots.txt` pointing to the existing sitemap.
- Corrected sitemap generation to use the same `.html` URLs as the built pages' canonicals, retaining the origin for the home page.
- Reused Sophia, Aaron and Ross's existing testimonials unchanged through shared data consumed by the home and VoIP pages, without fabricated ratings or product endorsements.
- Downloaded and optimised Yeastar illustrations for local hosting; added a dedicated 1200 x 630 VoIP social image and its reproducible source. External VoIP reference links open safely in a new tab.
- Replaced the VoIP hero's supplier image with Paul's supplied local WebP photo and adjusted its crop for desktop and mobile.
- Removed decorative VoIP benefit/use-case numbers; refocused the offering on Cloud PBX subscriptions and removed public 3CX/Teams links. Added the owner-supplied J Swap deployment example (180 extensions across sites and two redundant failover PBX appliances), enterprise onsite/software guidance, and explicit free Linkus use with CCL Cloud PBX subscriptions in both the copy and FAQ schema.
- Reworked J Swap into a short business case explaining its choice of redundant dedicated PBX hardware, separate from corporate IT and hypervisor hosting, and the alternative fit for a Software PBX.
- Added optional `imageAlt` metadata to the shared layout and documented content sources, image provenance and verification in `docs/voip-content.md`.
- `Layout.astro`: expanded the default JSON-LD from a basic local business object to a `ProfessionalService` schema with logo, default social image, opening hours, service catalog, and canonical `@id`.
- `Layout.astro`: added optional `canonicalURL`, `meta name="title"`, `twitter:url`, smarter title suffixing to avoid duplicate brand names, and switched the default Open Graph image to `ccl-og-image.png`.
- Service pages: refined title and description metadata for VoIP, CCTV, networking/data cabling, and IT support pages using search-focused Hamilton/Waikato service terms.
- `Layout.astro`, `cctv.astro`: added support for page-specific schema and used it on the CCTV page for service, local business, and FAQ metadata; also strengthened visible licensing, trust, and FAQ content around the PSPLA credential.

### Security review hardening

- `contact.php`: moved the private reCAPTCHA secret, recipient address, and sender address into server-only `contact-config.php`; added `contact-config.php.example`, `.gitignore`, and deploy exclusion.
- `contact.php`: added config validation, IP-based rate limiting, server-side field length caps, and stripped CR/LF from name and phone fields before composing mail headers/body.
- `public/assets/php/security.php`: added shared session, file-backed rate limiting, CSRF token, same-origin, and string length helper functions.
- `notifications-api.php`, `updates-api.php`: added `HttpOnly`, `SameSite=Lax`, HTTPS-aware `Secure` session cookies, same-origin `Origin`/`Referer` checks, per-session CSRF tokens, and file-backed login throttling for staff POST requests.
- `notifications-api.php`, `updates-api.php`: login failures now write to the PHP error log for server-side alerting/monitoring.
- `notifications-api.php`, `updates-api.php`: added per-data-file lock files around read-modify-write operations to prevent lost updates under concurrent CMS requests.
- `updates-api.php`: added server-side HTML sanitization for saved rich-text update bodies; allows only CMS-required tags/attributes, safe links/images, and YouTube embed iframes.
- `scripts/normalize-updates-html.mjs`, `package.json`: build now normalizes legacy YouTube iframe markup in `updates.json` before validating and rendering, so synced live CMS content with stale TipTap attributes cannot block deploys or ship invalid iframe HTML.
- `updates-api.php`: tightened upload handling to 5 MB max, `getimagesize()` validation, 6000×6000 dimension cap, and per-user upload rate limiting.
- `notifications-api.php`, `updates-api.php`: added server-side length caps for CMS text fields.
- `notifications.astro`, `updates/index.astro`, `updates/[slug].astro`: staff write requests now send the `X-CSRF-Token` header returned by the APIs.
- `notifications-api.php`: logout now clears only the notifications staff session key instead of destroying the entire PHP session, matching the independent auth model used by the updates CMS.
- `updates/index.astro`: removed the hardcoded default author in the New Update form; blank authors now fall back to the authenticated staff username on the server.
- `updates/index.astro`: scoped dark-overlay button styling for the New Update window so Cancel, Upload Image, Insert Image, Remove, and Embed YouTube remain readable.
- `.htaccess`: denied direct HTTP access to server-only PHP config files while still allowing local PHP includes.
- `.htaccess`: `X-Content-Type-Options: nosniff` now applies to all responses, including uploaded images; CSP now includes `script-src-attr 'none'` to block inline event-handler attributes.
- `package.json`, `scripts/scrub-server-config.mjs`, `scripts/validate-updates-html.mjs`: `npm run build` now validates stored update HTML before Astro builds, then removes server-only config files from `dist/assets/php/` after Astro copies `public/`, preventing ignored local secrets from entering build artifacts.
- `Makefile`: changed deploy connection values to overridable defaults (`?=`), added `contact-config.php` to the rsync exclusions, and creates writable JSON lock files during push.
- `docs/README.md`: updated deployment paths from `/var/www/dev` to `/var/www/html`, documented the new contact config, JSON locking, HTML sanitization, session-cookie settings, same-origin POST checks, and Makefile overrides.

---

## 2026-04-08 (PageSpeed / performance / security hardening)

### W3C HTML validation fixes

- `Layout.astro`: fixed JSON-LD `<script type="application/ld+json">` — was rendering `{JSON.stringify(...)}` as literal text; fixed with `set:html` directive. Corrected telephone to E.164 format (`+648008480038`). Added `priceRange` and `image` fields to `LocalBusiness` schema.
- `Nav.astro`, `Footer.astro`: removed redundant `role="list"` from `<ul>` elements.
- `index.astro`, `support.astro`, `notifications.astro`, `updates/index.astro`, `updates/[slug].astro`: moved all `<script>` blocks to inside `</Layout>` — scripts placed after `</Layout>` were rendering after `</html>` causing "stray start tag script" errors.
- `updates/index.astro`, `updates/[slug].astro`: hidden preview `<img>` had `src=""` (invalid); replaced with a 1×1 transparent GIF data URI.
- `updates/[slug].astro`: changed content wrapper from `<article>` → `<div>` (article/section without internal heading triggers W3C warning; the post title is in the hero above the wrapper).

### PageSpeed Insights — 90 → 98/100 desktop, 91/100 mobile

#### Apache caching and security headers (`.htaccess`)
- `mod_expires` + `Cache-Control: immutable` for images, CSS, JS, and fonts (1 year) — CSS/JS are safe to cache because Astro hashes filenames
- `no-cache, no-store` for HTML and JSON — prevents caching of regenerated pages and live data files
- Security headers added: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security` (with `preload`), `Cross-Origin-Opener-Policy: same-origin`
- CSP: `default-src 'self'`; `script-src 'self' 'unsafe-inline'` (required for Astro's runtime module loader); `style-src` allows Google Fonts; `font-src` allows gstatic; `object-src 'none'`; `base-uri 'self'`; `frame-ancestors 'none'`
- `X-Frame-Options: DENY` aligned with `frame-ancestors 'none'` in CSP (previously SAMEORIGIN/none were contradictory)

#### Image optimisation
- All testimonial avatars, `central_comms_montage.jpg`, and `pspla-license-2026.png` converted to WebP
- Testimonials: generated both `{name}-160.webp` (1x, 160×160) and `{name}-320.webp` (2x, 320×320)
- Static images wrapped in `<picture>` with `<source type="image/webp">` and original JPG/PNG fallback
- Testimonial `<picture srcset="{name}-160.webp 1x, {name}-320.webp 2x">` — standard screens get the smaller file; retina screens get 2x
- Fixed pspla badge dimensions: `width="140" height="97"` (was `width="180"` with no height — CSS forces 140px; missing height was causing CLS)
- Added `width="160" height="160"` to `.testimonial-avatar-zoom` images (previously no explicit size on the hover-popup image)

#### LCP fix — hero `<h1>`
- Removed `reveal reveal-delay-1` classes from `<h1 class="hero-heading">` — the reveal animation started with `opacity: 0` which delayed the LCP element until the IntersectionObserver fired (~2,550ms). The `<h1>` now paints immediately on first render. Other hero elements (tagline, sub, CTAs) retain their staggered reveal.

#### Contrast fixes (WCAG AA)
- `btn-primary` background: `#0284c7` → `#0369a1` (white text contrast: 3.9:1 → 5.5:1, passes AA)
- `btn-primary:hover` background: `#0ea5e9` → `#0284c7` (hover is a lighter shade now)
- `Footer.astro` `.footer-coverage`, `.footer-copy`, `.footer-legal a`: `#2a4a6e` → `#7ea3c8` (contrast on `#071525`: 2.3:1 → 7.5:1, passes AA)
- `.footer-legal a:hover`: `#7ea3c8` → `#e8f1ff`

#### Duplicate link label fix
- Hero "Get in Touch" button renamed to "Contact Us" and given `aria-label="Contact us via the form below"` — was identical to the nav "Get in Touch" button pointing to a different URL, which caused an accessibility warning

#### Font loading
- Google Fonts `display=swap` retained (reverted from `display=optional` which prevented custom fonts from loading on first visit and all subsequent visits in many cases)

---

## 2026-04-07 (post-security-review UI/UX fixes)

### Remote support: RustDesk → HelpWire

- `support.astro`: full rewrite of the remote support section — replaced RustDesk box, screenshot, and pre-configured `.exe` download with a HelpWire explainer box
- Updated workflow steps: call us → we send the app → we take over (no self-serve download)
- Removed `public/assets/rustdesk-host=...exe`, `public/assets/images/RustDesk_image.jpg`, and `public/assets/images/rustdesk.svg`
- Fixed stale copy: removed "below" reference to a download button that no longer exists

### Light-mode readability fixes

All service pages (voip, cctv, networking--data, wireless, ultra-fast-broadband, websites-and-hosting) and content pages had colours designed for dark backgrounds that were unreadable on the light section backgrounds (`#f4f8fd`, `#ffffff`):

- `.feature-list li` colour: `#b8cce0` → `#1e3a5f` (dark navy, readable on white)
- `.cta-box .btn-outline` scoped override added — global `.btn-outline` uses `color:#0c1a2e` (dark, for light backgrounds) which was unreadable inside the dark `.cta-box`; fixed with a scoped `color:#e8f1ff` override and a `#38bdf8` hover

`about.astro`:
- `.section-heading`: `#e8f1ff` → `#1e3a5f`
- `.body-text`: `#7ea3c8` → `#334e68`
- `.team-name`: `#e8f1ff` → `#1e3a5f`
- `.team-role`: `#0ea5e9` → `#0369a1`
- `.team-bio`: `#7ea3c8` → `#334e68`
- `.info-row dt`: `#7ea3c8` → `#486581`
- `.info-row dd`: `#e8f1ff` → `#1e3a5f`

`updates/index.astro`:
- `.post-title`: `#e8f1ff` → `#1e3a5f`; hover `#0ea5e9` → `#0369a1`
- `.post-excerpt`: `#7ea3c8` → `#334e68`
- `.post-date`: `#7ea3c8` → `#486581`

### Other fixes

- `index.astro`: hero heading `.hero-heading` `font-size` clamp minimum reduced `2.8rem` → `2rem` so the title scales down correctly on narrow mobile screens
- `cctv.astro`: PSPLA licence image was 420 px wide on narrow phones, causing horizontal page scroll — added `width:100%` to the inline style and `min-width:0` to `.prose` (CSS grid child `min-width` defaults to `auto`, allowing content to overflow its track)
- `about.astro`: PSPLA licence image wrapped in `<a href="..." target="_blank" rel="noopener">` with `cursor:zoom-in` so visitors can open the full-size image
- `support.astro`: `24/7 emergency service` strong tag colour updated to `#27448f` for readability on the light section background

### Documentation

- `docs/Screenshots/README.md`: added full walkthrough of all 9 CMS screenshots (Notifications and Updates systems), explaining each screen and the underlying functionality
- `docs/README.md`: added navigation bar, Screenshots link in table of contents
- `README.md`: added Screenshots link in Docs section

---

## 2026-04-07 (security review)

### Security hardening — notifications, contact form, updates API

- `notifications.astro`: replaced all inline `onclick="fn(id)"` attributes with `data-action`/`data-id`/`data-id2` data attributes and a single event delegation listener on `#notifications-list`; removed `window.*` global function assignments
- `contact.php`: strip `\r\n` from the validated email address before inserting it into the `Reply-To` header (email header injection hardening)
- `updates-api.php` (`upload_image`): replaced sequential `file_exists` loop with a `bin2hex(random_bytes(3))` random suffix, eliminating the TOCTOU race condition between the existence check and `move_uploaded_file`
- `updates-api.php` (`delete_image`): added `realpath()` guard — resolves both the target path and `$imagesDir` and confirms the file is inside the images directory before unlinking (path-traversal defence-in-depth)
- `updates/[slug].astro`: removed dead `<script define:vars>` block (variables injected by Astro are inaccessible from ES module scripts); simplified `SLUG` derivation to always use `window.location.pathname`

---

## 2026-04-07

### c87571e — Various fixes and improvements
- Contact form email address changed from `support@centralcomms.nz` to `support@smtp.centralcomms.nz`
- Notifications status banner: removed `reveal` animation class so the loading character displays immediately on page load (previously the banner was invisible until the user scrolled)
- Support page `.content-h2` headings darkened to `#27448f` for readability against the light background
- Nav: added "Call Now" `tel:0800848038` button before "Get in Touch" in both desktop nav and mobile menu; phone number extracted to a frontmatter constant to avoid duplication
- Contact forms (home page + support page): added client-side validation — name must be ≥ 2 characters, email must match a valid format; inline field-level error messages shown; PHP `contact.php` also enforces name length server-side

### fd752a0 — Add updates CMS with TipTap editor and PHP API
- Migrated all 26 project updates from Astro content collection markdown files to `public/assets/data/updates.json`
- Removed Astro content collection; `[slug].astro` and `index.astro` now read directly from the JSON at build time
- Created `public/assets/php/updates-api.php` — full CRUD API with separate bcrypt auth, image upload/delete, slug generation
- Created `public/assets/php/updates-auth-config.php.example`
- `updates/index.astro`: staff login modal, "New Update" full-screen overlay with TipTap editor, featured image upload, content image insert, YouTube embed button, category tags
- `updates/[slug].astro`: fixed staff bar at bottom of page (edit/delete/logout), full edit overlay pre-loaded from API, live DOM update after save
- Makefile: added `sync-updates` target — pulls `updates.json` and post images from server before build; `deploy` now runs `sync-data sync-updates build push`
- Post-push: server sets `updates.json` and `notifications.json` to 666, `posts/` directory to 777

### 3e1e1ab — Infinite scroll for resolved (older) notifications
- Active/warning/outage notifications always fully visible
- Resolved (historical) notifications load 5 at a time as user scrolls to the bottom
- IntersectionObserver with 200px `rootMargin` for look-ahead preloading
- Spinner sentinel element shows/hides based on remaining resolved items

### ec11414 — Import historical notifications from pages 2-4 of old site
- Fetched notifications.php pages 2–4 from old centralcomms.nz site
- Imported 8 historical notifications (2022–2023) into `notifications.json`
- Total notifications: 11

### 792e2cb — Show all notifications without pagination
- Removed initial 5-item pagination limit; all notifications rendered on load

### f96626e — Replace pagination with infinite scroll on notifications page
- Initial infinite scroll implementation (later refined in 3e1e1ab)

### 146c14b — Fix notification CSS not applying to JS-rendered elements
- Astro scopes `<style>` blocks with `data-astro-cid-*` attribute selectors
- JavaScript-created elements never receive these attributes, so styles were invisible
- Fixed by changing `<style>` to `<style is:global>` in `notifications.astro`

### 4d08076 — Retheme notification CSS for light-mode section background
- Notifications section background changed to `#f4f8fd` (light blue-white)
- All notification card colours updated for light-mode contrast

### ee5cee4 — Improve notifications UI: styling, sections, resolve button
- Notification cards redesigned with status colour coding
- Staff can mark notifications as resolved inline
- Comment system added to notifications

### 4498bf2 — Remove PHP dev proxy — developing on dev web server going forward
- Removed the local PHP dev proxy script
- Development now done directly against the dev server at `centralcomms.netent.co.nz`

### f0e8745 — Handle missing remote notifications.json on first deploy
- `sync-data` in Makefile now gracefully skips if no remote file exists yet

### 9730caa — Set notifications.json to 777 after deploy
- `push` target in Makefile runs `chmod 777` on `notifications.json` post-rsync so PHP can write to it

### 50ad4fa — Add PHP dev server proxy for local development
- Temporary proxy to forward API calls to PHP during local dev (later removed)

### e2d6a1b — Fix PHP API compatibility and output corruption
- Fixed PHP output buffering issues causing JSON responses to be corrupted by stray whitespace/notices
- Added `ob_start()` / `ob_clean()` guards

### baa7bed — Fix notifications JS: DOMContentLoaded never fires for Astro modules
- Astro `<script>` blocks run as ES modules after the DOM is already parsed
- `DOMContentLoaded` listener never fires; removed it — code now runs at module evaluation time

### 7d7f103 — Add Makefile with sync-data, build, push, deploy targets
- `sync-data`: pulls live `notifications.json` from server before build
- `build`: runs `npm run build`
- `push`: rsyncs `dist/` to server, excluding server-only auth config files
- `deploy`: full pipeline — `sync-data build push`

### 12ec07f — Add dynamic notifications system with staff auth
- `notifications-api.php` with bcrypt login, session management, CRUD for notifications and comments
- `notifications.astro` with live fetch, staff login modal, create/edit/delete forms
- `notifications.json` as the data store

### 0d3b0cf — Initial commit
- Full Astro 5 site with Tailwind CSS v4
- Pages: home, about, VoIP, CCTV, networking, wireless, UFB, websites & hosting, support, notifications, updates, 404, privacy policy, terms, fair use
- Custom fonts: DM Sans, Syne, Space Mono, CentralComms (brand font)
- `Nav.astro`: responsive nav with dropdowns, scroll-aware transparent→white transition
- `Footer.astro`: contact details, service links, social links
- `Layout.astro`: shared head with OG tags, canonical URL, sitemap integration
- Reveal scroll animations via IntersectionObserver
- `@astrojs/sitemap` integration generating `sitemap-index.xml`
