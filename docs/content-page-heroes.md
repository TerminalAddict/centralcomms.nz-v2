# Content-page heroes and headings

The Support, Notifications, About and Updates index pages, plus every generated
`/updates/*.html` article, use `src/components/PageHero.astro`. This matches the
service pages' full-width photography, solid dark overlay, white heading,
green monospace eyebrow, breadcrumbs, responsive spacing and fixed-rem type.
The shared navigation remains unchanged.

## Replacing the four interim images

The owner will supply dedicated images for the four main pages. Their temporary
local choices are centralised in `src/data/page-heroes.ts`:

| Page | Interim image |
| --- | --- |
| Support | Paul on the phone |
| Notifications | Existing network cabinet installation |
| About | Existing Central Communications work montage |
| Updates | Existing commercial cabling installation |

Store replacement images under `public/assets/images/` in a durable directory,
preferably optimised WebP. Update the corresponding `src`, intrinsic `width`,
`height` and `position` in that map. `position` controls the crop using CSS
`object-position`. Check both desktop and mobile framing. The About montage is
only 520 x 419, so it is an interim choice, not the final full-width photograph.
Do not edit generated `dist/` files or introduce remote image URLs.

These backgrounds are decorative behind equivalent text, with empty alt text
and an aria-hidden media container. The hero images load eagerly with high
fetch priority. Text, rather than image dimensions, determines hero height;
replacing an image does not resize the content layout.

## Update articles and CMS integration

- `src/pages/updates/[slug].astro` passes the post's featured image to the shared
  hero. The separate framed cover beneath the old title strip is removed.
- Titles, dates, authors and categories remain visible, and each article retains
  its body, previous/next links, canonical URL and article-sharing metadata.
  Article data in `public/assets/data/updates.json` is unchanged by this styling
  update. Future posts automatically receive the same hero.
- A post without a featured image has the same readable solid-colour hero,
  without a missing-image URL. The media container always exists for the editor.
- After an edit is saved, the returned post updates the visible title, date,
  author, categories and hero image. Replacement, removal and adding an image to
  an empty hero all work before rebuilding. Metadata uses `textContent` and DOM
  elements; image filenames are encoded as a single local URL path segment.
- The media CSS deliberately includes dynamically created images without
  requiring Astro's build-time scoped attributes.
- Staff login/New Update/Logout controls now sit on the white area above the
  project grid. A reserved 44-pixel row prevents an auth response from shifting
  the grid. Existing IDs, API endpoints, CSRF handling and editor controls remain.
- CMS edits still require the normal deploy to regenerate static HTML and search
  metadata; the immediate browser refresh is not a replacement for that step.

## Styling boundaries

`src/styles/content-pages.css` is imported only by these five source pages and
is scoped beneath `.content-page`. It aligns section headings, eyebrows, section
backgrounds, button typography and article heading sizes with the newer service
pages. The home page, existing service pages, legal pages and shared navigation
are not restyled.

Reading content does not depend on the reveal-animation script. The Support
form and notification data still use their existing scripts and PHP endpoints.
Staff overlays retain their established styles. About's licence image/grid now
fit narrow screens, and article iframes scale to their available width at 16:9
instead of forcing a 640-pixel-wide page on a phone.

## Checks

After building, run:

```sh
npm run build
node scripts/check-content-heroes.mjs
git diff --check
```

The regression check reads generated HTML using parse5 and covers all four
main pages plus every current post. It checks one H1, shared hero/breadcrumbs,
unique IDs, local image existence, priority, featured-image mapping, visible post
metadata, canonical/social URLs and retained CMS hooks.

Browser checks should cover 1440x900, 2560x720, 768x1024, 390x844, 320x568 and
844x390. Verify long headings, landscape layout, image cropping, no horizontal
overflow, visible content below the hero and keyboard-accessible navigation.
Test CMS image replacement/removal/addition, metadata refresh, new-post typing,
login controls, notifications and support-form validation with mocked local
APIs. Never create real production notifications or support requests for a
styling test.

HTML validation has two pre-existing errors in the body of
`/updates/is-10gb-networking-worth-it-for-your-business.html`: the rack cabinet
and media-converter images lack `alt` attributes in stored CMS content. These
were confirmed in the preceding commit and left outside this header change.
They should be corrected in the CMS source; a local JSON-only edit would be
overwritten by `make deploy`'s live-data sync.

Verified on 10 November 2026:

- Production build: 43 pages; shared-hero regression check: all 31 target pages;
  `git diff --check`: clean. Nu HTML Checker found only the two existing CMS
  image-alt errors above, with no new hero/template errors.
- Chromium checked all 31 pages at desktop and narrow mobile sizes, with eight
  representative routes also checked at all six viewports listed above. Firefox
  and WebKit checked those eight routes at desktop and narrow mobile sizes.
  Hero images decoded, headings fit, following content remained visible and
  no horizontal page overflow remained. Representative screenshots were reviewed.
- Axe found no WCAG A/AA violations in the eight representative heroes at desktop
  and mobile sizes. This is a hero-scoped check, not a new audit of all legacy
  forms, CMS body content or third-party services.
- All three engines passed staff login, stable controls, new-post typing,
  edit/save image replacement/removal/addition, escaped metadata rendering,
  notification display/login controls, support-form validation and mobile menu
  checks. PHP APIs and reCAPTCHA were mocked; no live data or messages were sent.
  Third-party chat and YouTube playback were excluded from focused layout tests.
- The development server returned HTTP 200 for all five representative URLs
  through `http://103.123.164.24:4321`.

Deployment, commit and push remain separate steps after review.
