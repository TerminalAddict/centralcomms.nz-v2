# Data cabling content and search metadata

`src/pages/networking--data.astro` builds to the existing
`/networking--data.html` URL. It covers Hamilton/Waikato structured cabling,
six example customer needs, practical benefits, staff qualifications, copper
and fibre choices, PoE and 10GbE, installation/testing, two existing project
examples, Aaron Keppler's testimonial and 18 FAQs.

## Content ownership

- `src/data/data-cabling.ts` holds the use cases, comparison rows, video
  description and FAQ answers. The same FAQ array generates the visible native
  disclosures and `FAQPage` JSON-LD. Edit that single source of truth.
- All staff being height certified through Safety 'n Action, and the team being
  qualified Legrand data cablers, were confirmed by the business owner on
  10 November 2026. The training-provider links explain the organisations;
  they do not independently establish individual staff qualifications.
- No certificate numbers, unit standards, expiry dates or company-held
  accreditations have been inferred. Individual staff training is not represented
  as a credential held by the business in JSON-LD. Reconfirm the statements
  when staffing or qualifications change.
- The use cases describe possible requirements, not fabricated client projects.
  The freezing-works and 10GbE examples come from the existing
  `/updates/meatworks-structured-data-cabling.html` and
  `/updates/10-gigabit-ethernet.html` posts. Do not infer client names,
  performance measurements or current contracts from those posts.
- Aaron's existing quote is imported unchanged from
  `src/data/voip-testimonials.ts`, also used by the home and VoIP pages. It
  explicitly mentions structured data cabling. No ratings or product endorsements
  have been invented.

## Search and sharing

- The shared layout supplies the canonical URL, page title, description, Open
  Graph and Twitter metadata. The dedicated sharing image is local, 1200 x 630,
  and has descriptive alt metadata.
- Page-specific JSON-LD contains `Service`, `WebPage`, `BreadcrumbList`,
  `FAQPage` and `VideoObject`. Provider/publisher references reuse the layout's
  existing `https://www.centralcomms.nz/#business` entity.
- The video has its actual local content URL, local poster, measured duration,
  visible description and original publication date. The owner confirmed it was
  first published with the 14 September 2022 `Commercial Data Cabling` update.
  `cablingVideo.uploadDate` is `2022-09-14`, also shown beside the video. Do not
  replace it with the camera's creation time, filename, build or redeploy date.
- This is a service page with a supplementary modal video, not a dedicated
  watch page. Video indexing/rich results are not promised. Its local media link
  and written description are present in the static HTML without interaction.
- All service content and FAQ answers render at build time. Native FAQs work
  without JavaScript. Existing navigation, internal service/project links,
  `.html` sitemap entries and `robots.txt` provide discovery paths.
- External links open with `target="_blank" rel="noopener noreferrer"`; there
  are no visible new-tab annotations. No external image host is required.
- Useful content and structured metadata support discovery, not guaranteed
  rankings or recommendations by Google, ChatGPT or Claude. FAQ schema is a
  description of the visible answers, not a promise of a rich result.

## Technical claim boundaries

- Cat6A's 10GBASE-T distance is for a compliant complete 100-metre channel,
  including patch leads. Do not turn that into 100 metres of fixed cable plus
  arbitrary leads, or promise that every Cat6 installation does the same.
- Existing Cat6 suitability for 10GbE needs assessment. The page intentionally
  avoids a universal shorter-distance guarantee because installation conditions
  and interference between cables matter.
- Fibre type, optics, distance and termination must be chosen together. An
  optical signal is immune to electromagnetic interference, but this does not
  make every cable assembly lightning-proof or remove any protection/earthing
  requirements. Fibre itself does not power PoE devices.
- Faster local links do not increase an ISP service plan or remove storage,
  router, switch or endpoint bottlenecks. Do not promise measured speed gains
  without evidence from the actual installation.
- Basic verification, application qualification and standards certification are
  different test scopes. The quote must specify the required testing and reports.
- Legrand qualification does not automatically give every installation a
  manufacturer-backed system warranty. Do not advertise an unconditional term
  or coverage without confirming the applicable programme and installation.
- Work at height needs job-specific planning as well as training. The page does
  not promise unrestricted access, zero disruption or a universal price per point.

## Sources

Reviewed 10 November 2026. Technical suitability advice is conditional on the
site and equipment, not a performance guarantee.

- [Safety 'n Action height safety courses](https://www.safetynaction.co.nz/en/our-courses/height-safety-courses/)
- [Legrand New Zealand](https://www.legrand.co.nz/)
- [Legrand structured cabling application/distance guide, page 57](https://www.legrand.com/datacenter/sites/g/files/ocwmcr716/files/2023-03/Structured%20Cabling%20solutions.pdf)
- [Legrand data-centre guide, copper and optical fibre, page 30](https://www.legrand.com/sites/default/files/Documents_PDF_Legrand/Solutions/vertical_area/EXB13088_DataCenter-EN.pdf)
- [Fluke Networks: verification, qualification and certification](https://www.flukenetworks.com/knowledge-base/cableiq/verification-qualification-and-certification)
- [Original commercial cabling update](https://www.centralcomms.nz/updates/commercial-data-cabling.html)
- [Google VideoObject guidance](https://developers.google.com/search/docs/appearance/structured-data/video)
- [MDN native dialog behaviour and accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)

Legrand's NZ site and current PDF returned HTTP 403 to the research browser;
the technical distance table was available in the indexed official PDF. No
unverified claim about a specific NZ installer programme was added.

## Local media

The owner's source files are unchanged in `public/assets/images/tmp/`:
`20220830_125149.jpg` and `20220830_091455.mp4`. As with all `public/` assets,
those originals are copied by Astro at build time; that folder is not private
storage. The page references only the optimised derivatives below.

| File | Size/dimensions | Origin |
| --- | --- | --- |
| `assets/images/data-cabling/data-cabling-installation-hero.webp` | 2048 x 922, about 211 KiB | Owner's photo, rotated/resized with Sharp, WebP quality 86 |
| `assets/images/data-cabling/data-cabling-installation-hero-960.webp` | 960 x 432, about 72 KiB | Responsive derivative of the same photo |
| `assets/images/data-cabling/commercial-cabling-video-poster.webp` | 1600 x 900, about 139 KiB | Frame at one second from the owner's video |
| `assets/images/data-cabling/central-comms-data-cabling-og.png` | 1200 x 630 | Local photograph/logo composition |
| `assets/videos/commercial-data-cabling.mp4` | 1920 x 1080, 6.333 seconds, about 5 MiB | Owner's 4K clip, H.264 High profile / Level 4.1, 30 fps, CRF 24, fast-start MP4 |

The published video derivative is intentionally silent. The original audio
remains in the source upload. A visible written description supplies an
equivalent account of the visual sequence; it is also associated with the
player for assistive technology. This is an in-progress installation, not a
finished cabinet or evidence of a named customer's system. No AI alterations
were made to the photograph or footage. GPS/EXIF and original container metadata
are not copied into the derivatives.

The sharing-image source is `scripts/data-cabling-social-image.html`. Render
it at 1200 x 630, device scale factor 1, after local images finish decoding.
Keep source and generated PNG aligned when changing the photograph or wording.

To recreate the video derivative with FFmpeg (use a fresh destination or confirm
replacement of the existing generated file):

```sh
ffmpeg -i public/assets/images/tmp/20220830_091455.mp4 \
  -map 0:v:0 -map_metadata -1 -an -vf "scale=1920:1080,fps=30" \
  -c:v libx264 -threads 4 -preset medium -crf 24 \
  -profile:v high -level:v 4.1 -refs 4 -pix_fmt yuv420p \
  -movflags +faststart public/assets/videos/commercial-data-cabling.mp4
```

## Video interaction and verification

The page progressively enhances an ordinary MP4 link into a native `<dialog>`.
With JavaScript disabled or unsupported dialog APIs, the link still works.
The player has native controls, `playsinline`, `preload="none"`, no autoplay
attribute and a fixed aspect ratio. Playback is requested only after activation.
If it is blocked, the native controls and direct link remain available.

The modal has a labelled heading, a visible close button and native focus
containment. Escape, the close button and a genuine backdrop click close it.
Closing pauses/resets playback and returns focus to the launch link. The
implementation guards late playback and stale close events during a rapid
reopen. Page scroll locking follows the native open state in CSS and does not
overwrite existing inline overflow styles. No video library or dependency was
added. The existing CSP's `default-src 'self'` permits the local MP4.

Before release:

1. Run `npm run build` and Nu HTML validation against
   `dist/networking--data.html`.
2. Compare all 18 visible FAQs with JSON-LD, check canonical/social URLs,
   local asset dimensions, sitemap inclusion and linked routes/anchors.
3. Test desktop, tablet and 390/320-pixel mobile layouts, including the first
   screen, scrolling comparison table and open modal. Check for horizontal
   page overflow, missing images and hidden/overlapping text.
4. Confirm there is no MP4 request before activation, actual video playback
   advances, and keyboard focus stays in the modal. Test Escape, close button,
   backdrop, rapid reopen and closing while media is still loading.
5. Check no-JavaScript FAQs and the direct MP4 fallback. Run accessibility
   checks on the service content and on the open dialog.

This work does not change deployment configuration. Review in the existing
network-accessible dev server; deployment, commit and push remain separate
owner-requested actions.

Validation on 10 November 2026 passed the production build, Nu HTML validation,
FAQ/schema parity, metadata and links, no-JavaScript content, six Chromium
viewports (320 through 2560 pixels), main/modal accessibility scans, real decoded
video playback, keyboard/close/reopen behaviour and the close-before-load race.
Firefox also played and reopened the video successfully. Linux headless WebKit
played the same file when supplied through request interception but stalled
intermittently when fetching it normally from the preview server. Actual Safari
playback remains unverified; do not report that test as a cross-browser pass.
